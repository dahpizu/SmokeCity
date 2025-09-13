import React, { useState } from "react";
import "./Dropdown.css"; // Import the CSS file for styling

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility on hover
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div
      className="dropdown"
      onMouseEnter={toggleDropdown}
      onMouseLeave={toggleDropdown}
    >
      <button className="dropbtn">Select</button>
      {isOpen && (
        <div className="dropdown-content">
          <a href="#">Option 1</a>
          <a href="#">Option 2</a>
          <a href="#">Option 3</a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
