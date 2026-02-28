import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-beige-50 border-t border-earth-900/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-serif font-semibold text-earth-900 mb-2">
              Entredos Digital
            </h3>
            <p className="text-sm text-earth-800/50 max-w-xs">
              Soluciones digitales minimalistas para emprendedores con visión.
            </p>
          </div>

          <div className="flex space-x-6 text-sm text-earth-800/60">
            <a href="#inicio" className="hover:text-earth-900 transition-colors">Inicio</a>
            <a href="#servicios" className="hover:text-earth-900 transition-colors">Servicios</a>
            <a href="#proyectos" className="hover:text-earth-900 transition-colors">Proyectos</a>
            <a href="#contacto" className="hover:text-earth-900 transition-colors">Contacto</a>
          </div>

          <div className="text-sm text-earth-800/40">
            © {currentYear} Entredos Digital. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
