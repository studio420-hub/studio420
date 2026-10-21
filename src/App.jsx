import React, { useState, useEffect, useCallback } from 'react';
import BrandBar from './components/BrandBar';
import OpeningPage from './components/OpeningPage';
import ProfilePage from './components/ProfilePage';
import Preloader from './components/Preloader';

export default function App() {
  // true = initial black opening screen
  // false = scrolling Studio 420 profile page
  const [isLanding, setIsLanding] = useState(true);
  const [isPreloading, setIsPreloading] = useState(true);

  // Enter the scrolling profile page.
  const enterProfile = useCallback(() => {
    setIsLanding(false);

    if (typeof window !== 'undefined') {
      window.history.pushState(
        { view: 'profile' },
        '',
        `${window.location.pathname}?view=profile`
      );

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      });
    }
  }, []);

  // Back from the menu returns to the scrolling profile page.
  const returnToOpening = useCallback(() => {
    setIsLanding(false);

    if (typeof window !== 'undefined') {
      window.history.replaceState(
        { view: 'profile' },
        '',
        window.location.pathname
      );

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      });
    }
  }, []);

  // BrandBar navigation.
  const toggleView = useCallback(() => {
    if (isLanding) {
      enterProfile();
    } else {
      // Return to the initial black opening screen.
      setIsLanding(true);

      if (typeof window !== 'undefined') {
        window.history.replaceState(
          { view: 'opening' },
          '',
          window.location.pathname
        );

        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant',
        });
      }
    }
  }, [isLanding, enterProfile]);

  // Synchronize browser Back and Forward navigation.
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(
        window.location.search
      );

      const isProfile =
        params.get('view') === 'profile' ||
        ['#profile', '#works', '#studio'].includes(
          window.location.hash
        );

      setIsLanding(!isProfile);

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      });
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener(
        'popstate',
        handlePopState
      );
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-crimson">
      <div className="film-grain" aria-hidden="true" />

      <BrandBar
        isLanding={isLanding}
        onToggleView={toggleView}
      />

      <OpeningPage
        isActive={isLanding}
        onEnterProfile={enterProfile}
      />

      <ProfilePage
        isActive={!isLanding}
        onReturnToOpening={returnToOpening}
      />

      {isPreloading && (
        <Preloader
          onComplete={() => setIsPreloading(false)}
        />
      )}
    </div>
  );
}