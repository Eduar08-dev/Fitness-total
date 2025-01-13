import React from "react";
import {
  Dumbbell,
  Heart,
  Brain,
  Users,
  Timer,
  Trophy,
  Target,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from "lucide-react";
export default function Services() {

  const servicios = [
    {
      titulo: "Entrenamiento Personal",
      descripcion:
        "Programas personalizados diseñados específicamente para tus objetivos y nivel de condición física",
      icon: <Dumbbell className="w-10 h-10" />,
      imagen:
        "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80",
      beneficios: [
        "Atención personalizada",
        "Seguimiento continuo",
        "Ajustes en tiempo real",
      ],
    },
    {
      titulo: "Clases Grupales",
      descripcion:
        "Entrena en un ambiente energético y motivador con nuestras diversas clases grupales",
      icon: <Users className="w-10 h-10" />,
      imagen:
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
      beneficios: [
        "Ambiente motivador",
        "Variedad de clases",
        "Instructores expertos",
      ],
    },
    {
      titulo: "Nutrición Deportiva",
      descripcion:
        "Optimiza tus resultados con planes nutricionales personalizados y seguimiento profesional",
      icon: <Heart className="w-10 h-10" />,
      imagen:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
      beneficios: [
        "Planes personalizados",
        "Seguimiento mensual",
        "Ajustes según progreso",
      ],
    },
  ];
  const planes = [
    {
      nombre: "Diario",
      precio: "$3.500 COP",
      periodo: "día",
      caracteristicas: [
        "Acceso a instalaciones",
        "Entrenamiento libre",
        "Seguimiento por entrenador de planta",
      ],
      destacado: false,
    },
    {
      nombre: "Mensual",
      precio: "$50.000 COP",
      periodo: "mes",
      caracteristicas: [
        "Acceso ilimitado",
        "Clases grupales ilimitadas",
        "2 sesiones PT/mes",
        "Plan nutricional básico",
      ],
      destacado: true,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      {/* Hero Section con diseño alternativo */}
      <div className="relative min-h-[70vh] w-full flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-transparent">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3"
            alt="Gym background"
            className="w-full h-full object-cover blur-sm"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-32">
          <h1 className="text-5xl md:text-7xl font-bold">
            Transforma tu vida con nuestros{" "}
            <span className="text-yellow-500">servicios</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-2xl">
            Ofrecemos una amplia gama de servicios diseñados para ayudarte a
            alcanzar tus objetivos fitness
          </p>
        </div>
      </div>
      <main className="max-w-6xl mx-auto px-4 py-16 space-y-32">
        {/* Servicios Principales con nuevo diseño */}
        <section className="space-y-16">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
            >
              <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-block p-3 bg-yellow-500/10 rounded-xl">
                  {React.cloneElement(servicio.icon, {
                    className: "w-10 h-10 text-yellow-500",
                  })}
                </div>
                <h2 className="text-4xl font-bold text-yellow-500">
                  {servicio.titulo}
                </h2>
                <p className="text-xl text-gray-300">{servicio.descripcion}</p>
                <ul className="space-y-3">
                  {servicio.beneficios.map((beneficio, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-500" />
                      <span>{beneficio}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src={servicio.imagen}
                  alt={servicio.titulo}
                  className="rounded-2xl shadow-2xl w-full hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </section>
        {/* Planes y Precios con diseño mejorado */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">
              Nuestros <span className="text-yellow-500">Planes</span>
            </h2>
            <p className="text-xl text-gray-300">
              Encuentra el plan perfecto para ti
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {planes.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-xl ${plan.destacado ? "bg-yellow-500 text-zinc-900" : "bg-zinc-800 text-white"}`}
              >
                {plan.destacado && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-600 rounded-full text-white text-sm font-semibold">
                    Más Popular
                  </div>
                )}
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold">{plan.nombre}</h3>
                  <div className="text-4xl font-bold">
                    {plan.precio}
                    <span className="text-lg font-normal">/{plan.periodo}</span>
                  </div>
                </div>
                <ul className="mt-8 space-y-4">
                  {plan.caracteristicas.map((caracteristica, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Sparkles
                        className={`w-5 h-5 ${plan.destacado ? "text-zinc-900" : "text-yellow-500"}`}
                      />
                      <span>{caracteristica}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <button
                  className="mt-8 w-full text-xl text-black py-3 bg-yellow-500 rounded-lg transition-colors hover:text-white hover:bg-zinc-800"
                >
                    ¡Comienza Ahora! <ArrowRight className="w-6 h-6 inline-block" />
                </button>
        </section>
      </main>
    </div>
  );
}
