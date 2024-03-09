import React from "react";
import { useTheme } from "../../hooks/use-theme.jsx";

import { LuSun } from "react-icons/lu";
import { IoIosMoon } from "react-icons/io";

import "../../index.css";


export default function IconThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const handleSwitchThemeClick = () => {
    return setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <i onClick={handleSwitchThemeClick}>
      {theme === "dark" ? (
        <LuSun className={"switch-theme"} />
      ) : (
        <IoIosMoon className={"switch-theme dark"} />
      )}
    </i>
  );
}
