"use client";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState, useEffect, useRef } from "react";
import { gymInfo } from '@/data/gym-info';

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || "");

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const formatResponse = (text) => {
  // Reemplaza saltos de línea por <br/>
  const formattedText = text.replace(/\n/g, '<br/>');

  // Reemplaza los asteriscos (*) con etiquetas de negrita <strong>
  const formattedWithBold = formattedText.replace(/\*(.*?)\*/g, '<strong>$1</strong>');

  return formattedWithBold;
};

export default function GeminiChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
  
    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
  
    try {
      // Mejora la detección de la solicitud de información
      const infoRequest = input.toLowerCase();
      if (
        infoRequest.includes('información') || 
        infoRequest.includes('info') || 
        infoRequest.includes('gimnasio') ||
        infoRequest.includes('horario') ||
        infoRequest.includes('servicios')
      ) {
        const assistantMessage = { 
          role: 'assistant', 
          content: gymInfo 
        };
        setMessages((prev) => [...prev, assistantMessage]);
      } else {
        // Si no es una solicitud de información, usa Gemini
        const prompt = `
          Actúa como un asistente de gimnasio amable y profesional.
          Pregunta del usuario: ${input}
          
          Responde de manera concisa y útil, relacionada con temas de fitness y gimnasio.
        `;
        
        const result = await model.generateContent(prompt);
        const formattedResponse = formatResponse(result.response.text());
        
        const assistantMessage = { 
          role: 'assistant', 
          content: formattedResponse 
        };
        setMessages((prev) => [...prev, assistantMessage]);
      }
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      const errorMessage = { 
        role: 'assistant', 
        content: 'Lo siento, ocurrió un error. Por favor, intenta de nuevo.' 
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Ref para el contenedor de mensajes
  const messagesEndRef = useRef(null);

  // Función para hacer scroll al final
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Efecto para hacer scroll cuando cambian los mensajes
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col h-full items-center w-full my-24 overflow-x-hidden">
      <div className="w-screen max-w-5xl h-full rounded-lg overflow-hidden shadow-lg">
        <div className="flex-grow p-6 h-64 overflow-y-auto bg-yellow-600-to-neutral">
          {/* Zona de respuestas con fondo transparente y sin ajuste de ancho */}
          <div className="flex flex-col space-y-4 w-full" style={{ maxWidth: '1000px' }}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}
              >
                <div
                  className={`inline-block p-3 rounded-lg ${message.role === 'user' ? 'bg-yellow-600 text-white' : 'bg-gray-700 text-gray-100'}`}
                  style={{ whiteSpace: 'pre-line', wordWrap: 'break-word' }} // Añadido para que el texto largo se ajuste
                  dangerouslySetInnerHTML={{ __html: message.content }} // Renderiza contenido con HTML seguro
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
}

