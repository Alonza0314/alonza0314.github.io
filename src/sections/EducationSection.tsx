import type { CSSProperties } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './EducationSection.css'

interface EducationItem {
  id: string
  logo: string
  schoolKey: string
  departmentKey: string
  periodKey: string
  logoAlt: string
}

const educationData: EducationItem[] = [
  {
    id: 'graduate',
    logo: '/img/school/logo_isia.png',
    schoolKey: 'education.school.isia',
    departmentKey: 'education.dept.isia',
    periodKey: 'education.period.isia',
    logoAlt: 'ISIA Logo',
  },
  {
    id: 'university',
    logo: '/img/school/cs.png',
    schoolKey: 'education.school.cs',
    departmentKey: 'education.dept.cs',
    periodKey: 'education.period.cs',
    logoAlt: 'CS Logo',
  },
  {
    id: 'high-school',
    logo: '/img/school/cysh.png',
    schoolKey: 'education.school.cysh',
    departmentKey: '',
    periodKey: 'education.period.cysh',
    logoAlt: 'CYSH Logo',
  },
  {
    id: 'junior-high',
    logo: '/img/school/hkjh.jpg',
    schoolKey: 'education.school.hkjh',
    departmentKey: '',
    periodKey: 'education.period.hkjh',
    logoAlt: 'HKJH Logo',
  },
  {
    id: 'elementary',
    logo: '/img/school/hkps.png',
    schoolKey: 'education.school.hkps',
    departmentKey: '',
    periodKey: 'education.period.hkps',
    logoAlt: 'HKPS Logo',
  },
]

function EducationSection() {
  const { t } = useLanguage()
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="section reveal-section education-section" id="education">
      <div className="section-inner">
        <div className="section-header">
          <h2 className="section-title">
            <span className="section-index">02</span>
            {t('education.title')}
          </h2>
        </div>

        <div className="edu-timeline">
          {educationData.map((item, index) => (
            <div
              key={item.id}
              className="edu-item"
              style={{ '--edu-index': index } as CSSProperties}
            >
              <div className="edu-node">
                <span className="edu-node-ring" />
                <span className="edu-node-dot" />
              </div>

              <div className="glass-card edu-card">
                <div className="edu-card-logo">
                  <img src={item.logo} alt={item.logoAlt} loading="lazy" />
                </div>
                <div className="edu-card-body">
                  <h3 className="edu-card-school">{t(item.schoolKey)}</h3>
                  {item.departmentKey && (
                    <p className="edu-card-dept">{t(item.departmentKey)}</p>
                  )}
                  <p className="edu-card-period">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    {t(item.periodKey)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationSection
