import { useEffect, useState } from "react";
import "./DarkTheme.css";

function DarkTheme() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  return (
    <div className="container">
      <div className="dark_mode">
        <input
          type="checkbox"
          className="dark_mode_input"
          id="darkmode-toggle"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />

        <label className="dark_mode_label" htmlFor="darkmode-toggle">
          {/* SUN */}
          <svg className="sun" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="5" />
            <g strokeWidth="2" stroke="currentColor">
              <line x1="12" y1="1" x2="12" y2="4" />
              <line x1="12" y1="20" x2="12" y2="23" />
              <line x1="1" y1="12" x2="4" y2="12" />
              <line x1="20" y1="12" x2="23" y2="12" />
            </g>
          </svg>

          {/* MOON */}
          <svg className="moon" viewBox="0 0 24 24">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        </label>
      </div>
      <br />
      <h1>Change The Theme!</h1>
    </div>
  );
}

export default DarkTheme;
