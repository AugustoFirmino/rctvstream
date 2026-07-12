import { io } from "socket.io-client";


const socket = io(
  "https://navigation-corpus-thomson-quiet.trycloudflare.com",
  {
    transports:["websocket"]
  }
);


export default socket;