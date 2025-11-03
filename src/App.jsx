import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import SkillDetail from './pages/SkillDetail'

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
              <div className="avatar">
                <img src="/ozysa-logo.png" alt="Ozysa Ltd" />
              </div>
              <h1 className="hero-title">{t.title}</h1>
              <p className="hero-subtitle">{t.subtitle}</p>
              <p className="hero-description">{t.intro}</p>
              <div className="hero-buttons">
                <a href="#contact" className="btn btn-primary">{t.getInTouch}</a>
                <a href="#projects" className="btn btn-secondary">{t.viewProjects}</a>
              </div>
            </div>

            <a className="hero-card" href="https://www.ozysa.com/" target="_blank" rel="noopener noreferrer" aria-label="Open Ozysa Ltd">
              <div className="hero-card-icon">💼</div>
              <div className="hero-card-title">Ozysa Ltd</div>
              <div className="hero-card-sub">Leading Digital Innovation</div>
              <div className="hero-card-glow" aria-hidden="true"></div>
            </a>
          </div>

          <a className="scroll-hint" href="#about">
            <span>Scroll Down</span>
            <div className="chevron">⌄</div>
          </a>
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
          <h2 className="section-title">Education Journey</h2>
          <div className="edu-wrap">
            <svg className="edu-path" viewBox="0 0 600 900" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="glow" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#22d3ee"/>
                  <stop offset="100%" stopColor="#8b5cf6"/>
                </linearGradient>
              </defs>
              <path d="M300 0 C300 120 270 220 270 300 C270 420 360 520 300 640 C260 720 250 780 250 860" stroke="url(#glow)" strokeWidth="6" fill="none" strokeLinecap="round" />
              <path d="M300 0 C300 120 270 220 270 300 C270 420 360 520 300 640 C260 720 250 780 250 860" stroke="rgba(34,211,238,0.4)" strokeWidth="14" fill="none" strokeLinecap="round" filter="blur(2px)" />
            </svg>

            <div className="edu-node edu-node--top">
              <div className="node-ring"></div>
              <div className="node-dot"></div>
            </div>

            <div className="edu-card edu-card--bsc">
              <h3>B.Sc. in Software Engineering</h3>
              <p>Daffodil International University, Ashulia</p>
              <p className="edu-time">2023 to Now</p>
            </div>

            <div className="edu-node edu-node--mid">
              <div className="node-ring ring-blue"></div>
              <div className="node-dot dot-blue"></div>
            </div>

            <div className="edu-card edu-card--hsc">
              <h3>Higher Secondary School Certificate (HSC)</h3>
              <p>Sristy College of Tangail</p>
              <p className="edu-time">2019 to 2021</p>
            </div>

            <div className="edu-node edu-node--bottom">
              <div className="node-ring ring-blue"></div>
              <div className="node-dot dot-blue"></div>
            </div>

            <div className="edu-card edu-card--ssc">
              <h3>Secondary School Certificate (SSC)</h3>
              <p>Sristy Academic School, Tangail</p>
              <p className="edu-time">2017 to 2019</p>
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
                <div className="project-top">
                  <div className="live-badge">{t.live}</div>
                </div>
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

  const t = i18n[lang]

  return (
    <div className="App">
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
