export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  image?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'backend' | 'frontend' | 'tools' | 'database';
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string[];
}