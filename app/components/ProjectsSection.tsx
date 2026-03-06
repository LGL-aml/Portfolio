export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title" data-aos="fade-up">My Projects</h2>
      <div className="projects-grid">
        {/* Project 1 - DUPSS */}
        <div className="project-card" data-aos="fade-up" data-aos-delay="100">
          <div className="project-image" data-aos="zoom-in" data-aos-delay="200">
            <img src="/imgSrc/dupssImg.png" alt="Project 1" />
          </div>
          <div className="project-info">
            <h3>Drug Use Prevention Support System</h3>

            <div className="project-details">
              <div className="project-detail-item" data-aos="fade-up" data-aos-delay="300">
                <div className="project-detail-icon">
                  <i className="fas fa-info-circle"></i>
                </div>
                <div className="project-detail-content">
                  <div className="project-detail-title">Description</div>
                  <div className="project-detail-text">
                    A web-based system supporting drug prevention in the community
                    through online courses, risk assessments, and expert
                    consultations
                  </div>
                </div>
              </div>

              <div className="project-detail-item" data-aos="fade-up" data-aos-delay="400">
                <div className="project-detail-icon">
                  <i className="fas fa-user-tie"></i>
                </div>
                <div className="project-detail-content">
                  <div className="project-detail-title">Role</div>
                  <div className="project-detail-text">
                    Back-End Developer &amp; Project Lead
                  </div>
                </div>
              </div>

              <div className="project-detail-item" data-aos="fade-up" data-aos-delay="500">
                <div className="project-detail-icon">
                  <i className="fas fa-code"></i>
                </div>
                <div className="project-detail-content">
                  <div className="project-detail-title">Tech Stack</div>
                  <div className="project-detail-text">
                    React, Spring Boot, MySQL, RESTful APIs, JWT Authentication
                  </div>
                </div>
              </div>

              <div className="project-detail-item" data-aos="fade-up" data-aos-delay="600">
                <div className="project-detail-icon">
                  <i className="fas fa-bullseye"></i>
                </div>
                <div className="project-detail-content">
                  <div className="project-detail-title">Purpose</div>
                  <div className="project-detail-text">
                    Provide an educational platform for drug prevention and support
                    community health initiatives
                  </div>
                </div>
              </div>
            </div>

            <div className="project-links" data-aos="fade-up" data-aos-delay="700">
              <a
                href="https://dupssapp.id.vn"
                className="project-link view-project"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-external-link-alt"></i>
                View Project
              </a>
              <a
                href="https://github.com/LGL-aml/DUPSS-SWP391"
                className="project-link github-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 - Code Learn */}
        <div className="project-card" data-aos="fade-up" data-aos-delay="200">
          <div className="project-image" data-aos="zoom-in" data-aos-delay="300">
            <img src="/imgSrc/course_cover.png" alt="Project 2" />
          </div>
          <div className="project-info">
            <h3>Code Learn</h3>

            <div className="project-details">
              <div className="project-detail-item" data-aos="fade-up" data-aos-delay="300">
                <div className="project-detail-icon">
                  <i className="fas fa-info-circle"></i>
                </div>
                <div className="project-detail-content">
                  <div className="project-detail-title">Description</div>
                  <div className="project-detail-text">
                    A web platform offering free programming courses through video
                    lessons and certification features.
                  </div>
                </div>
              </div>

              <div className="project-detail-item" data-aos="fade-up" data-aos-delay="400">
                <div className="project-detail-icon">
                  <i className="fas fa-user-tie"></i>
                </div>
                <div className="project-detail-content">
                  <div className="project-detail-title">Role</div>
                  <div className="project-detail-text">Backend Developer</div>
                </div>
              </div>

              <div className="project-detail-item" data-aos="fade-up" data-aos-delay="500">
                <div className="project-detail-icon">
                  <i className="fas fa-code"></i>
                </div>
                <div className="project-detail-content">
                  <div className="project-detail-title">Tech Stack</div>
                  <div className="project-detail-text">
                    React, Spring Boot, MySQL, RESTful APIs, JWT Authentication
                  </div>
                </div>
              </div>

              <div className="project-detail-item" data-aos="fade-up" data-aos-delay="600">
                <div className="project-detail-icon">
                  <i className="fas fa-bullseye"></i>
                </div>
                <div className="project-detail-content">
                  <div className="project-detail-title">Purpose</div>
                  <div className="project-detail-text">
                    To provide free, beginner-friendly programming courses through
                    video lessons and certifications.
                  </div>
                </div>
              </div>
            </div>

            <div className="project-links" data-aos="fade-up" data-aos-delay="700">
              <a
                href="https://github.com/LGL-aml/CodeLearnApp"
                className="project-link view-project"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-external-link-alt"></i>
                View Project
              </a>
              <a
                href="https://github.com/LGL-aml/CodeLearnApp"
                className="project-link github-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 - Bluetooth LED */}
        <div className="project-card" data-aos="fade-up" data-aos-delay="300">
          <div className="project-image" data-aos="zoom-in" data-aos-delay="400">
            <img src="/imgSrc/ledbluetooth.png" alt="Project 3" />
          </div>
          <div className="project-info">
            <h3>Bluetooth-Controlled RGB LED Strip</h3>

            <div className="project-details">
              <div className="project-detail-item" data-aos="fade-up" data-aos-delay="300">
                <div className="project-detail-icon">
                  <i className="fas fa-info-circle"></i>
                </div>
                <div className="project-detail-content">
                  <div className="project-detail-title">Description</div>
                  <div className="project-detail-text">
                    A Bluetooth-controlled RGB LED system that reacts to sound and
                    light intensity, allowing users to customize lighting effects in
                    real time via a mobile app.
                  </div>
                </div>
              </div>

              <div className="project-detail-item" data-aos="fade-up" data-aos-delay="400">
                <div className="project-detail-icon">
                  <i className="fas fa-user-tie"></i>
                </div>
                <div className="project-detail-content">
                  <div className="project-detail-title">Role</div>
                  <div className="project-detail-text">
                    IoT Developer &amp; System Architect
                  </div>
                </div>
              </div>

              <div className="project-detail-item" data-aos="fade-up" data-aos-delay="500">
                <div className="project-detail-icon">
                  <i className="fas fa-code"></i>
                </div>
                <div className="project-detail-content">
                  <div className="project-detail-title">Tech Stack</div>
                  <div className="project-detail-text">
                    Arduino, Bluetooth Module HC-05, MIT App, RGB LED Strip
                  </div>
                </div>
              </div>

              <div className="project-detail-item" data-aos="fade-up" data-aos-delay="600">
                <div className="project-detail-icon">
                  <i className="fas fa-bullseye"></i>
                </div>
                <div className="project-detail-content">
                  <div className="project-detail-title">Purpose</div>
                  <div className="project-detail-text">
                    Create a smart lighting system controlled via mobile app with
                    custom color patterns and animations
                  </div>
                </div>
              </div>
            </div>

            <div className="project-links" data-aos="fade-up" data-aos-delay="700">
              <a
                href="https://www.youtube.com/watch?v=1bQMfavB2wk"
                className="project-link view-project"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-external-link-alt"></i>
                View Project
              </a>
              <a
                href="https://github.com/LGL-aml/Bluetooth-Controlled-RGB-LED-Strip"
                className="project-link github-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
