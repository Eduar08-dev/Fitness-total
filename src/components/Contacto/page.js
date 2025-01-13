import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Send,
  MessageCircle,
  HelpCircle,
} from "lucide-react";

export default function Contact() {

  const faqs = [
    {
      pregunta: "¿Cómo puedo agendar una clase de prueba?",
      respuesta:
        "Puedes agendar una clase de prueba gratuita llamándonos o completando el formulario de contacto.",
    },
    {
      pregunta: "¿Cuáles son los métodos de pago aceptados?",
      respuesta:
        "Aceptamos efectivo y transferencias bancarias.",
    },
    {
      pregunta: "¿Necesito traer algo específico para mi primera clase?",
      respuesta:
        "Te recomendamos traer ropa cómoda, una toalla y agua. Todo el equipo necesario lo proporcionamos nosotros.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900">
          <img
            src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Contact background"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <h1 className="animate__animated animate__slideInRight text-4xl md:text-6xl font-bold text-yellow-500 mb-4 flex items-center gap-4">
            <MessageCircle className="w-12 h-12" /> Contáctanos
          </h1>
        </div>
      </div>
      <main className="max-w-6xl mx-auto space-y-12 p-4 md:p-8 -mt-12">
        <div className="animate__animated animate__slideInRight grid md:grid-cols-2 gap-8">
          {/* Formulario de Contacto */}
          <section className="bg-zinc-800/50 backdrop-blur-sm p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold text-yellow-500 mb-6">
              Envíanos un mensaje
            </h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="block text-gray-300">Nombre completo</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-zinc-700 border border-zinc-600 focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-gray-300">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-zinc-700 border border-zinc-600 focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
                  placeholder="tucorreo@ejemplo.com"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-gray-300">Asunto</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-zinc-700 border border-zinc-600 focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
                  placeholder="¿Sobre qué nos quieres contactar?"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-gray-300">Mensaje</label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg bg-zinc-700 border border-zinc-600 focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 h-32"
                  placeholder="Escribe tu mensaje aquí..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-yellow-600 rounded-lg hover:bg-yellow-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar mensaje
              </button>
              
            </form>
          </section>
          {/* Información de Contacto */}
          <div className="space-y-8">
            <section className="bg-zinc-800 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-yellow-500 mb-6">
                Información de contacto
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Ubicación</h3>
                    <p className="text-gray-300">
                      Calle Principal #123
                      <br />
                      Ciudad, Estado 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Horario de atención</h3>
                    <p className="text-gray-300">
                      Lunes a Viernes: 6:00 AM - 10:00 PM
                      <br />
                      Sábados: 8:00 AM - 8:00 PM
                      <br />
                      Domingos: 9:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Teléfono</h3>
                    <p className="text-gray-300">+1 (234) 567-890</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-gray-300">info@tugimnasio.com</p>
                  </div>
                </div>
              </div>
            </section>
            {/* Redes Sociales */}
            <section className="bg-zinc-800 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-yellow-500 mb-6">
                Síguenos en redes sociales
              </h2>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-3 bg-zinc-700 rounded-lg hover:bg-yellow-600 transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-zinc-700 rounded-lg hover:bg-yellow-600 transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-zinc-700 rounded-lg hover:bg-yellow-600 transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </section>
          </div>
        </div>
        {/* FAQs */}
        <section className="bg-zinc-800 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-yellow-500 mb-6 flex items-center gap-2">
            <HelpCircle className="w-6 h-6" />
            Preguntas Frecuentes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6 bg-zinc-700/50 rounded-lg">
                <h3 className="font-bold text-yellow-500 mb-2">
                  {faq.pregunta}
                </h3>
                <p className="text-gray-300">{faq.respuesta}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Mapa */}
        <section className="bg-zinc-800 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-yellow-500 mb-6">
            Nuestra ubicación
          </h2>
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.4488510634255!2d-74.7749386!3d10.9294275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef5cd612d851161%3A0x40a7aadb78fa7f88!2sFitness%20Total%20Gym!5e0!3m2!1ses-419!2sco!4v1736807309919!5m2!1ses-419!2sco"
            width="100%"
            height="100%"
            style={{
            border: 0,
            }}
            allowFullScreen
            loading="lazy"
            ></iframe>
          </div>
        </section>
      </main>
    </div>
  );
}
