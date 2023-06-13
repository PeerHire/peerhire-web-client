import React from "react";
import "./HowItWorksSection.scss";
import signUpImage from "..//..//assets/image/step1.png";
import browseImage from "..//..//assets/image/step2.png";
import communicateImage from "..//..//assets/image/step3.png";
import feedbackImage from "..//..//assets/image/step4.png";
import paymentImage from "..//..//assets/image/step5.png";
import logoicon from "..//../assets/image/logoicon2.png";
import peerhirename from "..//../assets/image/peerhirename2.png";
import { NavLink } from "react-router-dom";

const HowItWorksSection = () => {
  return (
    <div>
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
      <section className="how-it-works-section">
        <div className="container">
          <h2 className="section-heading">How It Works</h2>

          <div className="cards-container">
            <div className="card">
              <img src={signUpImage} alt="Sign Up" className="card-image" />
              <div>
                <h3 className="card-title">Sign Up & Create Profile</h3>
                <p className="card-description">
                  Students can sign up on the PeerHire platform to create a
                  profile and list the services they offer, along with their
                  rates and availability.
                </p>
              </div>
              <div className="step-number step-number-right">
                <span>1</span>
              </div>
            </div>

            <div className="card">
              <div className="step-number step-number-left">
                <span>2</span>
              </div>
              <div>
                <h3 className="card-title">Browse & Select Services</h3>
                <p className="card-description">
                  Students who require freelance services can browse through the
                  list of available services and select the student who meets
                  their needs. They can view the student's profile, skills,
                  ratings, and feedback before hiring them.
                </p>
              </div>
              <img src={browseImage} alt="Browse" className="card-image" />
            </div>

            <div className="card">
              <img
                src={communicateImage}
                alt="Communicate"
                className="card-image"
              />
              <div>
                <h3 className="card-title">Communicate & Agree</h3>
                <p className="card-description">
                  Once a student is hired for a job, they can communicate with
                  the client via the platform's messaging system and agree on
                  the scope of work, deadlines, and payment terms.
                </p>
              </div>
              <div className="step-number step-number-right">
                <span>3</span>
              </div>
            </div>

            <div className="card">
              <div className="step-number step-number-left">
                <span>4</span>
              </div>
              <div>
                <h3 className="card-title">Rate & Provide Feedback</h3>
                <p className="card-description">
                  Once the job is completed, the client can rate and provide
                  feedback on the quality of work. The student also gets a
                  chance to rate and provide feedback on the client.
                </p>
              </div>
              <img src={feedbackImage} alt="Feedback" className="card-image" />
            </div>

            <div className="card">
              <img src={paymentImage} alt="Payment" className="card-image" />
              <div>
                <h3 className="card-title">Secure Payment System</h3>
                <p className="card-description">
                  PeerHire provides a secure payment system, ensuring that both
                  the student and the client get paid for their work.
                </p>
              </div>
              <div className="step-number step-number-right">
                <span>5</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksSection;
