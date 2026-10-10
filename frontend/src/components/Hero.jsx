import { personalInfo } from '../data/portfolioData';

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-glow-bg" aria-hidden="true"></div>
      <div className="container hero-container">
        <div className="hero-badge">
          <span className="pulse-dot"></span>
          <span>Faculty of Engineering, University of Ruhuna</span>
        </div>

        <h1 className="hero-name">
          {personalInfo.name}
        </h1>

        <h2 className="hero-title">
          <span className="accent-text">{personalInfo.title}</span>
        </h2>

        <p className="hero-intro">
          {personalInfo.introduction}
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View My Projects
            <svg
              className="btn-icon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </a>

          <a href="#contact" className="btn btn-outline">
            Contact Me
            <svg
              className="btn-icon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>

        <div className="hero-socials">
          <span className="social-label">Connect:</span>
          <a
            href={personalInfo.githubPlaceholder}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title="GitHub Profile (Placeholder)"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <span>GitHub <small className="tag-muted">(Placeholder)</small></span>
          </a>

          <a
            href={personalInfo.linkedinPlaceholder}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title="LinkedIn Profile (Placeholder)"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <span>LinkedIn <small className="tag-muted">(Placeholder)</small></span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
