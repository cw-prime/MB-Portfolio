import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { images } from "../../constants";
import wave from "../../assets/wave-emoji.png";
import "./Hero.css";
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { Link, Events, animateScroll as scroll } from "react-scroll";

const Hero = (props) => {
  const controls = useAnimation();
  const handleScroll = useScrollAnimation(controls);

  useEffect(() => {
    const updateBackgroundColor = () => {
      // Assuming you want to change the hero section's background at the top
      if (window.scrollY < 50) {
        document.body.style.backgroundColor = 'rgba(211, 211, 211, 0.302)'; // Light grey with 50% transparency
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", updateBackgroundColor);

    // Cleanup function to remove event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", updateBackgroundColor);
    };
  }, [handleScroll]);

  return (
    <section id="hero" {...props}>
    <div id="hero" className="hero-section" >
      <motion.div
        animate={controls}
        transition={{ duration: 0.9 }}
        className="app__header-info"
      >
        <div className="app__header-badge badge-cmp app__flex">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "-10px",
            }}
          >
            <img
              src={wave}
              alt="Wave"
              style={{ width: "30px", height: "auto", marginRight: "10px" }}
            />
            <div>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Mark </h1>
            </div>
          </div>
        </div>

        <div className="tag-cmp badge-cmp app__flex">
          <p className="p-text">Web Developer</p>
          <p className="p-text">Freelancer</p>
          <p className="p-text">Cyber Security Expert</p>
        </div>
      </motion.div>

      <motion.div
        animate={controls}
        transition={{ duration: 0.9, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <div className="overlay_circle">
          <motion.img
            animate={controls}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={images.circle}
            alt="profile_circle"
            className="overlay_circle_img"
          />
        </div>

        <img src={images.profile} alt="Mark" className="profile_image" />
      </motion.div>

      <div className="custom-dots">
        <span className="dot" onClick={() => scroll.scrollToTop()}>
          &#9650;
        </span>

        <Link
          to="about"
          smooth={true}
          duration={1000}
          className="dot"
          spy={true}
          offset={-50}
          activeClass="active-dot"
        >
          &#8226;
        </Link>
        <Link
          to="work"
          smooth={true}
          duration={1000}
          className="dot"
          spy={true}
          offset={-50}
          activeClass="active-dot"
        >
          &#8226;
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={1000}
          className="dot"
          spy={true}
          offset={-50}
          activeClass="active-dot"
        >
          &#8226;
        </Link>
        <Link
          to="testimonials"
          smooth={true}
          duration={1000}
          className="dot"
          spy={true}
          offset={-50}
          activeClass="active-dot"
        >
          &#8226;
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={1000}
          className="dot"
          spy={true}
          offset={-50}
          activeClass="active-dot"
        >
          &#8226;
        </Link>
      </div>
    </div>
    </section>
  );
};

export default Hero;
