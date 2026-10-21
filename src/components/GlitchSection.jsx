
import React, { useState, useEffect } from 'react';

const GLITCH_GLYPHS =
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=~[]{}|;:,.<>?/§';

export default function GlitchSection() {
  const [scrambleText, setScrambleText] = useState('WE ARE STUDIO 420');

  useEffect(() => {
    const original = 'WE ARE STUDIO 420';
    let iteration = 0;
    let interval = null;

    const runGlitch = () => {
      clearInterval(interval);
      iteration = 0;

      interval = setInterval(() => {
        setScrambleText(() => {
          return original
            .split('')
            .map((char, index) => {
              if (index < iteration) {
                return original[index];
              }

              if (char === ' ') return ' ';

              return GLITCH_GLYPHS[
                Math.floor(Math.random() * GLITCH_GLYPHS.length)
              ];
            })
            .join('');
        });

        if (iteration >= original.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 45);
    };

    runGlitch();

    const cycleTimer = setInterval(runGlitch, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(cycleTimer);
    };
  }, []);

  return (
    <section
      id="capabilities"
      className="section section-glitch"
      aria-label="Studio 420 Creative Engine"
    >
      <div className="container">
        <div className="glitch-text-w">
          <div className="glitch-terminal">
            <div className="glitch-line-header">
              <span>// SYSTEM: STUDIO_420_CREATIVE_CORE</span>
              <span>STATUS: PRODUCTION_ACTIVE</span>
            </div>

            <div className="glitch-ascii-box" aria-live="polite">
              {scrambleText}
              <br />

              <div
                className="glitch-disciplines-tags"
                aria-label="Disciplines: Branding, Social, AI Web, Logo, Decks, Packaging"
              >
                <span className="glitch-bracket">[</span>{' '}
                <span className="glitch-tag-item">BRANDING</span>{' '}
                <span className="glitch-separator">/</span>{' '}
                <span className="glitch-tag-item">SOCIAL</span>{' '}
                <span className="glitch-separator">/</span>{' '}
                <span className="glitch-tag-item">AI WEB</span>{' '}
                <span className="glitch-separator">/</span>{' '}
                <span className="glitch-tag-item">LOGO</span>{' '}
                <span className="glitch-separator">/</span>{' '}
                <span className="glitch-tag-item">DECKS</span>{' '}
                <span className="glitch-separator">/</span>{' '}
                <span className="glitch-tag-item glitch-last-item">
                  PACKAGING <span className="glitch-bracket">]</span>
                </span>
              </div>
            </div>

            <h3 className="finaltext">
              We engineer contemporary brand identities, interactive digital
              products, and tactile packaging for those ready to refuse the
              generic.
            </h3>
          </div>
        </div>

        {/* Meet Our Designer — bottom center */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px',
            paddingBottom: '20px',
          }}
        >
          <a
            href="https://www.behance.net/arunpreman6456"
            target="_blank"
            rel="noopener noreferrer"
            className="finaltext"
            style={{
              display: 'inline-block',
              marginTop: '20px',
              color: '#ffffff',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.color = '#ff003c';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.color = '#ffffff';
            }}
          >
            Meet Our Designer
          </a>
        </div>
      </div>
    </section>
  );
}
