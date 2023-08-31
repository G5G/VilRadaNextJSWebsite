import React from 'react';
import MouseTracker from './page.Cursor.js';
import styles from './page.module.css';
import Image from 'next/image';
import CodeAnimation from './CodeAnimation.js';
import AboutmePage from './aboutme.js';
const Page = () => {
  return (
    
    <main className={styles.main}>
      <MouseTracker />
      <header>
        <CodeAnimation />
      </header>
      <section className={styles.textcontainer}>
      <AboutmePage />
      </section>
      <footer className={styles.footer}>
        <p>&copy; 2023 vilrada</p>
      </footer>
    </main>
  );
};

export default Page;
