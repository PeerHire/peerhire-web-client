import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoicon from "..//../assets/image/logoicon2.png";
import peerhirename from "..//../assets/image/peerhirename2.png";
import "./header.scss";
import SearchBar from "../searchbar/searchbar";
import { Box, Modal } from "@mui/material";
import Login from "../../pages/Auth/Login";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleLoginOpen = () => setOpen(true);
  const handleLoginClose = () => setOpen(false);

  const handleNavigation = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      {/* for non-authorised users */}
      <div className="header-container">
        {/*------------- for logo components--------------------- */}
        <NavLink to="/" className="main-logo-container">
          <img className="main-logo-icon" src={logoicon} alt="PeerHire Logo" />
          <img
            className="main-logo-name"
            src={peerhirename}
            alt="PeerHire Logo"
          />
        </NavLink>
        {/*------------- Navbar Links--------------------- */}
        <div className="header-left-navlink">
          <div class="dropdown">
            <button
              className="nav-link dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Why PeerHire
            </button>
            <ul class="dropdown-menu">
              <li>
                <NavLink to="/how-it-works" className="dropdown-item">
                  How it works
                </NavLink>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleNavigation("services-section")}
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleNavigation("faqs-section")}
                >
                  FAQs
                </button>
              </li>
            </ul>
          </div>
          <NavLink className="nav-link" to="/about">
            About Us
          </NavLink>
          <NavLink className="nav-link" to="/contactus">
            Contact
          </NavLink>
        </div>
        {/*------------- search bar--------------------- */}
        <div className="search-bar-container">
          <SearchBar />
        </div>
        <div>
          {/*------------------ login section----------------- */}
          <button onClick={handleLoginOpen} className="login">
            Log In
          </button>
          <Modal open={open} onClose={handleLoginClose}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 450,
                bgcolor: "background.paper",
                borderRadius: "12px",
                boxShadow: 24,
                p: 4,
              }}
            >
              <Login />
            </Box>
          </Modal>

          {/*------------------ signup section----------------- */}
          <NavLink to="/signup">
            <button className="signup">Sign Up</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
