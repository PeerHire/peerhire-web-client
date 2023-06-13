import React, { useState } from "react";

const CollegeDropdown = ({ data, selectedCollege, setSelectedCollege }) => {
  const [selectedState, setSelectedState] = useState("");

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCollege("");
  };

  const handleCollegeChange = (event) => {
    setSelectedCollege(event.target.value);
  };

  return (
    <div>
      <select
        className="input-country-field"
        id="state"
        value={selectedState}
        onChange={handleStateChange}
      >
        <option value="">Select State</option>
        {Object.keys(data).map((state, index) => (
          <option key={index} value={state}>
            {state}
          </option>
        ))}
      </select>

      {selectedState && (
        <div>
          <select
            className="input-country-field"
            id="college"
            value={selectedCollege}
            onChange={handleCollegeChange}
          >
            <option value="">Select College</option>
            {data[selectedState].map((college, index) => (
              <option key={index} value={college}>
                {college}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default CollegeDropdown;
