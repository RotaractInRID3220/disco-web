import { JWT } from 'google-auth-library';

// Optional: Use Gemini API to improve formatting
async function improveFormatting(text) {
  try {
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=' + process.env.NEXT_PUBLIC_GOOGLE_API_KEY, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `Please reformat this text to be well-structured with proper bullet points, line breaks, and spacing. Keep all the original content but make it more readable:

${text}`
          }]
        }],
        generationConfig: {
          temperature: 0.1,
          maxOutputTokens: 2000,
        }
      }),
    });

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || text;
  } catch (error) {
    console.error('Gemini formatting error:', error);
    return text; // Return original text if formatting fails
  }
}

// Format response for better readability
function formatResponse(text) {
  // Clean and structure the response properly
  let formatted = text
    // First, split greeting from content
    .replace(/(RotaBot.*?\.)\s*(The\s+program)/i, '$1\n\n$2')
    
    // Convert dashes to proper bullet points with line breaks
    .replace(/\s*-\s*/g, '\n• ')
    
    // Add proper spacing for sub-items (indented items)
    .replace(/•\s*(National Anthem|Flag Salutation|Rotaract Invocation|Rotary Four Way Test|Rotaract Song)/g, '  • $1')
    
    // Add section breaks before major sections
    .replace(/•\s*(Rotaract Formalities)/g, '\n• $1')
    
    // Clean up the document reference section
    .replace(/•\s*(You can find more details)/g, '\n$1')
    
    // Clean up multiple spaces
    .replace(/\s+/g, ' ')
    
    // Ensure proper line breaks
    .replace(/\n\s*\n/g, '\n')
    
    // Clean up any leading bullets at start
    .replace(/^\s*•\s*/, '')
    
    .trim();

  return formatted;
}

export async function POST(req) {
  const { question } = await req.json();
  if (!question) {
    return new Response(JSON.stringify({ error: "Missing question" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Load service account credentials from environment
  const clientEmail = process.env.NEXT_PUBLIC_CLIENT_EMAIL;
  const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY?.replace(/\\n/g, '\n');
  const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
  const agentId = process.env.NEXT_PUBLIC_AGENT_ID;
  const location = process.env.NEXT_PUBLIC_LOCATION || 'global';

  if (!clientEmail || !privateKey || !projectId || !agentId) {
    return new Response(JSON.stringify({ error: "Missing Dialogflow CX credentials" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Authenticate with Google
  const auth = new JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/cloud-platform']
  });

  let accessToken;
  try {
    const tokens = await auth.authorize();
    accessToken = tokens.access_token;
  } catch (err) {
    console.error("Dialogflow CX Auth error", err);
    return new Response(JSON.stringify({ error: "Dialogflow CX Auth error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Build Dialogflow CX detectIntent endpoint
  const sessionId = Math.random().toString(36).substring(2); // random session
  const url = `https://dialogflow.googleapis.com/v3/projects/${projectId}/locations/${location}/agents/${agentId}/sessions/${sessionId}:detectIntent`;

  // Prepare request body
  const body = {
    queryInput: {
      text: {
        text: question,
      },
      languageCode: 'en',
    },
  };

  // Call Dialogflow CX
  let answer = "Sorry, I couldn't get a response.";
  try {
    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const data = await resp.json();
    
    // Try different approaches to get the full response
    let fullResponse = '';
    
    // Approach 1: Get from queryResult.responseMessages
    if (data.queryResult?.responseMessages) {
      const allTexts = [];
      data.queryResult.responseMessages.forEach(message => {
        if (message.text?.text) {
          allTexts.push(...message.text.text);
        }
      });
      fullResponse = allTexts.join(' ').trim();
    }
    
    // Approach 2: Check if there's a fulfillmentText
    if (!fullResponse && data.queryResult?.fulfillmentText) {
      fullResponse = data.queryResult.fulfillmentText;
    }
    
    // Approach 3: Check for webhookPayload or other response formats
    if (!fullResponse && data.queryResult?.fulfillmentMessages) {
      const allTexts = [];
      data.queryResult.fulfillmentMessages.forEach(message => {
        if (message.text?.text) {
          allTexts.push(...message.text.text);
        } else if (message.payload?.text) {
          allTexts.push(message.payload.text);
        }
      });
      fullResponse = allTexts.join(' ').trim();
    }
    
    if (fullResponse) {
      answer = fullResponse;
      
      // Format the response for better readability
      answer = formatResponse(answer);
      
      // Optional: Use Gemini API for advanced formatting
      if (process.env.NEXT_PUBLIC_USE_GEMINI_FORMATTING === 'true') {
        answer = await improveFormatting(answer);
      }
    }
  } catch (err) {
    console.error("Dialogflow CX API error", err);
    return new Response(JSON.stringify({ error: "Dialogflow CX API error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ answer }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}