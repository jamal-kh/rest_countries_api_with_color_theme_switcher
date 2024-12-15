import { Search } from "@mui/icons-material";
import React from "react";

const Input = ({ onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value); 
  };

  return (
    <section className="input-bar">
      <Search />
      <input
        type="text"
        name="SearchCountry"
        id="Search"
        placeholder="Search for a country"
        autoComplete="off"
        onChange={handleChange} // Call handleChange on input change
      />
    </section>
  );
};

export default Input;
