import Image from 'next/image';
import Link from 'next/link';

const entrenadores = [
  { id: 1, nombre: 'John Cabarcas', especialidad: 'Entrenamiento de musculación', foto: '/foto1.jpeg', biografia: 'John es un entrenador con más de 10 años de experiencia en el campo de la musculación, profesional en el área y destacado entrenador de la ciudad. Su amplio recorrido en la industria lo ha llevado a posicionarse como uno de los mejores personal trainers de la ciudad' },
  { id: 2, nombre: 'Carlos Rodríguez', especialidad: 'Crossfit', foto: '/placeholder.svg?height=300&width=300', biografia: 'Carlos es un entrenador de Crossfit apasionado por ayudar a sus clientes a alcanzar sus metas...' },
  { id: 3, nombre: 'Laura Martínez', especialidad: 'Pilates', foto: '/placeholder.svg?height=300&width=300', biografia: 'Laura es una experta en Pilates con más de 10 años de experiencia en la enseñanza...' },
];

export default function TrainerPage({ params }) {
    const entrenador = entrenadores.find(t => t.id === parseInt(params.id));

    if (!entrenador) {
        return <div>Entrenador no encontrado</div>;
    }

    return (
        <div>
            <section className="py-20 bg-gradient-to-b from-yellow-400/20 to-neutral-900 relative">
                <Link href="/" passHref>
                    <button className="absolute top-4 right-4 bg-yellow-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">
                        Volver a la página principal
                    </button>
                </Link>
                <div className="container mx-auto px-4 text-center">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                            <div className="relative overflow-hidden rounded-lg">
                                <Image
                                    src={entrenador.foto}
                                    alt="Gym Equipment"
                                    width={800}
                                    height={600}
                                    className="w-full object-cover transform transition duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-5xl font-bold text-yellow-400">
                                {entrenador.nombre}
                            </h2>
                            <div className="space-y-4 text-gray-300 text-lg">
                                <p>
                                    {entrenador.biografia}
                                </p>
                            </div>
                            <h2 className="text-3xl text-yellow-400">
                                <p>
                                   Especialidad: {entrenador.especialidad}
                                </p>
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-neutral-900 flex flex-col items-center">
                <div className="container flex justify-center flex-col mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-yellow-400 mb-6">Metodologías Usadas</h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 text-lg">
                        <li>Entrenamiento de fuerza</li>
                        <li>Entrenamiento cardiovascular</li>
                        <li>Entrenamiento funcional</li>
                        <li>Entrenamiento de flexibilidad</li>
                    </ul>
                </div>
            </section>
            <section className="py-20 bg-neutral-900">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-yellow-400 mb-6">Videos de Entrenamiento</h2>
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="relative overflow-hidden rounded-lg">
                            <video
                                width="100%"
                                height="315"
                                src="/presentacion.mp4"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></video>
                        </div>
                        <div className="relative overflow-hidden rounded-lg">
                        <video
                        src="/presentacion.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                        ></video>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
