import './Experience.css'

interface ExperienceItem {
  title: string
  items: string[]
}

const Experience = () => {
  const experienceData: ExperienceItem[] = [
    {
      title: '專業對口',
      items: [
        '中央研究院資訊科技創新研究中心 - 兼任研究助理',
        'Saviah禾薪科技 - 實習生',
        'free5GC - Committer',
        '國立陽明交通大學 資訊學院 網路工程研究所 - 密碼工程課程助教',
        '國立陽明交通大學 資訊學院 網路工程研究所 - 開源核心網路設計與實作課程助教',
        '國立陽明交通大學 資訊學院多媒體工程研究所 - 創業實務課程助教',
      ],
    },
    {
      title: '社團活動',
      items: [
        '國立陽明交通大學 資訊工程學系系學會 - 13級活動長',
        '國立陽明交通大學 資訊工程學系營隊 - 系露營機動 / 迎新宿營機動 / 火棍負責人',
        '國立陽明交通大學 嘉義雲林校友會 - 13級會長',
        '國立陽明交通大學探索體驗營 - 13級總召',
      ],
    },
    {
      title: '其他項目',
      items: [
        '國立陽明交通大學 女二學餐天晟燒臘 - 工讀生',
        '7-11 - 工讀生',
      ],
    },
  ]

  return (
    <div className="experience-page page-container">
      <h1 className="page-title">特殊經歷</h1>

      <div className="experience-sections">
        {experienceData.map((section, sectionIndex) => (
          <div
            key={section.title}
            className="experience-section"
            style={{ animationDelay: `${sectionIndex * 0.2}s` }}
          >
            <h2 className="section-heading">{section.title}</h2>
            <div className="experience-list">
              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="experience-item"
                  style={{ animationDelay: `${(sectionIndex * 0.2) + (itemIndex * 0.08)}s` }}
                >
                  <div className="item-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="item-text">{item}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 專案作品連結 */}
      <div className="projects-section">
        <div className="projects-card">
          <div className="projects-icon">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </div>
          <div className="projects-content">
            <h3 className="projects-title">查看我的專案作品</h3>
            <p className="projects-description">
              在 GitHub 上探索我的開源項目和技術貢獻
            </p>
            <a
              href="https://github.com/Alonza0314"
              target="_blank"
              rel="noopener noreferrer"
              className="projects-link"
            >
              前往 GitHub
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience

