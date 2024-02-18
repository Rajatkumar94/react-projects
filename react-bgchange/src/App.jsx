import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [bgcolor, setBgColor] = useState("yellow");

  function changeBgColor(e) {
    const color = e.target.value;
    setBgColor(color);
  }

  return (
    <div className="" style={{ backgroundColor: bgcolor ,height:1000}}>
      <button type="button" onClick={changeBgColor} value="red">
        {" "}
        red
      </button>
      <button type="button"> yellow</button>
      <button type="button"> green</button>
      <button type="button"> pink</button>
      <button type="button"> orange</button>
    </div>
  );
}

export default App;
