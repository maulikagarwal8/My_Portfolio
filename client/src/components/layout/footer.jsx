import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-socials">
          <a href="https://github.com/maulikagarwal8" target="_blank" rel="noopener noreferrer" className="social-icon"
            aria-label="GitHub">
            <FiGithub size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn" >
            <FiLinkedin size={20} />
          </a>
          <a href="mailto:maulikagarwal8024@gmail.com" className="social-icon" aria-label="Email">
            <FiMail size={20} />
          </a>
        </div>
        <div className="footer-text-group">
          <p className="text-muted">
            Maulik Agarwal's Portfolio
          </p>
          <p className="text-muted" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            Built with <FiHeart className="heart-pulse" size={15} /> using MERN stack
          </p>
        </div>
      </div>
    </footer>
  );
}