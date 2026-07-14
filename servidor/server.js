const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://rctvstream.vercel.app",
    ],
    credentials: true,
  })
);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:5173",
      "https://rctvstream.vercel.app",
    ],
    methods: ["GET", "POST"],
    credentials: true,
  },
  transports: ["websocket", "polling"],
});

// ===============================
// CONTADORES
// ===============================

const espectadores = {
  "RCTV STREAM": 0,
  "TPA 1": 0,
  "TPA 2": 0,
  "TPA Notícias": 0,
  "TV Zimbo": 0,
  "TV Girasol": 0,
  "TV Parlamento": 0,
  
};

// ===============================

app.get("/", (req, res) => {

  res.json({
    status: "Servidor Socket.IO online",
    espectadores,
    conexoes: io.engine.clientsCount
  });

});

io.on("connection", (socket) => {

  console.log("Cliente conectado:", socket.id);

  let canalAtual = null;

  socket.emit("espectadores", espectadores);

  socket.on("pedirEspectadores", () => {

    socket.emit("espectadores", espectadores);

  });

  socket.on("entrarCanal", (canal) => {

    console.log("Entrou:", canal);

    if (canalAtual) {

      if (espectadores[canalAtual] > 0) {
        espectadores[canalAtual]--;
      }

      socket.leave(canalAtual);

    }

    canalAtual = canal;

    if (!(canal in espectadores)) {
      espectadores[canal] = 0;
    }

    espectadores[canal]++;

    socket.join(canal);

    console.log(espectadores);

    io.emit("espectadores", espectadores);

  });

  socket.on("disconnect", () => {

    console.log("Saiu:", socket.id);

    if (canalAtual && espectadores[canalAtual] > 0) {

      espectadores[canalAtual]--;

      io.emit("espectadores", espectadores);

    }

  });

});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {

  console.log("Servidor iniciado na porta", PORT);

});