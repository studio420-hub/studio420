
import React, { useEffect, useRef, useState } from 'react';

export const PROJECTS_DATA = [
  {
    id: 'wander',
    title: 'WANDER — TRAVEL BRAND IDENTITY',
    subtitle: 'A distinctive travel identity built for exploration and discovery.',
    category: 'Branding & Visual Identity',
    badge: 'SELECTED WORK // 2026',
    year: '2026',
    image: '/images/travel-branding.png',
    description:
      'A cohesive visual identity concept for a modern travel company, combining distinctive branding, considered typography, and travel collateral.',
    specs: {
      scope: 'Brand Identity, Typography, Travel Collateral',
      palette: 'Forest Green, Warm Ivory, Muted Sand',
      status: 'Selected Work',
    },
  },
  {
    id: 'forma',
    title: 'FORMA — E-COMMERCE EXPERIENCE',
    subtitle: 'An AI-assisted digital storefront designed around modern shopping.',
    category: 'AI Website Development & Digital Design',
    badge: 'SELECTED WORK // 2026',
    year: '2026',
    image: '/images/ai-ecommerce.png',
    description:
      'An AI-assisted e-commerce website concept combining refined digital design, intuitive product discovery, and a seamless shopping experience.',
    specs: {
      scope: 'Website Design, E-commerce UI, Responsive Experience',
      stack: 'AI-Assisted Design & Development',
      palette: 'Near-Black, Warm Ivory, Crimson Accent',
      status: 'Selected Work',
    },
  },
  {
    id: 'eatwell',
    title: 'EATWELL — PACKAGE DESIGN',
    subtitle: 'A cohesive food packaging identity designed to stand out.',
    category: 'Packaging Design & Visual Identity',
    badge: 'SELECTED WORK // 2026',
    year: '2026',
    image: '/images/eatwell-packaging.png',
    description:
      'A packaging concept for a modern food brand, built around clear visual communication, coordinated materials, and strong shelf appeal.',
    specs: {
      scope: 'Package Design, Labels, Visual Identity',
      palette: 'Warm Cream, Leaf Green, Earthy Neutrals',
      status: 'Selected Work',
    },
  },
];

export default function WorksSection({ onSelectProject }) {
  const [activeProject, setActiveProject] = useState(null);
  const sectionRef = useRef(null);

  const isMobile = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(max-width: 700px)').matches;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    section.classList.add('motion-ready');

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      section.classList.add('is-in-view');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('is-in-view');
          observer.unobserve(section);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleProjectClick = (project) => {
    if (isMobile()) {
      if (activeProject !== project.id) {
        setActiveProject(project.id);
        return;
      }

      onSelectProject?.(project);
      return;
    }

    onSelectProject?.(project);
  };

  return (
    <section
      ref={sectionRef}
      id="works"
      className="section section-works"
      aria-label="Studio 420 Selected Works"
    >
      <div className="container">
        <div className="works-word-w" aria-label="Works">
          <span className="works-word">WORKS</span>
        </div>

        <div className="space-87" />

        <div className="titile-section-work">
          <h2 className="h3-style">
            Good design communicates.
            <br />
            Great design surprises.
          </h2>

          <p className="works-section-meta">
            Explore our work across branding, AI-powered digital
            experiences, and package design.
          </p>

          <a
            className="works-designer-link"
            href="https://www.behance.net/arunpreman6456"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meet Our Designer ↗
          </a>
        </div>

        <div className="works-gallery works-gallery--hover">
          <div className="works-project-list">
            {PROJECTS_DATA.map((project, index) => {
              const isActive = activeProject === project.id;

              return (
                <article
                  key={project.id}
                  className={`works-project works-project--${index + 1} ${isActive ? 'is-hovered is-active' : ''
                    }`}
                  onMouseEnter={() => {
                    if (!isMobile()) {
                      setActiveProject(project.id);
                    }
                  }}
                  onMouseLeave={() => {
                    if (!isMobile()) {
                      setActiveProject(null);
                    }
                  }}
                >
                  <button
                    type="button"
                    className="works-project-row"
                    onClick={() => handleProjectClick(project)}
                    aria-label={`Preview project: ${project.title}. Tap again for details.`}
                    aria-expanded={isActive}
                  >
                    <span className="works-project-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="works-project-heading">
                      <span className="concept-pill">
                        {project.badge}
                      </span>

                      <span className="works-project-title">
                        {project.title}
                      </span>

                      <span className="work-category-tag">
                        {project.category}
                      </span>
                    </span>

                    <span
                      className="works-project-arrow"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </button>

                  <div
                    className={`works-hover-preview ${isActive ? 'is-visible' : ''
                      }`}
                    aria-hidden={!isActive}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} project preview`}
                      loading="lazy"
                    />

                    <div className="works-hover-caption">
                      <span>{project.category}</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
