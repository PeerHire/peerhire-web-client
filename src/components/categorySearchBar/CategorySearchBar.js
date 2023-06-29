import React, { useState } from 'react';
import './CategorySearchBar.scss';

const CategorySearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = [
    'Accounting & Consulting',
    'Admin Support',
    'Customer Service',
    'Data Science & Analytics',
    'Design & Creative',
    'Engineering & Architecture',
    'IT & Networking',
    'Legal',
    'Sales & Marketing',
    'Translation',
    'Web, Mobile & Software Dev',
    'Writing'
  ];

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  const handleSearch = () => {
    // Perform search based on the selected categories and searchTerm
    console.log('Search Term:', searchTerm);
    console.log('Selected Categories:', selectedCategories);
  };

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  const handleCategoryChange = (category) => {
    const updatedCategories = [...selectedCategories];
    const categoryIndex = updatedCategories.indexOf(category);

    if (categoryIndex > -1) {
      updatedCategories.splice(categoryIndex, 1);
    } else {
      updatedCategories.push(category);
    }

    setSelectedCategories(updatedCategories);
  };

  return (
    <div className="filter-search-bar">
      <input
        type="text"
        placeholder="Select Categories"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onClick={toggleDropdown}
      />
      <div className={`dropdown ${showDropdown ? 'show' : ''}`}>
        {categories.map((category) => (
          <label key={category}>
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
            {category}
          </label>
        ))}
      </div>
    </div>
  );
};

export default CategorySearchBar;
