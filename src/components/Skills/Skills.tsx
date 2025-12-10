import React from 'react';
import './Skills.scss';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'Node.js', level: 4, category: 'Backend' },
    { name: 'Python', level: 4, category: 'Backend' },
    { name: 'TypeScript', level: 3, category: 'Frontend' },
    { name: 'PostgreSQL', level: 3, category: 'Database' },
    { name: 'MongoDB', level: 3, category: 'Database' },
    { name: 'Docker', level: 3, category: 'DevOps' },
    { name: 'Git', level: 4, category: 'Tools' },
    { name: 'REST API', level: 4, category: 'Backend' },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Навыки</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <h3>{skill.name}</h3>
                <span className="skill-category">{skill.category}</span>
              </div>
              <div className="skill-level">
                <div 
                  className="skill-bar" 
                  style={{ width: `${skill.level * 20}%` }}
                ></div>
              </div>
              <div className="skill-rating">{skill.level}/5</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;