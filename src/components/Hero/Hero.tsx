import React from 'react';
import './Hero.scss';
import tgLogo from '../../images/tglogo.png';
import GitHubLogo from '../../images/githublogo.png'

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
          <div className="hero-actions">
            <div className="hero-buttons">
              <a href="#skills" className="btn btn-primary">
                Мои навыки
              </a>
              <a href="#projects" className="btn btn-secondary">
                Мои проекты
              </a>
            </div>
            <div className="hero-contacts">
              <a href='https://t.me/raftfactcom' className='btn btn-telegram'>
                <img src={tgLogo} alt='Telegram Logo' className='telegram-icon'/>
              </a>
              <a href='https://github.com/Raftfact' className='btn btn-github'>
                <img src={GitHubLogo} alt='GitHub Logo' className='github-icon'/>
              </a>
            </div>
          <div/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;