import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoicon from "..//../assets/image/logoicon2.png";
import peerhirename from "..//../assets/image/peerhirename2.png";
import signUpImage from "..//../assets/image/signup2.png";
import "./auth.scss";

import countryData from "..//../assets/Data/country.json";
import collegeData from "..//../assets/Data/college_india.json";

import { FcGoogle } from "react-icons/fc";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import CountryDropdown from "../../components/country-picker/CountryDropDown";
import CollegeDropdown from "../../components/country-picker/CollegeDropDown";

const SignUp = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCollege, setSelectedCollege] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    college: "",
    rollNumber: "",
    email: "",
    password: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: fieldValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or validation here
    console.log(formData);
  };

  return (
    <div>
      {/*----------------- sign up header------------------- */}
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
      {/* -----------------sign up form----------------- */}

      <div className="sign-up-form-container">
        <div className="sign-up-form">
          <form onSubmit={handleSubmit}>
            <div className="login-top-component">
              <h1>Unlock Your Potential. Join Us Today!</h1>
            </div>
            <div className="google-sign-in">
              <FcGoogle fontSize={25} />
              <span>Continue with Google</span>
            </div>
            <div className="or">
              <span>or</span>
            </div>

            <div>
              <div className="first-last-name">
                <input
                  className="input-field"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />

                <input
                  className="input-field"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <CountryDropdown
                data={countryData}
                selectedCountry={selectedCountry}
                setSelectedCountry={setSelectedCountry}
              />
              <CollegeDropdown
                data={collegeData}
                selectedCollege={selectedCollege}
                setSelectedCollege={setSelectedCollege}
              />

              <div className="roll-email-password-container">
                <input
                  type="text"
                  name="rollNumber"
                  placeholder="Roll Number"
                  value={formData.rollNumber}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <label>
                <input
                  className="tandc-checkbox"
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  required
                />
                I agree to the Terms and Conditions
              </label>

              <button type="submit" className="sign-in-btn">
                Submit
              </button>

              <div className="create-account-component">
                <span>
                  Already have an account?
                  <span className="create-account">Log In!</span>
                </span>
              </div>
            </div>
          </form>
        </div>
        <div className="sign-up-image">
          <img src={signUpImage} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
