import { useState } from "react";
import { useRecoilValue } from "recoil";
import { notificationAtom, messageAtom } from "./store/atoms/notification";
import "./App.css";
import ButtonCom from "./components/ButtonCom";

function App() {
  const notificationCount = useRecoilValue(notificationAtom);
  const messageCount = useRecoilValue(messageAtom);
  return (
    <>
      <div>
        <button>notification : {notificationCount}</button>
        <button>message : {messageCount}</button>
        <button>me : {}</button>
      </div>
      <ButtonCom />
    </>
  );
}

export default App;
