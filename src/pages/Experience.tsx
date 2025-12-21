import { useLanguage } from '../contexts/LanguageContext'
import './Experience.css'

interface ExperienceItem {
  titleKey: string
  itemKeys: string[]
}

const Experience = () => {
  const { t } = useLanguage()
  
  const experienceData: ExperienceItem[] = [
    {
      titleKey: 'experience.professional',
      itemKeys: [
        'experience.item.1',
        'experience.item.2',
        'experience.item.3',
        'experience.item.4',
        'experience.item.5',
        'experience.item.6',
      ],
    },
    {
      titleKey: 'experience.club',
      itemKeys: [
        'experience.item.7',
        'experience.item.8',
        'experience.item.9',
        'experience.item.10',
      ],
    },
    {
      titleKey: 'experience.other',
      itemKeys: [
        'experience.item.11',
        'experience.item.12',
      ],
    },
  ]

  return (
    <div className="experience-page page-container">
      <h1 className="page-title">{t('experience.title')}</h1>

      <div className="experience-sections">
        {experienceData.map((section, sectionIndex) => (
          <div
            key={section.titleKey}
            className="experience-section"
            style={{ animationDelay: `${sectionIndex * 0.2}s` }}
          >
            <h2 className="section-heading">{t(section.titleKey)}</h2>
            <div className="experience-list">
              {section.itemKeys.map((itemKey, itemIndex) => (
                <div
                  key={itemKey}
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
                  <p className="item-text">{t(itemKey)}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience

