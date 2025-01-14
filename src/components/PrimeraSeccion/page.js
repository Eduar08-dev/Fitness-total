import Link from 'next/link';
import Image from 'next/image';
import "animate.css/animate.min.css";

export default function Hero() {
  return (
    <section className="relative h-screen">
      <video
        src="/presentacion.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-neutral-900/50" />
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="animate__animated animate__slideInLeft max-w-3xl space-y-6">
          <span className="text-yellow-400 font-semibold text-lg">¿LISTO PARA EL CAMBIO?</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Descubre los servicios que tenemos para ti
          </h1>
          <p className="text-lg text-gray-300">
            Embárcate en un viaje de transformación, superación y bienestar conociendo nuestros servicios.
          </p>
          <Link className= "flex" href="/servicios">
            <span className="bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              ¡Descubre más!
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}