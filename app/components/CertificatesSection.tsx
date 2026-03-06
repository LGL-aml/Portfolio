export default function CertificatesSection() {
  return (
    <section id="certificates" className="certificates-section">
      <div className="section-title">
        <h2>Achievements &amp; Certificates</h2>
      </div>
      <div className="certificates-container">
        {/* Certificate 1 */}
        <div className="certificate-card" data-aos="fade-up">
          <div className="certificate-image">
            <img src="/imgSrc/hst.png" alt="Certificate 1" />
            <div className="certificate-overlay">
              <a href="#" className="view-certificate">
                <i className="fas fa-external-link-alt"></i>
                View Certificate
              </a>
            </div>
          </div>
          <div className="certificate-content">
            <h3>Honorable Student</h3>
            <p>Honorable Student Of Trimester 2025 Spring</p>
            <div className="certificate-meta">
              <span>
                <i className="fas fa-calendar"></i> April 2025
              </span>
            </div>
          </div>
        </div>

        {/* Certificate 2 */}
        <div className="certificate-card" data-aos="fade-up" data-aos-delay="100">
          <div className="certificate-image">
            <img src="/imgSrc/csr1.png" alt="Certificate 2" />
            <div className="certificate-overlay">
              <a
                href="https://coursera.org/share/97a925c3b96334da6e30e87bf626e565"
                className="view-certificate"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-external-link-alt"></i>
                View Certificate
              </a>
            </div>
          </div>
          <div className="certificate-content">
            <h3>Amazon Junior Software Developer</h3>
            <p>Java Web Full-Stack (Java, HTML/CSS)</p>
            <div className="certificate-meta">
              <span>
                <i className="fas fa-calendar"></i> January 2025
              </span>
            </div>
          </div>
        </div>

        {/* Certificate 3 */}
        <div className="certificate-card" data-aos="fade-up" data-aos-delay="200">
          <div className="certificate-image">
            <img src="/imgSrc/csr2.png" alt="Certificate 3" />
            <div className="certificate-overlay">
              <a
                href="https://coursera.org/share/75309687663a6c5f39bc768f33ff3b11"
                className="view-certificate"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-external-link-alt"></i>
                View Certificate
              </a>
            </div>
          </div>
          <div className="certificate-content">
            <h3>Software Development Lifecycle</h3>
            <p>Software Development Process – Agile, SDLC, DevOps</p>
            <div className="certificate-meta">
              <span>
                <i className="fas fa-calendar"></i> January 2025
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
