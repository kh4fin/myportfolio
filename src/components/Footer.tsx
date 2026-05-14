import { Code2, GitBranch, Briefcase, Camera, Users } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="footer glass">
      <div className="container">
        <div className="footer-content">
          <div className="nav-logo">
            <Code2 className="nav-logo-icon" />
            <span>Khafid<span className="text-gradient">.dev</span></span>
          </div>
          <p className="footer-text">Have a project in mind? Let's work together!</p>
          <div className="social-links">
            <a href="https://github.com/kh4fin" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <GitBranch size={20} />
            </a>
            <a href="https://www.linkedin.com/in/muhammadabdulkh4fid/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <Briefcase size={20} />
            </a>
            <a href="https://www.instagram.com/a_khafid_" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
              <Camera size={20} />
            </a>
            <a href="https://www.facebook.com/khafid.dev" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
              <Users size={20} />
            </a>
          </div>
          <p className="footer-text" style={{ fontSize: '0.8rem', opacity: 0.7, marginTop: '1rem' }}>
            &copy; {new Date().getFullYear()} Muhammad Abdul Khafid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
