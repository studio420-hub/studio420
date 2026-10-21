
import React, { useState, useEffect } from 'react';

const GLITCH_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*';

export default function Preloader({ onComplete }) {
  const [stage, setStage] = useState('initial');
  const [errorText, setErrorText] = useState('Error');

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let glitchInterval;

    const timers = [];

    const later = (callback, delay) => {
      const timer = setTimeout(callback, delay);
      timers.push(timer);
      return timer;
    };

    const startTransform = () => {
      clearInterval(glitchInterval);

      // Switch directly from Error to Studio.
      // Keep 420 visible in the same font.
      setErrorText('Studio');
      setStage('hold');

      // Let Studio 420 sit still before the zoom.
      later(() => {
        setStage('zoom');
      }, reducedMotion ? 50 : 1500);

      // Fade away only after the zoom finishes.
      later(() => {
        setStage('exit');
      }, reducedMotion ? 200 : 3500);

      later(() => {
        document.body.style.overflow = originalOverflow;
        onComplete?.();
      }, reducedMotion ? 300 : 4700);
    };

    if (reducedMotion) {
      setErrorText('Studio');
      setStage('hold');

      later(() => {
        setStage('zoom');
      }, 50);

      later(() => {
        setStage('exit');
      }, 250);

      later(() => {
        document.body.style.overflow = originalOverflow;
        onComplete?.();
      }, 350);
    } else {
      // Initial pause: let Error appear before glitching.
      later(() => {
        setStage('glitch');

        let count = 0;

        glitchInterval = setInterval(() => {
          count++;

          if (count >= 14) {
            clearInterval(glitchInterval);
            startTransform();
            return;
          }

          setErrorText(
            'Error'
              .split('')
              .map((char) => {
                if (Math.random() > 0.55) {
                  return GLITCH_CHARS[
                    Math.floor(Math.random() * GLITCH_CHARS.length)
                  ];
                }

                return char;
              })
              .join('')
          );
        }, 90);
      }, 1200);
    }

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(glitchInterval);
      document.body.style.overflow = originalOverflow;
    };
  }, [onComplete]);

  const isZoomed = stage === 'zoom' || stage === 'exit';

  return (
    <>
      <style>{`
        .preloader-overlay {
          position: fixed;
          inset: 0;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #050505;
          color: #ffffff;
          opacity: 1;
          visibility: visible;
          transition:
            opacity 1.2s ease,
            visibility 1.2s ease;
        }

        .preloader-overlay.is-exiting {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }

        .preloader-wordmark {
          display: flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;

          /* One consistent font through every stage */
          font-family: var(--font-display);
          font-size: clamp(42px, 10vw, 110px);
          font-weight: 800;
          letter-spacing: -0.04em;
          text-transform: uppercase;

          transform: scale(0.55);
          transform-origin: center;

          transition:
            transform 2s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 0.6s ease;
          will-change: transform;
        }

        /* Keep Error and Studio the same size and typeface */
        .preloader-error {
          display: inline-block;
          color: #ffffff;
          min-width: auto;
        }

        .preloader-number {
          display: inline-block;
          color: #ff003c;
          margin-left: 0.12em;
        }

        /* Error starts smaller */
        .preloader-wordmark.initial {
          transform: scale(0.38);
        }

        .preloader-wordmark.glitching {
          transform: scale(0.38);
        }

        /* Studio 420 holds at a medium size */
        .preloader-wordmark.hold {
          transform: scale(0.55);
        }

        /* Slow cinematic zoom */
        .preloader-wordmark.zoom {
          transform: scale(1.25);
        }

        .preloader-wordmark.glitching .preloader-error {
          animation: preloader-shake 0.12s steps(2, end) infinite;
          text-shadow: 2px 0 #ff003c, -2px 0 #ffffff;
        }

        .preloader-wordmark.hold .preloader-error,
        .preloader-wordmark.zoom .preloader-error {
          color: #ffffff;
          text-shadow: none;
          animation: none;
        }

        .preloader-wordmark.hold .preloader-number,
        .preloader-wordmark.zoom .preloader-number {
          color: #ff003c;
        }

        @keyframes preloader-shake {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(-2px, 1px);
          }
          50% {
            transform: translate(2px, -1px);
          }
          75% {
            transform: translate(-1px, -1px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .preloader-overlay,
          .preloader-wordmark {
            transition-duration: 0.01ms;
          }

          .preloader-wordmark.glitching .preloader-error {
            animation: none;
          }
        }
      `}</style>

      <div
        className={`preloader-overlay ${stage === 'exit' ? 'is-exiting' : ''
          }`}
        role="status"
        aria-label="Studio 420 loading"
      >
        <div
          className={`preloader-wordmark ${stage}`}
        >
          <span className="preloader-error">{errorText}</span>
          <span className="preloader-number">420</span>
        </div>
      </div>
    </>
  );
}
