import React from "react";
import "./footer.scss";
import {
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__links">
        <div>
          <a href="/about">About Us</a>
          <a href="/contactus">Contact Us</a>
          <a href="/trust">Trust, Safety, and Security</a>
          <a href="/impact">Our Impact</a>
        </div>
        <div>
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
      <div className="footer__social-media">
        <span>Follow Us:</span>
        <div>
          <a href="https://www.facebook.com/people/Peerhire/100095520699756">
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com/company/peerhire">
            <FaLinkedin />
          </a>
          <a href="https://www.youtube.com/channel/UCwvFlo6njkU8Bq6TMI6Ke6A">
            <FaYoutube />
          </a>
          <a href="https://twitter.com/Peer_Hire">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/peer_hire/">
            <FaInstagram />
          </a>
        </div>
      </div>
      <hr />
      <div className="footer__copyright">
        &copy; {new Date().getFullYear()} PeerHire. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
