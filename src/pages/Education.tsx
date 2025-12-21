import { useLanguage } from '../contexts/LanguageContext'
import './Education.css'

interface EducationItem {
  id: string
  logo: string
  schoolKey: string
  departmentKey: string
  periodKey: string
  logoAlt: string
}

const Education = () => {
  const { t } = useLanguage()
  
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

  return (
    <div className="education-page page-container">
      <h1 className="page-title">{t('education.title')}</h1>

      <div className="timeline">
        {educationData.map((item, index) => (
          <div
            key={item.id}
            className="timeline-item"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="timeline-marker">
              <div className="marker-dot"></div>
            </div>

            <div className="timeline-content">
              <div className="education-card">
                <div className="card-logo">
                  <img src={item.logo} alt={item.logoAlt} />
                </div>

                <div className="card-info">
                  <h3 className="school-name">{t(item.schoolKey)}</h3>
                  {item.departmentKey && (
                    <p className="department">{t(item.departmentKey)}</p>
                  )}
                  <p className="period">
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
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education

