
import React, { useState } from 'react';

/**
 * FLOATING PILL MENU
 * Studio 420 fullscreen navigation.
 * Existing styling and navigation preserved.
 */
export default function FloatingMenu({
  onReturnToOpening,
  onBookDiscoveryCall,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const studioEmail = 'lets420@studio420.in';

  const scrollTo = (id) => {
    setIsOpen(false);

    requestAnimationFrame(() => {
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  };

  const handleBack = () => {
    setIsOpen(false);

    if (typeof onReturnToOpening === 'function') {
      onReturnToOpening();
    }
  };

  const handleDiscoveryCall = () => {
    setIsOpen(false);

    if (typeof onBookDiscoveryCall === 'function') {
      onBookDiscoveryCall();
    }
  };

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(studioEmail);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = studioEmail;
        textArea.setAttribute('readonly', '');
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();

        const copied = document.execCommand('copy');
        textArea.remove();

        if (!copied) {
          window.location.href = `mailto:${studioEmail}`;
          return;
        }
      }

      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${studioEmail}`;
    }
  };

  return (
    <>
      <nav className="menu-w" aria-label="Studio 420 Navigation">
        {/* Menu Button */}
        <button
          type="button"
          className="menu-btn"
          onClick={() => setIsOpen(true)}
          aria-label="Open Navigation Menu"
          aria-expanded={isOpen}
        >
          <span>Menu</span>

          <div className="menu-svg-dots" aria-hidden="true">
            <div className="menu-dot" />
            <div className="menu-dot" />
            <div className="menu-dot" />
            <div className="menu-dot" />
          </div>
        </button>
      </nav>

      {/* Fullscreen Navigation Drawer */}
      {isOpen && (
        <div
          className="menu-drawer-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Studio 420 Navigation Menu"
        >
          <button
            type="button"
            className="menu-drawer-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close Navigation"
          >
            Close [esc]
          </button>

          <div className="menu-drawer-nav">
            {/* 01 — Selected Works */}
            <a
              href="#works"
              className="drawer-nav-item"
              onClick={(event) => {
                event.preventDefault();
                scrollTo('works');
              }}
            >
              01 — Selected Works
            </a>

            {/* 02 — Six Core Services */}
            <a
              href="#services"
              className="drawer-nav-item"
              onClick={(event) => {
                event.preventDefault();
                scrollTo('services');
              }}
            >
              02 — Six Core Services
            </a>

            {/* 03 — About Us */}
            <a
              href="#about-us"
              className="drawer-nav-item"
              onClick={(event) => {
                event.preventDefault();
                scrollTo('about-us');
              }}
            >
              03 — About Us
            </a>

            {/* 04 — Contact & Booking */}
            <a
              href="#footer"
              className="drawer-nav-item"
              onClick={(event) => {
                event.preventDefault();
                scrollTo('footer');
              }}
            >
              04 — Contact &amp; Booking
            </a>

            {/* Existing Back, Discovery Call and Email Actions */}
            <div
              style={{
                marginTop: '2rem',
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <button
                type="button"
                className="btn-primary"
                onClick={handleBack}
              >
                <span>← Back</span>
              </button>

              <button
                type="button"
                className="btn-primary"
                onClick={handleDiscoveryCall}
              >
                Book a Discovery Call
              </button>

              <a
                href={`mailto:${studioEmail}`}
                className="btn-secondary"
              >
                <span>drop us an email</span>
                <span className="arobase-badge" aria-hidden="true">
                  @
                </span>
              </a>
            </div>

            {/* Manual fallback if the visitor's email app doesn't open */}
            <div
              style={{
                marginTop: '0.75rem',
                display: 'flex',
                gap: '0.75rem',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--color-text-secondary)',
                }}
              >
                {emailCopied
                  ? `Copied: ${studioEmail}`
                  : 'Email app not opening?'}
              </span>

              <button
                type="button"
                onClick={handleCopyEmail}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--color-text-secondary)',
                  textDecoration: 'underline',
                  textUnderlineOffset: '3px',
                }}
              >
                {emailCopied ? 'Copied ✓' : 'Copy email instead'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
