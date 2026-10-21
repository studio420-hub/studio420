
import React from 'react';

/**
 * BRAND BAR (Studio 420)
 * Crimson marquee bar with continuous scrolling branding.
 * INFO and Opening View buttons removed.
 */
export default function BrandBar({ isLanding, onToggleView }) {
  const marqueeUnits = Array.from({ length: 6 });

  return (
    <header
      id="info-panel"
      data-brand-bar="true"
      data-bar-mode={isLanding ? 'landing' : 'profile'}
      className={`brand-bar ${isLanding ? 'is-landing' : 'is-sticky'}`}
      onClick={() => {
        if (isLanding && onToggleView) {
          onToggleView();
        }
      }}
      style={{ cursor: isLanding ? 'pointer' : 'default' }}
      title={
        isLanding
          ? 'Click or scroll to enter Studio Profile'
          : 'Studio 420 Navigation Bar'
      }
    >
      <div className="brand-bar-inner">
        {/* Infinite Marquee Track */}
        <div
          data-marquee-cluster="true"
          className="marquee-track-container"
        >
          <div data-marquee-track="true" className="marquee-track">
            {marqueeUnits.map((_, idx) => (
              <div key={idx} className="marquee-unit">
                {/* Wordmark Lockup */}
                <div className="marquee-logo">
                  <span>STUDIO 420</span>
                  <span className="reg">®</span>
                </div>

                {/* Studio Definition */}
                <div className="marquee-tag">
                  <span className="bold">Creative Brand Studio</span>
                  <span className="normal">
                    Branding · AI Web · Packaging · Content
                  </span>
                </div>

                {/* Studio Location & Coordinates */}
                <div className="marquee-coords">
                  <span>12.9716° N, 77.5946° E</span>
                  <span>Bangalore, India</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
