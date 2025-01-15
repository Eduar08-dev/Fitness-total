// "use client";

// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { useState, useEffect, useRef } from "react";
// import { gymInfo } from "@/data/gym-info";
// import { entrenadores } from "../../data/entrenadores-info";

// const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || "");

// const model = genAI.getGenerativeModel({
//   model: "gemini-1.5-flash",
// });

// const formatResponse = (text) => {
//   const formattedText = text.replace(/\n/g, "<br/>").replace(/\*(.*?)\*/g, "<strong>$1</strong>");
//   return formattedText;
// };

// const findBestTrainer = (request) => {
//   // Palabras clave para diferentes objetivos
//   const keywords = {
//     fuerza: ["fuerza", "músculo", "potencia", "peso muerto", "sentadillas"],
//     cardio: ["cardio", "resistencia", "aguante", "correr", "aeróbico"],
//     perdidaPeso: ["bajar de peso", "adelgazar", "perder grasa", "quemar calorías"],
//     rehabilitacion: ["lesión", "rehabilitación", "dolor", "recuperación", "terapia"],
//     flexibilidad: ["flexibilidad", "elasticidad", "movilidad", "estiramientos"]
//   };

//   // Encontrar qué categoría de keywords tiene más coincidencias con la solicitud
//   const matchingCategory = Object.entries(keywords).reduce((best, [category, words]) => {
//     const matches = words.filter(word => request.includes(word)).length;
//     return matches > best.matches ? { category, matches } : best;
//   }, { category: null, matches: 0 });

//   // Encontrar entrenador que mejor corresponda a la categoría
//   if (matchingCategory.category) {
//     return Object.entries(entrenadores).find(([_, trainer]) => 
//       trainer.especialidad.toLowerCase().includes(matchingCategory.category.toLowerCase()) ||
//       trainer.enfoque.toLowerCase().includes(matchingCategory.category.toLowerCase())
//     );
//   }
  
//   return null;
// };

// export default function GeminiChat() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     const userMessage = { role: "user", content: input };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");
//     setIsLoading(true);

//     try {
//       const infoRequest = input.toLowerCase();

//       if (infoRequest.includes("entrenador")) {
//         let response = "";

//         // Buscar entrenador específico por nombre
//         const entrenadorEncontrado = Object.entries(entrenadores).find(([nombre]) =>
//           infoRequest.includes(nombre.toLowerCase())
//         );

//         if (entrenadorEncontrado) {
//           // Mostrar información detallada del entrenador específico
//           const [nombre, entrenador] = entrenadorEncontrado;
//           const randomDescripcion = entrenador.descripcion[Math.floor(Math.random() * entrenador.descripcion.length)];
//           response = `<strong>${nombre}</strong><br/>
//                      Especialidad: ${entrenador.especialidad}<br/>
//                      Nivel: ${entrenador.nivel}<br/>
//                      Enfoque: ${entrenador.enfoque}<br/>
//                      <br/>
//                      ${randomDescripcion}`;
//         } else if (
//           infoRequest.includes("recomienda") ||
//           infoRequest.includes("para") ||
//           infoRequest.includes("quiero")
//         ) {
//           // Buscar mejor entrenador según el objetivo
//           const bestMatch = findBestTrainer(infoRequest);
          
//           if (bestMatch) {
//             const [nombre, entrenador] = bestMatch;
//             const randomDescripcion = entrenador.descripcion[Math.floor(Math.random() * entrenador.descripcion.length)];
//             response = `Basado en tu objetivo, te recomiendo a:<br/><br/>
//                        <strong>${nombre}</strong><br/>
//                        Especialidad: ${entrenador.especialidad}<br/>
//                        Nivel: ${entrenador.nivel}<br/>
//                        Enfoque: ${entrenador.enfoque}<br/>
//                        <br/>
//                        ${randomDescripcion}`;
//           } else {
//             // Si no hay coincidencia específica, mostrar todos los entrenadores
//             const entrenadoresList = Object.entries(entrenadores).map(([nombre, entrenador]) => 
//               `<strong>${nombre}</strong><br/>
//                Especialidad: ${entrenador.especialidad}<br/>
//                Enfoque: ${entrenador.enfoque}<br/><br/>`
//             );
//             response = `Aquí están todos nuestros entrenadores disponibles para que elijas el que mejor se adapte a tus necesidades:<br/><br/>${entrenadoresList.join("")}`;
//           }
//         } else {
//           // Mostrar lista completa de entrenadores con detalles
//           const entrenadoresList = Object.entries(entrenadores).map(([nombre, entrenador]) => 
//             `<strong>${nombre}</strong><br/>
//              Especialidad: ${entrenador.especialidad}<br/>
//              Enfoque: ${entrenador.enfoque}<br/><br/>`
//           );
//           response = `Estos son todos nuestros entrenadores disponibles:<br/><br/>${entrenadoresList.join("")}`;
//         }

//         const assistantMessage = { role: "assistant", content: response };
//         setMessages((prev) => [...prev, assistantMessage]);
//       } else if (
//         infoRequest.includes("información") ||
//         infoRequest.includes("gimnasio") ||
//         infoRequest.includes("servicios")
//       ) {
//         const assistantMessage = { role: "assistant", content: gymInfo };
//         setMessages((prev) => [...prev, assistantMessage]);
//       } else {
//         const prompt = `
//           Actúa como un asistente de gimnasio amable y profesional.
//           Pregunta del usuario: ${input}
//           Responde de manera detallada y útil, relacionada con temas de fitness y gimnasio.
//           Si la pregunta está relacionada con objetivos específicos de entrenamiento,
//           incluye recomendaciones concretas y mejores prácticas.
//         `;
//         const result = await model.generateContent(prompt);
//         const formattedResponse = formatResponse(result.response.text());

//         const assistantMessage = { role: "assistant", content: formattedResponse };
//         setMessages((prev) => [...prev, assistantMessage]);
//       }
//     } catch (error) {
//       console.error("Error al enviar mensaje:", error);
//       const errorMessage = { 
//         role: "assistant", 
//         content: "Lo siento, ocurrió un error. Por favor, intenta de nuevo o contacta con recepción para más información." 
//       };
//       setMessages((prev) => [...prev, errorMessage]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const messagesEndRef = useRef(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   return (
//     <div className="flex flex-col h-full items-center w-full my-24 overflow-x-hidden">
//       <div className="w-screen max-w-5xl h-full rounded-lg overflow-hidden shadow-lg">
//         <div className="flex-grow p-6 h-64 overflow-y-auto bg-yellow-600-to-neutral">
//           <div className="flex flex-col space-y-4 w-full" style={{ maxWidth: "1000px" }}>
//             {messages.map((message, index) => (
//               <div
//                 key={index}
//                 className={`mb-4 ${message.role === "user" ? "text-right" : "text-left"}`}
//               >
//                 <div
//                   className={`inline-block p-3 rounded-lg ${
//                     message.role === "user" ? "bg-yellow-600 text-white" : "bg-gray-700 text-gray-100"
//                   }`}
//                   style={{ whiteSpace: "pre-line", wordWrap: "break-word" }}
//                   dangerouslySetInnerHTML={{ __html: message.content }}
//                 />
//               </div>
//             ))}
//             <div ref={messagesEndRef} />
//           </div>
//           {isLoading && (
//             <div className="text-center">
//               <span className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-yellow-500"></span>
//             </div>
//           )}
//         </div>
//         <form onSubmit={handleSubmit} className="p-4 relative bg-zinc-800 border-t border-gray-600">
//           <div className="flex items-center space-x-4 justify-center">
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder="Escribe tu pregunta aquí..."
//               className="flex-grow bg-zinc-700 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
//             />
//             <button
//               type="submit"
//               disabled={isLoading}
//               className="bg-yellow-600 hover:bg-yellow-700 hover:translate-y-1 transition-all text-white px-6 py-3 rounded-lg disabled:opacity-50"
//             >
//               Enviar
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

"use client";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState, useEffect, useRef } from "react";
import { gymInfo } from "@/data/gym-info";
import { entrenadores } from "@/data/entrenadores-info";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || "");

const model = genAI.getGenerativeModel({
  model: "gemini-pro",
});

const formatResponse = (text) => {
  const formattedText = text.replace(/\n/g, "<br/>").replace(/\*(.*?)\*/g, "<strong>$1</strong>");
  return formattedText;
};

const findBestTrainer = (request) => {
  console.log("Analizando solicitud:", request);
  
  const keywords = {
    fuerza: ["fuerza", "músculo", "potencia", "peso muerto", "sentadillas", "fuerte", "pesas", "gimnasio"],
    cardio: ["cardio", "resistencia", "aguante", "correr", "aeróbico", "resistencia", "adelgazar"],
    rehabilitacion: ["lesión", "rehabilitación", "dolor", "recuperación", "terapia", "lesionado", "fisioterapia"],
    flexibilidad: ["flexibilidad", "elasticidad", "movilidad", "estiramientos", "yoga", "elongación"]
  };

  // Encontrar coincidencias
  const matchingCategory = Object.entries(keywords).reduce((best, [category, words]) => {
    const matches = words.filter(word => request.includes(word)).length;
    console.log(`Coincidencias para ${category}:`, matches);
    return matches > best.matches ? { category, matches } : best;
  }, { category: null, matches: 0 });

  console.log("Categoría más relevante:", matchingCategory);

  if (matchingCategory.category) {
    const trainer = Object.entries(entrenadores).find(([_, trainer]) => {
      const matchesSpecialty = trainer.especialidad.toLowerCase().includes(matchingCategory.category.toLowerCase());
      const matchesFocus = trainer.enfoque.toLowerCase().includes(matchingCategory.category.toLowerCase());
      console.log(`Evaluando entrenador - Especialidad: ${matchesSpecialty}, Enfoque: ${matchesFocus}`);
      return matchesSpecialty || matchesFocus;
    });
    
    console.log("Entrenador seleccionado:", trainer);
    return trainer;
  }
  
  return null;
};

export default function GeminiChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const infoRequest = input.toLowerCase();
      console.log("Procesando solicitud:", infoRequest);

      if (infoRequest.includes("entrenador")) {
        let response = "";

        // Buscar entrenador específico por nombre
        const entrenadorEncontrado = Object.entries(entrenadores).find(([nombre]) => {
          const nombreLower = nombre.toLowerCase();
          const found = infoRequest.includes(nombreLower);
          console.log(`Comparando "${nombreLower}" con la solicitud:`, found);
          return found;
        });

        console.log("Entrenador encontrado por nombre:", entrenadorEncontrado);

        if (entrenadorEncontrado) {
          // Mostrar información detallada del entrenador específico
          const [nombre, entrenador] = entrenadorEncontrado;
          const randomDescripcion = entrenador.descripcion[Math.floor(Math.random() * entrenador.descripcion.length)];
          response = `<strong>${nombre}</strong><br/>
                     Especialidad: ${entrenador.especialidad}<br/>
                     Nivel: ${entrenador.nivel}<br/>
                     Enfoque: ${entrenador.enfoque}<br/>
                     <br/>
                     ${randomDescripcion}`;
        } else if (
          infoRequest.includes("recomienda") ||
          infoRequest.includes("para") ||
          infoRequest.includes("quiero") ||
          infoRequest.includes("busco")
        ) {
          // Buscar mejor entrenador según el objetivo
          const bestMatch = findBestTrainer(infoRequest);
          console.log("Mejor coincidencia encontrada:", bestMatch);
          
          if (bestMatch) {
            const [nombre, entrenador] = bestMatch;
            const randomDescripcion = entrenador.descripcion[Math.floor(Math.random() * entrenador.descripcion.length)];
            response = `Basado en tu objetivo, te recomiendo a:<br/><br/>
                       <strong>${nombre}</strong><br/>
                       Especialidad: ${entrenador.especialidad}<br/>
                       Nivel: ${entrenador.nivel}<br/>
                       Enfoque: ${entrenador.enfoque}<br/>
                       <br/>
                       ${randomDescripcion}`;
          } else {
            // Si no hay coincidencia específica, mostrar todos los entrenadores
            const entrenadoresList = Object.entries(entrenadores).map(([nombre, entrenador]) => 
              `<strong>${nombre}</strong><br/>
               Especialidad: ${entrenador.especialidad}<br/>
               Enfoque: ${entrenador.enfoque}<br/><br/>`
            );
            response = `Aquí están todos nuestros entrenadores disponibles para que elijas el que mejor se adapte a tus necesidades:<br/><br/>${entrenadoresList.join("")}`;
          }
        } else {
          // Mostrar lista completa de entrenadores con detalles
          const entrenadoresList = Object.entries(entrenadores).map(([nombre, entrenador]) => 
            `<strong>${nombre}</strong><br/>
             Especialidad: ${entrenador.especialidad}<br/>
             Enfoque: ${entrenador.enfoque}<br/><br/>`
          );
          response = `Estos son todos nuestros entrenadores disponibles:<br/><br/>${entrenadoresList.join("")}`;
        }

        const assistantMessage = { role: "assistant", content: response };
        setMessages((prev) => [...prev, assistantMessage]);
      } else if (
        infoRequest.includes("información") ||
        infoRequest.includes("gimnasio") ||
        infoRequest.includes("servicios")
      ) {
        const assistantMessage = { role: "assistant", content: gymInfo };
        setMessages((prev) => [...prev, assistantMessage]);
      } else {
        const prompt = `
          Actúa como un asistente de gimnasio amable y profesional.
          Pregunta del usuario: ${input}
          Responde de manera detallada y útil, relacionada con temas de fitness y gimnasio.
          Si la pregunta está relacionada con objetivos específicos de entrenamiento,
          incluye recomendaciones concretas y mejores prácticas.
          Evita respuestas textualmente repetidas o que parezcan recitadas. Proporciona información práctica y original.
          Recuerda responder en base a la información proporcionada en la solicitud. Y si es con respecto a informacion de ${entrenadores} o ${gymInfo} analizar con brevedad el tipo de pregunta para responder acorde a la necesidad del usuario.
        `;
        const result = await model.generateContent(prompt);
        const formattedResponse = formatResponse(result.response.text());

        const assistantMessage = { role: "assistant", content: formattedResponse };
        setMessages((prev) => [...prev, assistantMessage]);
      }
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
      const errorMessage = { 
        role: "assistant", 
        content: "Lo siento, ocurrió un error. Por favor, intenta de nuevo o contacta con recepción para más información." 
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
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
    <div className="flex flex-col h-full items-center w-full my-24 overflow-x-hidden">
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
}