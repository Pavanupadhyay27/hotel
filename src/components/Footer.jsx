'use client';

import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h2>Kingsukh<br />Guest<br />House</h2>
          <p>
            Discover a world of comfort, luxury, and adventure as you explore our curated selection of 
            hotels, making every moment of your getaway truly extraordinary.
          </p>
          <a
            href="https://wa.me/919007062180"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.bookButton}
          >
            BOOK NOW
          </a>
        </div>

        <div className={styles.footerSection}>
          <h3>QUICK LINKS</h3>
          <ul className={styles.linksList}>
            <li>Browse Destinations</li>
            <li>Special Offers & Packages</li>
            <li>Room Types & Amenities</li>
            <li>Customer Reviews & Ratings</li>
            <li>Travel Tips & Guides</li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>OUR SERVICES</h3>
          <ul className={styles.linksList}>
            <li>Concierge Assistance</li>
            <li>Flexible Booking Options</li>
            <li>Airport Transfers</li>
            <li>Wellness & Recreation</li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>CONTACT US</h3>          <div className={styles.contactList}>
            <p>
              <span className={styles.icon}>📍</span>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Kingsukh+Guest+House+Barshal+Water+Tank+Manpur+Barhanti+West+Bengal+723156" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.addressLink}
              >
                Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
              </a>
            </p>            <p>
              <span className={styles.icon}>✉️</span>
              <a 
                href="mailto:kkghosh0099@gmail.com"
                className={styles.addressLink}
              >
                kkghosh0099@gmail.com
              </a>
            </p>
            <p>
              <span className={styles.icon}>📞</span>
              <a 
                href="tel:+919007062180"
                className={styles.addressLink}
              >
                +91 9007062180
              </a>
            </p>
          </div>
          <div className={styles.socialLinks}>            <a href="https://www.facebook.com/kingsukhguesthouse" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/facebook.png" alt="Facebook" width={20} height={20} />
            </a>
            <a href="https://www.instagram.com/kingsukhguesthouse/" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/instagram.png" alt="Instagram" width={20} height={20} />
            </a>
            <a href="https://www.youtube.com/@kingsukhguesthouse" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/youtube.png" alt="YouTube" width={20} height={20} />
            </a>
            <a href="https://twitter.com/kingsukhguest" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20}>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>Copyright © 2025 Kingsukh Guest House. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
