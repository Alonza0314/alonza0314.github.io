import { useMemo } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './HeroSection.css'

const baseSkills = [
  'Golang', 'C++', 'Angular', 'React', 'Vue', 'HTML', 'TypeScript', 'CSS',
  'JavaScript', 'MongoDB', 'Git', 'Linux', 'Cursor', 'ChatGPT',
  'Core Network', 'free5GC', 'free-ran-ue', 'Zero Trust Network',
]

const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

const HeroSection = () => {
  const { t } = useLanguage()
  const ref = useScrollReveal<HTMLElement>()

  const skills = useMemo(() => shuffleArray(baseSkills), [])

  return (
    <section ref={ref} id="home" className="section reveal-section hero-section">
      <div className="section-inner hero-inner">
        <div className="hero-grid">
          <div className="hero-visual">
            <div className="hero-tower" aria-hidden="true">
              <svg viewBox="0 0 140 170" className="hero-tower-svg">
                <defs>
                  <linearGradient id="heroTowerGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--accent-cyan)" />
                    <stop offset="100%" stopColor="var(--accent-purple)" />
                  </linearGradient>
                </defs>
                <path
                  d="M40 165 L67 20 M100 165 L73 20 M48 130 L92 130 M52 100 L88 100 M56 70 L84 70 M40 165 L100 165"
                  stroke="url(#heroTowerGrad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M40 165 L92 130 M100 165 L48 130 M48 130 L88 100 M92 130 L52 100 M52 100 L84 70 M88 100 L56 70"
                  stroke="url(#heroTowerGrad)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  opacity="0.55"
                />
                <path d="M70 20 L70 6" stroke="url(#heroTowerGrad)" strokeWidth="3" strokeLinecap="round" />
                <path
                  d="M58 35 L82 35 M55 50 L85 50"
                  stroke="url(#heroTowerGrad)"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <circle
                  className="hero-tower-ring hero-tower-ring--1"
                  cx="70"
                  cy="6"
                  r="14"
                  stroke="var(--accent-cyan)"
                  strokeWidth="2"
                  fill="none"
                />
                <circle
                  className="hero-tower-ring hero-tower-ring--2"
                  cx="70"
                  cy="6"
                  r="14"
                  stroke="var(--accent-blue)"
                  strokeWidth="2"
                  fill="none"
                />
                <circle
                  className="hero-tower-ring hero-tower-ring--3"
                  cx="70"
                  cy="6"
                  r="14"
                  stroke="var(--accent-purple)"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="70" cy="6" r="3.5" fill="var(--accent-cyan)" />
              </svg>
            </div>

            <div className="hero-avatar-frame">
              <div className="hero-radar-ring hero-radar-ring--outer" aria-hidden="true" />
              <div className="hero-radar-ring hero-radar-ring--inner" aria-hidden="true" />
              <div className="hero-radar-sweep" aria-hidden="true" />
              <div className="hero-avatar glass-card">
                <img src="/img/parisTu.jpg" alt="Alonza 個人照片" />
              </div>
            </div>
          </div>

          <div className="hero-content">
            <p className="hero-greeting">{t('home.greeting')}</p>
            <h1 className="hero-name">
              <span className="hero-name-gradient">{t('home.name')}</span>
            </h1>
            <p className="hero-description">{t('home.description')}</p>

            <div className="hero-actions">
              <a
                href="https://www.linkedin.com/in/feng-tu/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
                {t('home.linkedin')}
              </a>
              <a
                href="https://github.com/Alonza0314"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577 0-.285-.01-1.04-.016-2.04-3.338.724-4.043-1.61-4.043-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.082-.729.082-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23A11.5 11.5 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.24 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.624-5.478 5.92.43.372.823 1.102.823 2.222 0 1.604-.014 2.896-.014 3.292 0 .32.19.694.8.576C20.565 21.795 24 17.298 24 12c0-6.63-5.37-12-12-12z"></path>
                </svg>
                {t('home.github')}
              </a>
            </div>
          </div>
        </div>

        <div className="hero-skills">
          <h2 className="hero-skills-title">{t('home.skills')}</h2>

          <div className="skills-panel glass-card">
            <div className="skills-panel-chrome">
              <span className="skills-panel-dot skills-panel-dot--red" />
              <span className="skills-panel-dot skills-panel-dot--yellow" />
              <span className="skills-panel-dot skills-panel-dot--green" />
              <span className="skills-panel-label">SKILLS</span>
            </div>

            <div className="skills-cloud">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className={`skill-chip skill-chip--${index % 4}`}
                  style={{ animationDelay: `${index * 0.04}s` }}
                >
                  <span className="skill-chip-bullet" />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
