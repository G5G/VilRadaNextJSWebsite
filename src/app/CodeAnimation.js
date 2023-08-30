'use client';
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './CodeAnimation.module.css'; // Import your CSS file

function CodeAnimation() {
  const titleEl = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Welcome to my website'],
      typeSpeed: 100,
      cursorChar: '|', // Use a vertical bar as the cursor
      cursorBlinkingSpeed: 500, // Adjust the cursor blinking speed (milliseconds)
      shuffle:true
    };

    const typed = new Typed(titleEl.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={titleEl} className="custom-typed-text">
        {/* Your typed text */}
      </span>
    </div>
  );
}

export default CodeAnimation;
