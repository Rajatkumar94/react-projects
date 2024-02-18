import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ThemeContextProvider } from "./contexts/themeContext";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    const themeControl = document.querySelector("html");
    themeControl.classList.remove("light", "dark");
    themeControl.classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <ThemeContextProvider value={{ themeMode, lightTheme, darkTheme }}>
        <Card />
        <ThemeBtn />
      </ThemeContextProvider>
    </>
  );
}

export default App;
