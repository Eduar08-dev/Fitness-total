import React from "react";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Clock,
  MapPin,
  Phone,
} from "lucide-react";
import "animate.css/animate.min.css";
export default function Nosotros() {
  
  const valores = [
    {
      icon: <Heart className="w-8 h-8 text-yellow-500" />,
      titulo: "Pasión",
      descripcion:
        "Amamos lo que hacemos y transmitimos esa pasión a cada uno de nuestros clientes",
    },
    {
      icon: <Target className="w-8 h-8 text-yellow-500" />,
      titulo: "Compromiso",
      descripcion:
        "Nos comprometemos con los objetivos de cada persona que confía en nosotros",
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-500" />,
      titulo: "Comunidad",
      descripcion:
        "Creamos un ambiente donde todos son bienvenidos y pueden crecer juntos",
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      titulo: "Excelencia",
      descripcion: "Buscamos la excelencia en cada aspecto de nuestro servicio",
    },
  ];
  const instalaciones = [
    {
      imagen:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      titulo: "Área de Pesas",
      descripcion:
        "Equipamiento de última generación para entrenamiento de fuerza",
    },
    {
      imagen:
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
      titulo: "Área Cardiovascular",
      descripcion: "Espacios equipados para mejorar tu resistencia",
    },
    {
      imagen:
        "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80",
      titulo: "Área Funcional",
      descripcion: "Zona especializada para entrenamiento funcional y CrossFit",
    },
  ];
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900">
          <img
            src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
            alt="Gym background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="animate__animated animate__slideInLeft absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <h1 className="text-5xl md:text-7xl font-bold text-yellow-500 mb-4">
            Nosotros
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            Más de una década transformando vidas a través del fitness y el
            bienestar
          </p>
        </div>
      </div>
      <main className="max-w-6xl mx-auto space-y-12 p-4 md:p-8 -mt-12">
        {/* Historia Section */}
        <section className="bg-zinc-800/50 backdrop-blur-sm p-8 rounded-lg shadow-xl animate__animated animate__slideInRight">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-yellow-500">
                Nuestra Historia
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Desde 2010, hemos estado comprometidos con la excelencia en el
                fitness y el bienestar. Lo que comenzó como un pequeño gimnasio
                local se ha convertido en una comunidad vibrante de personas
                apasionadas por el fitness y la vida saludable.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center">
                  <Clock className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <span className="block text-2xl font-bold text-yellow-500">
                    13
                  </span>
                  <span className="text-gray-300">Años de Experiencia</span>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <span className="block text-2xl font-bold text-yellow-500">
                    2000+
                  </span>
                  <span className="text-gray-300">Clientes Satisfechos</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3"
                alt="Nuestra Historia"
                className="rounded-lg shadow-xl w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
        {/* Valores Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-yellow-500">
            Nuestros Valores
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, index) => (
              <div key={index} className="bg-zinc-800 p-6 rounded-lg">
                {valor.icon}
                <h3 className="text-xl font-bold text-yellow-500 mt-4">
                  {valor.titulo}
                </h3>
                <p className="text-gray-300 mt-2">{valor.descripcion}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Instalaciones Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-yellow-500">
            Nuestras Instalaciones
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {instalaciones.map((instalacion, index) => (
              <div
                key={index}
                className="bg-zinc-800 rounded-lg overflow-hidden"
              >
                <img
                  src={instalacion.imagen}
                  alt={instalacion.titulo}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-yellow-500">
                    {instalacion.titulo}
                  </h3>
                  <p className="text-gray-300 mt-2">
                    {instalacion.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Contact Info */}
        <section className="bg-zinc-800 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-yellow-500 mb-6">Visítanos</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-yellow-500 flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-2">Ubicación</h3>
                <p className="text-gray-300">
                  Calle Principal #123
                  <br />
                  Ciudad, Estado 12345
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-yellow-500 flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-2">Contacto</h3>
                <p className="text-gray-300">
                  +1 (234) 567-890
                  <br />
                  info@tugimnasio.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
