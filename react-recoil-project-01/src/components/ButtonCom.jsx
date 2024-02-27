import React from "react";
import { useSetRecoilState } from "recoil";
import { messageAtom, notificationAtom } from "../store/atoms/notification";

function ButtonCom() {
  const setNotifications = useSetRecoilState(notificationAtom);
  const setMessage = useSetRecoilState(messageAtom);

  console.log("button re-render");
  return (
    <div>
      <button onClick={() => setNotifications((i) => i + 1)}>
        Increase notification
      </button>
      <button onClick={() => setMessage((i) => i + 1)}>Increase message</button>
    </div>
  );
}

export default ButtonCom;
