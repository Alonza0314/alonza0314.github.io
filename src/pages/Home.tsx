import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  // 技能列表
  const skills = [
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

  // 為技能卡片生成隨機顏色（淡藍色、淡紫色系）
  const getSkillColor = (index: number) => {
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
    return colors[index % colors.length]
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
                查看我的 CV
              </Link>
              <a
                href="https://github.com/Alonza0314"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                專案作品
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 技能點區塊 */}
      <section className="skills-section">
        <h2 className="section-title">技能專長</h2>
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

