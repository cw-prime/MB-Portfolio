// App.js
import React from "react";
import Navbar from "./components/Navbar";
import SocialMedia from "./components/SocialMedia";
import { Footer, Hero, Skills, Work, About, Testimonials } from "./container";
import Wrapper from "./components/wrapper/Wrapper"; // Ensure the path is correct

function App() {
  return (
    <div className="app">
      <Navbar />
      <SocialMedia />
      <Wrapper>
        <Hero id="hero" className="section"/>
        <About id="about" className="section" />
        <Work id="work" className="section" />
        <Skills id="skills" className="section" />
        <Testimonials id="testimonials" className="section"/>
        <Footer />
      </Wrapper>
    </div>
  );
}

export default App;
