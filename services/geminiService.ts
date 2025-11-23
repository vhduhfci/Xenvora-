import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are "Xen", the advanced AI academic counselor for XENVORA, a premier coding education platform.
Your tone is professional, encouraging, and knowledgeable about computer science and software engineering.
XENVORA offers top-tier coding batches inspired by industry standards:
1. **Delta 5.0**: Full Stack Web Development (MERN Stack).
2. **Alpha Plus**: Java + Data Structures & Algorithms (DSA).
3. **Sigma 4.0**: The complete Placement Batch (DSA + Web Dev).
4. **System Design**: High Level and Low Level Design.

Answer questions about these courses, the curriculum, placement support, and student success stories.
If asked technical coding questions (e.g., "How to reverse a linked list?", "Explain React hooks"), utilize your advanced reasoning capabilities to provide high-quality, expert-level explanations and code examples.`;

let client: GoogleGenAI | null = null;

const getClient = () => {
  if (!client) {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error("API_KEY is missing from environment variables");
      throw new Error("API Key not found");
    }
    client = new GoogleGenAI({ apiKey });
  }
  return client;
};

export const sendMessageToGemini = async (
  message: string,
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  try {
    const ai = getClient();
    
    // Explicitly using gemini-3-pro-preview as requested for advanced reasoning
    const modelId = "gemini-3-pro-preview";

    const chat = ai.chats.create({
      model: modelId,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        thinkingConfig: {
            thinkingBudget: 32768, // Max thinking budget for deep reasoning capabilities
        },
        // maxOutputTokens is intentionally omitted to allow full reasoning output
      },
      history: history,
    });

    const result = await chat.sendMessage({
      message: message,
    });

    return result.text || "I apologize, but I could not generate a response at this time.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "Connection error. Please ensure your API key is valid and try again.";
  }
};