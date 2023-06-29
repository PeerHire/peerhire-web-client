import React, { useState } from "react";
import "./PriceRangeFilter.scss";
import { AiOutlineArrowRight } from "react-icons/ai";

const PriceRangeFilter = () => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleFilterClick = () => {
    // Perform filtering logic using minPrice and maxPrice values
    console.log("Filtering:", minPrice, maxPrice);
  };

  return (
    <div className="sidebar-widget">
        <div className="range-inputs">
          <input
            type="text"
            placeholder="Min"
            name="range1"
            value={minPrice}
            onChange={handleMinPriceChange}
          />
          <input
            type="text"
            placeholder="Max"
            name="range2"
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />

          <button type="submit" className="button" onClick={handleFilterClick}>
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
  );
};

export default PriceRangeFilter;
