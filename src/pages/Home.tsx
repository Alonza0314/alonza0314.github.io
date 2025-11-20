import { Link } from 'react-router-dom'
import { useMemo } from 'react'
import './Home.css'

const Home = () => {
  // 技能列表
  const baseSkills = [
    'Golang',
    'C++',
    'Angular',
    'React',
    'Vue',
    'HTML',
    'TypeScript',
    'CSS',
    'JavaScript',
    'MongoDB',
    'Git',
    'Linux',
    'Cursor',
    'ChatGPT',
    'Core Network',
    'free5GC',
    'free-ran-ue',
    'Zero Trust Network',
  ]

  // 顏色列表
  const colors = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
    'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    'linear-gradient(135deg, #a8c0ff 0%, #3f2b96 100%)',
    'linear-gradient(135deg, #7f7fd5 0%, #86a8e7 100%)',
    'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
  ]

  // 隨機打亂陣列
  const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
  }

  // 每次刷新時隨機排列技能和顏色
  const skills = useMemo(() => shuffleArray(baseSkills), [])
  const shuffledColors = useMemo(() => shuffleArray(colors), [])

  // 為技能卡片分配顏色
  const getSkillColor = (index: number) => {
    return shuffledColors[index % shuffledColors.length]
  }

  return (
    <div className="home-page page-container">
      {/* 個人介紹區塊 */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="profile-image-container">
            <img
              src="/img/parisTu.jpg"
              alt="Alonza 個人照片"
              className="profile-image"
            />
          </div>
          
          <div className="hero-text">
            <h1 className="hero-title">
              您好，我是
              <span className="highlight">『杜峯 Alonza』</span>
            </h1>
            
            {/* TODO: 請在這裡填入您的個人介紹 */}
            <p className="hero-description">
              一名熱愛技術的 5G 網路工程師，目前就讀於國立陽明交通大學智能系統研究所。專注於核心網路技術研究與開發，參與 free5GC 開源專案並自研 RAN/UE 開源模擬器專案 - free-ran-ue。熱衷於探索新技術，致力於將理論知識轉化為實際應用，推動 5G 網路技術的發展。
            </p>

            <div className="hero-actions">
              <Link to="/about" className="btn btn-primary">
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
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                &nbsp;查看我的 CV
              </Link>
              
              <a
                href="https://github.com/Alonza0314"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                &nbsp;前往 GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 技能點區塊 */}
      <section className="skills-section">
        <h2 className="section-title">專業技能</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="skill-card"
              style={{
                background: getSkillColor(index),
                animationDelay: `${index * 0.05}s`,
              }}
            >
              <span className="skill-name">{skill}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home

