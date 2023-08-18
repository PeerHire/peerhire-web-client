import React, { useState } from 'react';
import "./searchbar.scss"

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('Project');

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search based on searchTerm and searchType
    console.log(`Searching for ${searchTerm} in ${searchType}`);
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search by project or talent"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
      <select value={searchType} onChange={handleSearchTypeChange}>
        <option value="Project">Project</option>
        <option value="Talent">Talent</option>
      </select>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
