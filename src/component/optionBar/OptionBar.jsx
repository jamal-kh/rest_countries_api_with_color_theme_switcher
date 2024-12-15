import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import React, { useState } from "react";

const OptionBar = ({ onSelectRegion }) => {
  const [isExpend, setIsExpend] = useState(false);

  const toggleExpand = () => {
    setIsExpend(prevState => !prevState);
  };

  const handleRegionClick = (region) => {
    onSelectRegion(region);
    setIsExpend(false); // Optionally close the dropdown after selection
  };

  return (
    <section className="option-region">
      <section className="option-bar" onClick={toggleExpand}>
        <span>Filter By Region</span>
        {isExpend ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
      </section>
      <section
        className="region-list"
        style={{ display: isExpend ? "block" : "none" }}
        aria-expanded={isExpend}
      >
        <ul>
          {["", "Africa", "Americas", "Asia", "Europe", "Oceania"].map((region) => (
            <li
              key={region}
              data-value={region}
              onClick={() => handleRegionClick(region)}
              className={region === "" ? "all-regions" : ""}
            >
              {region || "All Regions"}
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default OptionBar;
