import React from 'react';
import './Contact.scss';
import GitHubLogo from '../../images/githublogo.png'
import tgLogo from '../../images/tglogo.png';
import MailLogo from '../../images/maillogo.png'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Контакты</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p>Готов к новым интересным проектам!</p>
            <div className="contact-links">
              <a href="mailto:raftfact@gmail.com" className="contact-link Mail">
                <img src={MailLogo} alt='Telegram Logo' className='con-mail-icon'/>
                Gmail
              </a>
              <a href="https://github.com/raftfact" className="contact-link GitHub" target="_blank" rel="noopener noreferrer">
                <img src={GitHubLogo} alt='GitHub Logo' className='con-github-icon'/>
                GitHub
              </a>
              <a href="https://t.me/raftfactcom" className="contact-link Telegram" target="_blank" rel="noopener noreferrer">
                <img src={tgLogo} alt='Telegram Logo' className='con-telegram-icon'/>
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;