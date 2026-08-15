import { LanguageProvider } from './contexts/LanguageContext'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import Footer from './components/Footer'
import NetworkBackground from './components/NetworkBackground'
import SectionDivider from './components/SectionDivider'
import HeroSection from './sections/HeroSection'
import EducationSection from './sections/EducationSection'
import ExperienceSection from './sections/ExperienceSection'
import './styles/App.css'

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="app">
          <NetworkBackground />
          <Header />
          <main className="main-content">
            <HeroSection />
            <SectionDivider />
            <EducationSection />
            <SectionDivider />
            <ExperienceSection />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
