import React from "react";
import "./AboutUs.scss";
import connect from "..//..//assets/image/connect.png";
import mission from "..//..//assets/image/mission.png";
import sumitnirmal from "..//..//assets/image/sumit.jpeg";
import pubali from "..//..//assets/image/pubali.jpeg";
import logoicon from "..//..//assets/image/logoicon2.png";
import peerhirename from "..//..//assets/image/peerhirename2.png";
import { NavLink } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <div className="signup-header">
        <NavLink to="/" className="main-logo-container">
          <img className="main-logo-icon" src={logoicon} alt="PeerHire Logo" />
          <img
            className="main-logo-name"
            src={peerhirename}
            alt="PeerHire Logo"
          />
        </NavLink>
      </div>
      <h2 className="section-heading">About Us</h2>
      <section className="intro-section">
        <div>
          <h1>Connecting College Students Through PeerHire</h1>
          <p>
            At PeerHire, we believe in empowering college students to leverage
            their skills and earn a decent income while studying. Our platform
            is designed to provide a trusted and reliable environment where
            students can connect and collaborate with each other.
          </p>
        </div>
        <img alt="" className="connection-img" src={connect} />
      </section>

      <section className="mission-section">
        <img alt="" className="mission-img" src={mission} />
        <div>
          <h2>Our Mission</h2>
          <p>
            Our mission is to revolutionize the freelancing experience for
            college students by offering a peer-to-peer platform that fosters
            trust, community, and fair opportunities for all. We are committed
            to creating a supportive ecosystem where students can showcase their
            talents, gain valuable work experience, and earn money to support
            their education.
          </p>
        </div>
      </section>

      <section className="founders-section">
        <h2>Meet Our Founders</h2>
        <div className="founder-card">
          <div className="founder-info align-left">
            <h3>Sumit Nirmal</h3>
            <p>Co-founder</p>
            <p>
              John is a passionate entrepreneur with a background in business
              administration. He recognized the challenges faced by college
              students in the freelancing industry and co-founded PeerHire to
              provide them with a dedicated platform for their needs.
            </p>
          </div>
          <img src={sumitnirmal} alt="Founder 1" />
        </div>

        <div className="founder-card">
          <img src={pubali} alt="Founder 2" />
          <div className="founder-info align-right">
            <h3>Pubali Pal</h3>
            <p>Co-founder</p>
            <p>
              Jane is a talented software engineer pursuing her post-graduation
              in computer science. With her expertise in technology, she played
              a key role in developing the PeerHire platform, ensuring a
              seamless and user-friendly experience for all users.
            </p>
          </div>
        </div>
      </section>

      {/* Add more sections, such as achievements, testimonials, contact information, etc. */}
    </div>
  );
};

export default AboutUs;
