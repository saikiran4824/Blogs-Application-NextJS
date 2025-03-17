'use client';
import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Trigger the button display when the scroll position is within 100px of the bottom
      if (documentHeight - scrollPosition < 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 px-4 py-2 text-sm font-semibold text-white dark:text-black bg-gray-800 dark:bg-gray-200 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-300 transition-all shadow-lg"
      >
        Move to Top
      </button>
    )
  );
};

export default ScrollToTopButton;
