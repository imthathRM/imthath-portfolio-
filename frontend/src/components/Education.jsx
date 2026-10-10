import { educationInfo } from '../data/portfolioData';

function Education() {
  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Academic Background</span>
          <h2 className="section-title">Education</h2>
          <div className="title-underline"></div>
        </div>

        <div className="education-wrapper">
          <div className="education-card">
            <div className="education-icon-box">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>

            <div className="education-content">
              <div className="education-header">
                <div>
                  <h3 className="education-institution">{educationInfo.institution}</h3>
                  <h4 className="education-faculty">{educationInfo.faculty}</h4>
                </div>
                <span className="education-tag">Undergraduate</span>
              </div>

              <div className="education-field">
                <span className="field-prefix">Field of Study:</span>
                <strong> {educationInfo.field}</strong>
              </div>

              <p className="education-desc">
                {educationInfo.description}
              </p>

              <div className="education-focus-areas">
                <span className="focus-badge">Computer Systems Architecture</span>
                <span className="focus-badge">Data Structures & Algorithms</span>
                <span className="focus-badge">Software Engineering</span>
                <span className="focus-badge">Database Management Systems</span>
                <span className="focus-badge">Artificial Intelligence & ML</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
