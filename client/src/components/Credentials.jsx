import { FiAward, FiActivity, FiExternalLink } from 'react-icons/fi';
import { TIMELINE_DATA, CERTIFICATIONS_DATA } from '../constants/Constants';
import { useState } from 'react';

const certificationsData = CERTIFICATIONS_DATA;

function SectionHeading({ icon: Icon, title }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
      <Icon size={20} strokeWidth={1.5} className="text-heading" />
      <h2 className="text-display" style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>{title}</h2>
      <div className="header-line" style={{ marginLeft: '0.5rem', height: '0.04rem' }} />
    </div>
  );
}

function CertCard({ name, organization, logo: Logo, url }) {
  return (
    <div className="cert-card group">
      <div>
        <div className="social-icon" style={{ marginBottom: '1.25rem', marginLeft: '1rem' }}>
          <Logo size={32} strokeWidth={1.5} />
        </div>
        <h3 className="text-display text-heading" style={{ fontSize: '1.1rem', fontWeight:'500', lineHeight: '1.4' }}>
          {name}
        </h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.25rem' }}>
          <p className="text-mono text-accent" style={{ fontSize: '0.9rem' }}>{organization}</p>
        </div>
      </div>
      <a href={url} target="_blank" rel="noopener noreferrer" className="social-icon"
        style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '0.5rem', fontSize: '0.75rem', borderTop: '1px solid var(--color-text-body)', paddingTop: '1rem' }}>
        <span>View Certificate</span>
        <FiExternalLink size={14} />
      </a>
    </div>
  );
}

function GitLogTimeline() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);
  return (
    <section id="career" className="section">
      <div className="repoHeader">
        <span className="repoName">maulik_agarwal / career</span>
        <span className="branchPill main">main</span>
        <span className="branchPill">{TIMELINE_DATA.length} commits</span>
      </div>
      <div className="log">
        {TIMELINE_DATA.map((commit, i) => {
          const isOpen = openIndex === i;
          const isLast = i === TIMELINE_DATA.length - 1;
          return (
            <div key={commit.hash} className="entry">
              {/* Left graph column */}
              <div className="graphCol">
                <div className="dotWrap">
                  <div className="dot" style={{ background: commit.dotColor }} />
                </div>
                {!isLast && (
                  <div className="lineSeg" style={{ background: TIMELINE_DATA[i + 1].lineColor }} />
                )}
              </div>

              {/* Right content */}
              <div className="right">
                {/* Commit row */}
                <div className="row" onClick={() => toggle(i)} role="button" aria-expanded={isOpen}>
                  <span className="hash" style={{ color: commit.dotColor }}>
                    {commit.hash}
                  </span>
                  <span className="typeBadge" style={{background: commit.typeBg, color: commit.typeColor}}>
                    {commit.type}
                  </span>
                  <span className="msg">
                    {commit.msg}
                    {commit.current && (
                      <span className="headBadge">HEAD</span>
                    )}
                  </span>
                  <span className="date">{commit.date}</span>
                  <span className={`chevron ${isOpen ? 'chevronOpen' : ''}`}>▶</span>
                </div>

                {/* Expandable detail card */}
                <div className={`expand ${isOpen ? 'expandOpen' : ''}`}>
                  <div className="expandInner">
                    <p className="expTitle">{commit.title}</p>
                    <p className="expCompany">{commit.company} &nbsp;·&nbsp; {commit.date}</p>
                    <p className="expDesc">{commit.desc}</p>
                    <div className="expTags">
                      {commit.tags.map(tag => (
                        <span key={tag.label} className={`expTag ${tag.color}`}>
                          {tag.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default function Credentials() {
  return (
    <section id="credentials" className="credentials-section">
      <div className="container-6xl">
        <div className="section-header animate-fade-up">
          <h1 className="title-large">
            Credentials
          </h1>
          <div className="header-line" />
        </div>
        <div className="animate-fade-up" style={{ animationDelay: '100ms' }}>
          <SectionHeading icon={FiActivity} title="Career Progress" />
          <GitLogTimeline />
        </div>
        <div className="animate-fade-up" style={{ marginTop: '3rem', animationDelay: '200ms' }}>
          <SectionHeading icon={FiAward} title="Certifications" />
          <div className="cert-grid">
            {certificationsData.map((cert) => (
              <CertCard key={cert.name} {...cert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}