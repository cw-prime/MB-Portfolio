// CustomDots.jsx
import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import useScrollAnimation from '../../hooks/useScrollAnimation'; // Adjust the import path

const CustomDots = () => {
  const controls = useScrollAnimation();

  return (
    <div className="custom-dots">
      <span className="dot" onClick={() => scroll.scrollToTop()}>
        &#9650;
      </span>
    </div>
  );
};

export default CustomDots;
