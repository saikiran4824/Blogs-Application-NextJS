'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white dark:text-black my-4">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center text-gray-400 dark:text-white text-sm border-t border-gray-700 pt-4">
          <p>
            © {new Date().getFullYear()} Sai Kiran 💖 Preethi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
