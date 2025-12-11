import React from 'react';
import './Contact.scss';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Контакты</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p>Готов к новым интересным проектам!</p>
            <div className="contact-links">
              <a href="mailto:raftfact@gmail.com" className="contact-link">
                📧 raftfact@gmail.com
              </a>
              <a href="https://github.com/raftfact" className="contact-link" target="_blank" rel="noopener noreferrer">
                💻 GitHub
              </a>
              <a href="https://t.me/raftfactcom" className="contact-link" target="_blank" rel="noopener noreferrer">
                📱 Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;