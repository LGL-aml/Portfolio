'use client'

import { useState, useRef } from 'react'

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbyw79Zcv7Fen5_fDLjtNalsbAk6aCRuN-k3V-_63bxNjLkOC5VqRelotVtuK8Gx4iRxrA/exec'

export default function ContactSection() {
  const [showPopup, setShowPopup] = useState(false)
  const [loading, setLoading] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return

    setLoading(true)
    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: new FormData(formRef.current),
      })
      setShowPopup(true)
      formRef.current.reset()
      setTimeout(() => setShowPopup(false), 3000)
    } catch {
      alert('There was an error. Please try again!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div
            className="contact-info-side"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2>Contact Me</h2>
            <p className="contact-subtitle">
              Let&apos;s work together! Feel free to reach out to me.
            </p>

            <div className="contact-details">
              <div className="contact-item" data-aos="fade-up" data-aos-delay="200">
                <i className="fas fa-envelope"></i>
                <div className="item-info">
                  <h3>Email</h3>
                  <p>laml33366@gmail.com</p>
                </div>
              </div>

              <div className="contact-item" data-aos="fade-up" data-aos-delay="300">
                <i className="fas fa-phone"></i>
                <div className="item-info">
                  <h3>Phone</h3>
                  <p>098 152 7076</p>
                </div>
              </div>
            </div>

            <div className="contact-social" data-aos="fade-up" data-aos-delay="400">
              <h3>Connect With Me</h3>
              <div className="social-links">
                <a
                  href="https://www.facebook.com/lamgia20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link glow-effect"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-link glow-effect">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-link glow-effect">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>

            <a
              href="/pdfSrc/SE181852_LUONGGIALAM.pdf"
              className="cv-button"
              download
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <i className="fas fa-download"></i>
              Download CV
            </a>
          </div>

          <div
            className="contact-form-side"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <form ref={formRef} name="submit-to-google-sheet" onSubmit={handleSubmit}>
              <div className="form-group" data-aos="fade-up" data-aos-delay="200">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="Name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group" data-aos="fade-up" data-aos-delay="300">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="Email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group" data-aos="fade-up" data-aos-delay="400">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="Message"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={`submit-button ${loading ? 'loading' : ''}`}
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <span>Send Message</span>
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Success Popup */}
      <div
        className={`success-popup ${showPopup ? 'show' : ''}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setShowPopup(false)
        }}
      >
        <div className="popup-content">
          <div className="popup-icon">
            <i className="fas fa-check-circle"></i>
          </div>
          <h3>Message Sent!</h3>
          <p>Thank you for reaching out. I&apos;ll get back to you soon!</p>
        </div>
      </div>
    </>
  )
}
