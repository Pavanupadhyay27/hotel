"use client";

import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../styles/Contact.module.css';

// Initialize EmailJS
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your public key

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        mobile_number: formData.mobile,
        message: formData.message,
        to_name: 'Kingsukh Guest House'
      };

      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your service ID
        'YOUR_TEMPLATE_ID', // Replace with your template ID
        templateParams
      );

      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        message: ''
      });

      // Show success message
      alert('Thank you for your message. We will get back to you soon!');
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Failed to send message. Please try again.'
      });
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <div className={styles.contactContainer}>
      <section id="contact" className={styles.contact}>
        <div className={styles.contactWrapper}>
          <div className={styles.contactInfo}>
            <div className={styles.sectionTitle}>
              <h2>Contact Us</h2>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <p>
                Beside Barshal Water Tank,<br />
                Manpur, Barhanti,<br />
                West Bengal 723156
              </p>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>              <a href="mailto:kkghosh0099@gmail.com">kkghosh0099@gmail.com</a>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <a href="tel:+919007062180">+91 9007062180</a>
            </div>
            <div className={styles.socialLinks}>              <a 
                href="https://www.facebook.com/kingsukhguesthouse" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialLink} 
                aria-label="Facebook"
              >
                <div className={styles.iconWrapper}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className={styles.tooltip}>Facebook</span>
                </div>
              </a>
              <a 
                href="https://www.instagram.com/kingsukhguesthouse/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <div className={styles.iconWrapper}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.897 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.897-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                  <span className={styles.tooltip}>Instagram</span>
                </div>
              </a>              <a 
                href="https://twitter.com/kingsukhguest" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialLink} 
                aria-label="Twitter"
              >
                <div className={styles.iconWrapper}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span className={styles.tooltip}>X (Twitter)</span>
                </div>
              </a>              <a 
                href="https://www.linkedin.com/company/kingsukh-guest-house" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialLink} 
                aria-label="LinkedIn"
              >
                <div className={styles.iconWrapper}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className={styles.tooltip}>LinkedIn</span>
                </div>
              </a>
            </div>
          </div>
          <div className={styles.contactForm}>
            <div className={styles.sectionTitle}>
              <h2>SEND A MESSAGE</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button 
                type="submit" 
                className={styles.sendButton}
                disabled={status.submitting}
              >
                {status.submitting ? 'Sending...' : 'Send'}
              </button>
              {status.error && (
                <div className={styles.errorMessage}>
                  {status.error}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
      <div className={styles.mapContainer}>
        <div className={styles.mapSection}>
          <div className={styles.sectionTitle}>
            <h2>WHERE TO FIND US</h2>
          </div>
          <div className={styles.mapContentWrapper}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5017351225647!2d86.85721547510981!3d23.586332378782714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1705088034844!5m2!1sen!2sin"
              className={styles.mapFrame}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kingsukh Guest House Location"
              aria-label="Kingsukh Guest House Location Map"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
