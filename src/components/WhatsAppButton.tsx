import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[90] w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/20"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" />
    </motion.a>
  );
}
