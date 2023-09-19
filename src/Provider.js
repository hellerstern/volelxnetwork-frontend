import { useState, useContext } from "react";
import { ThemeProvider } from "styled-components";

import { AppContext } from "./context/appcontext";

// Images
import {
  NORTH_EAST_DARK_20,
  NORTH_EAST_LIGHT_20,
  NORTH_EAST_DARK_24,
  NORTH_EAST_LIGHT_24,
  VIDEO_PLAY_DARK_24,
  VIDEO_PLAY_LIGHT_24,
  MOON_DARK_24,
  MOON_LIGHT_24,
  MENU_DARK_24,
  MENU_LIGHT_24,
  REMOVE_DARK_24,
  REMOVE_LIGHT_24,
  MARKET_DARK_1,
  MARKET_DARK_2,
  MARKET_DARK_3,
  MARKET_DARK_4,
  MARKET_DARK_5,
  MARKET_LIGHT_1,
  MARKET_LIGHT_2,
  MARKET_LIGHT_3,
  MARKET_LIGHT_4,
  MARKET_LIGHT_5,
} from "./assets/images";

const ThemeContext = ({ children }) => {
  const AppData = useContext(AppContext);
  const THEME_VALUES = {
    maxWidth: "1440px",
    NORTH_EAST_LIGHT_24,
  };

  // Images
  const DARK_VALUES = {
    bgColor1: "#18191B",
    bgColor2: "#101112",
    bgColor3: "rgba(234, 234, 255, 0.12)",
    fontColor1: "#FFF",
    fontColor2: "rgba(234, 234, 255, 0.60)",
    fontColor3: "rgba(234, 234, 255, 0.40)",
    borderColor1: "rgba(234, 234, 255, 0.24)",
    opacitiedBgColor1: "rgba(6, 6, 6, 0.84)",
    opacitiedBgColor2: "rgba(44, 45, 48, 0.48)",
    opacitiedBgColor3: "rgba(44, 45, 48, 0.24)",
    outDirectIcon_20: NORTH_EAST_DARK_20,
    outDirectIcon_24: NORTH_EAST_DARK_24,
    videoPlay_24: VIDEO_PLAY_DARK_24,
    toggleMode: MOON_DARK_24,
    menuIcon_24: MENU_DARK_24,
    removeIcon_24: REMOVE_DARK_24,

    marketDark_1: MARKET_DARK_1,
    marketDark_2: MARKET_DARK_2,
    marketDark_3: MARKET_DARK_3,
    marketDark_4: MARKET_DARK_4,
    marketDark_5: MARKET_DARK_5,
  };

  const LIGHT_VALUES = {
    bgColor1: "#FFF",
    bgColor2: "FFF",
    bgColor3: "rgba(16, 17, 18, 0.12)",
    fontColor1: "#18191B",
    fontColor2: "rgba(16, 17, 18, 0.60)",
    fontColor3: "rgba(16, 17, 18, 0.40);",
    borderColor1: "rgba(16, 17, 18, 0.24)",
    opacitiedBgColor1: "rgba(250, 249, 249, 0.84)",
    opacitiedBgColor2: "rgba(255, 255, 255, 0.48)",
    opacitiedBgColor3: "rgba(255, 255, 255, 0.76)",
    outDirectIcon_20: NORTH_EAST_LIGHT_20,
    outDirectIcon_24: NORTH_EAST_LIGHT_24,
    videoPlay_24: VIDEO_PLAY_LIGHT_24,
    toggleMode: MOON_LIGHT_24,
    menuIcon_24: MENU_LIGHT_24,
    removeIcon_24: REMOVE_LIGHT_24,

    marketLight_1: MARKET_LIGHT_1,
    marketLight_2: MARKET_LIGHT_2,
    marketLight_3: MARKET_LIGHT_3,
    marketLight_4: MARKET_LIGHT_4,
    marketLight_5: MARKET_LIGHT_5,
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
