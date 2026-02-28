import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

export default function FinalCTA() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section id="contacto" className="py-24 bg-beige-200">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl mb-8">
            ¿Tienes una idea? <br />
            <span className="italic">Hablemos.</span>
          </h2>
          <p className="text-lg text-earth-800/60 mb-12 max-w-2xl mx-auto">
            Estamos listos para dar vida a tu próximo proyecto digital. 
            Sin compromisos, solo una charla sobre cómo podemos ayudarte.
          </p>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 bg-earth-900 text-beige-50 rounded-full font-medium text-lg transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-earth-900/10"
          >
            <MessageCircle className="mr-3" size={24} />
            Contactar por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
