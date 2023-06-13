import React, { useState } from "react";

const CountryDropdown = ({ data, selectedCountry, setSelectedCountry }) => {
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div>
      <select
        className="input-country-field"
        id="country"
        value={selectedCountry}
        onChange={handleCountryChange}
      >
        <option value="">Select Country</option>
        {data.map((country, index) => (
          <option key={index} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryDropdown;
