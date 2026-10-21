
import React, { useState } from 'react';

const SERVICES_DATA = [
  {
    id: 'branding',
    num: '01',
    name: 'Branding',
    tagline: 'Distinctive identities. Lasting impressions.',
    description:
      'We create distinctive brand identities with cohesive visuals, typography, and colors that make businesses recognizable.',
    image: '/images/branding.png',
  },
  {
    id: 'social-media',
    num: '02',
    name: 'Social Media Content',
    tagline: 'Content that captures attention.',
    description:
      'We create engaging social media visuals and campaigns that keep your brand consistent and memorable.',
    image: '/images/social-media.png',
  },
  {
    id: 'ai-website',
    num: '03',
    name: 'AI Website Development',
    tagline: 'Digital experiences built to perform.',
    description:
      'We build modern, high-performing websites with thoughtful design, smooth interactions, and AI-assisted development.',
    image: '/images/ai-website-development.png',
  },
  {
    id: 'logo-design',
    num: '04',
    name: 'Logo Design',
    tagline: 'One mark. A lasting identity.',
    description:
      'We design distinctive logos that capture your brand’s personality and stay recognizable across every platform.',
    image: '/images/logo-design.png',
  },
  {
    id: 'pitch-deck',
    num: '05',
    name: 'Pitch Deck Design',
    tagline: 'Make your ideas impossible to ignore.',
    description:
      'We turn complex ideas, data, and business plans into clear, compelling presentations that make an impact.',
    image: '/images/pitch-deck-design.png',
  },
  {
    id: 'packaging-design',
    num: '06',
    name: 'Packaging Design',
    tagline: 'Designed to stand out.',
    description:
      'We design distinctive packaging that elevates your product and creates a memorable first impression.',
    image: '/images/packaging-design.png',
  },
];

/**
 * SERVICES SECTION
 * Six creative services with interactive inspection
 * and dynamic image previews.
 */
export default function ServicesSection() {
  const [activeService, setActiveService] = useState(0);

  const active = SERVICES_DATA[activeService];

  return (
    <section
      id="services"
      className="section section-services"
      aria-label="Studio 420 Creative Services"
    >
      <div className="container">
        <div className="space-87" />

        {/* Section Header */}
        <div className="services-header-row">
          <div className="tag-label">( What We Create )</div>

          <h2 className="services-main-title">
            Six creative disciplines.
            <br />
            <span style={{ color: 'var(--color-crimson)' }}>
              Zero generic solutions.
            </span>
          </h2>

          <p className="services-header-sub">
            We provide full-spectrum brand and digital craft. From strategic
            visual identity and physical packaging to AI-assisted website
            development and investor storytelling.
          </p>
        </div>

        {/* Interactive Services Layout */}
        <div className="services-interactive-layout">
          {/* Service List */}
          <div className="services-list-col">
            {SERVICES_DATA.map((service, index) => {
              const isActive = activeService === index;

              return (
                <div
                  key={service.id}
                  className={`service-item-row ${isActive ? 'is-active' : ''
                    }`}
                  onClick={() => setActiveService(index)}
                  onMouseEnter={() => setActiveService(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveService(index);
                    }
                  }}
                  aria-expanded={isActive}
                >
                  <div className="service-row-header">
                    <span className="service-row-num">
                      {service.num}
                    </span>

                    <h3 className="service-row-name">
                      {service.name}
                    </h3>

                    <span className="service-row-arrow">→</span>
                  </div>

                  <div className="service-row-content">
                    <p className="service-row-desc">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dynamic Service Preview */}
          <div className="services-preview-col">
            <div className="service-preview-card">
              <div className="service-preview-img-w">
                <img
                  src={active.image}
                  alt={active.name}
                  className="service-preview-img"
                  loading="lazy"
                />
              </div>

              <div className="service-preview-meta">
                <div className="service-preview-top">
                  <span className="service-preview-badge">
                    {active.num} // DISCIPLINE
                  </span>

                  <span className="service-preview-active-name">
                    {active.name}
                  </span>
                </div>

                <p className="service-preview-tagline">
                  {active.tagline}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
