import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import './Header.css'

const Header = () => {
  const location = useLocation()
  const { language, toggleLanguage, t } = useLanguage()

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-text">Alonza0314</span>
        </Link>

        <nav className="nav">
          <div className="nav-links">
            <Link to="/" className={`nav-link ${isActive('/')}`}>
              {t('nav.home')}
            </Link>
            <Link to="/about" className={`nav-link ${isActive('/about')}`}>
              {t('nav.about')}
            </Link>
            <Link to="/education" className={`nav-link ${isActive('/education')}`}>
              {t('nav.education')}
            </Link>
            <Link to="/experience" className={`nav-link ${isActive('/experience')}`}>
              {t('nav.experience')}
            </Link>
          </div>

          <div className="external-links">
            <a
              href="https://free-ran-ue.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
            >
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
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              free-ran-ue
            </a>
            <a
              href="https://alonza0314.github.io/leetcode/"
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
            >
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
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Leetcode solutions
            </a>
            {/* 語言切換按鈕 */}
            <button 
              className="lang-switch" 
              onClick={toggleLanguage}
              title={language === 'zh' ? 'Switch to English' : '切換至中文'}
            >
              {language === 'zh' ? 'EN' : '中'}
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header

