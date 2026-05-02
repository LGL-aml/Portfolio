'use client'

import { useState, useEffect, useRef } from 'react'

export default function HomeSection() {
  const [displayText, setDisplayText] = useState('')
  const [roleText, setRoleText] = useState('Back-End Developer')
  const [roleFading, setRoleFading] = useState(false)
  const wordIndexRef = useRef(0)
  const charIndexRef = useRef(0)
  const isDeletingRef = useRef(false)
  const roleIndexRef = useRef(0)

  // Greeting typing effect
  useEffect(() => {
    const words = ["Welcome to my portfolio", "I'm a Back-End Developer", "I love coding"]
    let timeoutId: ReturnType<typeof setTimeout>

    const type = () => {
      const currentWord = words[wordIndexRef.current]

      if (isDeletingRef.current) {
        charIndexRef.current--
        setDisplayText(currentWord.substring(0, charIndexRef.current))
      } else {
        charIndexRef.current++
        setDisplayText(currentWord.substring(0, charIndexRef.current))
      }

      let typingSpeed = 200

      if (!isDeletingRef.current && charIndexRef.current === currentWord.length) {
        typingSpeed = 2000
        timeoutId = setTimeout(() => {
          isDeletingRef.current = true
          timeoutId = setTimeout(type, 100)
        }, 2000)
        return
      } else if (isDeletingRef.current && charIndexRef.current === 0) {
        isDeletingRef.current = false
        wordIndexRef.current = (wordIndexRef.current + 1) % words.length
        typingSpeed = 200
      } else if (isDeletingRef.current) {
        typingSpeed = 100
      }

      timeoutId = setTimeout(type, typingSpeed)
    }

    timeoutId = setTimeout(type, 200)
    return () => clearTimeout(timeoutId)
  }, [])

  // Role fade-in/out effect
  useEffect(() => {
    const roles = ["Back-End Developer", "Full-Stack Developer"]

    const intervalId = setInterval(() => {
      // Fade out
      setRoleFading(true)

      setTimeout(() => {
        // Switch text while invisible
        roleIndexRef.current = (roleIndexRef.current + 1) % roles.length
        setRoleText(roles[roleIndexRef.current])
        // Fade in
        setRoleFading(false)
      }, 600) // match CSS transition duration
    }, 4000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-content">
          <h3 className="greeting animate-text">
            <span className="typing-text">{displayText}</span>
            <span className="typing-cursor">|</span>
          </h3>
          <h1 className="name animate-text">
            <span className="name-prefix">Hi, I&apos;m</span>{' '}
            <span className="highlight">Lam Gia</span>
          </h1>
          <h2 className="role animate-text-delay">
            <span className={`role-fade ${roleFading ? 'fade-out' : 'fade-in'}`}>{roleText}</span>
          </h2>
          <p className="bio animate-text-delay">
            Passionate about creating efficient and scalable backend solutions with
            expertise in Java, Spring Boot, and database management.
          </p>

          <div className="social-links animate-text-delay">
            <a
              href="https://www.facebook.com/lamgia20"
              className="social-link glow-effect"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/lamgia/"
              className="social-link glow-effect"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/LGL-aml"
              className="social-link glow-effect"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>

          <a href="#about" className="cta-button glow-effect animate-text-delay">
            More About Me
          </a>
        </div>
        <div className="profile-container animate-text">
          <div className="profile-image">
            <img src="/imgSrc/me2.png" alt="Lam Gia" />
          </div>
          <div className="profile-ring"></div>
          <div className="profile-glow"></div>
        </div>
      </div>
    </section>
  )
}
