import { useState, useContext } from "react";
import { ThemeProvider } from "styled-components";

import { AppContext } from "./context/appcontext";

const ThemeContext = ({ children }) => {
  const AppData = useContext(AppContext);
  const THEME_VALUES = {
    maxWidth: "1440px",
  };

  const DARK_VALUES = {
    bgColor1: "#101112",
    fontColor1: "#FFF",
    outDirectIcon_20: "",
    borderColor1: "rgba(234, 234, 255, 0.24)",
    opacitiedBgColor1: "rgba(6, 6, 6, 0.84)",
  };

  const LIGHT_VALUES = {
    bgColor1: "#FFF",
    fontColor1: "#101112",
    outDirectIcon_20: "",
    borderColor1: "rgba(16, 17, 18, 0.24)",
    opacitiedBgColor1: "rgba(250, 249, 249, 0.84)",
  };

  return (
    <ThemeProvider
      theme={
        AppData.modeFlag
          ? { ...DARK_VALUES, ...THEME_VALUES }
          : { ...LIGHT_VALUES, ...THEME_VALUES }
      }
    >
      {children}
    </ThemeProvider>
  );
};

export default ThemeContext;
