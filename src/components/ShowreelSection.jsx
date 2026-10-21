
import React from 'react';

/**
 * SHOWREEL / STATEMENT SECTION
 * Minimal editorial statement with the original headline and spacing.
 * The visual showcase, image, and modal have been removed.
 */
export default function ShowreelSection() {
  return (
    <section
      className="section section-showreel"
      aria-label="Studio 420 Statement"
    >
      <div className="container">
        <div className="space-150" />

        {/* Primary Manifesto Headline */}
        <h2 className="h1-home">
          Most brands <br className="show-mob" />
          produce content.
          <br />
          We <span className="highlight">prefer ideas</span>.
        </h2>

        <div className="space-65" />
      </div>
    </section>
  );
}
