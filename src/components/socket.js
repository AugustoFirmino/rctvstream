import { io } from "socket.io-client";


const socket = io(
  "http://10.201.100.248:3001",
  {
    transports:["websocket"]
  }
);


export default socket;