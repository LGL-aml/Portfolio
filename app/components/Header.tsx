'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { ToggleTheme } from './lightswind/toggle-theme'



const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [menuActive, setMenuActive] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const menuActiveRef = useRef(menuActive)

  useEffect(() => {
    menuActiveRef.current = menuActive
  }, [menuActive])

  const closeMenu = useCallback(() => {
    setMenuActive(false)
    document.body.style.overflow = ''
  }, [])

  const toggleMenu = () => {
    const next = !menuActive
    setMenuActive(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      window.scrollTo({
        top: (target as HTMLElement).offsetTop - 80,
        behavior: 'smooth',
      })
    }
    setActiveSection(href.slice(1))
    closeMenu()
  }

  const updateActiveMenu = useCallback(() => {
    const scrollY = window.scrollY + 120
    const sections = document.querySelectorAll('section')
    let current = 'home'
    sections.forEach((section) => {
      const top = section.offsetTop
      const height = section.offsetHeight
      if (scrollY >= top && scrollY < top + height) {
        current = section.getAttribute('id') || 'home'
      }
    })
    setActiveSection(current)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      updateActiveMenu()
      setScrolled(window.scrollY > 50)
      if (menuActiveRef.current) {
        closeMenu()
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [updateActiveMenu, closeMenu])

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <nav className="navbar">
        <a
          href="#home"
          className="logo"
          onClick={(e) => handleNavClick(e, '#home')}
        >
          Lam Gia
        </a>
        <div
          className={`menu-btn ${menuActive ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={activeSection === link.href.slice(1) ? 'active' : ''}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="flex items-center ml-4">
            <ToggleTheme animationType="diag-down-right" />
          </li>
        </ul>
      </nav>
    </header>
  )
}
