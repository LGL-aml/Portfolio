export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social">
          <a
            href="https://www.facebook.com/lamgia20"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/lamgia/"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/LGL-aml"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div className="copyright">
          <p>&copy; 2025 Lam Gia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
