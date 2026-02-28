import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const helpPoints = [
  {
    title: 'Si estás empezando',
    text: 'Creamos tu primera presencia online de forma profesional y sin complicaciones técnicas.',
  },
  {
    title: 'Si pierdes tiempo',
    text: 'Automatizamos esas tareas repetitivas que te quitan horas cada semana para que te centres en lo importante.',
  },
  {
    title: 'Si buscas simplicidad',
    text: 'Desarrollamos soluciones directas y claras, huyendo de la sobreingeniería y los costes excesivos.',
  },
];

export default function HelpSection() {
  return (
    <section className="py-24 bg-beige-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
              Cómo puedo <br />
              <span className="italic">ayudarte</span> a crecer
            </h2>
            <p className="text-lg text-earth-800/60 mb-10 leading-relaxed">
              No necesitas una infraestructura compleja para ser eficiente. 
              A veces, la solución más sencilla es la más potente.
            </p>
            
            <div className="space-y-6">
              {helpPoints.map((point, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1 text-earth-800">
                    <CheckCircle2 size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif mb-1">{point.title}</h4>
                    <p className="text-earth-800/60 text-sm">{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000&auto=format&fit=crop"
                alt="Workspace"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative floating card */}
            <div className="absolute -bottom-6 -left-6 md:-left-12 p-8 bg-white shadow-xl shadow-earth-900/5 rounded-3xl max-w-xs border border-earth-900/5">
              <p className="text-earth-900 font-serif italic text-lg mb-2">
                "La simplicidad es la máxima sofisticación."
              </p>
              <p className="text-xs uppercase tracking-widest text-earth-800/40 font-bold">
                Leonardo da Vinci
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
