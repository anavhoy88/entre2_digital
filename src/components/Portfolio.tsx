import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink } from 'lucide-react';
import { PROJECTS, WHATSAPP_NUMBER } from '../constants';
import { Project } from '../types';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('Todos');

  const categories = ['Todos', 'Apps', 'Automatizaciones', 'Web', 'Diseño'];
  
  const filteredProjects = filter === 'Todos' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const openWhatsApp = (projectTitle: string) => {
    const message = `Hola Entredos Digital, he visto vuestro proyecto "${projectTitle}" y me gustaría algo similar.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="proyectos" className="py-24 bg-beige-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-4">Proyectos</h2>
            <div className="w-20 h-0.5 bg-earth-900/10 mx-auto mb-8" />
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                    ? 'bg-earth-900 text-beige-50' 
                    : 'bg-white text-earth-800/60 hover:bg-earth-900/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl mb-4 bg-beige-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-earth-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="px-6 py-2 bg-white/90 backdrop-blur-sm text-earth-900 rounded-full text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      Ver detalle
                    </span>
                  </div>
                </div>
                <div className="px-2">
                  <span className="text-[10px] uppercase tracking-widest text-earth-800/40 font-semibold mb-1 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl text-earth-900 group-hover:text-earth-800 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-earth-900/40 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-beige-50 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full text-earth-900 hover:bg-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
                <span className="text-xs uppercase tracking-widest text-earth-800/40 font-bold mb-2 block">
                  {selectedProject.category}
                </span>
                <h3 className="text-3xl md:text-4xl mb-6">{selectedProject.title}</h3>
                
                <div className="space-y-8 mb-10">
                  <div>
                    <h4 className="text-sm font-sans font-bold uppercase tracking-wider text-earth-800 mb-2">Descripción</h4>
                    <p className="text-earth-800/70 leading-relaxed">{selectedProject.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-sans font-bold uppercase tracking-wider text-earth-800 mb-2">El Problema</h4>
                    <p className="text-earth-800/70 leading-relaxed italic">"{selectedProject.problem}"</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-sans font-bold uppercase tracking-wider text-earth-800 mb-2">Nuestra Solución</h4>
                    <p className="text-earth-800/70 leading-relaxed">{selectedProject.solution}</p>
                  </div>
                </div>

                <button
                  onClick={() => openWhatsApp(selectedProject.title)}
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-earth-900 text-beige-50 rounded-full font-medium transition-transform hover:scale-[1.02] active:scale-95"
                >
                  Quiero algo similar
                  <ExternalLink className="ml-2" size={18} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
