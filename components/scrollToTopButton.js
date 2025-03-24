'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link'; // Import Link component for navigation
import { Button } from './ui/button';

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
      <div className="fixed flex space-x-4 bottom-6 right-8 ">
        <Link href="/blog">
          <Button
            variant="default" 
            size="sm"
            className="w-full shadow-lg hover:bg-primary/90 dark:hover:bg-primary/80 transition-all"
          >
            View Other Blogs
          </Button>
        </Link>
        <Button
          onClick={scrollToTop}
          variant="default" 
          size="sm" 
          className="w-full shadow-lg hover:bg-primary/90 dark:hover:bg-primary/80 transition-all"
        >
          Move to Top
        </Button>
      </div>
    )
  );
};

export default ScrollToTopButton;
