import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'zh' | 'en'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('zh')

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'zh' ? 'en' : 'zh')
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// 翻譯內容
const translations: Record<Language, Record<string, string>> = {
  zh: {
    // Header
    'nav.home': '首頁',
    'nav.about': '關於我',
    'nav.education': '求學經歷',
    'nav.experience': '特殊經歷',
    
    // Home Page
    'home.greeting': '您好，我是',
    'home.name': '『杜峯 Alonza』',
    'home.description': '一名熱愛技術的 5G 網路工程師，目前就讀於國立陽明交通大學智能系統研究所。專注於核心網路技術研究與開發，參與 free5GC 開源專案並自研 RAN/UE 開源模擬器專案 - free-ran-ue。熱衷於探索新技術，致力於將理論知識轉化為實際應用，推動 5G 網路技術的發展。',
    'home.viewCV': '查看我的 CV',
    'home.github': '前往 GitHub',
    'home.skills': '專業技能',
    
    // About Page
    'about.title': '關於我',
    'about.resume': '履歷',
    'about.download': '下載 CV',
    'about.openTab': '新分頁開啟',
    
    // Education Page
    'education.title': '求學經歷',
    'education.school.isia': '國立陽明交通大學產學創新研究學院',
    'education.dept.isia': '智能系統研究所',
    'education.period.isia': '2024 - 至今',
    'education.school.cs': '國立陽明交通大學',
    'education.dept.cs': '資訊工程學系',
    'education.period.cs': '2020 - 2024',
    'education.school.cysh': '國立嘉義高級中學',
    'education.period.cysh': '2017 - 2020',
    'education.school.hkjh': '嘉義縣立新港國民中學',
    'education.period.hkjh': '2013 - 2016',
    'education.school.hkps': '嘉義縣新港鄉新港國民小學',
    'education.period.hkps': '2007 - 2013',
    
    // Experience Page
    'experience.title': '特殊經歷',
    'experience.professional': '專業對口',
    'experience.club': '社團活動',
    'experience.other': '其他項目',
    'experience.item.1': '中央研究院資訊科技創新研究中心 - 兼任研究助理',
    'experience.item.2': 'Saviah禾薪科技 - 實習生',
    'experience.item.3': 'free5GC - Committer',
    'experience.item.4': '國立陽明交通大學 資訊學院 網路工程研究所 - 密碼工程課程助教',
    'experience.item.5': '國立陽明交通大學 資訊學院 網路工程研究所 - 開源核心網路設計與實作課程助教',
    'experience.item.6': '國立陽明交通大學 資訊學院多媒體工程研究所 - 創業實務課程助教',
    'experience.item.7': '國立陽明交通大學 資訊工程學系系學會 - 13級活動長',
    'experience.item.8': '國立陽明交通大學 資訊工程學系營隊 - 系露營機動 / 迎新宿營機動 / 火棍負責人',
    'experience.item.9': '國立陽明交通大學 嘉義雲林校友會 - 13級會長',
    'experience.item.10': '國立陽明交通大學探索體驗營 - 13級總召',
    'experience.item.11': '國立陽明交通大學 女二學餐天晟燒臘 - 工讀生',
    'experience.item.12': '7-11 - 工讀生',
    
    // Footer
    'footer.contact': '聯絡方式',
    'footer.social': '社交帳號',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.education': 'Education',
    'nav.experience': 'Experience',
    
    // Home Page
    'home.greeting': 'Hello, I am',
    'home.name': 'Feng Tu (Alonza)',
    'home.description': 'A passionate 5G Network Engineer currently pursuing a Master\'s degree at the Institute of Artificial Intelligence Innovation, National Yang Ming Chiao Tung University. Specializing in core network technology research and development, contributing to the free5GC open-source project and developing the RAN/UE open-source simulator project - free-ran-ue. Enthusiastic about exploring new technologies and committed to transforming theoretical knowledge into practical applications, advancing 5G network technology.',
    'home.viewCV': 'View My CV',
    'home.github': 'Visit GitHub',
    'home.skills': 'Professional Skills',
    
    // About Page
    'about.title': 'About Me',
    'about.resume': 'Resume',
    'about.download': 'Download CV',
    'about.openTab': 'Open in New Tab',
    
    // Education Page
    'education.title': 'Education',
    'education.school.isia': 'Industry Academia Innovation School, National Yang Ming Chiao Tung University',
    'education.dept.isia': 'Institute of Artificial Intelligence Innovation',
    'education.period.isia': '2024 - Present',
    'education.school.cs': 'National Yang Ming Chiao Tung University',
    'education.dept.cs': 'Department of Computer Science',
    'education.period.cs': '2020 - 2024',
    'education.school.cysh': 'National Chiayi Senior High School',
    'education.period.cysh': '2017 - 2020',
    'education.school.hkjh': 'Singang Junior High School, Chiayi County',
    'education.period.hkjh': '2013 - 2016',
    'education.school.hkps': 'Singang Elementary School, Chiayi County',
    'education.period.hkps': '2007 - 2013',
    
    // Experience Page
    'experience.title': 'Experience',
    'experience.professional': 'Professional Experience',
    'experience.club': 'Club Activities',
    'experience.other': 'Other Experience',
    'experience.item.1': 'Academia Sinica - Research Center for Information Technology Innovation - Part-time Research Assistant',
    'experience.item.2': 'Saviah Technology - Intern',
    'experience.item.3': 'free5GC - Committer',
    'experience.item.4': 'National Yang Ming Chiao Tung University - Institute of Network Engineering - Teaching Assistant for Cryptographic Engineering',
    'experience.item.5': 'National Yang Ming Chiao Tung University - Institute of Network Engineering - Teaching Assistant for Open Source Core Network Design and Implementation',
    'experience.item.6': 'National Yang Ming Chiao Tung University - Institute of Multimedia Engineering - Teaching Assistant for Entrepreneurship Practice',
    'experience.item.7': 'National Yang Ming Chiao Tung University - Computer Science Student Association - Activity Director (Class of 13)',
    'experience.item.8': 'National Yang Ming Chiao Tung University - Computer Science Department Camp - Camp Coordinator / Fire Stick Leader',
    'experience.item.9': 'National Yang Ming Chiao Tung University - Chiayi and Yunlin Alumni Association - President (Class of 13)',
    'experience.item.10': 'National Yang Ming Chiao Tung University - Exploration Experience Camp - Director (Class of 13)',
    'experience.item.11': 'National Yang Ming Chiao Tung University - Tian Sheng Roasted Restaurant - Part-time Staff',
    'experience.item.12': '7-11 - Part-time Staff',
    
    // Footer
    'footer.contact': 'Contact',
    'footer.social': 'Social Media',
  },
}

