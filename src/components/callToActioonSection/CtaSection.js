import React from "react";
import "./CtaSection.scss";
import ctaImage from "..//..//assets/image/signup.jpg";
import { FaUsers, FaBriefcase, FaMoneyBillWave } from "react-icons/fa";
const CtaSection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <div className="cta-image">
            <img src={ctaImage} alt="CTA Image" />
          </div>
          <div className="cta-text">
            <h2 className="cta-title">Discover Your Freelancing Potential</h2>
            <div className="cta-description">
              <div className="cta-item">
                <div className="cta-item-icon">
                  <FaUsers className="cta-icon" />
                </div>
                <div className="cta-item-content">
                  <h3 className="cta-item-title">
                    Register and browse professionals
                  </h3>
                  <p className="cta-item-description">
                    Explore a pool of talented college students, ready to
                    deliver exceptional work.
                  </p>
                </div>
              </div>
              <div className="cta-item">
                <div className="cta-item-icon">
                  <FaBriefcase className="cta-icon" />
                </div>
                <div className="cta-item-content">
                  <h3 className="cta-item-title">
                    Post a job and hire top talent
                  </h3>
                  <p className="cta-item-description">
                    Finding the perfect freelancer is easy. Post a job or let us
                    help you find the right fit.
                  </p>
                </div>
              </div>
              <div className="cta-item">
                <div className="cta-item-icon">
                  <FaMoneyBillWave className="cta-icon" />
                </div>
                <div className="cta-item-content">
                  <h3 className="cta-item-title">
                    Work with the best—without breaking the bank
                  </h3>
                  <p className="cta-item-description">
                    Enjoy high-quality services at competitive rates, saving you
                    time and money.
                  </p>
                </div>
              </div>
            </div>
            <div className="cta-btn-container">
              <button className="cta-button">Sign up for free</button>
              <button className="cta-hollow-button">Learn how to hire</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
