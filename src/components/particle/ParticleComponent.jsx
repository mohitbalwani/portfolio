import React, { useEffect, useRef } from 'react';
// import particleJS from 'particle.js';
import particleJS from 'particles.js';
import particleConfig from './particleConfig';

const ParticleComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    particlesJS('particles-js', particleConfig);
    return () => {
      // You may want to cleanup resources here
    };
  }, []);

  return <canvas id="particles-js" ref={canvasRef}></canvas>;
};

export default ParticleComponent;
