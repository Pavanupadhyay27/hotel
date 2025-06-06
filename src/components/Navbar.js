'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from '@/styles/Navbar.module.css';
import { scrollToSection, debounce, getCurrentSection } from '@/utils/navigation';

export default function Navbar() {  
  const [activeSection, setActiveSection] = useState('home');
  const sections = ['home', 'about', 'services', 'gallery', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      // Find which section is in view
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 160; // 80px (navbar) + 80px (padding)

      for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
    setActiveSection(sectionId);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <div className={styles.logoText} onClick={(e) => handleNavClick(e, 'home')}>
          <span>Kingsukh</span>
          <span>Guest House</span>
        </div>
      </div>
      
      <nav className={styles.links}>
        {sections.map(section => (
          <a 
            key={section}
            href={`#${section}`}
            className={`${styles.navLink} ${activeSection === section ? styles.active : ''}`}
            onClick={(e) => handleNavClick(e, section)}
          >
            {section === 'about' ? 'About Us' : 
             section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </nav>
      
      <a
        href="https://wa.me/919007062180"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.navBookBtn}
      >
        BOOK NOW
      </a>
    </header>
  );
}
