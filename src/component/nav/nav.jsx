import { LightModeOutlined, DarkModeOutlined } from "@mui/icons-material";
import React, { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <nav>
      <section className="nav-bar">
        <h2>Where in the world?</h2>
        <button className="mode-btn" id="modeBtn" onClick={toggleDarkMode}>
          {darkMode ? <LightModeOutlined /> : <DarkModeOutlined />}
          <p>{darkMode ? "Light Mode" : "Dark Mode"}</p>
        </button>
      </section>
    </nav>
  );
};

export default Header;
