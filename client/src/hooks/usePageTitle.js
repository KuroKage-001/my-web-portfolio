import { useEffect } from 'react';

/**
 * Custom hook to set the page title dynamically
 * @param {string} title - The page-specific title (e.g., "About", "Projects")
 */
export const usePageTitle = (title) => {
  useEffect(() => {
    const baseTitle = 'Leo Esc';
    
    if (title) {
      document.title = `${title} | ${baseTitle}`;
    } else {
      document.title = `${baseTitle} | Web Developer`;
    }
    
    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = `${baseTitle} | Web Developer`;
    };
  }, [title]);
};
