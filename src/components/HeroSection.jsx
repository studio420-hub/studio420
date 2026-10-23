
import React, { useEffect, useRef } from 'react';

/**
 * HERO HOME SECTION
 * Studio 420 wordmark with cinematic mobile reveal.
 */
export default function HeroSection() {
  const sectionRef = useRef(null);

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

  return (
    <section
      ref={sectionRef}
      className="section section-hero-home"
      aria-label="Studio 420 Hero Wordmark"
    >
      <div className="container">
        <div className="hero-wordmark-container">
          <img
            src="/images/studio420-logo.png"
            alt="Studio 420"
            className="hero-wordmark-svg"
          />
        </div>

        <div className="link-hero-bottom-w">
          <div className="link-hero-bottom-left">
            <span className="status-dot" aria-hidden="true" />

            <span>
              Creative brand studio — Branding · AI Web · Packaging ·
              Social Content
            </span>
          </div>

          <div className="link-hero-lang-w">
            <a
              href="https://www.linkedin.com/company/studio420in"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              LKDN
            </a>

            <span style={{ color: 'var(--color-border-subtle)' }}>
              /
            </span>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              INSTAGRAM
            </a>

            <span style={{ color: 'var(--color-border-subtle)' }}>
              /
            </span>

            <a
              href="https://www.behance.net/arunpreman6456"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              BEHANCE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
