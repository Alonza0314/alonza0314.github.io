import './Education.css'

interface EducationItem {
  id: string
  logo: string
  school: string
  department: string
  period: string
  logoAlt: string
}

const Education = () => {
  const educationData: EducationItem[] = [
    {
      id: 'graduate',
      logo: '/img/school/logo_isia.png',
      school: '國立陽明交通大學產學創新研究學院',
      department: '智能系統研究所',
      period: '2024 - 至今',
      logoAlt: 'ISIA Logo',
    },
    {
      id: 'university',
      logo: '/img/school/cs.png',
      school: '國立陽明交通大學',
      department: '資訊工程學系',
      period: '2020 - 2024',
      logoAlt: 'CS Logo',
    },
    {
      id: 'high-school',
      logo: '/img/school/cysh.png',
      school: '國立嘉義高級中學',
      department: '',
      period: '2017 - 2020',
      logoAlt: 'CYSH Logo',
    },
    {
      id: 'junior-high',
      logo: '/img/school/hkjh.jpg',
      school: '嘉義縣立新港國民中學',
      department: '',
      period: '2013 - 2016',
      logoAlt: 'HKJH Logo',
    },
    {
      id: 'elementary',
      logo: '/img/school/hkps.png',
      school: '嘉義縣新港鄉新港國民小學',
      department: '',
      period: '2007 - 2013',
      logoAlt: 'HKPS Logo',
    },
  ]

  return (
    <div className="education-page page-container">
      <h1 className="page-title">求學經歷</h1>

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
                  <h3 className="school-name">{item.school}</h3>
                  {item.department && (
                    <p className="department">{item.department}</p>
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
                    {item.period}
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

