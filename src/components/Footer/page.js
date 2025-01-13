import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-neutral-800 to-neutral-900 text-white shadow-lg">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <Image src="/logo-gym.png" width={40} height={50} className="h-8 rounded-lg" alt="Fitness Total Gym Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-yellow-400">Fitness Total Gym</span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0">
                        <li>
                            <Link href="#" className="hover:text-yellow-400 transition-colors me-4 md:me-6">Nuestras redes</Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-yellow-400 transition-colors me-4 md:me-6">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-yellow-400 transition-colors me-4 md:me-6">Licensing</Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-yellow-400 transition-colors">Contacto</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-yellow-800 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-gray-400 sm:text-center">
                    © 2024 <Link href="/" className="hover:text-yellow-400 transition-colors">Fitness total gym</Link>. Todos los derechos reservados.
                </span>
            </div>
        </footer>
    );
}

export default Footer;
