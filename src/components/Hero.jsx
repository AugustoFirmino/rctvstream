import { Link } from "react-router-dom";
import {
  FaPlay,
  FaNewspaper,
  FaBroadcastTower
} from "react-icons/fa";

import logo from "../assets/rctvstream.png";


function Hero() {

  return (

    <section className="bg-gradient-to-r from-gray-950 via-red-900 to-red-700 text-white">

      <div className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-10 items-center">


        {/* Texto */}
        <div>

          <span className="
            bg-red-600 
            px-5 
            py-2 
            rounded-full 
            font-semibold
            flex
            items-center
            gap-2
            w-fit
          ">
            <FaBroadcastTower className="animate-pulse text-xl" />
            AO VIVO • STREAM RCTV
          </span>


          <h1 className="
            text-5xl 
            font-bold 
            mt-6 
            leading-tight
          ">
            Notícias, Informação e
            Transmissões em Tempo Real
          </h1>


          <p className="
            mt-6 
            text-lg 
            text-gray-200 
            leading-8
          ">
            A <strong>Stream RCTV</strong> leva até si informação credível,
            transmissões ao vivo, notícias de última hora, desporto,
            entretenimento e cobertura dos principais acontecimentos
            em Angola e no mundo.
          </p>



          <div className="
            mt-8 
            flex 
            flex-wrap 
            gap-4
          ">


         <a
  href="#transmissao"
  className="
    bg-white
    text-red-700
    px-7
    py-3
    rounded-lg
    font-bold
    flex
    items-center
    gap-2
    hover:bg-gray-100
    transition
  "
>

  <FaPlay />

  Assistir Agora

</a>



            


          </div>


        </div>



        {/* Logo */}
        <div className="flex justify-center">

          <div className="
            bg-white/10
            backdrop-blur-lg
            rounded-3xl
            p-8
            shadow-2xl
          ">

            <img
              src={logo}
              alt="Logo Stream RCTV"
              className="
                w-72
                h-72
                object-contain
              "
            />

          </div>

        </div>



      </div>


    </section>

  );

}


export default Hero;