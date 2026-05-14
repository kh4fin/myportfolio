export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>
        <div className="about-content glass" style={{ padding: '2rem', borderRadius: '16px', maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>I'm a Web Developer</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.8' }}>
            I hold a Bachelor's degree in Computer Science and have worked with various clients from startups to established companies. My approach combines technical expertise with creative problem-solving.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new technologies.
          </p>
        </div>
      </div>
    </section>
  );
}
