import React, { useState } from "react";
import "./ContactUs.scss";
import { NavLink } from "react-router-dom";
import logoicon from "..//..//assets/image/logoicon2.png";
import peerhirename from "..//..//assets/image/peerhirename2.png";
import contactus from "..//..//assets/image/contactus.png";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to submit the form data here
    console.log(formData);
  };

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
      <h2 className="section-heading">Contact Us</h2>
      <div className="contact-us">
        <img alt="" src={contactus} />
        <div className="contact-us-container">
          {/* <h2 className="contact-us-title">Get in touch</h2> */}
          <form className="contact-us-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="subject"
                placeholder="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </form>
        </div>

        <div className="contact-details">
          <div className="contact-details-container">
            <div className="contact-details-section">
              <h3 className="contact-details-section-title">Get In Touch</h3>
              <p className="contact-details-section-description">
                Please get in touch, and our expert support team will answer all
                your questions.
              </p>
            </div>
            <div className="contact-details-section">
              <h3 className="contact-details-section-title">
                Contact Information
              </h3>
              <ul className="contact-details-info">
                <li>
                  <FaMapMarkerAlt className="contact-icon"/>
                  Indian Institute of Technology Kharagpur, West Bengal, India 721302
                </li>
                <li>
                  <FaPhoneAlt className="contact-icon"/>
                  <a href="tel:1-972-8103-393" rel="nofollow">
                    +91 1234567890
                  </a>
                </li>
                <li>
                  <FaEnvelope className="contact-icon"/>
                  <a href="mailto:contact@gmail.com" rel="nofollow">
                    contact@peerhire.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
