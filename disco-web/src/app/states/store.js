import { atom, useSetAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";



export const projectsAtom = atom([]);
export const botOpenAtom = atom(false);
export const messagesAtom = atomWithStorage(
  "messages",
  [
    { sender: "bot", text: "Hi! I'm your friendly neighbour RotaBot🤖 Here to help you with your Rotaract related inquiries" },
  ]
);