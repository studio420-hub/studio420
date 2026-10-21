import React from 'react';
import WordmarkSvg from './WordmarkSvg';

/**
 * HERO HOME SECTION (NOTH Reference Recreation)
 * Massive full-width responsive vector wordmark with editorial coordinates and social links.
 */
export default function HeroSection() {
  return (
    <section className="section section-hero-home" aria-label="Studio 420 Hero Wordmark">
      <div className="container">
        {/* Full-Width Giant Vector Wordmark */}
        <div className="hero-wordmark-container">
          <WordmarkSvg className="hero-wordmark-svg" color="#ffffff" />
        </div>

        {/* Bottom Metadata & Coordinates Bar */}
        <div className="link-hero-bottom-w">
          <div className="link-hero-bottom-left">
            <span className="status-dot" aria-hidden="true" />
            <span>Creative brand studio — Branding · AI Web · Packaging · Social Content</span>
          </div>

          <div className="link-hero-lang-w">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              LKDN
            </a>
            <span style={{ color: 'var(--color-border-subtle)' }}>/</span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              INSTAGRAM
            </a>
            <span style={{ color: 'var(--color-border-subtle)' }}>/</span>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noreferrer"
              className="social-link hide-mob"
            >
              BEHANCE
            </a>
            <span style={{ color: 'var(--color-border-subtle)' }} className="hide-mob">/</span>
            <span style={{ color: '#ffffff', fontWeight: 600 }}>EN</span>
          </div>
        </div>
      </div>
    </section>
  );
}
