import { io } from "socket.io-client";


const socket = io(
  "https://seen-necklace-binary-assumption.trycloudflare.com/",
  {
    transports:["websocket"]
  }
);


export default socket;