import { personalInfo } from '../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

function Footer() {

  return (
    <footer className="portfolio-footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-name">{personalInfo.name}</h3>
            <p className="footer-title">{personalInfo.title}</p>
            <p className="footer-inst">{personalInfo.institution}</p>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-nav-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">Connect</h4>
            <ul className="footer-nav-list">
              <li>
                <a
                  href={personalInfo.githubPlaceholder}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub <small className="tag-muted">(Placeholder)</small>
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.linkedinPlaceholder}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn <small className="tag-muted">(Placeholder)</small>
                </a>
              </li>
              <li>
                <a href={`mailto:${personalInfo.emailPlaceholder}`}>
                  Email <small className="tag-muted">(Placeholder)</small>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; {CURRENT_YEAR} {personalInfo.name}. All rights reserved.
          </p>
          <p className="footer-subtext">
            Faculty of Engineering, University of Ruhuna
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
