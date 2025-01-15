import Image from "next/image";
import GeminiChat from "@/components/GeminiChat/page";

export default function AsistenteVirtual() {
    return (
        <div className="flex flex-col items-center w-full">
        <h1 className="relative text-center text-4xl font-bold animate-glow my-8 rounded-lg 
        bg-gradient-to-r from-yellow-600 to-red-600 bg-clip-text border border-transparent text-transparent">
         <span className="absolute inset-0 animate-pulse-glow bg-gradient-to-r from-red-500 to-yellow-400 blur-2xl opacity-40 rounded-lg">
            </span>
                Bienvenido al Asistente Inteligente
        </h1>
        <span className="inline-block bg-gradient-to-r from-yellow-400 via-yellow-700 to-red-600 text-transparent bg-clip-text font-semibold text-2xl px-4 py-3 border border-transparent rounded-full transform transition-transform hover:scale-110 hover:shadow-glow">
          ¡Haz tu pregunta ahora!
        </span>
        <GeminiChat />
      </div>
    );

}