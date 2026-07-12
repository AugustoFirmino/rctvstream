import { io } from "socket.io-client";


const socket = io(
  "https://https://rctvstream.onrender.com/",
  {
    transports:["websocket"]
  }
);


export default socket;