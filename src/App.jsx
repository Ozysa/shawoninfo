import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import SkillDetail from './pages/SkillDetail'
import SplashScreen from './components/SplashScreen'

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
    skillsTitle: 'Coach',
    techSkillsTitle: 'Technical Skills',
    servicesTitle: 'Services',
    servicesIntro: 'These are some of the services I offer. Reach out to me if I can help you with any!',
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
    skillsTitle: 'কোচ',
    techSkillsTitle: 'প্রযুক্তিগত দক্ষতা',
    servicesTitle: 'সেবা',
    servicesIntro: 'এগুলি আমার কিছু সেবা। আমি যদি আপনার সাহায্য করতে পারি তাহলে যোগাযোগ করুন!',
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
    skillsTitle: 'کوچ',
    techSkillsTitle: 'تکنیکی مہارتیں',
    servicesTitle: 'خدمات',
    servicesIntro: 'یہ میری کچھ خدمات ہیں۔ اگر میں آپ کی مدد کر سکتا ہوں تو مجھ سے رابطہ کریں!',
    projectsTitle: 'پراجیکٹس',
    contactTitle: 'رابطہ کریں',
    contactIntro: 'نئے مواقع، جدید پراجیکٹس یا تعاون پر بات کے لیے ہمیشہ دستیاب ہوں۔ بلا جھجھک رابطہ کریں!',
    live: 'لائیو'
  }
}

function Home({ t, lang, setLang, scrolled }) {
  const [showScrollHint, setShowScrollHint] = React.useState(true)

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


  const skills = [
    { name: 'Leadership', slug: 'leadership', icon: '👔' },
    { name: 'Business Strategy', slug: 'business-strategy', icon: '📊' },
    { name: 'Digital Transformation', slug: 'digital-transformation', icon: '🚀' }
  ]

  const techSkills = [
    { name: 'Git', icon: '🐙', color: '#f05032' },
    { name: 'HTML', icon: '📄', color: '#e34f26' },
    { name: 'CSS', icon: '🎨', color: '#1572b6' },
    { name: 'Javascript', icon: '⚡', color: '#f7df1e' },
    { name: 'Bootstrap', icon: '💎', color: '#7952b3' },
    { name: 'Tailwind', icon: '🌊', color: '#06b6d4' },
    { name: 'React', icon: '⚛️', color: '#61dafb' },
    { name: 'Node.js', icon: '🟢', color: '#339933' },
    { name: 'MongoDB', icon: '🍃', color: '#47a248' },
    { name: 'Python', icon: '🐍', color: '#3776ab' },
    { name: 'Vercel', icon: '▲', color: '#000000' }
  ]

  const services = [
    { name: 'Content Writing', icon: '✏️' },
    { name: 'Email Marketing', icon: '📧' },
    { name: 'Web Design', icon: '</>' },
    { name: 'Photography', icon: '📷' },
    { name: 'Video Editing', icon: '🎬' },
    { name: 'Ebook Writing', icon: '📱' },
    { name: 'Blog Posting', icon: '📰' }
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
                <a href="#projects" className="btn btn-view-projects">
                  <span>View Projects</span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="4" width="10" height="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 4H14V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#download-cv" className="btn btn-download-cv">
                  <span>Download CV</span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 15H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M9 3V11M9 11L6 8M9 11L12 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
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
                <div style={{fontSize: '3rem', marginBottom: '1rem', display: 'inline-block'}}>{skill.icon}</div>
                <h3>{skill.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="tech-skills" className="tech-skills">
        <div className="container">
          <h2 className="tech-skills-title">{t.techSkillsTitle}</h2>
          <div className="tech-skills-scroll">
            <div className="tech-skills-grid">
              {techSkills.map((tech, index) => (
                <div key={index} className="tech-skill-card">
                  <div className="tech-skill-icon" style={{ color: tech.color }}>
                    {tech.icon}
                  </div>
                  <h3>{tech.name}</h3>
                </div>
              ))}
              {techSkills.map((tech, index) => (
                <div key={`duplicate-${index}`} className="tech-skill-card">
                  <div className="tech-skill-icon" style={{ color: tech.color }}>
                    {tech.icon}
                  </div>
                  <h3>{tech.name}</h3>
                </div>
              ))}
            </div>
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

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">{t.servicesTitle}</h2>
          <p className="services-intro">{t.servicesIntro}</p>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.name}</h3>
              </div>
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
              <a href="mailto:shawon00650@gmail.com" className="contact-card" aria-label="Send email to shawon00650@gmail.com">
                <div className="contact-card-icon">📧</div>
                <div className="contact-card-label">EMAIL</div>
                <div className="contact-card-value">shawon00650@gmail.com</div>
              </a>
              <a href="tel:+8801891484334" className="contact-card" aria-label="Call +880 1891-484334">
                <div className="contact-card-icon">📞</div>
                <div className="contact-card-label">PHONE</div>
                <div className="contact-card-value">+880 1891-484334</div>
              </a>
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
