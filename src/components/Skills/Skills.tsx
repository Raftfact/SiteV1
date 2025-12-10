import React from 'react';
import './Skills.scss';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'Python', level: 3, category: 'Backend' },
    { name: 'TypeScript', level: 2, category: 'Frontend' },
    { name: 'Git', level: 3, category: 'Tools' },
    { name: 'Java', level: 1, category: 'Backend' },
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