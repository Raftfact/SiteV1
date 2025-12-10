import React from 'react';
import './Contact.scss';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Контакты</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p>Готов к новым вызовам и интересным проектам!</p>
            <div className="contact-links">
              <a href="mailto:your.email@example.com" className="contact-link">
                📧 your.email@example.com
              </a>
              <a href="https://github.com/yourusername" className="contact-link" target="_blank" rel="noopener noreferrer">
                💻 GitHub
              </a>
              <a href="https://linkedin.com/in/yourusername" className="contact-link" target="_blank" rel="noopener noreferrer">
                🔗 LinkedIn
              </a>
              <a href="https://t.me/yourusername" className="contact-link" target="_blank" rel="noopener noreferrer">
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