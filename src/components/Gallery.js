"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

const Gallery = () => {
  const images = [
    { src: '/assets/out.jpg', alt: 'Hotel Outside View', span: true },
    { src: '/assets/large.jpg', alt: 'Mountain View' },
    { src: '/assets/recep.jpg', alt: 'Reception Room' },
    { src: '/assets/palash.webp', alt: 'Palash View', span: true },
    { src: '/assets/room1.jpg', alt: 'Hotel Room' },
    { src: '/assets/mithonDam.webp', alt: 'Mithon Dam' },
    { src: '/assets/baranti.webp', alt: 'Baranti View', span: true },
    { src: '/assets/small.jpg', alt: 'Room Interior' },
    { src: '/assets/flower.jpg', alt: 'Flower View' },
    { src: '/assets/ayodhya.webp', alt: 'Ayodhya View' }
  ];
  const [showAll, setShowAll] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Use useEffect to handle client-side mounting
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Display images based on showAll state
  const displayedImages = showAll ? images : images.slice(0, 6);

  return mounted ? (
    <section id="gallery" className={styles.gallery}>      <div className={styles.galleryContent}>
        <div className={styles.sectionTitle}>
          <h2>GALLERY</h2>
        </div>

        <div className={styles.galleryGrid}>
          {displayedImages.map((image, index) => (
            <div key={index} className={styles.galleryItem}>
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className={styles.galleryImage}
                loading={index < 3 ? "eager" : "lazy"}
                onError={(e) => {
                  e.currentTarget.src = '/assets/fallback-image.jpg';
                }}
              />
            </div>
          ))}
        </div>

        <div className={styles.seeAllContainer}>          <button 
            key={`gallery-button-${mounted}`}
            className={styles.seeAllButton}
            onClick={() => setShowAll(!showAll)}
            aria-label={showAll ? 'Show fewer images' : 'Show all images'}
          >
            {showAll ? 'Show Less' : 'See All Images'}
          </button>
        </div>
      </div>    </section>
  ) : null;
};

export default Gallery;
