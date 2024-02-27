import { atom } from "recoil";

export const notificationAtom = atom({
  key: "notificationState",
  default: 100,
});

export const messageAtom = atom({
  key: "messageState",
  default: 1,
});


