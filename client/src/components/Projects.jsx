import { useState } from "react";
import { FiGithub, FiArrowUpRight } from "react-icons/fi";
import { PROJECTS_DATA } from "../constants/Constants";
import HintBox from "../hooks/ArrowHint";

const projectsData = PROJECTS_DATA;
const allCategories = ["All", ...new Set(projectsData.flatMap((p) => p.categories))];

const ProjectCardImg = ({ project }) => {
  const [randomImg] = useState(() => {
    const idx = Math.floor(Math.random() * project.categoryimg.length);
    return project.categoryimg[idx];
  });
  return (<img src={randomImg} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />);
};

const ProjectCardImgCategory = ({ project }) => {
  const [randomImg] = useState(() => {
    const idx = Math.floor(Math.random() * project.categoryimg.length);
    return project.categoryimg[idx];
  });
  return (
    <div className="div7"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${randomImg})`, backgroundSize: 'cover',
        backgroundPosition: 'center', width: '90%', height: '95%', objectFit: 'cover'
      }}>
      {project.categories.map((category, i) => (
        <h4 key={i} style={{ padding: '0.5rem 0.5rem', marginBottom: '0.5rem', backgroundColor: 'black', opacity: '1' }}>
          {category}
        </h4>
      ))}
    </div>
  );
};

const TechStackBg = ({ project }) => {
  const [RandomImg] = useState(() => {
    const idx = Math.floor(Math.random() * project.techstackimg.length);
    return project.techstackimg[idx];
  });
  return (<RandomImg size={120} />);
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedCard, setExpandedCard] = useState(null);

  const filteredProjects = activeFilter === "All" ? projectsData : projectsData.filter((p) => p.categories.includes(activeFilter));

  const handleExpand = (title) => {
    setExpandedCard((prev) => (prev === title ? null : title));
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container-6xl">
        <div className="section-header animate-fade-up">
          <h1 className="title-large">Featured Projects</h1>
          <div className="header-line" />
        </div>

        <div className="filter-container animate-fade-up" style={{ animationDelay: "100ms" }}>
          {allCategories.map((cat) => (
            <button key={cat} onClick={() => {
              setActiveFilter(cat);
              setExpandedCard(null);
            }} className={`filter-btn ${activeFilter === cat ? "active" : ""}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* <HintBox text="click to expand" side="right"></HintBox> */}
        <HintBox text="click to expand" side="left"></HintBox>

        <div className='projects-grid' >
          {filteredProjects.map((project, index) => {
            const isExpanded = expandedCard === project.title;

            return (
              <div key={project.title} className={`project-card ${isExpanded ? "expanded" : ""} animate-fade-up`}
                onClick={() => handleExpand(project.title)}>

                {!isExpanded && (
                  <div className="card-top1">
                    <div>
                      <div className="card-top">
                        <h3 className="project-title">{project.title}</h3>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                          className="social-icon" aria-label="GitHub Repository" onClick={(e) => e.stopPropagation()}>
                          <FiGithub size={20} />
                        </a>
                      </div>
                      <p>{project.description.slice(0, 150)}...</p>
                    </div>
                    <div className="compact-footer">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="tech-badge">
                          {tech}
                        </span>))}
                    </div>
                  </div>
                )}

                {isExpanded && (
                  <div className="mosaic-grid">
                    <div className="div1">{project.title}</div>
                    <div className="div2"><img src={project.image} alt="project_image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                    <div className="div3">{project.description}</div>
                    <div className="div4">
                      <p style={{ marginBottom: '4rem' }}></p>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                        style={{ margin: '0rem 2rem' }}
                        className="social-icon" aria-label="GitHub Repository" onClick={(e) => e.stopPropagation()}>
                        <FiGithub size={60} />
                      </a>
                    </div>
                    <div className="div5">
                      <ProjectCardImg key={index} project={project} />
                    </div>
                    <div className="div6">
                      <div style={{ paddingLeft: '6rem', marginTop: '2rem', position: 'absolute', zIndex: '1', opacity: '0.4' }}><TechStackBg project={project} /></div>
                      <div className="compact-footer" style={{ gap: '1rem', position: 'relative', zIndex: '2' }}>
                        {project.techStack.map((tech, i) => (
                          <span key={i} className="tech-badge-expanded" style={{ fontSize: '1rem' }}>{tech}</span>
                        ))}
                      </div>
                    </div>
                    <ProjectCardImgCategory key={index} project={project} />
                    <div className="div8" style={{ opacity: '0.8' }}><ProjectCardImg key={index} project={project} /></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

