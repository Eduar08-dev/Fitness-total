import React from "react";
import {
  Clock,
  Calendar,
  Info,
  Phone,
  Mail,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import Image from "next/image";
import 'animate.css';

export default function Horarios() {
  const horarios = {
    "Lunes a Viernes": [
      {
        hora: "5:30 AM - 12:00 PM",
        clase: "Entrenamiento General",
        tipo: "general",
      },
      {
        hora: "12:00 PM - 2:30 PM",
        clase: "Cierre temporal",
      },
      {
        hora: "2:30 PM - 9:00 PM",
        clase: "Entrenamiento General",
        tipo: "general",
      },
    ],
    Sábado: [
      {
        hora: "8:00 AM - 12:00 PM",
        clase: "Entrenamiento General",
        tipo: "general",
      },
      {
        hora: "12:00 PM - 4:00 PM",
        clase: "Clases Especiales",
        tipo: "especial",
      },
    ],
    Festivos: [
      {
        hora: "9:00 AM - 2:00 PM",
        clase: "Entrenamiento General",
        tipo: "general",
      },
    ],
  };
  const clasesEspeciales = [
    {
      nombre: "CrossFit",
      horario: "Lunes y Miércoles 7:00 PM",
      instructor: "Dylan Blanco",
    },
    {
      nombre: "Yoga",
      horario: "Martes y Jueves 8:00 AM",
      instructor: "Laura Martínez",
    },
    {
      nombre: "Spinning",
      horario: "Viernes 6:00 PM",
      instructor: "Carlos Ruiz",
    },
    {
      nombre: "Funcional",
      horario: "Sábado 10:00 AM",
      instructor: "Ana García",
    },
  ];
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      {/* Hero Section más compacto */}
      <div className="relative h-[40vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900">
          <img
            src="https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
            alt="Gym clock"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="animate__animated animate__slideInLeft absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-500 mb-4 flex items-center gap-4">
            <Clock className="w-12 h-12" /> Horarios
          </h1>
        </div>
      </div>
      <main className="max-w-6xl mx-auto space-y-12 p-4 md:p-8 -mt-12">
        {/* Horarios Principales */}
        <div className="animate__animated animate__slideInRight grid md:grid-cols-3 gap-6">
          {Object.entries(horarios).map(([dia, slots]) => (
            <section key={dia} className="bg-zinc-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-yellow-500 mb-4 flex items-center gap-2">
                <Calendar className="w-6 h-6" />
                {dia}
              </h2>
              <div className="space-y-4">
                {slots.map((slot, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg ${slot.tipo === "especial" ? "bg-yellow-500/20" : "bg-zinc-700/50"}`}
                  >
                    <div className="font-bold text-lg">{slot.hora}</div>
                    <div className="text-gray-300">{slot.clase}</div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
        {/* Clases Especiales */}
        <section className="bg-zinc-800 animate__animated animate__slideInRight animate__delay-1s p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-yellow-500 mb-6 flex items-center gap-2">
            <Info className="w-8 h-8" />
            Clases Especiales
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clasesEspeciales.map((clase, index) => (
              <div
                key={index}
                className="bg-zinc-700/50 p-6 rounded-lg hover:bg-zinc-700 transition-colors"
              >
                <h3 className="text-xl font-bold text-yellow-500">
                  {clase.nombre}
                </h3>
                <p className="text-gray-300 mt-2">{clase.horario}</p>
                <p className="text-gray-400 mt-1">
                  Instructor: {clase.instructor}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* Información Importante */}
        <section className="bg-yellow-500/10 p-8 rounded-lg border border-yellow-500/20">
          <h2 className="text-2xl font-bold text-yellow-500 mb-4 flex items-center gap-2">
            <AlertCircle className="w-6 h-6" />
            Información Importante
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <ArrowRight className="w-5 h-5 text-yellow-500" />
              Los horarios pueden variar en días festivos
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight className="w-5 h-5 text-yellow-500" />
              Las clases especiales requieren reserva previa
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight className="w-5 h-5 text-yellow-500" />
              El acceso a las instalaciones cierra 30 minutos antes del horario
              de cierre
            </li>
          </ul>
        </section>
        {/* Contacto para Consultas */}
        <section className="bg-zinc-800 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-yellow-500 mb-6">
            ¿Tienes dudas sobre los horarios?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-4 hover:text-yellow-500 transition-colors"
            >
              <Phone className="w-6 h-6" />
              <span>+1 (234) 567-890</span>
            </a>
            <a
              href="mailto:horarios@tugimnasio.com"
              className="flex items-center gap-4 hover:text-yellow-500 transition-colors"
            >
              <Mail className="w-6 h-6" />
              <span>horarios@tugimnasio.com</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
