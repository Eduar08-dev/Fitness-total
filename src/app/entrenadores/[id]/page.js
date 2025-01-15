// import {
//   Dumbbell,
//   Heart,
//   Brain,
//   Bone,
//   Medal,
//   Volleyball,
//   Phone,
//   Mail,
//   Instagram,
//   CheckCircle,
// } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";

// const entrenadores = [
//   {
//     id: 1,
//     nombre: "John Cabarcas",
//     especialidad: "Entrenamiento de musculación",
//     foto: "/foto1.jpeg",
//     biografia:
//       "John es un entrenador con más de 10 años de experiencia en el campo de la musculación, profesional en el área y destacado entrenador de la ciudad. Su amplio recorrido en la industria lo ha llevado a posicionarse como uno de los mejores personal trainers de la ciudad",
//   },
//   {
//     id: 2,
//     nombre: "Dylan Blanco",
//     especialidad: "Entrenamiento funcional",
//     foto: "/foto1.jpeg",
//     biografia:
//       "Carlos es un entrenador de Crossfit apasionado por ayudar a sus clientes a alcanzar sus metas...",
//   },
//   {
//     id: 3,
//     nombre: "Juan Gallardo",
//     especialidad: "Entrenamiento deportivo, Psicología deportiva",
//     foto: "/foto1.jpeg",
//     biografia:
//       "Laura es una experta en Pilates con más de 10 años de experiencia en la enseñanza...",
//   },
//   {
//     id: 4,
//     nombre: "Valentina Gallardo",
//     especialidad: "Rehabilitación física, Entrenamiento funcional",
//     foto: "/foto1.jpeg",
//     biografia:
//       "Valentina es una fisioterapeuta especializada en rehabilitación física y entrenamiento funcional...",
//   },
// ];
// const metodologiasPorEntrenador = {
//   1: [
//     {
//       nombre: "Entrenamiento de fuerza",
//       icono: <Dumbbell className="w-8 h-8 text-yellow-500" />,
//       descripcion: "Técnicas avanzadas de musculación",
//     },
//     {
//       nombre: "Entrenamiento cardiovascular",
//       icono: <Heart className="w-8 h-8 text-yellow-500" />,
//       descripcion: "HIIT y cardio personalizado",
//     },
//   ],
//   2: [
//     {
//       nombre: "Entrenamiento funcional",
//       icono: <Heart className="w-8 h-8 text-yellow-500" />,
//       descripcion: "Ejercicios funcionales adaptados",
//     },
//   ],
//   3: [
//     {
//       nombre: "Psicología deportiva",
//       icono: <Brain className="w-8 h-8 text-yellow-500" />,
//       descripcion: "Preparación mental para deportistas",
//     },
//     {
//       nombre: "Entrenamiento deportivo",
//       icono: <Volleyball className="w-8 h-8 text-yellow-500" />,
//       descripcion: "Técnicas específicas por deporte",
//     },
//   ],
//   4: [
//     {
//       nombre: "Rehabilitación física",
//       icono: <Bone className="w-8 h-8 text-yellow-500" />,
//       descripcion: "Recuperación y rehabilitación",
//     },
//     {
//       nombre: "Entrenamiento funcional",
//       icono: <Heart className="w-8 h-8 text-yellow-500" />,
//       descripcion: "Ejercicios adaptados a rehabilitación",
//     },
//   ],
// };
// const Historia = {
//   1: [
//     {
//       descripcion:
//         "John es un deportista y apasionado por el gym desde hace más de 10 años. Su pasión por el entrenamiento físico lo llevo a convertirse en un entrenador profesional de musculación; graduado de la universidad de la costa, cuenta con un amplio portafolio de servicios para todo tipo de clientes.",
//     },
//   ],
// };

// const certificadosYClientes = {
//     1: [
//         {
//             titulo: "Profesional en educación física y deportes",
//             icono : <Medal className="w-4 h-4" />,
//         },
//         {
//             cliente: "Más de 100 clientes satisfechos",
//             icono : <CheckCircle className="w-4 h-4" />,
//         },
//     ],

//     2: [ {
//             titulo: "Tecnico en entrenamiento personalizado",
//     },
//     {
//         cliente: "Más de 50 clientes satisfechos",
//     }
//     ],

//     3: [ {
//           titulo: "Profesional en psicología y entrenamiento deportivo",
//     },
//     {
//         cliente: "Más de 20 clientes satisfechos",
//     }
//     ],
    
//     4: [ {
//             titulo: "Profesional en fisioterapia",
//             },
//             {
//                 cliente: "Más de 10 clientes satisfechos",
//             }
//        ],
// };


// export default function App({ params }) {
//     const entrenador = entrenadores.find(t => t.id === parseInt(params.id));
//   if (!entrenador) {
//     return <div>Entrenador no encontrado</div>;
//   }
// return (
//     <div className="w-full min-h-screen bg-zinc-900 text-white">
//         <div className="relative h-[60vh] w-full overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900">
//                 <Image
//                     src={entrenador.foto}
//                     width={1920}
//                     height={1080}
//                     alt="Gym background"
//                     className="w-full h-full object-cover opacity-50"
//                 />
//             </div>
//             <Link href="/" className="absolute top-4 right-4">
//                 <p className="px-4 py-2 bg-yellow-600 rounded-md hover:bg-yellow-700 transition-colors" href="/">
//                     Volver a la página principal
//                 </p>
//             </Link>
//             <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
//                 <h1 className="animate__animated animate__slideInLeft text-5xl md:text-7xl font-bold text-yellow-500 mb-4">
//                     {entrenador.nombre}
//                 </h1>
//             </div>
//         </div>
//         <main className="max-w-6xl mx-auto space-y-12 p-4 md:p-8 -mt-12">
//             <section className="bg-zinc-800/50 animate__animated animate__slideInRight backdrop-blur-sm p-8 rounded-lg shadow-xl">
//                 <div className="flex flex-col md:flex-row gap-8">
//                     <div className="w-full md:w-1/3">
//                         <img
//                             src={entrenador.foto}
//                             alt={`Foto de ${entrenador.nombre}`}
//                             className="rounded-lg shadow-xl w-full"
//                         />
//                     </div>
//                     <div className="w-full md:w-2/3 space-y-6">
//                         <p className="text-xl text-gray-300 leading-relaxed">
//                             {entrenador.biografia}
//                         </p>
//                         <div className="flex gap-4">
//                             {certificadosYClientes[entrenador.id]?.map((certificado, index) => (
//                                 <div key={index} className="bg-zinc-800/50 p-4 rounded
//                                     lg:rounded-lg ">
//                                             {certificado.titulo && (
//                                         <h2 className="text-md text-yellow-500 flex items-center gap-2">
//                                                 <Medal className="w-10 h-20 md:w-6 md:h-6" />
//                                                 {certificado.titulo}
//                                         </h2>
//                                             )}
//                                             {certificado.cliente && (
//                                         <h2 className="text-md text-yellow-500 flex items-center gap-2">
//                                             <CheckCircle className="w-10 h-20 md:w-6 md:h-6" />
//                                             {certificado.cliente}
//                                         </h2>
//                                      )}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <div className="grid md:grid-cols-2 gap-8">
//                 <section className="bg-zinc-800 p-8 rounded-lg animate__animated animate__slideInLeft">
//                     <h2 className="text-3xl font-bold text-yellow-500 mb-4">
//                         Especialidad
//                     </h2>
//                     <ul className="text-xl text-gray-300 list-disc list-inside">
//                         {entrenador.especialidad.split(",").map((especialidad, index) => (
//                             <li key={index} className="flex items-center gap-2">
//                                 <CheckCircle className="w-5 h-5 text-yellow-500 md:w-6 md:h-6" />
//                                 <span>{especialidad.trim()}</span>
//                             </li>
//                         ))}
//                     </ul>
//                 </section>
//                 <section className="bg-zinc-800 p-8 rounded-lg animate__animated animate__slideInRight">
//                     <h2 className="text-3xl font-bold text-yellow-500 mb-6">
//                         Metodologías
//                     </h2>
//                     <div className="space-y-6">
//                         {metodologiasPorEntrenador[entrenador.id]?.map(
//                             (metodologia, index) => (
//                                 <div key={index} className="flex items-center gap-4">
//                                     {metodologia.icono}
//                                     <div>
//                                         <span className="text-xl block">
//                                             {metodologia.nombre}
//                                         </span>
//                                         <span className="text-gray-400">
//                                             {metodologia.descripcion}
//                                         </span>
//                                     </div>
//                                 </div>
//                             ),
//                         )}
//                     </div>
//                 </section>
//             </div>
//             <section className="space-y-6">
//                 <h2 className="text-3xl font-bold text-yellow-500">
//                     Videos Demostrativos
//                 </h2>
//                 <div className="grid md:grid-cols-2 gap-8">
//                     <div className="aspect-video bg-zinc-800 rounded-lg overflow-hidden">
//                         <iframe
//                             className="w-full h-full"
//                             src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//                             title="Video demostrativo 1"
//                             allowFullScreen
//                         />
//                     </div>
//                     <div className="space-y-6">
//                         <h2 className="text-4xl font-bold text-yellow-400">
//                             Conoce más sobre {entrenador.nombre}
//                         </h2>
//                         <div className="space-y-4 text-lg text-gray-300">
//                             {Historia[entrenador.id]?.map((historia, index) => (
//                                 <p key={index}>{historia.descripcion}</p>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <section className="bg-zinc-800 p-8 rounded-lg">
//                 <h2 className="text-3xl font-bold text-yellow-500 mb-6">Contacto</h2>
//                 <div className="grid md:grid-cols-3 gap-6">
//                     <a
//                         href="tel:+1234567890"
//                         className="flex items-center gap-4 hover:text-yellow-500 transition-colors"
//                     >
//                         <Phone className="w-6 h-6 md:w-8 md:h-8" />
//                         <span>+1 (234) 567-890</span>
//                     </a>
//                     <a
//                         href="mailto:john@example.com"
//                         className="flex items-center gap-4 hover:text-yellow-500 transition-colors"
//                     >
//                         <Mail className="w-6 h-6 md:w-8 md:h-8" />
//                         <span>john@example.com</span>
//                     </a>
//                     <a
//                         href="https://instagram.com"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center gap-4 hover:text-yellow-500 transition-colors"
//                     >
//                         <Instagram className="w-6 h-6 md:w-8 md:h-8" />
//                         <span>@johncabarcas</span>
//                     </a>
//                 </div>
//                 <button className="mt-8 w-full md:w-auto px-8 py-3 bg-yellow-600 rounded-md hover:bg-yellow-700 transition-colors font-semibold">
//                     Agenda tu sesión
//                 </button>
//             </section>
//         </main>
//     </div>
// );
// }

import {
    Dumbbell,
    Heart,
    Brain,
    Bone,
    Medal,
    Volleyball,
    Phone,
    Mail,
    Instagram,
    CheckCircle,
  } from "lucide-react";
  
  import Link from "next/link";
  import Image from "next/image";
  
  const entrenadores = [
    {
      id: 1,
      nombre: "John Cabarcas",
      especialidad: "Entrenamiento de musculación",
      foto: "/foto1.jpeg",
      biografia:
        "John es un entrenador con más de 10 años de experiencia en el campo de la musculación, profesional en el área y destacado entrenador de la ciudad. Su amplio recorrido en la industria lo ha llevado a posicionarse como uno de los mejores personal trainers de la ciudad",
    },
    {
      id: 2,
      nombre: "Dylan Blanco",
      especialidad: "Entrenamiento funcional",
      foto: "/foto1.jpeg",
      biografia:
        "Carlos es un entrenador de Crossfit apasionado por ayudar a sus clientes a alcanzar sus metas...",
    },
    {
      id: 3,
      nombre: "Juan Gallardo",
      especialidad: "Entrenamiento deportivo, Psicología deportiva",
      foto: "/foto1.jpeg",
      biografia:
        "Laura es una experta en Pilates con más de 10 años de experiencia en la enseñanza...",
    },
    {
      id: 4,
      nombre: "Valentina Gallardo",
      especialidad: "Rehabilitación física, Entrenamiento funcional",
      foto: "/foto1.jpeg",
      biografia:
        "Valentina es una fisioterapeuta especializada en rehabilitación física y entrenamiento funcional...",
    },
  ];
  
  const metodologiasPorEntrenador = {
    1: [
      {
        nombre: "Entrenamiento de fuerza",
        icono: <Dumbbell className="w-8 h-8 text-yellow-500" />,
        descripcion: "Técnicas avanzadas de musculación",
      },
      {
        nombre: "Entrenamiento cardiovascular",
        icono: <Heart className="w-8 h-8 text-yellow-500" />,
        descripcion: "HIIT y cardio personalizado",
      },
    ],
    2: [
      {
        nombre: "Entrenamiento funcional",
        icono: <Heart className="w-8 h-8 text-yellow-500" />,
        descripcion: "Ejercicios funcionales adaptados",
      },
    ],
    3: [
      {
        nombre: "Psicología deportiva",
        icono: <Brain className="w-8 h-8 text-yellow-500" />,
        descripcion: "Preparación mental para deportistas",
      },
      {
        nombre: "Entrenamiento deportivo",
        icono: <Volleyball className="w-8 h-8 text-yellow-500" />,
        descripcion: "Técnicas específicas por deporte",
      },
    ],
    4: [
      {
        nombre: "Rehabilitación física",
        icono: <Bone className="w-8 h-8 text-yellow-500" />,
        descripcion: "Recuperación y rehabilitación",
      },
      {
        nombre: "Entrenamiento funcional",
        icono: <Heart className="w-8 h-8 text-yellow-500" />,
        descripcion: "Ejercicios adaptados a rehabilitación",
      },
    ],
  };
  
  const Historia = {
    1: [
      {
        descripcion:
          "John es un deportista y apasionado por el gym desde hace más de 10 años. Su pasión por el entrenamiento físico lo llevo a convertirse en un entrenador profesional de musculación; graduado de la universidad de la costa, cuenta con un amplio portafolio de servicios para todo tipo de clientes.",
      },
    ],
  };
  
  const certificadosYClientes = {
    1: [
      {
        titulo: "Profesional en educación física y deportes",
        icono: <Medal className="w-4 h-4" />,
      },
      {
        cliente: "Más de 100 clientes satisfechos",
        icono: <CheckCircle className="w-4 h-4" />,
      },
    ],
    2: [
      {
        titulo: "Tecnico en entrenamiento personalizado",
      },
      {
        cliente: "Más de 50 clientes satisfechos",
      },
    ],
    3: [
      {
        titulo: "Profesional en psicología y entrenamiento deportivo",
      },
      {
        cliente: "Más de 20 clientes satisfechos",
      },
    ],
    4: [
      {
        titulo: "Profesional en fisioterapia",
      },
      {
        cliente: "Más de 10 clientes satisfechos",
      },
    ],
  };
  
  export default function App({ params }) {
    const entrenador = entrenadores.find((t) => t.id === parseInt(params.id));
  
    if (!entrenador) {
      return <div>Entrenador no encontrado</div>;
    }
  
    return (
      <div className="w-full min-h-screen bg-zinc-900 text-white overflow-hidden">
        <div className="relative h-[60vh] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900">
            <Image
              src={entrenador.foto}
              width={1920}
              height={1080}
              alt="Gym background"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          <Link href="/" className="absolute top-4 right-4">
            <p className="px-4 py-2 bg-yellow-600 rounded-md hover:bg-yellow-700 transition-colors">
              Volver a la página principal
            </p>
          </Link>
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <h1 className="animate__animated animate__slideInLeft text-5xl md:text-7xl font-bold text-yellow-500 mb-4">
              {entrenador.nombre}
            </h1>
          </div>
        </div>
  
        <main className="max-w-6xl mx-auto space-y-12 p-4 md:p-8 -mt-12 overflow-hidden">
          <section className="bg-zinc-800/50 animate__animated animate__slideInRight backdrop-blur-sm p-8 rounded-lg shadow-xl">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/3">
                <img
                  src={entrenador.foto}
                  alt={`Foto de ${entrenador.nombre}`}
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
              <div className="w-full md:w-2/3 space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed">
                  {entrenador.biografia}
                </p>
                <div className="flex flex-wrap gap-4">
                  {certificadosYClientes[entrenador.id]?.map((certificado, index) => (
                    <div
                      key={index}
                      className="bg-zinc-800/50 p-4 rounded lg:rounded-lg"
                    >
                      {certificado.titulo && (
                        <h2 className="text-md text-yellow-500 flex items-center gap-2">
                          <Medal className="w-10 h-20 md:w-6 md:h-6" />
                          {certificado.titulo}
                        </h2>
                      )}
                      {certificado.cliente && (
                        <h2 className="text-md text-yellow-500 flex items-center gap-2">
                          <CheckCircle className="w-10 h-20 md:w-6 md:h-6" />
                          {certificado.cliente}
                        </h2>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
  
          <div className="grid md:grid-cols-2 gap-8">
            <section className="bg-zinc-800 p-8 rounded-lg animate__animated animate__slideInLeft">
              <h2 className="text-3xl font-bold text-yellow-500 mb-4">Especialidad</h2>
              <ul className="text-xl text-gray-300 list-disc list-inside">
                {entrenador.especialidad.split(",").map((especialidad, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-500 md:w-6 md:h-6" />
                    <span>{especialidad.trim()}</span>
                  </li>
                ))}
              </ul>
            </section>
  
            <section className="bg-zinc-800 p-8 rounded-lg animate__animated animate__slideInRight">
              <h2 className="text-3xl font-bold text-yellow-500 mb-6">Metodologías</h2>
              <div className="space-y-6">
                {metodologiasPorEntrenador[entrenador.id]?.map((metodologia, index) => (
                  <div key={index} className="flex items-center gap-4">
                    {metodologia.icono}
                    <div>
                      <span className="text-xl block">{metodologia.nombre}</span>
                      <span className="text-gray-400">{metodologia.descripcion}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
  
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-yellow-500">Videos Demostrativos</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="aspect-video bg-zinc-800 rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Video demostrativo 1"
                  allowFullScreen
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-yellow-400">
                  Conoce más sobre {entrenador.nombre}
                </h2>
                <div className="space-y-4 text-lg text-gray-300">
                  {Historia[entrenador.id]?.map((historia, index) => (
                    <p key={index}>{historia.descripcion}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>
  
          <section className="bg-zinc-800 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-yellow-500 mb-6">Contacto</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-4 hover:text-yellow-500 transition-colors"
              >
                <Phone className="w-6 h-6 md:w-8 md:h-8" />
                <span>+1 (234) 567-890</span>
              </a>
              <a
                href="mailto:john@example.com"
                className="flex items-center gap-4 hover:text-yellow-500 transition-colors"
              >
                <Mail className="w-6 h-6 md:w-8 md:h-8" />
                <span>john@example.com</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-yellow-500 transition-colors"
              >
                <Instagram className="w-6 h-6 md:w-8 md:h-8" />
                <span>@johncabarcas</span>
              </a>
            </div>
            <button className="mt-8 w-full md:w-auto px-8 py-3 bg-yellow-600 rounded-md hover:bg-yellow-700 transition-colors font-semibold">
              Agenda tu sesión
            </button>
          </section>
        </main>
      </div>
    );
  }
  
