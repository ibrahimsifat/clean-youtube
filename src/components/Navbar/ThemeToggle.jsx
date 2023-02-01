import React from "react";

import { MdDarkMode, MdLightMode } from "react-icons/md";
import UseTheme from "../../hooks/useTheme";

const ThemeToggle = () => {
  const { handleThemeSwitch } = UseTheme();
  const themeMood = localStorage.getItem("theme");
  return (
    <div>
      {themeMood === "light" ? (
        <button onClick={() => handleThemeSwitch()}>
          <MdDarkMode size={24} className="active:border " />
        </button>
      ) : (
        <button onClick={() => handleThemeSwitch()}>
          <MdLightMode size={24} className="active:border " />
        </button>
      )}
    </div>
  );
};

export default ThemeToggle;
