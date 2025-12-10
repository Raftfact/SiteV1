import React, { useState, useEffect } from 'react';
import './Projects.scss';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  stars: number;
  language: string;
  updatedAt: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // GitHub username
  const GITHUB_USERNAME = 'Raftfact';

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        setLoading(true);
        
        // Получаем репозитории с GitHub API
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
        );
        
        if (!response.ok) {
          throw new Error('Не удалось загрузить проекты с GitHub');
        }
        
        const repos = await response.json();
        
        // Фильтруем и преобразуем данные
        const formattedProjects: Project[] = repos
          .filter((repo: any) => !repo.fork) // Исключаем форки
          .map((repo: any, index: number) => ({
            id: index + 1,
            title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
            description: repo.description || 'Описание проекта на GitHub',
            technologies: repo.language ? [repo.language] : ['Разное'],
            githubUrl: repo.html_url,
            stars: repo.stargazers_count,
            language: repo.language || 'Other',
            updatedAt: new Date(repo.updated_at).toLocaleDateString('ru-RU')
          }))
          .slice(0, 6); // Берем только 6 последних проектов
        
        setProjects(formattedProjects);
        setError(null);
      } catch (err: any) {
        setError(err.message);
        // Если API не работает, показываем статические проекты
        setProjects(getStaticProjects());
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubProjects();
  }, []);

  // Статические проекты на случай, если GitHub API не доступен
  const getStaticProjects = (): Project[] => [
    {
      id: 1,
      title: 'Заслонка',
      description: '...',
      technologies: ['...'],
      githubUrl: `https://github.com/${GITHUB_USERNAME}`,
      stars: 0,
      language: '...',
      updatedAt: '2025'
    },
  ];

  if (loading) {
    return (
      <section id="projects" className="projects">
        <div className="container">
          <h2>Мои проекты</h2>
          <div className="loading">Загрузка проектов с GitHub...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Мои проекты на GitHub</h2>
        {error && (
          <div className="error-message">
            ⚠️ {error}. Показаны примеры проектов.
          </div>
        )}
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-stats">
                  <span className="stars">⭐ {project.stars}</span>
                  <span className="language">{project.language}</span>
                </div>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-footer">
                <span className="updated">Обновлено: {project.updatedAt}</span>
                <a 
                  href={project.githubUrl} 
                  className="project-link"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  На GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Ссылка на полный профиль GitHub */}
        <div className="github-profile-link">
          <a 
            href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Посмотреть все проекты на GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;