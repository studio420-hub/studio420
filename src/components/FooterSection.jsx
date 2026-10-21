
import React, { useState } from 'react';
import WordmarkSvg from './WordmarkSvg';

const STUDIO_EMAIL = 'lets420@studio420.in';

export default function FooterSection({ onBookDiscoveryCall }) {
  const [showEmailFallback, setShowEmailFallback] = useState(false);
  const [copyMessage, setCopyMessage] = useState('');

  const handleEmailClick = (e) => {
    e.preventDefault();
    setShowEmailFallback(true);
    setCopyMessage('');

    // Attempt to open the user's default email application.
    window.location.href = `mailto:${STUDIO_EMAIL}`;
  };

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(STUDIO_EMAIL);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = STUDIO_EMAIL;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();

        const copied = document.execCommand('copy');
        document.body.removeChild(textArea);

        if (!copied) {
          throw new Error('Copy failed');
        }
      }

      setCopyMessage('Email copied!');
    } catch {
      setCopyMessage(`Copy unavailable. Email: ${STUDIO_EMAIL}`);
    }
  };

  return (
    <footer
      id="footer"
      className="section-footer"
      aria-label="Studio 420 Footer"
    >
      <div className="container">
        {/* Giant Call-to-Action */}
        <h2 className="h1-home">
          Let’s build
          <br />
          <span style={{ color: 'var(--color-crimson)' }}>
            something bold.
          </span>
        </h2>

        {/* Action Buttons & Socials */}
        <div className="footer-actions-row">
          <div className="footer-buttons-group">
            <button
              type="button"
              className="btn-primary"
              onClick={onBookDiscoveryCall}
            >
              <span>Book a discovery call</span>
              <svg
                className="btn-arrow-icon"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M8.60254 0.353516L13.1188 4.86981L8.60254 9.3861"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <line
                  y1="5.01562"
                  x2="13.1188"
                  y2="5.01562"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </button>

            <a
              href={`mailto:${STUDIO_EMAIL}`}
              className="btn-secondary"
              onClick={handleEmailClick}
            >
              <span>Drop us an email</span>
              <span className="arobase-badge" aria-hidden="true">
                @
              </span>
            </a>



            {showEmailFallback && (
              <div
                className="email-fallback"
                style={{
                  display: 'flex',
                  gap: '0.75rem',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  marginTop: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--color-text-secondary)',
                }}
              >
                <span>
                  {copyMessage === 'Email copied!'
                    ? `Copied: ${STUDIO_EMAIL}`
                    : 'Email app not opening?'}
                </span>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    margin: 0,
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--color-text-secondary)',
                    textDecoration: 'underline',
                    textUnderlineOffset: '3px',
                    cursor: 'pointer',
                  }}
                >
                  {copyMessage === 'Email copied!'
                    ? 'Copied ✓'
                    : 'Copy email instead'}
                </button>
              </div>
            )}


          </div>

          <div className="footer-socials">
            <a
              href="https://www.linkedin.com/company/studio420in"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              LinkedIn
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              Instagram
            </a>

            <a
              href="https://www.behance.net/arunpreman6456"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              Behance
            </a>
          </div>
        </div>

        {/* Full Width Footer Vector Wordmark */}
        <div className="footer-svg-w">
          <WordmarkSvg
            className="footer-wordmark-svg"
            color="#ffffff"
            numberColor="#ffffff"
          />
        </div>

        {/* Colophon Metadata Row */}
        <div className="footer-colophon-row">
          <div>©2026 Studio 420 — Creative Brand Studio</div>
          <div className="hide-mob">
            Branding · Social Media · AI Web · Logo · Pitch Decks · Packaging
          </div>
          <div>All creative concepts &amp; visual systems reserved</div>
        </div>
      </div>
    </footer>
  );
}
