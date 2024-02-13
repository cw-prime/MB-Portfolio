import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import client, { urlFor } from "../../client";
import "./Testimonials.css";

const Testimonial = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  return (
    <section id="testimonials" {...props}>
      <h2 className="head-text">Testimonials</h2>
      <div className="app__testimonial-container">
        {testimonials.length > 0 && (
          <>
            <div className="app__testimonial-item app__flex">
              <motion.img
                src={urlFor(testimonials[currentIndex].imageurl).url()}
                alt={testimonials[currentIndex].name}
                key={currentIndex} // Key change triggers the animation
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              />
              <div className="app__testimonial-content">
                <p className="p-text">{testimonials[currentIndex].feedback}</p>
                <div>
                  <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                  <h5 className="p-text">{testimonials[currentIndex].company}</h5>
                </div>
              </div>
            </div>

          </>
        )}

      </div>
      <div className="app__testimonial-btns">
              <div onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                <HiChevronLeft />
              </div>
              <div onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
                <HiChevronRight />
              </div>
            </div>
      <div className="app__testimonial-brands">
          {brands.map((brand) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1, type: 'tween' }}
              key={brand._id}
            >
              <img src={urlFor(brand.imgUrl)} alt={brand.name} />
            </motion.div>
          ))}
        </div>
    </section>
  );
};

export default Testimonial;
