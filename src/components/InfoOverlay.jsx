import React, { useEffect } from 'react';

/**
 * INFO OVERLAY (BOC Studio Reference Recreation)
 * Fullscreen crimson editorial sheet toggled by the Brand Bar (+) INFO button.
 * Details studio overview, 6 core services, ethos, and direct contact.
 */
export default function InfoOverlay({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="info-overlay-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Studio 420 Information & Services"
    >
      <div
        className="info-overlay-panel"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Row */}
        <div className="info-overlay-header">
          <div className="info-overlay-brand">
            <span className="info-brand-name">STUDIO 420 ®</span>
            <span className="info-brand-sub">Creative Brand Studio</span>
          </div>

          <button
            type="button"
            className="info-overlay-close-btn"
            onClick={onClose}
            aria-label="Close Info Panel"
          >
            <span>Close</span>
            <span className="close-icon">✕</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="info-overlay-content">
          {/* Mission / Manifesto Statement */}
          <div className="info-manifesto-block">
            <div className="info-label">( Studio Manifesto )</div>
            <h2 className="info-headline">
              We create, refresh and boost brands through identity, creative direction,
              social content, AI web engineering and packaging.
            </h2>
            <p className="info-lead">
              Studio 420 is a Bangalore-based creative studio refusing the generic. We operate at the intersection
              of bold graphic design, strategic narrative, and modern AI-assisted engineering to craft
              experiences that command attention and drive cultural relevance.
            </p>
          </div>

          {/* 6 Core Services Grid */}
          <div className="info-services-section">
            <div className="info-label">( Six Core Creative Services )</div>
            <div className="info-services-grid">
              <div className="info-service-card">
                <span className="service-idx">01</span>
                <h3>Branding</h3>
                <p>Complete brand identities, visual systems, creative direction, guidelines, and cross-channel brand applications.</p>
              </div>

              <div className="info-service-card">
                <span className="service-idx">02</span>
                <h3>Social Media Content</h3>
                <p>High-velocity visual content systems, promotional campaigns, editorial motion assets, and modular social feeds.</p>
              </div>

              <div className="info-service-card">
                <span className="service-idx">03</span>
                <h3>AI Website Development</h3>
                <p>Modern responsive websites built using AI-accelerated workflows, thoughtful interaction, and production-grade code.</p>
              </div>

              <div className="info-service-card">
                <span className="service-idx">04</span>
                <h3>Logo Design</h3>
                <p>Distinctive visual marks, responsive logotypes, scalable monograms, and proprietary brand iconography.</p>
              </div>

              <div className="info-service-card">
                <span className="service-idx">05</span>
                <h3>Pitch Deck Design</h3>
                <p>Compelling investor presentations, startup decks, visual storytelling, and decisive financial data visualizations.</p>
              </div>

              <div className="info-service-card">
                <span className="service-idx">06</span>
                <h3>Packaging Design</h3>
                <p>Tactile packaging concepts, structural unboxing experiences, cohesive label systems, and production-ready dielines.</p>
              </div>
            </div>
          </div>

          {/* Contact & Location Footer */}
          <div className="info-meta-row">
            <div>
              <div className="info-label">( Inquiries & Collaborations )</div>
              <a href="mailto:lets420@studio420.in" className="info-contact-link">
                lets420@studio420.in
              </a>
              <div className="info-hours">Response time: Within 24 hours</div>
            </div>

            <div>
              <div className="info-label">( Studio Coordinates )</div>
              <div className="info-coords-text">41.4120° N, 2.1580° E</div>
              <div className="info-city-text">Barcelona — Berlin — NYC</div>
            </div>

            <div>
              <div className="info-label">( Social Channels )</div>
              <div className="info-social-links">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
                <span>/</span>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
                <span>/</span>
                <a href="https://behance.net" target="_blank" rel="noreferrer">Behance</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
