import { ChevronRight } from 'lucide-react';
import khafidPhoto from '../assets/khafid.png';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-greeting glass">
            <div className="hero-greeting-dot"></div>
            Available for new opportunities
          </div>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
            Hello, I'm <br/><span className="text-gradient">Muhammad Abdul Khafid</span>
          </h1>
          <p className="hero-subtitle">
            With over 2 years of experience in web development, I specialize in building responsive, user-friendly websites and applications from front to back. My passion is turning complex problems into simple, elegant solutions.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work <ChevronRight size={20} />
            </a>
            <a href="#contact" className="btn btn-secondary glass">
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="hero-image-wrapper">
          <div className="hero-image-glass">
            <img src={khafidPhoto} alt="Muhammad Abdul Khafid" className="hero-photo" />
          </div>
          <div className="hero-image-glow"></div>
        </div>
      </div>
    </section>
  );
}
