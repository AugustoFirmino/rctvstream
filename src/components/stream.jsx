
import React, { useState, useEffect } from "react";
import socket from "./socket";

import {
  FaEye,
  FaCircle,
  FaBroadcastTower
} from "react-icons/fa";


export default function Stream() {


const canais = [
{
nome:"TPA 1",
url:"https://til-waiver-proudly-brave.trycloudflare.com/embed/1"
},
{
nome:"TPA 2",
url:"https://til-waiver-proudly-brave.trycloudflare.com/embed/2"
},
{
nome:"TPA Notícias",
url:"https://til-waiver-proudly-brave.trycloudflare.com/embed/3"
},
{
nome:"TV Zimbo",
url:"https://til-waiver-proudly-brave.trycloudflare.com/embed/4"
},
{
nome:"TV Girasol",
url:"https://til-waiver-proudly-brave.trycloudflare.com/embed/5"
},
{
nome:"TV Parlamento",
url:"https://www.youtube.com/embed/CIpNJ-bMGsI"
}
];



const [canalAtual,setCanalAtual] = useState(canais[0]);

const [loading,setLoading] = useState(true);

const [online,setOnline] = useState(navigator.onLine);

const [espectadores,setEspectadores] = useState({});





// INTERNET

useEffect(()=>{


const onlineHandler = ()=>{

setOnline(true);
setLoading(true);

};


const offlineHandler = ()=>{

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







// SOCKET.IO RENDER

useEffect(()=>{


const receberEspectadores = (dados)=>{

setEspectadores(dados);

};



socket.on(
"espectadores",
receberEspectadores
);





const entrarCanal = ()=>{


socket.emit(
"entrarCanal",
canalAtual.nome
);


};





if(socket.connected){

entrarCanal();

}else{


socket.on(
"connect",
entrarCanal
);


}




return()=>{


socket.off(
"espectadores",
receberEspectadores
);


socket.off(
"connect",
entrarCanal
);


};


},[]);









// TROCAR CANAL

const trocarCanal = (canal)=>{


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
max-w-6xl
mx-auto
px-2
sm:px-5
flex
flex-col
items-center
"

>



{/* MENU DOS CANAIS */}


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
px-4
py-2
rounded-lg
font-semibold
text-sm

${
canalAtual.nome===canal.nome

?

"bg-red-700 text-white shadow-lg"

:

"bg-gray-200 text-gray-800"

}

`}

>


{canal.nome}


<br/>


<span

className="
text-xs
flex
justify-center
items-center
gap-1
"

>


<FaEye/>


{espectadores[canal.nome] || 0}


</span>


</button>


))


}


</div>









{/* TITULO */}


<div

className="
w-full
flex
justify-between
items-center
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
px-4
py-2
rounded-full
flex
items-center
gap-2
text-sm
"

>


<FaCircle

className="
text-xs
animate-pulse
"

/>


AO VIVO


<FaEye/>


{espectadores[canalAtual.nome] || 0}


</div>


</div>









{/* PLAYER */}


<div

className="
relative
w-full
bg-black
rounded-xl
overflow-hidden
shadow-xl
h-[220px]
sm:h-[400px]
lg:h-[610px]
"

>





{

!online &&


<div

className="
absolute
inset-0
z-30
bg-black
text-white
flex
flex-col
justify-center
items-center
"

>


<FaBroadcastTower

className="
text-6xl
mb-5
"

/>


<h2

className="
text-xl
font-bold
"

>

Sem conexão

</h2>


</div>


}









{

online && loading &&


<div

className="
absolute
inset-0
z-20
bg-black
text-white
flex
justify-center
items-center
"

>


<p

className="
font-bold
"

>

Aguardando conexão...

</p>


</div>


}







<iframe

id="transmissao"

key={canalAtual.url}

src={canalAtual.url}

title={canalAtual.nome}


className="
absolute
top-1/2
left-1/2
w-full
h-[90%]
-translate-x-1/2
-translate-y-1/2
border-0
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


/>





</div>



</div>


);


}

