import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import SkillDetail from './pages/SkillDetail'
import SplashScreen from './components/SplashScreen'
import supabase from './supabaseClient'

const i18n = {
  en: {
    nav: { home: 'Home', about: 'About', skills: 'Skills', projects: 'Projects', contact: 'Contact' },
    title: 'Md Shawon Ahmed',
    subtitle: 'Chairman of Ozysa Ltd',
    intro: 'Software Engineering Student | Business Leader | Digital Innovator',
    getInTouch: 'Get In Touch',
    viewProjects: 'View Projects',
    aboutMe: 'About Me',
    eduTitle: 'Education',
    degree: 'BSc in Software Engineering',
    university: 'Daffodil International University',
    positionTitle: 'Current Position',
    chairman: 'Chairman',
    skillsTitle: 'Skills',
    projectsTitle: 'Projects',
    contactTitle: 'Get In Touch',
    contactIntro: "I'm always open to discussing new opportunities, innovative projects, or potential collaborations. Feel free to reach out!",
    live: 'Live'
  },
  bn: {
    nav: { home: 'হোম', about: 'সম্পর্কে', skills: 'দক্ষতা', projects: 'প্রোজেক্ট', contact: 'যোগাযোগ' },
    title: 'মোঃ শাওন আহমেদ',
    subtitle: 'ওজাইসা লিমিটেডের চেয়ারম্যান',
    intro: 'সফটওয়ার ইঞ্জিনিয়ারিং শিক্ষার্থী | ব্যবসায়িক নেতা | ডিজিটাল উদ্ভাবক',
    getInTouch: 'যোগাযোগ করুন',
    viewProjects: 'প্রোজেক্ট দেখুন',
    aboutMe: 'আমার সম্পর্কে',
    eduTitle: 'শিক্ষা',
    degree: 'বিএসসি ইন সফটওয়ার ইঞ্জিনিয়ারিং',
    university: 'ড্যাফোডিল ইন্টারন্যাশনাল ইউনিভার্সিটি',
    positionTitle: 'বর্তমান পদ',
    chairman: 'চেয়ারম্যান',
    skillsTitle: 'দক্ষতা',
    projectsTitle: 'প্রোজেক্ট',
    contactTitle: 'যোগাযোগ করুন',
    contactIntro: 'নতুন সুযোগ, উদ্ভাবনী প্রকল্প বা সহযোগিতা নিয়ে আলোচনা করতে সর্বদা উন্মুক্ত। নির্দ্বিধায় যোগাযোগ করুন!',
    live: 'লাইভ'
  },
  ur: {
    nav: { home: 'ہوم', about: 'متعلق', skills: 'مہارتیں', projects: 'پراجیکٹس', contact: 'رابطہ' },
    title: 'مد شاہون احمد',
    subtitle: 'اوزیسا لمیٹڈ کے چیئرمین',
    intro: 'سافٹ ویئر انجینئرنگ کے طالب علم | کاروباری رہنما | ڈیجیٹل موجد',
    getInTouch: 'رابطہ کریں',
    viewProjects: 'پراجیکٹس دیکھیں',
    aboutMe: 'میرے بارے میں',
    eduTitle: 'تعلیم',
    degree: 'بی ایس سی اِن سافٹ ویئر انجینئرنگ',
    university: 'ڈیفودیل انٹرنیشنل یونیورسٹی',
    positionTitle: 'موجودہ عہدہ',
    chairman: 'چیئرمین',
    skillsTitle: 'مہارتیں',
    projectsTitle: 'پراجیکٹس',
    contactTitle: 'رابطہ کریں',
    contactIntro: 'نئے مواقع، جدید پراجیکٹس یا تعاون پر بات کے لیے ہمیشہ دستیاب ہوں۔ بلا جھجھک رابطہ کریں!',
    live: 'لائیو'
  }
}

function Home({ t, lang, setLang, scrolled }) {
  const [showScrollHint, setShowScrollHint] = React.useState(true)
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitStatus, setSubmitStatus] = React.useState(null) // 'success' or 'error'
  const [submitMessage, setSubmitMessage] = React.useState('')

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      // Show hint only when near top of page and there's more content to scroll
      const shouldShow = scrollY < windowHeight * 0.5 && documentHeight > windowHeight * 1.2
      setShowScrollHint(shouldShow)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear status when user starts typing again
    if (submitStatus) {
      setSubmitStatus(null)
      setSubmitMessage('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    setSubmitMessage('')

    try {
      const { data, error } = await supabase
        .from('contacts')
        .insert([
          {
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim()
          }
        ])
        .select()

      if (error) {
        throw error
      }

      // Success
      setSubmitStatus('success')
      setSubmitMessage('Message sent successfully! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
        setSubmitMessage('')
      }, 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setSubmitMessage('Failed to send message. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const skills = [
    { name: 'Leadership', slug: 'leadership', icon: '👔' },
    { name: 'Business Strategy', slug: 'business-strategy', icon: '📊' },
    { name: 'Digital Transformation', slug: 'digital-transformation', icon: '🚀' }
  ]

  const projects = [
    { name: 'Ozysa Ltd', description: 'E-commerce platform connecting local businesses and customers', icon: '🛒', url: 'https://www.ozysa.com/' },
    { name: 'Marketing Academy', description: 'Offline and online courses for business owners', icon: '🎓', url: '#' },
    { name: 'Star Face', description: 'Creative brand promoting innovation in local markets', icon: '⭐', url: 'https://www.facebook.com/profile.php?id=61581798161033' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="hero-title">{t.title}</h1>
              <p className="hero-subtitle">{t.subtitle}</p>
              <p className="hero-description">{t.intro}</p>
              <div className="hero-buttons">
                <a href="#contact" className="btn btn-primary">{t.getInTouch}</a>
                <a href="#projects" className="btn btn-secondary">{t.viewProjects}</a>
              </div>
            </div>

            <div className="hero-avatar-wrapper">
              <div className="avatar-square">
                <img src="/profile.jpg" alt={t.title} />
                <div className="avatar-glow" aria-hidden="true"></div>
              </div>
            </div>
          </div>

          {showScrollHint && (
            <a className="scroll-hint" href="#about">
              <span>Scroll Down</span>
              <div className="chevron">⌄</div>
            </a>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">{t.aboutMe}</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                {lang === 'en' && 'I am Md Shawon Ahmed, the Chairman of Ozysa Ltd, currently pursuing my Bachelor of Science in Software Engineering at Daffodil International University.'}
                {lang === 'bn' && 'আমি মোঃ শাওন আহমেদ, ওজাইসা লিমিটেডের চেয়ারম্যান। ড্যাফোডিল ইন্টারন্যাশনাল ইউনিভার্সিটিতে সফটওয়ার ইঞ্জিনিয়ারিংয়ে বিএসসি করছি।'}
                {lang === 'ur' && 'میں مد شاہون احمد ہوں، اوزیسا لمیٹڈ کا چیئرمین، ڈیفودیل انٹرنیشنل یونیورسٹی سے سافٹ ویئر انجینئرنگ میں بی ایس سی کر رہا ہوں۔'}
              </p>
              <p>
                {lang === 'en' && 'With a passion for business leadership and digital transformation, I combine technical expertise with strategic vision to drive innovation and growth.'}
                {lang === 'bn' && 'ব্যবসায়িক নেতৃত্ব ও ডিজিটাল রূপান্তরে আগ্রহ নিয়ে আমি প্রযুক্তিগত দক্ষতা ও কৌশলগত দৃষ্টি একত্রে প্রয়োগ করি।'}
                {lang === 'ur' && 'کاروباری قیادت اور ڈیجیٹل ٹرانسفارمیشن کے شوق کے ساتھ میں تکنیکی مہارت کو اسٹریٹجک وژن کے ساتھ یکجا کرتا ہوں۔'}
              </p>
              <div className="education">
                <h3>{t.eduTitle}</h3>
                <p><strong>{t.degree}</strong></p>
                <p>{t.university}</p>
              </div>
              <div className="position">
                <h3>{t.positionTitle}</h3>
                <p><strong>{t.chairman}</strong> - Ozysa Ltd</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Journey Section */}
      <section id="education-journey" className="edu-journey">
        <div className="container">
          <h2 className="section-title">Educational Journey</h2>
          <div className="timeline-wrapper">
            <div className="timeline-line"></div>
            
            <div className="timeline-item timeline-item--left">
              <div className="timeline-content">
                <div className="timeline-node timeline-node--cyan"></div>
                <a href="https://daffodilvarsity.edu.bd/" target="_blank" rel="noopener noreferrer" className="timeline-card">
                  <h3>B.Sc. in Software Engineering</h3>
                  <p>Daffodil International University, Ashulia</p>
                  <p className="timeline-time">2023 to Now</p>
                </a>
                <div className="timeline-connector timeline-connector--right"></div>
              </div>
            </div>

            <div className="timeline-item timeline-item--right">
              <div className="timeline-content">
                <div className="timeline-node timeline-node--purple"></div>
                <a href="https://sristy.edu.bd/college/" target="_blank" rel="noopener noreferrer" className="timeline-card">
                  <h3>Higher Secondary School Certificate (HSC)</h3>
                  <p>Sristy College of Tangail</p>
                  <p className="timeline-time">2019 to 2021</p>
                </a>
                <div className="timeline-connector timeline-connector--left"></div>
              </div>
            </div>

            <div className="timeline-item timeline-item--left">
              <div className="timeline-content">
                <div className="timeline-node timeline-node--purple"></div>
                <a href="https://sristy.edu.bd/academic/" target="_blank" rel="noopener noreferrer" className="timeline-card">
                  <h3>Secondary School Certificate (SSC)</h3>
                  <p>Sristy Academic School, Tangail</p>
                  <p className="timeline-time">2017 to 2019</p>
                </a>
                <div className="timeline-connector timeline-connector--right"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">{t.skillsTitle}</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <Link key={skill.slug} to={`/skills/${skill.slug}`} className="skill-card" aria-label={`Open ${skill.name}`}>
                <div style={{fontSize: '3rem', marginBottom: '1rem'}}>{skill.icon}</div>
                <h3>{skill.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">{t.projectsTitle}</h2>
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
          <h2 className="section-title">{t.contactTitle}</h2>
          <div className="contact-content">
            <p className="contact-intro">{t.contactIntro}</p>

            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 className="form-title">Send a Message</h3>
                
                {submitStatus && (
                  <div className={`form-status ${submitStatus === 'success' ? 'success' : 'error'}`}>
                    {submitMessage}
                  </div>
                )}
                
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter your message"
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  <span className="submit-icon">✈️</span>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-card-icon">📧</div>
                <div className="contact-card-label">EMAIL</div>
                <a className="contact-card-value" href="mailto:shawon00650@gmail.com">shawon00650@gmail.com</a>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon">📞</div>
                <div className="contact-card-label">PHONE</div>
                <a className="contact-card-value" href="tel:+8801891484334">+880 1891-484334</a>
              </div>
            </div>

            <div className="social-icons">
              <a 
                href="https://www.linkedin.com/in/shawon06" 
                target="_blank" 
                rel="noopener noreferrer"
                className="icon-btn linkedin"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a 
                href="https://www.facebook.com/ShawonKompany" 
                target="_blank" 
                rel="noopener noreferrer"
                className="icon-btn facebook"
                aria-label="Facebook"
              >
                f
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [lang, setLang] = useState('en')
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') || 'en'
    setLang(savedLang)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.classList.add('dark')
    root.classList.remove('light')
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('dir', lang === 'ur' ? 'rtl' : 'ltr')
    localStorage.setItem('lang', lang)
  }, [lang])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSplashFinish = () => {
    setShowSplash(false)
  }

  const t = i18n[lang]

  return (
    <div className="App">
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
      <div className="animated-bg" aria-hidden="true"></div>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-brand">{t.title}</div>
          <ul className="nav-links">
            <li><a href="/">{t.nav.home}</a></li>
            <li><a href="/#about">{t.nav.about}</a></li>
            <li><a href="/#skills">{t.nav.skills}</a></li>
            <li><a href="/#projects">{t.nav.projects}</a></li>
            <li><a href="/#contact">{t.nav.contact}</a></li>
          </ul>
          <div className="toggles">
            <div className="lang-toggle" role="group" aria-label="Language selector">
              <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
              <button className={`lang-btn ${lang === 'bn' ? 'active' : ''}`} onClick={() => setLang('bn')}>BN</button>
              <button className={`lang-btn ${lang === 'ur' ? 'active' : ''}`} onClick={() => setLang('ur')}>UR</button>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home t={t} lang={lang} setLang={setLang} scrolled={scrolled} />} />
        <Route path="/skills/:slug" element={<SkillDetail />} />
      </Routes>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 {t.title}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
