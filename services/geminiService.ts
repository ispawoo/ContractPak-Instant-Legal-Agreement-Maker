
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY environment variable not set. AI features will not work.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const rewriteClause = async (originalClause: string, instruction: string): Promise<string> => {
  if (!API_KEY) {
    // Simulate a successful response for environments without an API key
    return new Promise(resolve => setTimeout(() => {
        resolve(`${originalClause} (This is a mock AI response, as API_KEY is not configured. Instruction was: "${instruction}")`);
    }, 1000));
  }

  try {
    const prompt = `Rewrite the following legal clause based on this instruction: "${instruction}".\n\nOriginal Clause:\n"""\n${originalClause}\n"""\n\nReturn ONLY the rewritten clause text, with no extra commentary, preamble, or markdown formatting.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: "You are an expert legal assistant. Your task is to rewrite legal clauses based on user requests. Maintain the legal integrity of the clause while adapting its tone or adding specified terms. Do not provide legal advice, only rewrite the text as instructed.",
        temperature: 0.5,
      },
    });

    const text = response.text;

    if (!text) {
      throw new Error("The API returned an empty response.");
    }
    
    return text.trim();

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to rewrite clause with AI. Please check your API key and try again.");
  }
};
