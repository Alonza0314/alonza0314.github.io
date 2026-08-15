import { useLanguage } from '../contexts/LanguageContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './ExperienceSection.css'

interface ExperienceEntry {
  key: string
  children?: string[]
}

interface ExperienceItem {
  titleKey: string
  items: ExperienceEntry[]
}

const experienceData: ExperienceItem[] = [
  {
    titleKey: 'experience.professional',
    items: [
      { key: 'experience.item.1' },
      { key: 'experience.item.2' },
      { key: 'experience.item.3' },
      { key: 'experience.item.4' },
      { key: 'experience.item.14' },
      {
        key: 'experience.taGroup',
        children: ['experience.item.5', 'experience.item.6', 'experience.item.7'],
      },
    ],
  },
  {
    titleKey: 'experience.club',
    items: [
      { key: 'experience.item.8' },
      { key: 'experience.item.9' },
      { key: 'experience.item.10' },
      { key: 'experience.item.11' },
    ],
  },
  {
    titleKey: 'experience.other',
    items: [{ key: 'experience.item.12' }, { key: 'experience.item.13' }],
  },
]

function CheckIcon() {
  return (
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
  )
}

function ExperienceSection() {
  const { t } = useLanguage()
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="section reveal-section experience-section" id="experience">
      <div className="section-inner">
        <div className="section-header">
          <h2 className="section-title">
            <span className="section-index">03</span>
            {t('experience.title')}
          </h2>
        </div>

        <div className="experience-grid">
          {experienceData.map((category, categoryIndex) => (
            <div
              key={category.titleKey}
              className={`glass-card experience-card experience-card--${categoryIndex}`}
              style={{ animationDelay: `${categoryIndex * 0.15}s` }}
            >
              <div className="experience-card-header">
                <span className="experience-card-index">{String(categoryIndex + 1).padStart(2, '0')}</span>
                <h3 className="experience-card-title">{t(category.titleKey)}</h3>
              </div>

              <ul className="experience-list">
                {category.items.map((entry, itemIndex) => (
                  <li
                    key={entry.key}
                    className="experience-item"
                    style={{ animationDelay: `${categoryIndex * 0.2 + itemIndex * 0.08}s` }}
                  >
                    <span className="experience-item-icon">
                      <CheckIcon />
                    </span>
                    <div className="experience-item-body">
                      <span className="experience-item-text">{t(entry.key)}</span>
                      {entry.children && (
                        <ul className="experience-subitem-list">
                          {entry.children.map(childKey => (
                            <li key={childKey} className="experience-subitem">
                              <span className="experience-subitem-dot" />
                              {t(childKey)}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
