import React, { useState, useEffect } from "react";
import socket from "./socket";


export default function Stream() {


  const canais = [
    {
      nome: "TPA 1",
      url: "https://til-waiver-proudly-brave.trycloudflare.com/embed/1"
    },
    {
      nome: "TPA 2",
      url: "https://til-waiver-proudly-brave.trycloudflare.com/embed/2"
    },
    {
      nome: "TPA Notícias",
      url: "https://til-waiver-proudly-brave.trycloudflare.com/embed/3"
    },
    {
      nome: "TV Zimbo",
      url: "https://til-waiver-proudly-brave.trycloudflare.com/embed/4"
    },
    {
      nome: "TV Girasol",
      url: "https://til-waiver-proudly-brave.trycloudflare.com/embed/5"
    },
    {
      nome: "TV Parlamento",
      url: "https://www.youtube.com/embed/CIpNJ-bMGsI"
    }
  ];



  const [canalAtual,setCanalAtual] = useState(canais[0]);

  const [loading,setLoading] = useState(true);

  const [online,setOnline] = useState(navigator.onLine);

  const [espectadores,setEspectadores] = useState({});







  // INTERNET

  useEffect(()=>{


    const onlineHandler=()=>{

      setOnline(true);
      setLoading(true);

    };


    const offlineHandler=()=>{

      setOnline(false);

    };


    window.addEventListener("online",onlineHandler);

    window.addEventListener("offline",offlineHandler);



    return()=>{

      window.removeEventListener("online",onlineHandler);

      window.removeEventListener("offline",offlineHandler);

    };


  },[]);








  // SOCKET

  useEffect(()=>{


    const receberEspectadores=(dados)=>{

      setEspectadores(dados);

    };


    socket.on(
      "espectadores",
      receberEspectadores
    );



    const entrar=()=>{


      socket.emit(
        "entrarCanal",
        canais[0].nome
      );


    };



    if(socket.connected){

      entrar();

    }else{

      socket.on(
        "connect",
        entrar
      );

    }



    return()=>{


      socket.off(
        "espectadores",
        receberEspectadores
      );


      socket.off(
        "connect",
        entrar
      );


    };


  },[]);








  const trocarCanal=(canal)=>{


    setLoading(true);

    setCanalAtual(canal);


    socket.emit(
      "entrarCanal",
      canal.nome
    );


  };









  return (


    <div
    className="
    w-full
    max-w-7xl
    mx-auto
    px-3
    sm:px-5
    flex
    flex-col
    items-center
    overflow-hidden
    "
    >







      {/* MENU */}

      <div
      className="
      w-full
      flex
      flex-wrap
      justify-center
      gap-2
      mb-5
      "
      >


      {
        canais.map((canal,index)=>(


          <button

          key={index}

          onClick={()=>trocarCanal(canal)}

          className={`

          flex-1
          min-w-[140px]
          sm:flex-none

          px-4
          py-3

          rounded-xl

          font-semibold

          text-sm
          sm:text-base

          transition

          ${
            canalAtual.nome===canal.nome

            ?

            "bg-red-700 text-white shadow-lg"

            :

            "bg-gray-200 text-gray-800 hover:bg-red-100"

          }

          `}

          >


          <p>
          {canal.nome}
          </p>


          <span
          className="
          text-xs
          "
          >

          👁 {espectadores[canal.nome] || 0}

          </span>


          </button>


        ))
      }


      </div>









      {/* CABEÇALHO */}


      <div
      className="
      w-full
      flex
      flex-col
      sm:flex-row
      justify-between
      items-center
      gap-3
      mb-3
      "
      >


      <h2
      className="
      text-xl
      sm:text-2xl
      font-bold
      "
      >

      {canalAtual.nome}

      </h2>





      <div
      className="
      bg-red-700
      text-white
      px-5
      py-2
      rounded-full
      text-sm
      sm:text-base
      "
      >

      🔴 AO VIVO

      👁 {espectadores[canalAtual.nome] || 0}


      </div>



      </div>









      {/* PLAYER RESPONSIVO */}


      <div

      className="
      relative
      w-full
      aspect-video
      bg-black
      rounded-xl
      overflow-hidden
      shadow-xl
      "

      >







      {!online && (


        <div
        className="
        absolute
        inset-0
        flex
        flex-col
        justify-center
        items-center
        bg-black
        text-white
        z-20
        text-center
        px-5
        "
        >


        <div className="text-6xl">
        📡
        </div>


        <h2
        className="
        text-xl
        sm:text-3xl
        font-bold
        mt-5
        "
        >

        Sem conexão com a Internet

        </h2>


        </div>


      )}









      {
      online && loading && (


        <div

        className="
        absolute
        inset-0
        flex
        flex-col
        justify-center
        items-center
        bg-black
        text-white
        z-10
        "

        >


        <div
        className="
        w-14
        h-14
        border-4
        border-red-600
        border-t-transparent
        rounded-full
        animate-spin
        "
        />



        <h2
        className="
        text-xl
        sm:text-3xl
        font-bold
        mt-6
        "
        >

        Aguardando conexão...

        </h2>


        </div>


      )
      }








      <iframe

      id="transmissao"

      key={canalAtual.url}

      src={canalAtual.url}

      title={canalAtual.nome}


      className="
      w-full
      h-full
      "

      scrolling="no"


      allow="
      autoplay;
      fullscreen;
      encrypted-media;
      picture-in-picture
      "


      allowFullScreen


      onLoad={()=>setLoading(false)}


      style={{
        border:"none"
      }}


      />





      </div>




    </div>


  );


}