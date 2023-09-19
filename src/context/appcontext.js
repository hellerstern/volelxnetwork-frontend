import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextLayout = ({ children }) => {
  const [modeFlag, setModeFlag] = useState(true); // true: Dark mode, false: light mode

  const appValues = {
    modeFlag,
    setModeFlag,
  };

  return (
    <AppContext.Provider value={appValues}>{children}</AppContext.Provider>
  );
};
