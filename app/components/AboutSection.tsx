export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="section-title">
        <h2>About Me</h2>
      </div>
      <div className="about-container">
        <div className="about-image-container" data-aos="fade-right">
          <div className="about-image">
            <img src="/imgSrc/avtlg.png" alt="About Me" />
          </div>
          <div className="image-shape"></div>
        </div>

        <div className="about-content" data-aos="fade-left" data-aos-delay="200">
          <div className="about-text-container">
            <div className="about-card">
              <h3 className="about-subtitle">Who am I?</h3>
              <p className="about-description">
                A passionate Back-End Developer with a strong foundation in software
                engineering and a love for creating efficient, scalable solutions. I
                believe in writing clean code and implementing best practices to
                deliver high-quality applications.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-item" data-aos="zoom-in" data-aos-delay="300">
                <span className="stat-number">3.5</span>
                <span className="stat-label">GPA</span>
              </div>
              <div className="stat-item" data-aos="zoom-in" data-aos-delay="400">
                <span className="stat-number">3+</span>
                <span className="stat-label">Academic Projects</span>
              </div>
              <div className="stat-item" data-aos="zoom-in" data-aos-delay="500">
                <span className="stat-number">3+</span>
                <span className="stat-label">Certifications</span>
              </div>
            </div>

            <div className="about-details">
              <div className="detail-item" data-aos="fade-up" data-aos-delay="300">
                <i className="fas fa-graduation-cap"></i>
                <div className="detail-content">
                  <h4>Education</h4>
                  <p>Software Engineering student at FPT University</p>
                </div>
              </div>
              <div className="detail-item" data-aos="fade-up" data-aos-delay="400">
                <i className="fas fa-briefcase"></i>
                <div className="detail-content">
                  <h4>Current Role</h4>
                  <p>Back-End Developer</p>
                </div>
              </div>
              <div className="detail-item" data-aos="fade-up" data-aos-delay="500">
                <i className="fas fa-code"></i>
                <div className="detail-content">
                  <h4>Expertise</h4>
                  <p>Java, Spring Boot, RESTful APIs</p>
                </div>
              </div>
            </div>

            <div className="about-buttons">
              <a href="#contact" className="cta-button about-cta">
                <span>Get In Touch</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
