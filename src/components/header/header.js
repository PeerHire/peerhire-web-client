import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoicon from "..//../assets/image/logoicon2.png";
import peerhirename from "..//../assets/image/peerhirename2.png";
import "./header.scss";
import SearchBar from "../searchbar/searchbar";
import { Box, Modal } from "@mui/material";
import Login from "../../pages/Auth/Login";
import { useDispatch, useSelector } from "react-redux";
import { RiCustomerService2Line } from "react-icons/ri";
import {
  MdNotifications,
  MdSettings,
  MdLogout,
  MdManageAccounts,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { logout } from "../../redux/action/authActions";
import { useNavigate } from "react-router-dom";
import NotificationPanel from "../../pages/Notifications/NotificationPanel";
import Chatbot from "../../pages/Chatbot/Chatbot";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleLoginOpen = () => setOpen(true);
  const handleLoginClose = () => setOpen(false);

  const { user, isAuthenticated } = useSelector((state) => state.user);

  const [showNotificationPanel, setShowNotificationPanel] = useState(false);
  const [showChatbotPanel, setShowChatbotPanel] = useState(false);

  const toggleNotificationPanel = () => {
    setShowNotificationPanel(!showNotificationPanel);
  };

  const toggleChatbotPanel = () => {
    setShowChatbotPanel(!showChatbotPanel);
  };

  const handleNavigation = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      {isAuthenticated ? (
        // for authorised users
        <div className="header-container">
          {/*------------- for logo components--------------------- */}
          <NavLink to="/" className="main-logo-container">
            <img
              className="main-logo-icon"
              src={logoicon}
              alt="PeerHire Logo"
            />
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
                Find Work
              </button>
              <ul class="dropdown-menu">
                <li>
                  <NavLink to="/find-work" className="dropdown-item">
                    Find Project
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink to="/saved-projects" className="dropdown-item">
                    Saved Projects
                  </NavLink>
                </li> */}
                <li>
                  <NavLink to="/proposals" className="dropdown-item">
                    My Proposals
                  </NavLink>
                </li>
              </ul>
            </div>

            <div class="dropdown">
              <button
                className="nav-link dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Projects
              </button>
              <ul class="dropdown-menu">
                <li>
                  <NavLink to="/create-project" className="dropdown-item">
                    Post a Project
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/my-projects" className="dropdown-item">
                    My Projects
                  </NavLink>
                </li>
              </ul>
            </div>
            <NavLink className="nav-link" to="/messages">
              Messages
            </NavLink>
          </div>
          {/*------------- search bar--------------------- */}
          <div className="search-bar-container">
            <SearchBar />
          </div>
          <div className="right-auth-icons-container">
            <button onClick={toggleChatbotPanel}>
              <RiCustomerService2Line className="auth-header-icon" />
            </button>

            {/* Render the Chatbot Panel component conditionally */}
            {showChatbotPanel && <Chatbot setShowChatbotPanel={setShowChatbotPanel}/>}

            <button onClick={toggleNotificationPanel}>
              <MdNotifications className="auth-header-icon" />
            </button>

            {/* Render the NotificationPanel component conditionally */}
            {showNotificationPanel && <NotificationPanel />}

            <div className="dropdown">
              <button
                className="nav-link "
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <CgProfile className="auth-header-profile-icon" />
              </button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/user-profile" className="dropdown-item">
                    <MdManageAccounts /> Profile
                  </NavLink>
                </li>
    
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => {
                      dispatch(logout());
                      navigate("/");
                    }}
                  >
                    <MdLogout /> Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        // for non-authorised users
        <div className="header-container">
          {/*------------- for logo components--------------------- */}
          <NavLink to="/" className="main-logo-container">
            <img
              className="main-logo-icon"
              src={logoicon}
              alt="PeerHire Logo"
            />
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
                <Login setOpen={setOpen} />
              </Box>
            </Modal>

            {/*------------------ signup section----------------- */}
            <NavLink to="/signup">
              <button className="signup">Sign Up</button>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
