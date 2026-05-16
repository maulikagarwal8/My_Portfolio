import { SKILLS_DATA } from '../constants/Constants';

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container-6xl">
        <div className="section-header animate-fade-up">
          <h1 className="title-large">Technical Skills</h1>
          <div className="header-line" />
        </div>
        {SKILLS_DATA.map((categories, categoriesIndex) => (
          <div key={categories.category} style={{ marginBottom: '4rem' }}>
            <h2 className="skill-category-title animate-fade-up" style={{ animationDelay: '100ms' }}>
              {categories.category}
            </h2>
            <div className="skills-grid">
              {categories.skills.map((skill, index) => (
                <div key={skill.name} className="animate-fade-up"
                  style={{ animationDelay: `${200 + index * 50}ms` }}>
                  <div className="skill-card">
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                      <div>
                        <h3 className="skill-name">{skill.name}</h3>
                        <div className="skill-logo" style={{marginLeft:"9rem",opacity:"0.4",height:"0rem",top:"1.5rem",left:"4.5rem",position:"absolute"}}><skill.icon size={30}/></div>
                        <span className="category-tag">
                          {categories.category.split(' ')[0]}
                        </span>
                      </div>
                    </div>
                    <div className="proficiency-text">
                      <span style={{ color: 'var(--color-text-body)', opacity: 0.7 }}>Proficiency</span>
                      <span style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>{skill.level}%</span>
                    </div>
                    <div className="progress-container">
                      <div className="progress-fill" style={{ width: `${skill.level}%` }}/>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}