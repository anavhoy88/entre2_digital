import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

// Importa tu logotipo
import logo from '../assets/entre2_Digital.jpg';

export default function Hero() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-beige-100"
    >
      {/* Marca de agua */}
      <motion.img
        src={logo}
        alt="Marca de agua Entredos Digital"
        className="absolute inset-0 m-auto w-[70%] max-w-3xl opacity-[0.06] pointer-events-none select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.06 }}
        transition={{ duration: 1.2 }}
      />

      {/* Decorative elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-beige-200 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-beige-200 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-earth-900/5 text-earth-800 rounded-full">
              Entredos Digital
            </span>

            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-6 text-earth-900">
              Soluciones digitales <br />
              <span className="italic">sencillas</span> para emprendedores
            </h1>

            <p className="text-lg md:text-xl text-earth-800/70 mb-10 leading-relaxed max-w-2xl">
              Webs, Apps y Automatizaciones sin complicaciones. Ayudamos a que tu negocio crezca con herramientas digitales elegantes y efectivas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-earth-900 text-beige-50 rounded-full font-medium transition-transform hover:scale-105 active:scale-95"
              >
                Hablemos
                <ArrowRight className="ml-2" size={18} />
              </a>

              <a
                href="#proyectos"
                className="inline-flex items-center justify-center px-8 py-4 border border-earth-900/20 text-earth-900 rounded-full font-medium transition-all hover:bg-earth-900/5"
              >
                Ver proyectos
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
