export default function SkillsSection() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title" data-aos="fade-up">My Skills</h2>
      <div className="skills-container">
        <div className="skill-category" data-aos="fade-up" data-aos-delay="100">
          <h3>Programming Languages</h3>
          <div className="skill-items">
            <div className="skill-item" data-aos="zoom-in" data-aos-delay="200">
              <i className="fab fa-java"></i>
              <span>Java</span>
            </div>
            <div className="skill-item" data-aos="zoom-in" data-aos-delay="300">
              <i className="fab fa-js"></i>
              <span>JavaScript</span>
            </div>
            <div className="skill-item" data-aos="zoom-in" data-aos-delay="400">
              <i className="fab fa-html5"></i>
              <span>HTML5</span>
            </div>
            <div className="skill-item" data-aos="zoom-in" data-aos-delay="500">
              <i className="fab fa-css3-alt"></i>
              <span>CSS3</span>
            </div>
          </div>
        </div>

        <div className="skill-category" data-aos="fade-up" data-aos-delay="200">
          <h3>Frameworks &amp; Libraries</h3>
          <div className="skill-items">
            <div className="skill-item" data-aos="zoom-in" data-aos-delay="300">
              <i className="fab fa-react"></i>
              <span>React</span>
            </div>
            <div className="skill-item" data-aos="zoom-in" data-aos-delay="400">
              <i className="fas fa-leaf"></i>
              <span>Spring Boot</span>
            </div>
          </div>
        </div>

        <div className="skill-category" data-aos="fade-up" data-aos-delay="300">
          <h3>Databases</h3>
          <div className="skill-items">
            <div className="skill-item" data-aos="zoom-in" data-aos-delay="400">
              <i className="fas fa-database"></i>
              <span>MySQL</span>
            </div>
            <div className="skill-item" data-aos="zoom-in" data-aos-delay="500">
              <i className="fas fa-server"></i>
              <span>SQL Server</span>
            </div>
          </div>
        </div>

        <div className="skill-category" data-aos="fade-up" data-aos-delay="400">
          <h3>Tools &amp; Other</h3>
          <div className="skill-items">
            <div className="skill-item" data-aos="zoom-in" data-aos-delay="500">
              <i className="fab fa-github"></i>
              <span>GitHub</span>
            </div>
            <div className="skill-item" data-aos="zoom-in" data-aos-delay="600">
              <i className="fas fa-code-branch"></i>
              <span>RESTful APIs</span>
            </div>
            <div className="skill-item" data-aos="zoom-in" data-aos-delay="700">
              <i className="fas fa-paper-plane"></i>
              <span>Postman</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
