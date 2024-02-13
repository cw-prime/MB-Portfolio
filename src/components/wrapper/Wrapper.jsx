// Wrapper.jsx
import React, { useState, useEffect } from 'react';

const Wrapper = ({ children }) => {
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      const scrollPosition = window.pageYOffset + window.innerHeight / 2;

      sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setCurrentSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Change background color based on the current section
  useEffect(() => {
    document.body.style.transition = 'background-color 0.3s ease';
    document.body.style.backgroundColor = currentSection === 'about' ? 'rgba(255, 217, 0, 0.129)' : // Light yellow with 50% transparency
                                          currentSection === 'work' ? 'rgba(80, 128, 8, 0.18)' : // Light green with 50% transparency
                                          currentSection === 'skills' ? 'rgba(31, 143, 255, 0.161)' : // Light blue with 50% transparency
                                          currentSection === 'hero' ? 'rgba(211, 211, 211, 0.5)' : // Light grey with 50% transparency
                                          currentSection === 'testimonials' ? 'rgba(79, 211, 200, 0.5)' : // Light grey with 50% transparency
                                          currentSection === 'contact' ? 'rgba(236, 149, 22, 0.39)' : // Light orange with 50% transparency

                                          ''; // Default background color or make it transparent
  }, [currentSection]);


  return <>{children}</>;
};

export default Wrapper;
