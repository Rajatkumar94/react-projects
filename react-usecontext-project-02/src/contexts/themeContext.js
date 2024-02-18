import React from "react";
import { useContext } from "react";

export const ThemeContext = React.createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeContextProvider = ThemeContext.Provider;

export default useTheme(() => {
  return useContext(ThemeContext);
});
