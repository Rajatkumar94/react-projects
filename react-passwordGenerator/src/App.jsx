import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [isNumberIncludes, setIsNumberIncludes] = useState(false);
  const [isCharIncludes, setIsCharIncludes] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useEffect(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrqrstuvwxyz";
    console.log(isNumberIncludes, isCharIncludes);
    if (isNumberIncludes) str += "0123456789";
    if (isCharIncludes) str += "!@#$%^&*()+=";

    for (let i = 1; i < length; i++) {
      const i = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(i);
      setPassword(pass);
    }
  }, [length, isNumberIncludes, isCharIncludes, setPassword]);

  return (
    <>
      <div>
        <div>
          <input type="text" value={password} ref={passwordRef} readOnly />
          <button
            value={passwordRef}
            onClick={() => {
              window.navigator.clipboard.writeText(password);
            }}
          >
            Copy
          </button>
        </div>
        <div>
          <div>
            <input
              type="range"
              min="1"
              max="100"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />{" "}
            Length : {length}
          </div>
          <div>
            <input
              type="checkbox"
              value={isNumberIncludes}
              onClick={() => setIsNumberIncludes(!isNumberIncludes)}
            />
            <label>Include Number</label>
          </div>
          <div>
            <input
              type="checkbox"
              value={isNumberIncludes}
              onClick={() => setIsCharIncludes(!isCharIncludes)}
            />
            <label>Include charaters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
