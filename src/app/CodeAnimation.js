'use client';
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import styles from './CodeAnimation.module.css'; // Import your CSS file

function CodeAnimation() {
  const titleEl = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Your Vision, Coded to Reality','With a passion for AI and a knack for innovation','Explore my portfolio and discover the possibilities.',"Let's bring your projects to life, one line of code at a time.",'Driven by curiosity, fueled by technology.'],
      typeSpeed: 80,
      showCursor: false,
      backDelay: 3000,
      backSpeed: 50,
      loop: true,
      shuffle: true
      
    };

    const typed = new Typed(titleEl.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={styles["custom-div"]}>
      <h1 ref={titleEl} className={styles["custom-typed-text"]}></h1>
    </div>
  );
}

export default CodeAnimation;
