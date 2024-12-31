import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/page";
import Footer from "../components/Footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fitness total gym",
  description: "stay fit and healthy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta
        name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
       <header>
        <Navbar />
       </header>
       <div className="min-h-screen bg-gradient-to-br from-neutral-800 to-neutral-900">
        {children}
        <footer>
        <Footer />
        </footer>
       </div>
      </body>
    </html>
  );
}

