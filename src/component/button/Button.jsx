import { KeyboardBackspaceOutlined } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Link to="/" className="Back-btn" aria-label="Go back">
      <KeyboardBackspaceOutlined/>
      <p>Back</p>
    </Link>
  );
};

export default Button;
