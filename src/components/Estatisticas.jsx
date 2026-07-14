import React, { useEffect, useState } from "react";

import {
  FaUsers,
  FaTv,
  FaClock,
  FaBroadcastTower
} from "react-icons/fa";

import socket from "./socket";


function Estatisticas() {

  const [totalEspectadores, setTotalEspectadores] = useState(0);


  useEffect(() => {


    // garantir conexão
    if (!socket.connected) {
      socket.connect();
    }


    // receber espectadores em tempo real
    const atualizarEspectadores = (dados) => {

      const total = Object.values(dados)
        .reduce(
          (soma, valor) => soma + valor,
          0
        );


      setTotalEspectadores(total);

    };


    socket.on(
      "espectadores",
      atualizarEspectadores
    );


    return () => {

      socket.off(
        "espectadores",
        atualizarEspectadores
      );

    };


  }, []);



  return (

    <section
      className="
      relative
      max-w-7xl
      mx-auto
      px-6
      -mt-16
      z-10
      "
    >

      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-8
        "
      >


        <Card
          icon={<FaUsers />}
          number={totalEspectadores}
          title="Espectadores Online"
          description="Pessoas assistindo ao vivo agora"
        />


        <Card
          icon={<FaTv />}
          number="7"
          title="Canais Online"
          description="Canais disponíveis em transmissão"
        />


        <Card
          icon={<FaClock />}
          number="52.560h"
          title="Horas de Transmissão"
          description="Total anual de emissão"
        />


        <Card
          icon={<FaBroadcastTower />}
          number="365"
          title="Dias no Ar"
          description="Transmissão contínua durante o ano"
        />


      </div>

    </section>

  );

}





function Card({
  icon,
  number,
  title,
  description
}) {


  return (

    <div
      className="
      group
      relative
      bg-white
      rounded-3xl
      p-8
      shadow-xl
      border
      border-gray-100
      overflow-hidden
      hover:-translate-y-3
      hover:shadow-2xl
      transition-all
      duration-500
      "
    >


      <div
        className="
        absolute
        right-0
        top-0
        w-32
        h-32
        bg-red-100
        rounded-full
        blur-2xl
        opacity-50
        "
      />


      <div
        className="
        relative
        w-20
        h-20
        rounded-2xl
        bg-gradient-to-br
        from-red-800
        to-red-500
        text-white
        flex
        items-center
        justify-center
        text-4xl
        shadow-lg
        group-hover:scale-110
        transition
        "
      >
        {icon}
      </div>


      <h3
        className="
        text-5xl
        font-extrabold
        text-gray-900
        mt-7
        "
      >
        {number}
      </h3>


      <h4
        className="
        text-xl
        font-bold
        text-red-700
        mt-2
        "
      >
        {title}
      </h4>


      <p
        className="
        text-gray-500
        mt-2
        "
      >
        {description}
      </p>


      <div
        className="
        mt-6
        h-1
        w-12
        bg-red-700
        rounded-full
        group-hover:w-full
        transition-all
        duration-500
        "
      />

    </div>

  );

}


export default Estatisticas;