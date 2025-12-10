import React from 'react';
import './Projects.scss';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'REST API для блога',
      description: 'Полнофункциональное API с аутентификацией, CRUD операциями для постов и комментариев',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      githubUrl: 'https://github.com/yourusername/blog-api'
    },
    {
      id: 2,
      title: 'Микросервис уведомлений',
      description: 'Сервис для отправки email и push уведомлений с очередью сообщений',
      technologies: ['Python', 'FastAPI', 'Redis', 'Celery'],
      githubUrl: 'https://github.com/yourusername/notification-service'
    },
    {
      id: 3,
      title: 'Аналитика данных',
      description: 'Сервис для обработки и анализа больших объемов данных с визуализацией',
      technologies: ['Python', 'Pandas', 'PostgreSQL', 'Docker'],
      githubUrl: 'https://github.com/yourusername/data-analytics'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Мои проекты</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a 
                href={project.githubUrl} 
                className="project-link"
                target="_blank" 
                rel="noopener noreferrer"
              >
                GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;