
import React, { useEffect, useRef } from 'react';

export default function OpeningPage({ isActive, onEnterProfile }) {
  const hasTransitioned = useRef(false);

  useEffect(() => {
    if (!isActive) {
      hasTransitioned.current = false;
      return;
    }

    let accumulatedDelta = 0;

    const enterProfileOnce = () => {
      if (hasTransitioned.current) return;

      hasTransitioned.current = true;
      onEnterProfile();
    };

    const handleWheel = (e) => {
      accumulatedDelta += e.deltaY;

      if (accumulatedDelta > 35) {
        enterProfileOnce();
      }
    };

    const handleKeyDown = (e) => {
      if (
        e.key === 'Enter' ||
        e.key === ' ' ||
        e.key === 'ArrowDown'
      ) {
        if (e.key === ' ') e.preventDefault();
        enterProfileOnce();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isActive, onEnterProfile]);

  const handleClick = () => {
    if (!isActive || hasTransitioned.current) return;

    hasTransitioned.current = true;
    onEnterProfile();
  };

  return (
    <section
      data-home-overlay="true"
      aria-label="Studio 420 First Landing Page"
      className={`opening-screen ${isActive ? '' : 'is-hidden'}`}
      style={{ backgroundColor: '#000000' }}
    >
      {/* Background video */}
      <video
        className="opening-bg-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/studio420-bg.mp4" type="video/mp4" />
      </video>

      {/* Existing click-to-enter overlay */}
      <button
        type="button"
        data-home-overlay-trigger="true"
        aria-label="Enter Studio 420 Profile"
        className="opening-trigger-overlay"
        onClick={handleClick}
        tabIndex={isActive ? 0 : -1}
      />
    </section>
  );
}
