import { useLanguage } from '../contexts/LanguageContext'
import './About.css'

const About = () => {
  const { t } = useLanguage()
  
  return (
    <div className="about-page page-container">
      <h1 className="page-title">{t('about.title')}</h1>
      
      <div className="cv-container">
        <div className="cv-viewer">
          <iframe
            src="/CV_General.pdf"
            title={t('about.resume')}
            className="pdf-iframe"
          />
        </div>
        
        <div className="cv-actions">
          <a
            href="/CV_General.pdf"
            download="Alonza_CV.pdf"
            className="download-btn"
          >
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
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            {t('about.download')}
          </a>
          
          <a
            href="/CV_General.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="open-btn"
          >
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
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            {t('about.openTab')}
          </a>
        </div>
      </div>
    </div>
  )
}

export default About

