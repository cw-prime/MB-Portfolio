// About.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import sanityClient from '../../client';
import './About.css'; // Ensure this path matches the location of your CSS file

const About = (props) => { // Correctly receive props as an object
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "abouts"]{
          _id,
          title,
          description,
          imgUrl {
            asset->{
              url
            }
          }
        }`
      )
      .then((data) => setAbouts(data))
      .catch(console.error);
  }, []);

  return (
    <section id="about"{...props}>
      <div className="about-container">
        <motion.div className="slogan-container">
          <h1 className="slogan">
            <span className="slogan-primary">Innovation Unleashed,</span>
            <span className="slogan-secondary"> Designing Tomorrow.</span>
          </h1>
        </motion.div>
        <div className="new-sections-container">
          {abouts.map((section) => (
            <motion.div
              key={section._id} // Use _id for key, ensuring it's unique
              className="new-section-container"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
            >
              {section.imgUrl && section.imgUrl.asset && (
                <img
                  src={section.imgUrl.asset.url}
                  alt={`${section.title} Image`} // Make alt text more descriptive
                  className="section-image"
                />
              )}
              <h2 className="section-title">{section.title}</h2>
              <p className="section-description">{section.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
