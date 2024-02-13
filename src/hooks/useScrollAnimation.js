// useScrollAnimation.js
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

const useScrollAnimation = (elementId, scrollMultiplier = 0.5) => {
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const element = document.getElementById(elementId);

    if (element) {
      controls.start({
        y: -scrollY * scrollMultiplier,
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls, elementId, scrollMultiplier]);

  return controls;
};

export default useScrollAnimation;
