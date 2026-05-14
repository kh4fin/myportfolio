import { ExternalLink, GitBranch } from 'lucide-react';
import p1 from '../assets/projects/p1.png';
import p2 from '../assets/projects/p2.png';
import p3 from '../assets/projects/p3.png';
import p4 from '../assets/projects/p4.png';
import p5 from '../assets/projects/p5.png';
import p7 from '../assets/projects/p7.png';
import p8 from '../assets/projects/p8.png';

export default function Projects() {
  const projects = [
    {
      title: 'Ruanghuni',
      description: 'An exclusive lodging landing page featuring a premium aesthetic, integrated WhatsApp reservation system, and a gallery of high-end rooms designed for ultimate tranquility.',
      image: p8,
      tags: ['React', 'CSS', 'Vite'],
      demoLink: '#',
      repoLink: '#'
    },
    {
      title: 'Nginapyuk',
      description: 'A comprehensive multi-property booking platform with property listings, advanced search filters, and detail pages, designed for a seamless travel planning experience.',
      image: p7,
      tags: ['React', 'CSS', 'Vite'],
      demoLink: '#',
      repoLink: '#'
    },
    {
      title: 'POSinAja - Point of Sale',
      description: 'A comprehensive Point of Sale (POS) platform designed to help businesses manage sales, inventory, and financial reports efficiently.',
      image: p1,
      tags: ['React', 'Electron Js'],
      demoLink: '#',
      repoLink: 'https://github.com/kh4fin'
    },
    {
      title: 'Inokode - Company Profile',
      description: 'A professional company profile website for Inokode, showcasing services, portfolio, and contact information with a sleek modern design.',
      image: p2,
      tags: ['HTML', 'CSS', 'JS'],
      demoLink: '#',
      repoLink: 'https://github.com/kh4fin/Elegance'
    },
    {
      title: 'FitLife - Landing Page',
      description: 'A high-conversion landing page for FitLife, a health and fitness companion app designed to track workouts and nutrition goals.',
      image: p3,
      tags: ['HTML', 'CSS', 'JS'],
      demoLink: '#',
      repoLink: '#'
    },
  ];

  return (
    <section id="projects" className="section" style={{ background: 'rgba(15, 23, 42, 0.3)' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
          <p className="section-subtitle">A selection of my recent work in web development</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card glass" key={index}>
              <div className="project-image-wrapper">
                <div className="project-overlay"></div>
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-content">
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  <a href={project.demoLink} className="project-link">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                  <a href={project.repoLink} className="project-link">
                    <GitBranch size={18} /> Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
