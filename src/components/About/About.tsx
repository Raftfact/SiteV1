import React from 'react';
import './About.scss';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className='about-title'>Обо мне</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Я Raftfact начинающий разработчик, специализирующийся на создании разнообразных масштабируемых и надежных проектов.
            </p>
            <p>
              Работаю с такими технологиями как Python, Java.
              Интересуюсь чистым кодом, оптимизацией производительности и созданием инновационных решений.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;