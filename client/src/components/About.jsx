import { MapPin, Mail, Download } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { TECHNICAL_INTERESTS } from '../constants/Constants';
import my_pic_sketch_style from "../assets/my_pic_sketch_style.webp";
import HintBox from '../hooks/ArrowHint';

const API = import.meta.env.VITE_API_BASE_URL || '';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container-6xl">
        <div className="section-header animate-fade-up">
          <h1 className="title-large">About Me</h1>
          <div className="header-line" />
        </div>

        <div className="about-grid">
          <div className="profile-col profile-card animate-fade-up" style={{ animationDelay: '100ms' }}>
            <div className="profile-img-wrapper">
              <img style={{ width: '100%', height: '100%', objectFit: 'cover'}}
                src={my_pic_sketch_style} alt="profile_pic"/>
            </div>

            <div className="text-center">
              <h2 className="text-heading" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Maulik Agarwal</h2>
              <p className="text-mono text-accent" style={{ fontSize: '0.875rem' }}>Software Development Engineer</p>
            </div>

            <div className="info-row" style={{ justifyContent: 'space-between' }}>
              <a href="mailto:maulikagarwal8024@gmail.com" className="social-icon" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', textDecoration: 'none' }}>
                <Mail size={15} /> <span style={{ marginLeft: '0.2rem', fontSize: '1rem' }}>maulikagarwal8024@gmail.com</span>
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <MapPin size={15} /> <span style={{ fontSize: '1rem' }}>Jaipur, India</span>
              </div>
            </div>
            <div className="info-row">
              <a href="https://github.com/maulikagarwal8" target='_blank' style={{ textDecoration: 'none', color: 'var(--color-text-body)', alignItems: 'center', gap: '0.8rem' }}>
                <FiGithub size={15} /> <span>maulikagarwal8</span>
              </a>
            </div>

            <div className="btn-container" style={{ width: '100%', marginTop: '0' }}>
              <a href={`${API}/api/download/resume/pdf`} download className="btn btn-primary" style={{ width: '100%', fontSize: '0.9rem' }}>
                Resume (PDF)<Download size={12} style={{ marginLeft: '0.5rem', alignItems: 'center', justifyContent: 'center' }} />
              </a>
              <a href={`${API}/api/download/resume/docx`} download className="btn btn-outline" style={{ width: '100%', fontSize: '0.9rem' }}>
                Resume (Word)<Download size={12} style={{ marginLeft: '0.5rem', alignItems: 'center', justifyContent: 'center' }} />
              </a>
            </div>
          </div>
          <HintBox text="Click to Download" side="bottom-right"></HintBox>

          <div className="content-col animate-fade-up" style={{ animationDelay: '200ms', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="text-body" style={{ lineHeight: '1.6', fontSize: '1rem' }}>
              <p>A passionate Computer Science Engineering student from Birla Institute of Technology Mesra Interested in all aspects related to development of software! My expertise includes Web Development , AI/ML , Data Engineering.</p>
              <p style={{ marginTop: '1.25rem' }}>I'm currently strengthening my skills in problem-solving and deepening my knowledge while exploring tech domain .</p>
            </div>
            <div className='card-top' style={{ justifyContent: 'space-evenly' }}>
              <div className="tech-focus-card">
                <h3 className="text-heading" style={{ marginBottom: '1rem', fontWeight: 'bold', fontSize: '1.3rem' }}>Technical Focus</h3>
                <div>
                  {TECHNICAL_INTERESTS.map((item) => (
                    <div key={item.area} className="interest-item">
                      <h4 className="interest-label">{item.area}</h4>
                      <p className="text-heading" style={{ fontSize: '1rem', fontWeight: '500' }}>{item.skills}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="tech-focus-card">
                <h3 className="text-heading" style={{marginBottom:'1rem',fontWeight:'bold',fontSize:'1.3rem'}}>Non Technical Focus</h3>
                <div>
                  <div className='interest-item'>
                    <h4 className="interest-label">Gaming</h4>
                    <p className="text-heading" style={{ fontSize:'1.5rem',fontWeight:'500'}}>🏓👾🎮🎲🎳⚽</p>
                  </div>
                  <div className='interest-item'>
                    <h4 className="interest-label">Reading</h4>
                    <p className="text-heading" style={{ fontSize:'1.5rem',fontWeight:'500'}}>📔📖</p>
                  </div>
                  <div className='interest-item'>
                    <h4 className="interest-label">Watching</h4>
                    <p className="text-heading" style={{ fontSize:'1.5rem',fontWeight:'500'}}>📺🎥🎭</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}