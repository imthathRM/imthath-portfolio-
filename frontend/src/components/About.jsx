import { personalInfo } from '../data/portfolioData';

function About() {
  const highlights = [
    {
      title: 'Artificial Intelligence & Machine Learning',
      desc: 'Exploring machine learning algorithms, model fundamentals, and their practical application to solve real-world problems.',
    },
    {
      title: 'Software Engineering & System Design',
      desc: 'Focusing on clean code architecture, data structures, algorithm efficiency, and modular development.',
    },
    {
      title: 'Full-Stack & Mobile Development',
      desc: 'Building responsive web interfaces and mobile solutions with practical database backends.',
    },
    {
      title: 'DevOps & Collaborative Workflows',
      desc: 'Practicing Git/GitHub collaboration, structured project management, and deployment fundamentals.',
    },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Background</span>
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-grid">
          <div className="about-narrative-card">
            <h3 className="about-heading">
              Computer Engineering Undergraduate
            </h3>
            <p className="about-text">
              {personalInfo.introduction}
            </p>
            <p className="about-text">
              My engineering journey at the University of Ruhuna is centered on developing a solid foundation in computer systems, algorithms, and practical software creation. I believe in hands-on learning through project development, translating theoretical concepts into functional software applications.
            </p>

            <div className="about-meta-list">
              <div className="meta-item">
                <span className="meta-label">Degree:</span>
                <span className="meta-value">B.Sc. Eng. (Hons) in Computer Engineering (Undergraduate)</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Institution:</span>
                <span className="meta-value">{personalInfo.institution}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Core Focus:</span>
                <span className="meta-value">AI / Machine Learning & Software Engineering</span>
              </div>
            </div>
          </div>

          <div className="about-highlights-col">
            <h3 className="highlights-title">Key Areas of Interest</h3>
            <div className="highlights-stack">
              {highlights.map((item, idx) => (
                <div key={idx} className="highlight-card">
                  <div className="highlight-indicator"></div>
                  <div>
                    <h4 className="highlight-card-title">{item.title}</h4>
                    <p className="highlight-card-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
