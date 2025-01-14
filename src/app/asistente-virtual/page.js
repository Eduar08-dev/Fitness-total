import Image from "next/image";
import GeminiChat from "@/components/GeminiChat/page";

export default function AsistenteVirtual() {
    return (
        <div className="container">
            <h1 className="title">Asistente Virtual</h1>
            <div className="flex flex-col items-center justify-center">
                <Image
                    src="/images/asistente-virtual.png"
                    alt="Asistente Virtual"
                    width={400}
                    height={400}
                />
                <GeminiChat />
                </div>
        </div>
    );

}