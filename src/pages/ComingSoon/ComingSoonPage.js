import React from "react";
import "..//AboutUs/AboutUs.scss";
import "./ComingSoonSection.scss";
import connect from "..//..//assets/image/connect.png";
import mission from "..//..//assets/image/mission.png";
import sumitnirmal from "..//..//assets/image/sumit.jpeg";
import pubali from "..//..//assets/image/pubali.jpeg";
import logoicon from "..//..//assets/image/logoicon2.png";
import peerhirename from "..//..//assets/image/peerhirename2.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const ComingSoonPage = () => {
  return (
    <div className="about-us-page">
      <div className="signup-header">
        <span className="main-logo-container">
          <img className="main-logo-icon" src={logoicon} alt="PeerHire Logo" />
          <img
            className="main-logo-name"
            src={peerhirename}
            alt="PeerHire Logo"
          />
        </span>
      </div>
      <section className="coming-soon">
        <div className="coming-soon__content">
          <h2 className="coming-soon__title">Coming Soon...</h2>
          <p className="coming-soon__description">
            Stay tuned for our exciting platform!
          </p>
          <div className="coming-soon__social-links">
            <a
              href="https://www.linkedin.com/company/peerhire/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/Peer_Hire"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com/people/Peerhire/100095520699756"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/peer_hire/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </section>
      {/* <h2 className="section-heading">About Us</h2> */}
      <section className="cs-intro-section">
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

      <section className="cs-mission-section">
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

      <section className="cs-founders-section">
        <h2>Meet Our Founders</h2>
        <div className="founder-card">
          <div className="founder-info align-left">
            <h3>Sumit Nirmal</h3>
            <p>Co-founder</p>
            <p>
              Sumit Nirmal is a college student from IIT Kharagpur pursuing a
              B.Tech in Civil Engineering. With his passion for technology and
              expertise in full stack development, Sumit is the driving force
              behind the technical aspects of our product. He brings innovative
              ideas and ensures a seamless user experience on our platform.
            </p>
          </div>
          <img src={sumitnirmal} alt="Founder 1" />
        </div>

        <div className="founder-card">
          <img src={swati} alt="Founder 2" />
          <div className="founder-info align-right">
            <h3>Swati Singh</h3>
            <p>Co-founder</p>
            <p>
              Swati Singh is a committed college student from NMIT Bengaluru,
              currently pursuing her BE in Electrical and Electronics
              Engineering. She brings a unique perspective and problem-solving
              expertise to our venture, excelling in both technical and
              operational areas. With her strong analytical skills and
              adaptability, Swati ensures efficient management and seamless
              coordination across various responsibilities, making her an
              invaluable asset to the success and growth of our project.
            </p>
          </div>
        </div>
      </section>

      {/* Add more sections, such as achievements, testimonials, contact information, etc. */}
    </div>
  );
};

export default ComingSoonPage;
