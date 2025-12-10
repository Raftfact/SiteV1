import React from 'react';
import './About.scss';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>Обо мне</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Я backend-разработчик, специализирующийся на создании масштабируемых и надежных серверных приложений.
            </p>
            <p>
              Работаю с такими технологиями как Node.js, Express, Python, Django, PostgreSQL, MongoDB.
              Интересуюсь архитектурой микросервисов, оптимизацией производительности и облачными технологиями.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;