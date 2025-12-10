import React from 'react';
import './Hero.scss';

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
          <div className="ico-buttons">
            <a href="https://github.com/Raftfact" className='ico btn-primary'>
              <img src='github.png'></img> 
            </a>
            <a>

            </a>
            <a>

            </a>
            <a>
              
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;