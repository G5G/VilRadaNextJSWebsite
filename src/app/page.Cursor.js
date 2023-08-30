// src/app/page.client.js
'use client'
import AnimatedCursor from "react-animated-cursor"
const MouseTracker = () => {
    return (
        
        <AnimatedCursor
        innerSize={7}
        outerSize={8}
        color="255,255,255"
        outerAlpha={1}
        innerScale={1}
        outerScale={4.7}
        innerStyle={{
            // Add CSS properties here
            
            mixBlendMode: 'difference',
        }}
        outerStyle={{
            // Add CSS properties here to style the outer cursor

            mixBlendMode: 'exclusion',
        }}
        clickables={['button', 'a','h1','img']}
      />
    );
};

export default MouseTracker;
