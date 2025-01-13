'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import PrimeraSeccion from "../components/PrimeraSeccion/page";
import CardEntrenadores from "@/components/CardEntrenadores/page";
import GymHistorySection from "@/components/GymHistorySection/page";
import { useRouter } from 'next/router';

export default function Home() {
  const useIntersectionObserver = (options = {}) => {
    const ref = useRef(null);
    const [isIntersecting, setIsIntersecting] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      }, options);
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [options]);
  
    return [ref, isIntersecting];
  };
  
  const AnimatedSection = ({ children, className = '' }) => {
    const [ref, isIntersecting] = useIntersectionObserver({
      threshold: 0.1,
      triggerOnce: true,
    });
  
    return (
      <div
        ref={ref}
        className={`transition-all duration-1000 ${
          isIntersecting
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        } ${className}`}
      >
        {children}
      </div>
    );
  };

    const entrenadores = [
      {
        id: 1,
        nombre: "John Cabarcas",
        informacion: "Especialista en entrenamiento de fuerza con 10 años de experiencia.",
        foto: "/foto1.jpeg",
      },
      {
        id: 2,
        nombre: "Dylan Blanco",
        informacion: "Entrenador de planta con mas de 2 años de experiencia en el área de entrenamiento funcional.",
        foto: "/foto1.jpeg",
      },
      {
        id: 3,
        nombre: "Juan Gallardo",
        informacion: "Psicólogo deportivo y entrenador personal con 5 años de experiencia.",
        foto: "/foto1.jpeg",
      },
      {
        id: 4,
        nombre: "Valentina Gallardo",
        informacion: "Especialista en rehabilitación física y entrenamiento funcional.",
        foto: "/foto1.jpeg",
      }
    ];

  return (
  <>
    <PrimeraSeccion />

    <AnimatedSection className="container shadow-lg flex flex-col justify-center w-full mx-auto py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center py-3 sm:py-5 text-white ">Nuestros Entrenadores</h1>
      <p className="text-xl text-gray-300 flex justify-center mb-6">
        ¡Conoce a nuestros entrenadores y descubre cómo pueden ayudarte a alcanzar tus metas en el mundo del fitness y contribuir a una buena salud!
                </p>
      <div className="flex flex-col lg:flex-row justify-center gap-4 sm:gap-6 text-black">
        {entrenadores.map((entrenador, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
            <CardEntrenadores key={entrenador.id} {...entrenador}
 />
          </div>
        ))}
      </div>
    </AnimatedSection>

    <GymHistorySection />
  </>
  );
};