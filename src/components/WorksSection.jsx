
import React from 'react';

export const PROJECTS_DATA = [
  {
    id: 'wander',
    title: 'WANDER — TRAVEL BRAND IDENTITY',
    subtitle:
      'A distinctive travel identity built for exploration and discovery.',
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
    subtitle:
      'An AI-assisted digital storefront designed around modern shopping.',
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
    subtitle:
      'A cohesive food packaging identity designed to stand out.',
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

/**
 * WORKS SECTION
 * Selected projects across branding, digital design, and package design.
 * Preserves the existing project selection interaction.
 */
export default function WorksSection({ onSelectProject }) {
  return (
    <section
      id="works"
      className="section section-works"
      aria-label="Studio 420 Selected Works"
    >
      <div className="container">
        {/* Works Heading */}
        <div className="works-word-w" aria-label="Works">
          <span className="works-word">WORKS</span>
        </div>

        <div className="space-87" />

        {/* Section Introduction */}
        <div className="titile-section-work">
          <h2 className="h3-style">
            Good design communicates.
            <br />
            Great design surprises.
          </h2>

          <p className="works-section-meta">
            Explore our work across branding,
            AI-powered digital experiences, and package design.
          </p>

          <a
            href="https://www.behance.net/arunpreman6456"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: '20px',
              fontSize: '24px',
              fontWeight: 900,
              color: '#ffffff',
              textDecoration: 'none',
              fontFamily: 'inherit',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.color = '#ff003c';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.color = '#ffffff';
            }}
          >
            Meet Our Designer ↗
          </a>
        </div>

        {/* Featured Projects */}
        <div className="work_list">
          {PROJECTS_DATA.map((project) => (
            <article key={project.id} className="work_item">
              <div className="work-header-row">
                <div>
                  <div className="concept-pill">
                    {project.badge}
                  </div>

                  <h3 className="title-work">
                    {project.title}
                  </h3>
                </div>

                <div className="work-header-right">
                  <span className="work-category-tag">
                    {project.category}
                  </span>

                  <p className="short-p-work">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              <div
                className="work-link"
                onClick={() => onSelectProject?.(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (
                    (e.key === 'Enter' || e.key === ' ') &&
                    onSelectProject
                  ) {
                    e.preventDefault();
                    onSelectProject(project);
                  }
                }}
                aria-label={`View project details: ${project.title}`}
              >
                <div className="img-work-w">
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.category}`}
                    className="img-work"
                    loading="lazy"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
