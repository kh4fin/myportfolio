import { 
  Code2, 
  Terminal, 
  Database, 
  Layout, 
  Wrench
} from 'lucide-react';

export default function Skills() {
  const skills = [
    { name: 'Web Development (HTML5, CSS3, JS/TS, Tailwind, React, Laravel, PHP)', icon: <Layout size={20} /> },
    { name: 'Languages (JavaScript, TypeScript, Python, PHP)', icon: <Code2 size={20} /> },
    { name: 'Backend & APIs (Node.js, Express, Laravel, Codeigniter, Django)', icon: <Terminal size={20} /> },
    { name: 'Databases (MySQL, MongoDB, PostgreSQL, SQLite)', icon: <Database size={20} /> },
    { name: 'Tools (Git, VS Code, Figma, Canva, Command Line)', icon: <Wrench size={20} /> },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My <span className="text-gradient">Skills</span></h2>
          <p className="section-subtitle">Technologies and tools I use to build digital solutions</p>
        </div>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-pill glass">
              <span className="skill-icon">{skill.icon}</span>
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
