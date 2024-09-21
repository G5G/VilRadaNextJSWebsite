'use client'
import React, { useEffect } from 'react';
import styles from './Aboutme.module.css';
const AboutmePage = () => {
  useEffect(() => {
    if(typeof window !== "undefined"){
      const ScrollReveal = require('scrollreveal');
      const sr = ScrollReveal.default({
        delay: 100,
        distance: '500px',
        origin: 'left',
        reset: true,
      });
      sr.reveal(".reveal");
    }
  }, []);

  return (
    <div className="reveal">
      <div className={styles["main"]}>
        <h2>About Me</h2>
        <p className={styles["about-me"]}> 
            Hello, I am Vilius Radavicius, a dedicated full-stack software engineer fueled by a profound passion for artificial intelligence.. 
        </p>
      </div>
    </div>
  );
};

export default AboutmePage;
