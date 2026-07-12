const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");


const app = express();

app.use(cors());


const server = http.createServer(app);


const io = new Server(server, {

    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }

});



// Contadores

let espectadores = {

    "TPA 1": 0,
    "TPA 2": 0,
    "TPA Notícias": 0,
    "TV Zimbo": 0,
    "TV Girasol": 0,
    "TV Parlamento": 0

};



io.on("connection",(socket)=>{


    console.log(
        "✅ Cliente conectado:",
        socket.id
    );


    let canalAtual = null;



    socket.emit(
        "espectadores",
        espectadores
    );



    socket.on("entrarCanal",(canal)=>{


        console.log(
            "📺 Entrou:",
            canal
        );


        // retirar do canal anterior

        if(canalAtual){

            if(espectadores[canalAtual] > 0){

                espectadores[canalAtual]--;

            }

        }



        canalAtual = canal;



        if(espectadores[canal] !== undefined){

            espectadores[canal]++;

        }



        console.log(
            espectadores
        );



        io.emit(
            "espectadores",
            espectadores
        );


    });




    socket.on("disconnect",()=>{


        console.log(
            "❌ Saiu:",
            socket.id
        );


        if(canalAtual){


            if(espectadores[canalAtual]>0){

                espectadores[canalAtual]--;

            }


            io.emit(
                "espectadores",
                espectadores
            );

        }


    });


});





app.get("/",(req,res)=>{

    res.json({

        status:"Servidor Socket.IO online",

        espectadores

    });

});





const PORT = 3001;

server.listen(PORT, "0.0.0.0", () => {

    console.log(
        ` Servidor rodando na porta ${PORT}`
    );

});