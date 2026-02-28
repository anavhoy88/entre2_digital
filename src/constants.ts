import { Project, Service } from './types';
import proyecto1 from './assets/app1.png';
import proyecto2 from './assets/automatizaciones1.png';
import proyecto3 from './assets/automatizaciones1.png';
import proyecto4 from './assets/boda1.png';

export const SERVICES: Service[] = [
  {
    id: 'web',
    title: 'Páginas Web',
    description: 'Sitios web elegantes y funcionales que capturan la esencia de tu marca y convierten visitantes en clientes.',
    icon: 'Globe',
  },
  {
    id: 'apps',
    title: 'Apps Sencillas',
    description: 'Pequeñas aplicaciones personalizadas para resolver necesidades específicas sin complicaciones técnicas.',
    icon: 'Smartphone',
  },
  {
    id: 'automations',
    title: 'Automatizaciones',
    description: 'Optimiza tu tiempo conectando tus herramientas favoritas con Make para que tu negocio trabaje por ti.',
    icon: 'Zap',
  },
  {
    id: 'design',
    title: 'Diseño Gráfico',
    description: 'Identidad visual y piezas gráficas minimalistas que comunican profesionalidad y versatilidad.',
    icon: 'Palette',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'app-1',
    title: 'Gestor de Documentos repetitivos',
    category: 'Apps',
    image: proyecto1,
    description: 'Una aplicación de escritorio y móvil para aquellos documentos repetitivos.',
    problem: 'El cliente perdía horas llevando a cabo el mismo documento cambiando algunos datos.',
    solution: 'Desarrollamos una app intuitiva con un pequeño formulario el cual, una vez cumplimentado, se genera el archivo y además, se guarda en una BB.DD. para poder reutilizarlo si fuese necesario.',
  },
  {
    id: 'auto-1',
    title: 'Control de gasto automático',
    category: 'Automatizaciones',
    image: proyecto2,
    description: 'Flujo de trabajo automatizado para el control de facturas de luz, gas y agua.',
    problem: 'Recibes facturas de luz, agua o gas y no sabes qué hacer con ellas, no llevas el control de gasto.',
    solution: 'Implementamos un escenario en Make que envía el precio de la factura a un Excel para llevar el control total de las facturas.',
  },
  {
    id: 'auto-2',
    title: 'Reportes Autom',
    category: 'Automatizaciones',
    image: proyecto3,
    description: 'A través de Telegram, controla tus gastos en tres click.',
    problem: 'Pérdida de control de gastos "hormiga".',
    solution: 'Gestionamos una automatización entre Telegram y Google Sheets para agregar el control diario en tres interacciones.',
  },
  {
    id: 'web-1',
    title: 'Boda de Rocío & Carlos',
    category: 'Web',
    image: proyecto4,
    description: 'Landing page elegante para la gestión de invitados y detalles del evento.',
    problem: 'Dificultad para centralizar confirmaciones de asistencia y alergias alimentarias.',
    solution: 'Web minimalista con formulario integrado y cuenta atrás, facilitando la organización a los novios.',
  },
  {
    id: 'design-1',
    title: 'Identidad Visual "Terra"',
    category: 'Diseño',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=1000&auto=format&fit=crop',
    description: 'Branding completo para una marca de cerámica artesanal.',
    problem: 'La marca carecía de una imagen coherente que reflejara su proceso orgánico.',
    solution: 'Logotipo y paleta de colores tierra que transmiten calma y autenticidad.',
  },
  {
    id: 'design-2',
    title: 'Parche Militar "Vanguard"',
    category: 'Diseño',
    image: 'https://images.unsplash.com/photo-1590548784585-643d2b9f2925?q=80&w=1000&auto=format&fit=crop',
    description: 'Diseño de parche redondo bordado para unidad táctica.',
    problem: 'Necesidad de un emblema que fuera legible en pequeño y representara fuerza.',
    solution: 'Diseño circular minimalista con tipografía robusta y elementos icónicos simplificados.',
  },
];

export const WHATSAPP_NUMBER = '34600000000';
export const WHATSAPP_MESSAGE = 'Hola Entredos Digital, me gustaría obtener más información sobre vuestros servicios.';
