import React, { useState } from "react";
import client, { urlFor } from "../../client";
import "./Footer.css";
import { images } from "../../constants";

const Footer = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      await client.create(contact);
      setIsFormSubmitted(true);
    } catch (err) {
      console.error("Error submitting form:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section id="contact" className="section" {...props}>
        <h2 className="head-text">Take a coffee & chat with me</h2>

        <div className="app__footer-cards">
          <div className="app__footer-card">
            <img src={images.email} alt="email" />
            <a href="mailto:mark-barton@live.com" className="p-text">
              mark-barton@live.com
            </a>
          </div>
          <div className="app__footer-card">
            <img src={images.mobile} alt="phone" />
            <a href="tel:+1 (123) 456-7890" className="p-text">
              +1 (123) 456-7890
            </a>
          </div>
        </div>

        {!isFormSubmitted ? (
          <div className="app__footer-form app__flex">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChangeInput}
              className="p-text"
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChangeInput}
              className="p-text"
            />
            <textarea
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChangeInput}
              className="p-text"
            />
            <button
              type="button"
              className="p-text footer-send-btn"
              onClick={handleSubmit}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        ) : (
          <div>
            <h3 className="head-text">Thank you for getting in touch!</h3>
          </div>
        )}
         {/* Copyright notice */}
      <div className="footer-copyright">
        © {new Date().getFullYear()} Marko. All rights reserved.
      </div>
      </section>
    </>
  );
};

export default Footer;
