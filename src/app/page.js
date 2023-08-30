import React from 'react';
import MouseTracker from './page.Cursor.js';
import styles from './page.module.css';
import Image from 'next/image';
import CodeAnimation from './CodeAnimation.js';
const Page = () => {
  return (
    
    <main className={styles.main}>
      <MouseTracker />
      <header>
        <CodeAnimation />
      </header>

      <section className={styles.content}>
        <article>
          <h2>Latest Blog Post</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum bibendum ex vel fringilla.</p>
          <a href="/blog">Read More</a>
        </article>
        <article>
          <h2>Our Services</h2>
          <p>We offer a wide range of services to meet your needs. Explore our offerings and get in touch with us today.</p>
          <a href="/services">See Services</a>
        </article>
      </section>
      <footer className={styles.footer}>
        <p>&copy; 2023 My Website</p>
      </footer>
    </main>
  );
};

export default Page;
