'use client';

import Image from 'next/image';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact.jsx';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <main className={styles.pageWrapper}>
      <section id="home" className={styles.hero}>
        <div className={styles.overlay}>
          <p className={styles.tagline}>Simple - Unique - Friendly</p>
          <h1 className={styles.title}>
            Make Yourself At Home<br />
            In Our <span className={styles.highlight}>Guest House</span>.
          </h1>
          <a
            href="https://wa.me/919007062180"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.bookNow}
          >
            BOOK NOW
          </a>
        </div>
      </section>

      <section id="about" className={styles.about}>
        <div className={styles.about__container}>
          <div className={styles.aboutImage}>
            <Image 
              src="/assets/out.jpg" 
              alt="Kingsukh Guest House"
              width={800}
              height={600}
              priority
              className={styles.aboutImg}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className={styles.aboutContent}>
            <div className={styles.aboutHeader}>
              <span>ABOUT US</span>
              <div className={styles.headerLine}></div>
            </div>
            <h2>The Best Holidays Start Here!</h2>
            <p>
              Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of{' '}
              <span className={styles.highlight}>Biharinath Hill</span>, <span className={styles.highlight}>Baranti Hill</span>,{' '}
              <span className={styles.highlight}>Susunia Hill</span>, <span className={styles.highlight}>Joychandi Hill</span>,{' '}
              <span className={styles.highlight}>Garhpanchkot</span>, <span className={styles.highlight}>Baranti Dam</span>,{' '}
              <span className={styles.highlight}>Maithon Dam</span>, and the captivating{' '}
              <span className={styles.highlight}>Panchat Dam</span>. Revel in the embrace of comfort, relish delightful meals, and unwind in our{' '}
              verdant garden oasis.
            </p>            <div className={styles.contactDetails}>
              <p>
                <span><i>📍</i>Address:</span>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Kingsukh+Guest+House+Barshal+Water+Tank+Manpur+Barhanti+West+Bengal+723156"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.addressLink}
                >
                  Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
                </a>
              </p>
              <p>
                <span><i>📞</i>Contact:</span>
                <a 
                  href="tel:+919007062180"
                  className={styles.addressLink}
                >
                  +91 9007062180
                </a>
              </p>
            </div>
            <a
              href="https://wa.me/919007062180"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.bookNow}
            >
              BOOK NOW
            </a>
          </div>
        </div>
      </section>

      <section className={styles.livingRoom}>
        <div className={styles.sectionTitle}>
          <h2>OUR LIVING ROOM</h2>
        </div>
        
        <div className={styles.roomsGrid}>
          <div className={styles.roomCard}>
            <div className={styles.roomImage}>
              <Image
                src="/assets/large.jpg"
                alt="Cozy Haven Room"
                width={600}
                height={400}
                className={styles.roomImg}
              />
              <div className={styles.iconGroup}>
                <div className={styles.icon}>❤️</div>
                <div className={styles.icon}>↗️</div>
                <div className={styles.icon}>🛡️</div>
              </div>
            </div>
            <div className={styles.roomContent}>
              <h3 className={styles.roomTitle}>Cozy Haven Room</h3>
              <p className={styles.roomDescription}>
                Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.
              </p>
              <p className={styles.roomPrice}>Starting from Rs. 1000/night</p>
              <a
                href="https://wa.me/919007062180?text=I'm%20interested%20in%20booking%20the%20Cozy%20Haven%20Room"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.bookNowBtn}
              >
                BOOK NOW
              </a>
            </div>
          </div>

          <div className={styles.roomCard}>
            <div className={styles.roomImage}>
              <Image
                src="/assets/small.jpg"
                alt="Spacious Serenity Suite"
                width={600}
                height={400}
                className={styles.roomImg}
              />
              <div className={styles.iconGroup}>
                <div className={styles.icon}>❤️</div>
                <div className={styles.icon}>↗️</div>
                <div className={styles.icon}>🛡️</div>
              </div>
            </div>
            <div className={styles.roomContent}>
              <h3 className={styles.roomTitle}>Spacious Serenity Suite</h3>
              <p className={styles.roomDescription}>
                Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.
              </p>
              <p className={styles.roomPrice}>Starting from Rs. 1500/night</p>
              <a
                href="https://wa.me/919007062180?text=I'm%20interested%20in%20booking%20the%20Spacious%20Serenity%20Suite"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.bookNowBtn}
              >
                BOOK NOW
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className={styles.services}>
        <div className={styles.servicesContent}>
          <div className={styles.sectionTitle}>
            <h2>OUR SERVICES</h2>
          </div>
          <div className={styles.servicesStats}>
            <div className={styles.statItem} data-aos="fade-up">
              <div className={styles.statNumber}>
                <span className={styles.digits}>100</span>
                <span>+</span>
              </div>
              <div className={styles.statLabel}>Bookings Completed</div>
            </div>
            <div className={styles.statItem} data-aos="fade-up" data-aos-delay="100">
              <div className={styles.statNumber}>
                <span className={styles.digits}>150</span>
                <span>+</span>
              </div>
              <div className={styles.statLabel}>Happy Customers</div>
            </div>
          </div>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon} style={{ background: 'linear-gradient(135deg, #e3f2fd, #bbdefb)' }}>
                <span>🛡️</span>
              </div>
              <h3>High Class Security</h3>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon} style={{ background: 'linear-gradient(135deg, #fff3e0, #ffe0b2)' }}>
                <span>🕒</span>
              </div>
              <h3>24 Hours Room Service</h3>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon} style={{ background: 'linear-gradient(135deg, #e8f5e9, #c8e6c9)' }}>
                <span>🍽️</span>
              </div>
              <h3>Restaurant</h3>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon} style={{ background: 'linear-gradient(135deg, #fce4ec, #f8bbd0)' }}>
                <span>🗺️</span>
              </div>
              <h3>Tourist Guide Support</h3>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className={styles.gallerySection}>
        <Gallery />
      </section>      <Contact />
    </main>
  );
}
