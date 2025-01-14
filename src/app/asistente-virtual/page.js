import Image from "next/image";
import GeminiChat from "@/components/GeminiChat/page";

export default function AsistenteVirtual() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="title flex justify-center items-center text-yellow-500 text-5xl my-4">Asistente Virtual</h1>
            <span className="text-center text-white text-3xl my-10">¡Hola! Soy el asistente virtual de Fitness Total Gym. ¿En qué puedo ayudarte hoy?</span>
                <GeminiChat />
        </div>
    );

}