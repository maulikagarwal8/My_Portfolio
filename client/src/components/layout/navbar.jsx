import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

const API = import.meta.env.VITE_API_BASE_URL || '';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  useEffect(() => {
    if (isDarkMode) {document.documentElement.classList.add('dark');}
    else {document.documentElement.classList.remove('dark');}
  }, [isDarkMode]);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="nav-logo">
          M.A.
        </Link>
        <div className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#credentials" className="nav-link">Credentials</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        <div className="nav-actions">
          <button onClick={() => setIsDarkMode(!isDarkMode)} className="icon-btn" aria-label="Toggle Dark Mode">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a href={`${API}/api/download/resume/pdf`} download="Maulik_Agarwal_Resume.pdf" className="btn btn-primary" 
          style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}>Resume
          </a>
        </div>

        <button className="mobile-toggle" onClick={toggleMenu}>
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />) 
            : (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />)}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="mobile-menu animate-fade-in" style={{ marginLeft: '1rem' }}>
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#skills" onClick={toggleMenu}>Skills</a>
          <a href="#projects" onClick={toggleMenu}>Projects</a>
          <a href="#credentials" onClick={toggleMenu}>Credentials</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>

          <div className="mobile-menu-footer">
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="icon-btn" style={{ fontSize: '1.5rem' }}>
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <a href={`${API}/api/download/resume/pdf`} download onClick={toggleMenu}
              className="btn btn-primary" style={{ fontSize: '0.875rem', marginRight: '3.5rem',padding:'0.5rem 0.5rem' }}>
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;