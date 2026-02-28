import { Project, Service } from './types';
import proyecto1 from './assets/app1.png';

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
    title: 'Gestor de Inventario Simple',
    category: 'Apps',
    image: proyecto1,
    description: 'Una aplicación de escritorio y móvil para aquellos documentos repetitivos.',
    problem: 'El cliente perdía horas llevando a cabo el mismo documento cambiando algunos datos.',
    solution: 'Desarrollamos una app intuitiva con un pequeño formulario el cual, una vez cumplimentado, generaba el archivo y, además se guardaba en una BB.DD.',
  },
  {
    id: 'auto-1',
    title: 'Sincronización CRM-Email',
    category: 'Automatizaciones',
    image: 'https://images.unsplash.com/photo-1518433278981-1127cc340b09?q=80&w=1000&auto=format&fit=crop',
    description: 'Flujo de trabajo automatizado entre captación de leads y respuesta por correo.',
    problem: 'Los nuevos contactos tardaban hasta 24 horas en recibir una respuesta, perdiendo interés.',
    solution: 'Implementamos un escenario en Make que envía un dossier personalizado en menos de 5 minutos tras el registro.',
  },
  {
    id: 'auto-2',
    title: 'Reportes Automáticos',
    category: 'Automatizaciones',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    description: 'Generación de informes mensuales de ventas desde Stripe a Google Sheets.',
    problem: 'Extracción manual de datos tediosa y con riesgo de duplicados.',
    solution: 'Automatización total que consolida datos financieros cada noche de forma transparente.',
  },
  {
    id: 'web-1',
    title: 'Boda de Ana & Luis',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop',
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
