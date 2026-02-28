import React from 'react';
import { motion } from 'motion/react';
import { Globe, Smartphone, Zap, Palette } from 'lucide-react';
import { SERVICES } from '../constants';

// Importa tu logotipo
import logo from '../assets/entre2_Digital.jpg';

const icons: Record<string, React.ReactNode> = {
  Globe: <Globe size={32} strokeWidth={1.5} />,
  Smartphone: <Smartphone size={32} strokeWidth={1.5} />,
  Zap: <Zap size={32} strokeWidth={1.5} />,
  Palette: <Palette size={32} strokeWidth={1.5} />,
};

export default function Services() {
  return (
    <section id="servicios" className="relative py-24 bg-beige-50 overflow-hidden">

      {/* Marca de agua */}
      <motion.img
        src={logo}
        alt="Marca de agua Entredos Digital"
        className="absolute inset-0 m-auto w-[65%] max-w-3xl opacity-[0.05] pointer-events-none select-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-4">Qué hago</h2>
            <div className="w-20 h-0.5 bg-earth-900/10 mx-auto mb-6" />
            <p className="text-earth-800/60 max-w-xl mx-auto">
              Soluciones enfocadas en la simplicidad y la elegancia para optimizar tu presencia digital.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 bg-white border border-earth-900/5 rounded-3xl hover:border-earth-900/10 transition-colors group"
            >
              <div className="mb-6 text-earth-800 group-hover:scale-110 transition-transform duration-500">
                {icons[service.icon]}
              </div>
              <h3 className="text-xl mb-3">{service.title}</h3>
              <p className="text-earth-800/60 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
