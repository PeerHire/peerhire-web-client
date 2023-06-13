import React from "react";
import "./UspSection.scss";
import { FaRocket, FaShieldAlt, FaWallet } from "react-icons/fa";
const UspSection = () => {
  return (
    <section className="usp-section">
      <div className="container">
        <div className="usp-content">
          <div className="usp-item">
          <FaRocket className="usp-icon"/>
            <h3 className="usp-title">Fast and Efficient</h3>
            <p className="usp-description">
              Get your tasks done quickly and efficiently with our streamlined platform.
            </p>
          </div>
          <div className="usp-item">
          <FaShieldAlt className="usp-icon"/>
            <h3 className="usp-title">Trusted Freelancers</h3>
            <p className="usp-description">
              Connect with reliable college students who have been verified and rated by their peers.
            </p>
          </div>
          <div className="usp-item">
          <FaWallet className="usp-icon"/>
            <h3 className="usp-title">Affordable Pricing</h3>
            <p className="usp-description">
              Enjoy competitive rates and eliminate high commission fees found on other platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UspSection;
