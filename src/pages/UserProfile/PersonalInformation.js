import React, { useEffect, useState } from "react";
import "./PersonalInformation.scss";
import countryData from "..//../assets/Data/country.json";
import collegeData from "..//../assets/Data/college_india.json";
import defaultImage from "..//../assets/image/sumit.jpeg";
import { FaPen } from "react-icons/fa";

function PersonalInformation() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCollege, setSelectedCollege] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const [info, setInfo] = useState({
    name: "Sumit Nirmal",
    email: "sumitramprakashnirmal@gmail.com",
    rollNumber: "XXXXXX",
    country: selectedCountry,
    state: selectedState,
    college: selectedCollege,
    bio: "",
    // Initialize with actual data
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCollege("");
  };

  const handleCollegeChange = (event) => {
    setSelectedCollege(event.target.value);
  };

  useEffect(() => {
    setInfo((prevInfo) => ({
      ...prevInfo,
      country: selectedCountry,
      state: selectedState,
      college: selectedCollege,
    }));
  }, [selectedCountry, selectedState, selectedCollege]);
  
  const handleSave = (e) => {
    e.preventDefault();
    // Save functionality here (e.g., API call to update user data)
    console.log("Saved:", info);
  };

  return (
    <div className="personal-information">
      <div className="header">
        <img src={defaultImage} alt="Profile" />
        <div>
          <span>{info.name}</span>
          <span>|</span>
          <span>{info.rollNumber}</span>
          {/* <button>
            <FaPen />
          </button> */}
        </div>
      </div>
      <form onSubmit={handleSave}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={info.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={info.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Bio</label>
          <textarea
            name="bio"
            value={info.bio}
            onChange={handleChange}
            placeholder="A brief bio"
          />
        </div>
        {/* Select College */}
        <div className="form-group">
          <label>Select College</label>
          <select
            id="country"
            name="country"
            value={selectedCountry}
            onChange={handleCountryChange}
          >
            <option value="">Select Country</option>
            {countryData.map((country, index) => (
              <option key={index} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <select
            id="state"
            name="state"
            value={selectedState}
            onChange={handleStateChange}
          >
            <option value="">Select State</option>
            {collegeData[selectedCountry] &&
              Object.keys(collegeData[selectedCountry]?.colleges).map(
                (state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                )
              )}
          </select>
        </div>
        <div className="form-group">
          <select
            id="college"
            name="college"
            value={selectedCollege}
            onChange={handleCollegeChange}
          >
            <option value="">Select College</option>
            {collegeData[selectedCountry]?.colleges[selectedState]?.map(
              (college, index) => (
                <option key={index} value={college}>
                  {college}
                </option>
              )
            )}
          </select>
        </div>
        {/* Select Roll Number */}
        <div className="form-group">
          <label>Roll Number</label>
          <input
            type="text"
            name="rollNumber"
            value={info.rollNumber}
            onChange={handleChange}
          />
        </div>
        {/* Save button */}
        <button type="submit" className="save-button">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default PersonalInformation;
