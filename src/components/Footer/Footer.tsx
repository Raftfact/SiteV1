import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>© {currentYear} Raftfact. Все права защищены.</p>
          <p className="footer-note">Сделано с ❤️ на React + TypeScript</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;