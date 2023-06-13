import React from 'react';
import './HeroSection.scss';
import heroImage from '..//..//assets/image/heroimage1.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Build, Learn, Grow Together</h1>
          <p className="hero-description">
            Empowering college students to earn, learn, and connect through PeerHire.
          </p>
          <a href="/signup" className="btn-hero">Get Started</a>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Hero" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
