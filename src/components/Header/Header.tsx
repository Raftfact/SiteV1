import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <span className="logo-text">Raftfact</span>
          </div>
          <ul className="nav-list">
            <li><a href="#about">Обо мне</a></li>
            <li><a href="#skills">Навыки</a></li>
            <li><a href="#projects">Проекты</a></li>
            <li><a href="#contact">Контакты</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;