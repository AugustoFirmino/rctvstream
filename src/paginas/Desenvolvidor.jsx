import React from "react";

import {
  FaUser,
  FaGraduationCap,
  FaCode,
  FaProjectDiagram,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaRocket
} from "react-icons/fa";


import Hero from "../components/Hero";
import Estatisticas from "../components/Estatisticas";
import Footer from "../components/footer";



export default function Criador() {



const projetos = [

{
titulo:"RCTV Stream",
descricao:
"Plataforma de televisão online com transmissão ao vivo, vários canais, contador de espectadores em tempo real e experiência multiplataforma.",
tecnologia:
"React, Socket.IO, Node.js, Streaming"
},


{
titulo:"Sistema de Estatísticas Live",
descricao:
"Painel de monitorização de espectadores online por canal com atualização em tempo real.",
tecnologia:
"React + WebSocket"
},


{
titulo:"Aplicações Web Personalizadas",
descricao:
"Desenvolvimento de websites modernos, sistemas empresariais e plataformas digitais.",
tecnologia:
"React, Tailwind CSS, APIs"
}

];






return (

<>


<Hero/>


<Estatisticas/>



<div

className="
min-h-screen
bg-gray-100
py-10
px-5
"

>


<div

className="
max-w-6xl
mx-auto
"

>





{/* CABEÇALHO */}


<div

className="
bg-gradient-to-r
from-red-900
to-red-600
rounded-3xl
p-10
text-white
shadow-xl
flex
flex-col
md:flex-row
items-center
gap-8
"

>


<div

className="
w-40
h-40
rounded-full
bg-white
text-red-700
flex
items-center
justify-center
text-7xl
shadow-xl
"

>

<FaUser/>

</div>





<div>

<h1

className="
text-4xl
font-extrabold
"

>

Nome do Criador

</h1>


<p

className="
text-xl
mt-2
"

>

Fundador e Desenvolvedor do RCTV Stream

</p>



<p

className="
mt-4
opacity-90
"

>

Criador de soluções digitais, aplicações web e plataformas de transmissão online.

</p>


</div>


</div>









{/* INFORMAÇÕES */}


<div

className="
grid
md:grid-cols-3
gap-6
mt-8
"

>


<Card

icon={<FaUser/>}

titulo="Dados Pessoais"

texto={

<>

<strong>Nome:</strong> Seu Nome

<br/>

<strong>Idade:</strong> 25 anos

<br/>

<strong>Local:</strong> Angola

</>

}

/>





<Card

icon={<FaGraduationCap/>}

titulo="Formação"

texto={

<>

<strong>Instituição:</strong>

<br/>

Nome da Escola / Universidade


<br/><br/>


Área:

<br/>

Tecnologia e Desenvolvimento de Software


</>

}

/>







<Card

icon={<FaCode/>}

titulo="Especialidade"

texto={

<>

Desenvolvimento de:

<br/>

• Aplicações Web

<br/>

• Plataformas Streaming

<br/>

• Sistemas Online

<br/>

• Soluções Digitais


</>

}

/>



</div>









{/* BIOGRAFIA */}



<section

className="
bg-white
rounded-3xl
shadow-lg
p-8
mt-8
"

>


<h2

className="
text-3xl
font-bold
text-red-700
flex
items-center
gap-3
"

>

<FaRocket/>

Biografia

</h2>



<p

className="
mt-5
text-gray-700
leading-8
"

>


Sou o criador do RCTV Stream, uma plataforma digital
desenvolvida com o objetivo de aproximar a televisão
dos utilizadores através da tecnologia.


<br/><br/>


Apaixonado por programação e inovação,
desenvolvo soluções digitais focadas em
performance, simplicidade e experiência do utilizador.


<br/><br/>


O meu objetivo é criar tecnologias capazes de transformar
ideias em produtos reais e ajudar empresas e projetos
a crescerem no ambiente digital.


</p>



</section>









{/* PROJETOS */}



<section

className="
mt-8
"

>


<h2

className="
text-3xl
font-bold
text-red-700
mb-6
flex
items-center
gap-3
"

>


<FaProjectDiagram/>

Projetos Desenvolvidos


</h2>





<div

className="
grid
md:grid-cols-3
gap-6
"

>


{

projetos.map((p,index)=>(


<div

key={index}

className="
bg-white
rounded-3xl
p-6
shadow-lg
hover:-translate-y-2
transition
"

>


<h3

className="
text-xl
font-bold
"

>

{p.titulo}

</h3>



<p

className="
mt-3
text-gray-600
"

>

{p.descricao}

</p>



<div

className="
mt-4
bg-red-100
text-red-700
rounded-lg
p-3
text-sm
font-semibold
"

>

{p.tecnologia}

</div>



</div>


))


}



</div>



</section>









{/* CONTACTO */}



<section

className="
bg-white
rounded-3xl
shadow-lg
p-8
mt-8
"

>


<h2

className="
text-3xl
font-bold
text-red-700
"

>

Contacto para Projetos

</h2>



<p

className="
mt-4
text-gray-600
"

>

Para criação de aplicações, websites, plataformas digitais
ou projetos tecnológicos, entre em contacto:

</p>





<div

className="
mt-6
space-y-4
"

>


<p className="flex items-center gap-3">

<FaPhone className="text-red-700"/>

+244 900 000 000

</p>



<p className="flex items-center gap-3">

<FaEnvelope className="text-red-700"/>

email@exemplo.com

</p>



<p className="flex items-center gap-3">

<FaGlobe className="text-red-700"/>

www.rctvstream.com

</p>



</div>



</section>







</div>


</div>



<Footer/>


</>

);

}









function Card({

icon,
titulo,
texto

}){


return (

<div

className="
bg-white
rounded-3xl
p-6
shadow-lg
"

>


<div

className="
w-14
h-14
rounded-xl
bg-red-700
text-white
flex
items-center
justify-center
text-2xl
"

>

{icon}


</div>




<h3

className="
text-xl
font-bold
mt-5
"

>

{titulo}


</h3>




<p

className="
mt-3
text-gray-600
"

>

{texto}


</p>



</div>


);

}