import React from "react";
import { Link } from "react-router-dom";

import {
  FaArrowLeft,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone
} from "react-icons/fa";


import dev1 from "../assets/dev1.jpg";
import dev2 from "../assets/dev2.jpg";



function Desenvolvedores() {


const desenvolvedores = [

{
id:1,

nome:"Augusto Firmino Correia",

foto:dev1,

instituicao:"Universidade ISPEKA",

funcao:"Programador Full Stack | Técnico de Informática",


biografia:`

Augusto Firmino Correia é Programador Full Stack e Técnico de Informática, 
com formação na Universidade ISPEKA, dedicado ao desenvolvimento de soluções 
tecnológicas modernas, inovadoras e eficientes.

Atua na criação de aplicações web completas, sistemas digitais, plataformas 
online e soluções personalizadas, combinando conhecimentos de programação, 
infraestrutura informática e ferramentas tecnológicas.

Possui competências em React.js para desenvolvimento de interfaces modernas 
e responsivas, Node.js para criação de APIs e serviços backend, MySQL para 
gestão de bases de dados, Tailwind CSS para construção de layouts profissionais 
e integração de Inteligência Artificial (IA) em projetos digitais.

Como Técnico de Informática, possui conhecimentos em manutenção de computadores,
instalação e configuração de sistemas, suporte técnico, resolução de problemas
de hardware e software, redes informáticas e ferramentas tecnológicas.

Complementa sua formação com conhecimentos em Marketing Digital, Excel Avançado 
e Informática na Óptica do Utilizador, aplicando tecnologia, análise de dados 
e estratégias digitais para melhorar processos e criar soluções de valor.

Com uma visão multidisciplinar entre desenvolvimento de software, suporte 
informático, inteligência artificial e comunicação digital, procura transformar 
ideias em soluções tecnológicas funcionais, seguras e inovadoras.

`,


projetos:[

"RCTV Stream - Plataforma de transmissão online",

"Sistema de Gestão de Directores",

"Tradutor Português - Kimbundu",

"Aplicações Web Empresariais"

],


tecnologias:[

"React.js",

"Node.js",

"MySQL",

"Tailwind CSS",

"Socket.io",

"Cloudinary",

"Inteligência Artificial",

"Marketing Digital"

],


email:"augusto@email.com",

telefone:"+244 900 000 000"

},



{


id:2,

nome:"Carlos Manuel",

foto:dev2,


instituicao:"Universidade de Tecnologia",

funcao:"Software Developer",


biografia:`

Desenvolvedor focado na criação de soluções digitais modernas,
interfaces intuitivas e sistemas escaláveis.

Possui experiência no desenvolvimento web, integração de APIs,
criação de aplicações e implementação de tecnologias para melhorar
processos digitais.

`,


projetos:[

"Sistema de Gestão Escolar",

"Aplicativo Mobile",

"Dashboard Administrativo",

"Portal Institucional"

],



tecnologias:[

"JavaScript",

"React",

"Express",

"MongoDB",

"Git",

"Figma"

],


email:"carlos@email.com",

telefone:"+244 911 111 111"


}


];




return (

<div className="
min-h-screen
bg-gray-950
text-white
py-10
px-5
">


<div className="max-w-6xl mx-auto">



<Link

to="/"

className="
flex
items-center
gap-2
mb-8
text-red-400
hover:text-red-300
transition
"

>

<FaArrowLeft/>

Voltar

</Link>





<h1 className="
text-4xl
font-bold
text-center
mb-12
">

Desenvolvedores

</h1>





<div className="
grid
md:grid-cols-2
gap-10
">



{

desenvolvedores.map((dev)=>(


<div

key={dev.id}

className="
bg-gray-900
rounded-2xl
shadow-xl
p-6
border
border-gray-800
hover:border-red-500
transition
"

>



<div className="
flex
flex-col
items-center
">


<img

src={dev.foto}

alt={dev.nome}

className="
w-36
h-36
rounded-full
object-cover
border-4
border-red-600
"

/>



<h2 className="
text-2xl
font-bold
mt-5
text-center
">

{dev.nome}

</h2>




<p className="
text-red-400
text-center
">

{dev.funcao}

</p>



<p className="
text-gray-400
text-sm
mt-1
">

{dev.instituicao}

</p>



</div>





<div className="mt-6">


<h3 className="
font-bold
text-xl
mb-3
">

Biografia

</h3>


<p className="
text-gray-300
leading-relaxed
whitespace-pre-line
">

{dev.biografia}

</p>


</div>







<div className="mt-6">


<h3 className="
font-bold
text-xl
mb-3
">

Projetos Realizados

</h3>



<ul className="
list-disc
ml-5
text-gray-300
space-y-2
">


{

dev.projetos.map((item,index)=>(

<li key={index}>

{item}

</li>

))

}


</ul>



</div>








<div className="mt-6">


<h3 className="
font-bold
text-xl
mb-3
">

Tecnologias

</h3>



<div className="
flex
flex-wrap
gap-2
">


{

dev.tecnologias.map((tec,index)=>(


<span

key={index}

className="
bg-red-600/20
border
border-red-500
px-3
py-1
rounded-full
text-sm
"

>

{tec}

</span>


))


}


</div>


</div>







<div className="
mt-8
border-t
border-gray-700
pt-5
">


<h3 className="
font-bold
text-xl
mb-4
">

Contactos para Projetos

</h3>



<div className="
space-y-3
text-gray-300
">


<p className="
flex
items-center
gap-3
">

<FaEnvelope className="text-red-500"/>

{dev.email}

</p>




<p className="
flex
items-center
gap-3
">

<FaPhone className="text-red-500"/>

{dev.telefone}

</p>


</div>





<div className="
flex
gap-5
mt-5
">


<a

href="#"

className="
text-2xl
hover:text-red-500
"

>

<FaGithub/>

</a>



<a

href="#"

className="
text-2xl
hover:text-red-500
"

>

<FaLinkedin/>

</a>



</div>



</div>





</div>


))


}



</div>



</div>


</div>


)


}


export default Desenvolvedores;