
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

export default function WorksSection({ onSelectProject }) {
  return (
    <section
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

        <div className="works-gallery">
          {PROJECTS_DATA.map((project, index) => (
            <article
              key={project.id}
              className={`works-project works-project--${index + 1}`}
            >
              <div className="works-project-header">
                <div className="works-project-heading">
                  <span className="concept-pill">
                    {project.badge}
                  </span>

                  <h3 className="works-project-title">
                    {project.title}
                  </h3>
                </div>

                <div className="works-project-info">
                  <span className="work-category-tag">
                    {project.category}
                  </span>

                  <p className="short-p-work">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="works-project-image"
                onClick={() => onSelectProject?.(project)}
                aria-label={`View project details: ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={`${project.title} — ${project.category}`}
                  loading="lazy"
                />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
