import React, { useState } from "react";
import './DisplayOptions.css'; // Assuming you will add the CSS
import displayIcon from '../assets/Display.svg'; // Import the SVG icon
import down from '../assets/down.svg';

const DisplayOptions = ({ setGrouping, setSorting }) => {
  // State to control dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="display-options-container">
      {/* Button to toggle dropdown */}
      
      <button className="dropdown-toggle-button" onClick={toggleDropdown}>
      <img src={displayIcon} alt="Display Options" className="display-icon" />
        Display Options
        <img src={down} alt="Display Options" className="display-icon" /> 

      </button>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <label htmlFor="grouping">
            Grouping:
            <select id="grouping" onChange={(e) => setGrouping(e.target.value)}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </label>
          <label htmlFor="ordering">
            Ordering:
            <select id="ordering" onChange={(e) => setSorting(e.target.value)}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </label>
        </div>
      )}
    </div>
  );
};

export default DisplayOptions;