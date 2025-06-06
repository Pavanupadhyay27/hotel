'use client';

/**
 * Smoothly scrolls to a section with the given ID
 * @param {string} sectionId - The ID of the section to scroll to
 */
export const scrollToSection = (sectionId) => {
  try {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Add URL hash without scroll jump
      window.history.pushState(null, '', `#${sectionId}`);
    }
  } catch (error) {
    console.error('Error scrolling to section:', error);
  }
};

/**
 * Creates a debounced function that delays invoking func until after wait milliseconds
 * @param {Function} func - The function to debounce
 * @param {number} wait - The number of milliseconds to delay
 */
export const debounce = (func, wait = 100) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Determines which section is currently in view
 * @param {string[]} sectionIds - Array of section IDs to check
 * @param {number} offset - Optional offset from the top (default is navbar height)
 * @returns {string} The ID of the current section in view
 */
export const getCurrentSection = (sectionIds, offset = 80) => {
  const buffer = 100; // Buffer zone for more accurate detection

  for (const sectionId of sectionIds) {
    const element = document.getElementById(sectionId);
    if (element) {
      const rect = element.getBoundingClientRect();
      const top = rect.top - offset;
      const bottom = rect.bottom - offset;
      
      if (top <= buffer && bottom >= -buffer) {
        return sectionId;
      }
    }
  }
  
  return sectionIds[0]; // Default to first section if none found
};
