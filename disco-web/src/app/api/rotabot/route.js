import Replicate from "replicate";
import { Pinecone } from "@pinecone-database/pinecone";
import { GoogleGenAI } from "@google/genai";

const REPLICATE_MODEL =
  "beautyyuyanli/multilingual-e5-large:a06276a89f1a902d5fc225a9ca32b6e8e6292b7f3b136518878da97c458e2bad";

// Manual source name to URL mapping
const SOURCE_URL_MAP = {
  "constitution.pdf": "https://yourdocs.com/constitution.pdf",
  "bylaws.pdf": "https://yourdocs.com/bylaws.pdf",
  "Transition Meeting Protocol 2025-26.pdf": "https://yourdocs.com/transition-meeting-protocol-2025-26.pdf",
  // Add more source: url pairs here as needed
};

function isSimilar(a, b, threshold = 0.6) {
  if (!a || !b) return false;
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a === b) return true;
  // Simple similarity: Jaccard index on words
  const aWords = new Set(a.split(/\W+/));
  const bWords = new Set(b.split(/\W+/));
  const intersection = new Set([...aWords].filter(x => bWords.has(x)));
  const union = new Set([...aWords, ...bWords]);
  return intersection.size / union.size > threshold;
}

function buildSourcesAndContext(matches) {
  const seen = [];
  const contextChunks = [];
  const sources = [];
  for (const match of matches) {
    const meta = match.metadata || {};
    const text = (meta.chunk_text || "").trim();
    const source = meta.source || "Unknown";
    const url = SOURCE_URL_MAP[source] || null;
    if (text && !seen.some(s => isSimilar(text, s))) {
      seen.push(text);
      contextChunks.push(`${source}\n${text}`);
      sources.push({ source, url });
    }
  }
  return { contextChunks, sources };
}

export async function POST(req) {
  try {
    console.log("[RotaBot] Incoming request");
    const body = await req.json();
    const { question } = body;
    if (!question) {
      console.log("[RotaBot] Missing question");
      return new Response(JSON.stringify({ error: "Missing question" }), { status: 400 });
    }

    // Get embedding from Replicate
    console.log("[RotaBot] Getting embedding from Replicate");
    const replicate = new Replicate({ auth: process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN });
    const embeddingOutput = await replicate.run(REPLICATE_MODEL, {
      input: { text: "query: " + question },
    });
    const embedding = Array.isArray(embeddingOutput)
      ? embeddingOutput[0]
      : embeddingOutput;
    console.log("[RotaBot] Got embedding");

    // Query Pinecone
    console.log("[RotaBot] Querying Pinecone");
    const pinecone = new Pinecone({ apiKey: process.env.NEXT_PUBLIC_PINECONE_API_KEY });
    const index = pinecone.index("rotaract-docs");
    const results = await index.query({
      vector: embedding,
      topK: 30, // increased for better recall
      includeMetadata: true,
    });
    console.log("[RotaBot] Pinecone results", results);
    if (results.matches && results.matches.length > 0) {
      results.matches.forEach((match, idx) => {
        console.log(`[RotaBot] Match ${idx} score:`, match.score, 'chunk_text:', match.metadata?.chunk_text);
      });
    }

    // Filter matches by score threshold
    const SCORE_THRESHOLD = 0.6;
    const filteredMatches = (results.matches || []).filter(match => match.score === undefined || match.score >= SCORE_THRESHOLD);

    // Build sourceMarkdown
    let sourceMarkdown = "";
    if (results.matches && results.matches.length > 0) {
      const top = results.matches[0].metadata;
      if (top.source && top.url) {
        sourceMarkdown = `[${top.source}](${top.url})`;
      } else if (top.source) {
        sourceMarkdown = top.source;
      } else {
        sourceMarkdown = "Unknown source";
      }
    } else {
      sourceMarkdown = "No sources found";
    }

    // Build context and sources using improved logic
    const { contextChunks, sources } = buildSourcesAndContext(filteredMatches);
    const context = contextChunks.join("\n\n---\n\n");

    // Only show the top unique source
    const uniqueSources = [];
    const seenSources = new Set();
    for (const s of sources) {
      if (!seenSources.has(s.source)) {
        uniqueSources.push(s);
        seenSources.add(s.source);
      }
    }
    const singleSource = uniqueSources.slice(0, 1);
    const sourcesMd = singleSource.map((src, i) => src.url ? `${i+1}. [${src.source}](${src.url})` : `${i+1}. ${src.source}`).join("\n");

    // Compose prompt for Gemini
    const prompt = `
You are a helpful assistant answering questions about Rotaract Club documents.

Use only the context below to answer. If multiple valid answers or lists exist (e.g., seating arrangements), show them clearly as separate options.

When you answer, do not cite the relevant source (if provided).
At the end of your answer, include a section "Source" listing the top source with its link (as an clickable link/a tag).

If the context does not contain the answer, say: "Sorry, I don’t know the answer to that."

Context:
${context}

Question:
${question}

Source:
${sourcesMd}
`;
    //console.log("[RotaBot] Prompt sent to Gemini:", prompt);

    // Call Gemini using @google/genai SDK
    console.log("[RotaBot] Calling Gemini via @google/genai");
    const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY });
    let answer = "Sorry, I couldn't generate an answer.";
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
      });
      if (response && response.text) {
        answer = response.text;
        console.log("[RotaBot] Gemini response:", answer);
      }
    } catch (err) {
      console.error("[RotaBot] Gemini SDK error", err);
      return new Response(JSON.stringify({ error: "Gemini SDK error" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
    console.log("[RotaBot] Gemini answer", answer);

    return new Response(JSON.stringify({ answer }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("[RotaBot] Internal error", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}