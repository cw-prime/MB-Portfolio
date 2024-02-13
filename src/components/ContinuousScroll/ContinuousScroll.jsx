import React, { useRef, useEffect } from 'react';

const ContinuousScroll = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    const scrollContent = () => {
      if (scrollRef.current) {
        const firstChild = scrollRef.current.firstChild;
        if (scrollRef.current.scrollTop >= firstChild.offsetHeight) {
          scrollRef.current.scrollTop -= firstChild.offsetHeight;
        } else {
          scrollRef.current.scrollTop += 1;
        }
        animationFrameId = requestAnimationFrame(scrollContent);
      }
    };

    scrollContent();

    const handleMouseEnter = () => cancelAnimationFrame(animationFrameId);
    const handleMouseLeave = () => scrollContent();

    const scrollElement = scrollRef.current;
    scrollElement.addEventListener('mouseenter', handleMouseEnter);
    scrollElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener('mouseenter', handleMouseEnter);
        scrollElement.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={scrollRef} className="app__skills-exp" style={{ overflow: 'hidden', maxHeight: '200px' /* Adjust as needed */ }}>
      {children}
    </div>
  );
};

export default ContinuousScroll;
