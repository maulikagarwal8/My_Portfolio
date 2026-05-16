import MainLayout from "../components/layout/mainlayout";
import { useTypewriter } from "../hooks/useTypewriter";
import Constellation from "../hooks/Constellation";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Credentials from "../components/Credentials";
import Contact from "../components/Contact";
import { ROLES } from "../constants/Constants";
import my_pic_mascot_style from "../assets/my_pic_mascot_style.webp";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const API = import.meta.env.VITE_API_BASE_URL || '';

export default function Home() {
  const displayedRole = useTypewriter(ROLES);

  return (
    <MainLayout>
      <section className="hero-section">
        <Constellation>
          <div className="hero-grid-bg absolute inset-0 pointer-events-none z-0" />
          <div className="gif-content">
            <div className="hero-content">
              <p className="text-mono text-accent animate-fade-up" style={{ animationDelay: '100ms' }}>
                Hi, my name is
              </p>
              <h1 className="text-display hero-title text-heading animate-fade-up" style={{ animationDelay: '200ms', marginBottom: '1rem' }}>
                Maulik Agarwal
              </h1>
              <div className="text-mono text-accent mt-6 flex items-center h-8 animate-fade-up" style={{ animationDelay: '350ms', marginBottom: '1rem' }}>
                <span>{displayedRole}</span>
                <span className="ml-1 inline-block w-[2px] h-[1.1em] bg-accent animate-blink rounded align-middle" />
              </div>

              <p className="max-w-xl text-body mt-6 animate-fade-up" style={{ animationDelay: '400ms' }}>
                Computer Science Engineering student from BIT Mesra Interested in all aspects related to development of Software.
              </p>

              <div className="btn-container">
                <a href={`${API}/api/download/resume/pdf`} download="Maulik_Agarwal_Resume.pdf" 
                  className="btn btn-primary animate-fade-up" style={{ animationDelay: '500ms' }}>
                  Download CV
                </a>
                <a href="#contact" className="btn btn-outline animate-fade-up" style={{ animationDelay: '500ms' }}>
                  Let's Talk
                </a>
              </div>

              <div className="social-links animate-fade-up" style={{ animationDelay: '600ms' }}>
                <a href="https://github.com/maulikagarwal8" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                  <FiGithub size={24} />
                </a>
                <a href="https://linkedin.com/in/maulik-agarwal-039b73297/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                  <FiLinkedin size={24} />
                </a>
                <a href="mailto:maulikagarwal8024@gmail.com" className="social-icon" aria-label="Email">
                  <FiMail size={28} />
                </a>
              </div>
            </div>
            <img src={my_pic_mascot_style} alt="Loading animation" style={{ margin: '0 auto',height:'25rem' }} />
          </div>
        </Constellation>
      </section>
      <About />
      <Skills />
      <Projects />
      <Credentials />
      <Contact />
    </MainLayout>
  );
}