import RotaData from "../../data/rotadata.json";
import { GoogleGenAI } from "@google/genai";

// Cosine similarity function
function cosineSimilarity(a, b) {
  let dot = 0, normA = 0, normB = 0;
  for (let i = 0; i < a.length; ++i) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

// Call Gemini text-embedding-004 model (updated to new API)
async function getGeminiEmbedding(text) {
  const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY });
  const res = await ai.models.embedContent({
    model: "text-embedding-004",
    contents: text,
    config: {
      taskType: "SEMANTIC_SIMILARITY"
    }
  });
  // The SDK's return shape may differ; adjust as needed
  return res.embeddings?.[0]?.values || res.embedding?.values || res.embedding || res.data?.[0]?.embedding;
}

// PDF name to URL mapping
const PDF_LINKS = {
  "Transition Meeting Protocol 2025-26.pdf": "https://drive.google.com/file/d/16WFanhedxwwc3_VZZePQh18b0RRxnEsX/view?usp=drive_link",
  // Add more mappings as needed
};

export async function POST(req) {
  const { question } = await req.json();
  if (!question) {
    return new Response(JSON.stringify({ error: "Missing question" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // 1. Get query embedding
  let queryEmbedding;
  try {
    queryEmbedding = await getGeminiEmbedding(question);
  } catch (err) {
    console.error("Error getting Gemini embedding", err);
    return new Response(JSON.stringify({ error: "Embedding API error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  // 2. Compute similarity against all sections
  const scoredSections = RotaData
    .filter(s => Array.isArray(s.embedding) && s.embedding.length === queryEmbedding.length)
    .map(s => ({
      ...s,
      similarity: cosineSimilarity(queryEmbedding, s.embedding)
    }))
    .sort((a, b) => b.similarity - a.similarity);

  const topSections = scoredSections.slice(0, 3);

  // 3. Build LLM context and prompt
  const context = topSections.map(s => s.text).join("\n---\n");
  const docUrl = topSections.length ? (PDF_LINKS[topSections[0].doc] || "#") : "#";
  const sourcesMd = topSections.length
    ? `[${topSections[0].section} (${topSections[0].doc}, p.${topSections[0].page})](${docUrl})`
    : "";

  const prompt = `
You are a helpful assistant answering questions about Rotaract Club documents.

Use only the context below to answer. If multiple valid answers or lists exist (e.g., seating arrangements), show them clearly as separate options.
Use the context below to answer as best as you can. If the answer is not clear, try to provide helpful guidance based on the context but only if you are confident.

When you answer, do not cite the relevant source (if provided).
At the end of your answer, include a section "Source" listing the top source with its link (as an clickable link/a tag).

If the context does not contain the answer, say: "Sorry, I don’t know the answer to that."

Context(only use this to answer) :
${context}

Question:
${question}

PDF Link(this is the link to the top source, just return this along with the generated answer, hyperlink it so when clicked it opens the PDF) :
${sourcesMd}
`;

  // 4. Call Gemini LLM for the answer
  let answer = "Sorry, I couldn't generate an answer.";
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt
    });
    if (response && response.text) {
      answer = response.text;
    }
  } catch (err) {
    console.error("[RotaBot] Gemini SDK error", err);
    return new Response(JSON.stringify({ error: "Gemini SDK error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ answer }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}