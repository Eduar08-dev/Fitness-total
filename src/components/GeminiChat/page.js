"use client";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState, useEffect, useRef } from "react";
import { gymInfo } from "@/data/gym-info";
import { entrenadores } from "@/data/entrenadores-info";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || "");

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const formatResponse = (text) => {
  const formattedText = text.replace(/\n/g, "<br/>").replace(/\*(.*?)\*/g, "<strong>$1</strong>");
  return formattedText;
};

const GeminiChat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true); // Activar estado de carga

    const newMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, newMessage]);

    // Limpiar el input antes de la operación asincrónica
    setInput("");

    const prompt = `
    Tú eres un asistente de gimnasio inteligente. Tienes acceso a la siguiente información:
    ${JSON.stringify(entrenadores)}
    ${JSON.stringify(gymInfo)}

    Basándote en el historial de la conversación y la pregunta del usuario, proporciona una respuesta informativa y útil. 
    **Historial:**
    ${JSON.stringify(messages)}

    **Pregunta del usuario:**
    ${input}
    `;

    try {
      const chat = model.startChat({
        history: [{ role: "user", parts: [{ text: prompt }] }],
      });

      const result = await chat.sendMessage("");
      const formattedResponse = formatResponse(result.response.text());

      const assistantMessage = { role: "assistant", content: formattedResponse };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage = {
        role: "assistant",
        content:
          "Lo siento, ocurrió un error. Por favor, intenta de nuevo o contacta con recepción para más información.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false); // Desactivar estado de carga
    }
  };

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col h-full items-center w-full overflow-x-hidden">
      <div className="w-screen max-w-5xl h-full rounded-lg overflow-hidden shadow-lg">
        <div className="flex-grow p-6 h-[500px] overflow-y-auto bg-zinc-900">
          <div className="flex flex-col space-y-4 w-full" style={{ maxWidth: "1000px" }}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 ${message.role === "user" ? "text-right" : "text-left"}`}
              >
                <div
                  className={`inline-block p-3 rounded-lg ${
                    message.role === "user" ? "bg-yellow-600 text-white" : "bg-gray-700 text-gray-100"
                  }`}
                  style={{ whiteSpace: "pre-line", wordWrap: "break-word" }}
                  dangerouslySetInnerHTML={{ __html: message.content }}
                />
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          {isLoading && (
            <div className="text-center">
              <span className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-yellow-500"></span>
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="p-4 relative bg-zinc-800 border-t border-gray-600">
          <div className="flex items-center space-x-4 justify-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu pregunta aquí..."
              className="flex-grow bg-zinc-700 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-yellow-600 hover:bg-yellow-700 hover:translate-y-1 transition-all text-white px-6 py-3 rounded-lg disabled:opacity-50"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GeminiChat;
