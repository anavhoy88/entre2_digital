export interface Project {
  id: string;
  title: string;
  category: 'Apps' | 'Automatizaciones' | 'Web' | 'Diseño';
  image: string;
  description: string;
  problem: string;
  solution: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}
