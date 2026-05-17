import { Download } from 'lucide-react';
import cvPdf from '../assets/CV_ATS_MUHAMMAD_ABDUL_KHAFID_1.pdf';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>
        <div className="about-content glass" style={{ padding: '2rem', borderRadius: '16px', maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>I'm a Software Developer</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.2rem', lineHeight: '1.8' }}>
            I am a Software Developer and Informatics Engineering student with hands-on experience in
            building scalable web and desktop applications. I specialize in full-stack development and
            Artificial Intelligence, specifically Computer Vision.
          </p>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.8' }}>
            I have a proven ability to handle complex R&D projects, including real-time object detection
            and person re-identification systems. I am passionate about creating user-centric solutions
            and continuously mastering modern technologies like React, Laravel, and Python.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a href={cvPdf} download="CV_ATS_MUHAMMAD_ABDUL_KHAFID_1.pdf" className="btn btn-primary">
              <Download size={20} /> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
