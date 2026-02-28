import { Project, Service } from './types';
import proyecto1 from './assets/app1.png';

import auto1 from './assets/automatizaciones1.png';
import auto2 from './assets/automatizaciones2.png';

import web1 from './assets/boda1.png';

import diseno1 from './assets/diseno1.png';
import diseno2 from './assets/diseno2.png';
import diseno3 from './assets/diseno3.png';
import diseno4 from './assets/diseno4.png';

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
    image: auto1,
    description: 'Flujo de trabajo automatizado para el control de facturas de luz, gas y agua.',
    problem: 'Recibes facturas de luz, agua o gas y no sabes qué hacer con ellas, no llevas el control de gasto.',
    solution: 'Implementamos un escenario en Make que envía el precio de la factura a un Excel para llevar el control total de las facturas.',
  },
  {
    id: 'auto-2',
    title: 'Reportes Autom',
    category: 'Automatizaciones',
    image: auto2,
    description: 'A través de Telegram, controla tus gastos en tres click.',
    problem: 'Pérdida de control de gastos "hormiga".',
    solution: 'Gestionamos una automatización entre Telegram y Google Sheets para agregar el control diario en tres interacciones.',
  },
  {
    id: 'web-1',
    title: 'Boda de Rocío & Carlos',
    category: 'Web',
    image: web1,
    description: 'Landing page elegante para la gestión de invitados y detalles del evento.',
    problem: 'Dificultad para centralizar confirmaciones de asistencia y alergias alimentarias.',
    solution: 'Web minimalista con formulario integrado y cuenta atrás, facilitando la organización a los novios.',
  },
  {
    id: 'design-1',
    title: 'Invitación de boda digital o impresa',
    category: 'Diseño',
    image: diseno1,
    description: 'Invitación de boda para imprimir o digital para enviar por WhatsApp',
    problem: 'No sabes cómo llevar a cabo la invitaciones de tu boda.',
    solution: 'Creamos una elegante e interactiva invitación de boda con acceso a tu web para que tus invitados confirme la asistencia y reciban todo tipo de información.',
  },
  {
    id: 'design-2',
    title: 'Parche Militar "Vanguard"',
    category: 'Diseño',
    image: diseno2,
    description: 'Diseño de parche redondo bordado para unidad táctica.',
    problem: 'Necesidad de un emblema que fuera legible en pequeño y representara fuerza.',
    solution: 'Diseño circular minimalista con tipografía robusta y elementos icónicos simplificados.',
  },
  {
    id: 'design-3',
    title: 'Identidad Visual "Terra"',
    category: 'Diseño',
    image: diseno3,
    description: 'Cartel de bienvenida personalizado para bodas con estética elegante y musical.',
    problem: 'Las parejas buscaban una pieza decorativa que reflejara su estilo y diera cohesión a la entrada del evento.',
    solution: 'Diseño sofisticado en tonos oscuros y dorados, con tipografía cuidada y motivos musicales que aportan identidad y calidez desde el primer momento.',
  },
  {
    id: 'design-4',
    title: '',
    category: 'Diseño',
    image: diseno4,
    description: 'Menú ilustrado para la copa de bienvenida de un evento, con estética elegante y botánica.',
    problem: 'Los anfitriones necesitaban presentar la oferta gastronómica de forma clara y atractiva, acorde al estilo de la celebración.',
    solution: 'Diseño refinado con tipografía cuidada e ilustraciones naturales que elevan la experiencia y aportan coherencia visual al evento.',
  },
];

export const WHATSAPP_NUMBER = '34600000000';
export const WHATSAPP_MESSAGE = 'Hola Entredos Digital, me gustaría obtener más información sobre vuestros servicios.';
