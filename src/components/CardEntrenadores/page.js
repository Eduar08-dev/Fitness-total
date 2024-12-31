import React from 'react';
import Image from 'next/image';

const CardEntrenadores = ({ entrenador }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-red-900/20 to-red-950/40 p-1 h-96">
      <div className="relative w-full h-full text-center transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front of the card */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          {entrenador.foto && (
            <Image 
              src={entrenador.foto} 
              alt={entrenador.nombre} 
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 transition-opacity group-hover:opacity-90" />
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 transition-transform group-hover:translate-y-0">
            <h2 className="text-xl font-semibold text-white mb-2">{entrenador.nombre}</h2>
          </div>
        </div>

        {/* Back of the card */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-gradient-to-b from-red-900/90 to-red-950 [transform:rotateY(180deg)] flex items-center justify-center p-4 rounded-lg">
          {entrenador.foto && (
            <Image 
              src={entrenador.foto} 
              alt={entrenador.nombre} 
              fill
              style={{ objectFit: 'cover', filter: 'blur(5px) brightness(0.3)' }}
              className="absolute inset-0 z-0 rounded-lg"
            />
          )}
          <div className="relative z-10 text-center text-white p-4 bg-black/40 rounded-lg backdrop-blur-sm">
            <h2 className="text-xl font-bold mb-2">{entrenador.nombre}</h2>
            <p className="text-sm text-gray-200">{entrenador.informacion}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEntrenadores;

