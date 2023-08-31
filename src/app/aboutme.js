'use client'
// components/ScrollReveal.js
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import styles from './Aboutme.module.css';
//import styles from './CodeAnimation.module.css'; // Import your CSS file
const AboutmePage = () => {
  useEffect(() => {
    // Initialize ScrollReveal with options
    ScrollReveal().reveal('.reveal', {
      delay: 100,
      distance: '500px',
      origin: 'left',
      reset: true,

    });
  }, []);

  return (
    <div className="reveal">
      
      <div className={styles["main"]}>

        <h2>About Me</h2>
        <p className={styles["about-me"]}> 
            Hello, I'm Vilius Radavicius, a dedicated full-stack software engineer fueled by a profound passion for artificial intelligence 
        </p>
        

      </div>
      
    </div>
  );
};

export default AboutmePage;
