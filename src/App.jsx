import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState('system')

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'system'
    setTheme(saved)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('dark', 'light')
    if (theme === 'dark') root.classList.add('dark')
    if (theme === 'light') root.classList.add('light')
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const skills = [
    'Leadership',
    'Business Strategy',
    'Digital Transformation'
  ]

  const projects = [
    {
      name: 'Ozysa Ltd',
      description: 'E-commerce platform connecting local businesses and customers',
      icon: '🛒',
      url: '#'
    },
    {
      name: 'Marketing Academy',
      description: 'Offline and online courses for business owners',
      icon: '🎓',
      url: '#'
    },
    {
      name: 'Star Face',
      description: 'Creative brand promoting innovation in local markets',
      icon: '⭐',
      url: '#'
    }
  ]

  const nextTheme = () => {
    // cycle: system -> dark -> light -> system
    if (theme === 'system') return setTheme('dark')
    if (theme === 'dark') return setTheme('light')
    return setTheme('system')
  }

  const themeLabel = theme === 'system' ? 'System' : theme === 'dark' ? 'Dark' : 'Light'

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-brand">Shawon Ahmed</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="theme-toggle" onClick={nextTheme} aria-label="Toggle theme">
            <span className="theme-icon" role="img" aria-hidden="true">
              {theme === 'dark' ? '🌙' : theme === 'light' ? '☀️' : '🖥️'}
            </span>
            <span className="theme-text">{themeLabel}</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="avatar">
              <img src="/profile.jpg" alt="Shawon Ahmed" />
            </div>
            <h1 className="hero-title">Shawon Ahmed</h1>
            <p className="hero-subtitle">Chairman of Ozysa Ltd</p>
            <p className="hero-description">
              Software Engineering Student | Business Leader | Digital Innovator
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
              <a href="#projects" className="btn btn-secondary">View Projects</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I am Shawon Ahmed, the Chairman of Ozysa Ltd, currently pursuing 
                my Bachelor of Science in Software Engineering at Daffodil International University.
              </p>
              <p>
                With a passion for business leadership and digital transformation, 
                I combine technical expertise with strategic vision to drive innovation 
                and growth in the business world.
              </p>
              <div className="education">
                <h3>Education</h3>
                <p><strong>BSc in Software Engineering</strong></p>
                <p>Daffodil International University</p>
              </div>
              <div className="position">
                <h3>Current Position</h3>
                <p><strong>Chairman</strong> - Ozysa Ltd</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => {
              const icons = ['👔', '📊', '🚀'];
              return (
                <div key={index} className="skill-card">
                  <div style={{fontSize: '3rem', marginBottom: '1rem'}}>{icons[index]}</div>
                  <h3>{skill}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <a key={index} className="project-card" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name}`}>
                <div style={{fontSize: '3rem', marginBottom: '1rem', display: 'inline-block'}}>{project.icon}</div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <p className="contact-intro">
              I'm always open to discussing new opportunities, innovative projects, 
              or potential collaborations. Feel free to reach out!
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <a href="mailto:shawon00650@gmail.com">shawon00650@gmail.com</a>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <a href="tel:+8801891484334">+880 1891-484334</a>
              </div>
            </div>
            <div className="social-links">
              <a 
                href="https://www.linkedin.com/in/shawon06" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link linkedin"
              >
                <span>🔗</span> LinkedIn
              </a>
              <a 
                href="https://www.facebook.com/ShawonKompany" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link facebook"
              >
                <span>👥</span> Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Shawon Ahmed. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
