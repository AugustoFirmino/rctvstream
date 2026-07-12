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


    window.addEventListener(
      "online",
      onlineHandler
    );


    window.addEventListener(
      "offline",
      offlineHandler
    );



    return()=>{


      window.removeEventListener(
        "online",
        onlineHandler
      );


      window.removeEventListener(
        "offline",
        offlineHandler
      );


    };


  },[]);








  // SOCKET.IO

  useEffect(()=>{


    // receber contagem

    socket.on(
      "espectadores",
      (dados)=>{


        console.log(
          "Contagem:",
          dados
        );


        setEspectadores(dados);


      }
    );



    // entrar no primeiro canal

    socket.emit(
      "entrarCanal",
      canais[0].nome
    );



    return()=>{


      socket.off(
        "espectadores"
      );


    };


  },[]);










  // TROCAR CANAL

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
    flex
    flex-col
    items-center
    overflow-hidden
    "
    >






      {/* MENU CANAIS */}


      <div
      className="
      w-[970px]
      mb-6
      flex
      flex-wrap
      justify-center
      gap-3
      "
      >


      {

      canais.map((canal,index)=>(


        <button
     
        key={index}

        onClick={()=>trocarCanal(canal)}

        className={`
        
        px-5
        py-3
        rounded-lg
        font-semibold
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



        <div>


        <p>
        {canal.nome}
        </p>


        <span
        className="
        text-xs
        "
        >

        👁 {espectadores[canal.nome] || 0} assistindo


        </span>



        </div>



        </button>


      ))

      }


      </div>









      {/* TITULO DO CANAL */}


      <div
      className="
      w-[970px]
      mb-3
      flex
      justify-between
      items-center
      "
      >


      <h2
      className="
      text-2xl
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
      "
      >

      🔴 AO VIVO

      👁 {espectadores[canalAtual.nome] || 0}


      </div>


      </div>









      {/* PLAYER */}


      <div

      className="
      relative
      w-[970px]
      h-[610px]
      bg-black
      overflow-hidden
      rounded-lg
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
        "

        >

        <div className="text-7xl">
        📡
        </div>


        <h2
        className="
        text-3xl
        font-bold
        mt-6
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
        w-16
        h-16
        border-4
        border-red-600
        border-t-transparent
        rounded-full
        animate-spin
        "

        />


        <h2
        className="
        text-3xl
        font-bold
        mt-8
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

      width="970"

      height="610"

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
        border:"none",
        display:"block"
      }}

      />




      </div>


    </div>

  );


}