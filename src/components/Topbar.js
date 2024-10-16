import React from "react";
import DisplayOptions from "./DisplayOptions"; // Import the DisplayOptions component

import './Topbar.css'; // Import CSS for TopBar

const TopBar = ({ setGrouping, setSorting }) => {
  return (
    <div className="topbar">
      <div className="display-button-container">
        
        <DisplayOptions setGrouping={setGrouping} setSorting={setSorting} />
      </div>
      
    </div>
  );
};

export default TopBar;