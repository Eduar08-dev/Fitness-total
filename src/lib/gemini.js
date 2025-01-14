import { GoogleGenerativeAI } from "@google/generative-ai";

// Asegúrate de tener tu API key de Google en las variables de entorno
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const geminiModel = genAI.getGenerativeModel({ model: "gemini-pro" });

