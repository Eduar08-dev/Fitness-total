import Image from 'next/image';

export default function History() {
  return (
    <section className="py-20 bg-gradient-to-b from-yellow-400/20 to-neutral-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-yellow-400">
              Nuestra Historia
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Fundado en 2005, nuestro gimnasio comenzó como un pequeño estudio con una gran visión. A lo largo de los años, hemos crecido junto con nuestra comunidad, expandiendo nuestras instalaciones y servicios para satisfacer las necesidades cambiantes de nuestros miembros.
              </p>
              <p>
                Hoy, nos enorgullecemos de ser más que un simple gimnasio. Somos un centro de bienestar integral, ofreciendo una amplia gama de programas de fitness, nutrición y bienestar mental. Nuestra misión sigue siendo la misma: inspirar y apoyar a cada individuo en su viaje hacia una vida más saludable y feliz.
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/foto1.jpeg"
                alt="Gym Equipment"
                width={800}
                height={600}
                className="w-full object-cover transform transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
