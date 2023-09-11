'use client'
import React, {useEffect,useRef} from 'react';
import styles from './Aboutme.module.css';

function AboutmePage() {
  const revealRef = useRef(null);
  const skillsRef = useRef(null);
  useEffect(() => {
    if(typeof window !== 'undefined'){
      import('scrollreveal').then((module) => {
        const ScrollReveal = module.default;
        const reveal = {
          delay: 100,
          distance: '500px',
          origin: 'left',
          reset: true
        }
        const skillsReveal = {
          delay: 1000,
          distance: '5000px',
          origin: 'top',
          reset: true
        }
        ScrollReveal().reveal(revealRef.current, reveal);
        ScrollReveal().reveal(skillsRef.current, skillsReveal);
      });
    }
  }, []);

  return(
    <div>
    <div className="reveal" ref={revealRef}>
      <div className={styles["main"]}>
        <h2>About Me</h2>
        <p className={styles["about-me"]}> 
            Hello, I am Vilius Radavicius, a dedicated full-stack software engineer fueled by a profound passion for artificial intelligence.
        </p>
        
      </div>
    </div>
    <div className="skills" ref={skillsRef}>
      <div className={styles["main"]}>
        <h2>Skills</h2>
        <p className={styles["about-me"]}>

        </p>

      </div>
    </div>
    </div>
    );
  };

export default AboutmePage;

