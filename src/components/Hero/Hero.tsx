import React from 'react';
import './Hero.scss';

import githubIcon from './src/assets/github.png';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Привет, я <span className="highlight">Raftfact</span>
          </h1>
          <p className="hero-subtitle">
            Начинающий разработчик.
          </p>
          <p>
            
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              Посмотреть проекты
            </a>
            <a href="#contact" className="btn btn-secondary">
              Связаться со мной
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;