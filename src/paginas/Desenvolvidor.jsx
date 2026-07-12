import React from "react";
import { Link } from "react-router-dom";

import {
  FaArrowLeft,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaCode,
  FaLaptopCode,
  FaRobot,
  FaBullhorn
} from "react-icons/fa";


import dev1 from "../assets/devs1.jpeg";



function Desenvolvedores() {


const desenvolvedor = {

nome:"Augusto Firmino Correia",

foto:dev1,

instituicao:"Universidade ISPEKA",

funcao:"Programador Full Stack | Técnico de Informática",



biografia:`

Augusto Firmino Correia é Programador Full Stack e Técnico de Informática,
com formação na Universidade ISPEKA, dedicado ao desenvolvimento de soluções
tecnológicas modernas, inovadoras e eficientes.

Atua na criação de aplicações web completas, sistemas digitais, plataformas
online e soluções personalizadas, combinando programação, infraestrutura
informática e ferramentas tecnológicas.

Possui experiência no desenvolvimento frontend com React.js, backend com
Node.js, criação de APIs, gestão de bases de dados MySQL e desenvolvimento
de interfaces profissionais utilizando Tailwind CSS.

Também possui conhecimentos na integração de Inteligência Artificial (IA),
Marketing Digital, Excel Avançado e Informática na Óptica do Utilizador.

Como profissional de tecnologia, procura transformar ideias em soluções
digitais funcionais, seguras e preparadas para os desafios do mundo moderno.

`,



projetos:[

"RCTV Stream - Plataforma de transmissão online",

"Sistema de Gestão de Directores",

"Tradutor Português - Kimbundu",

"Sistemas Web Empresariais",

"Aplicações digitais personalizadas"

],



tecnologias:[

"React.js",

"Node.js",

"MySQL",

"Tailwind CSS",

"JavaScript",

"Socket.io",

"Cloudinary",

"Inteligência Artificial",

"Marketing Digital"

],



email:"augusto@email.com",

telefone:"+244 900 000 000"


};





return (


<div className="
min-h-screen
bg-white
text-gray-900
py-10
px-5
">



<div className="
max-w-5xl
mx-auto
">



{/* VOLTAR */}

<Link

to="/"

className="
inline-flex
items-center
gap-3
mb-10
text-red-600
font-semibold
hover:text-red-800
transition
"

>

<FaArrowLeft/>

Voltar

</Link>






{/* CABEÇALHO */}


<div className="
bg-gray-50
rounded-3xl
shadow-lg
p-8
flex
flex-col
md:flex-row
items-center
gap-8
border
border-gray-200
">



<img

src={desenvolvedor.foto}

alt={desenvolvedor.nome}

className="
w-52
h-52
rounded-full
object-cover
border-8
border-red-600
shadow-xl
"

/>





<div>


<h1 className="
text-4xl
font-bold
mb-3
">

{desenvolvedor.nome}

</h1>



<h2 className="
text-xl
text-red-600
font-semibold
">

{desenvolvedor.funcao}

</h2>



<p className="
text-gray-600
mt-3
">

{desenvolvedor.instituicao}

</p>



<p className="
mt-5
text-gray-700
leading-relaxed
">

Desenvolvedor focado em criar soluções digitais,
sistemas web modernos e tecnologias inovadoras.

</p>


</div>



</div>







{/* BIOGRAFIA */}


<section className="mt-10">


<h2 className="
text-2xl
font-bold
mb-4
flex
items-center
gap-3
">

<FaCode className="text-red-600"/>

Sobre mim

</h2>



<p className="
text-gray-700
leading-relaxed
whitespace-pre-line
">

{desenvolvedor.biografia}

</p>


</section>









{/* COMPETENCIAS */}


<section className="mt-10">


<h2 className="
text-2xl
font-bold
mb-5
">

Competências

</h2>



<div className="
grid
md:grid-cols-3
gap-5
">


<div className="
p-5
rounded-xl
bg-gray-100
">

<FaLaptopCode className="text-red-600 text-3xl mb-3"/>

<h3 className="font-bold">

Desenvolvimento Web

</h3>

<p className="text-gray-600">

React, Node.js, APIs e sistemas completos.

</p>

</div>




<div className="
p-5
rounded-xl
bg-gray-100
">

<FaRobot className="text-red-600 text-3xl mb-3"/>

<h3 className="font-bold">

Inteligência Artificial

</h3>

<p className="text-gray-600">

Aplicação de IA em soluções digitais.

</p>

</div>





<div className="
p-5
rounded-xl
bg-gray-100
">

<FaBullhorn className="text-red-600 text-3xl mb-3"/>

<h3 className="font-bold">

Marketing Digital

</h3>

<p className="text-gray-600">

Estratégias digitais e presença online.

</p>

</div>



</div>


</section>








{/* PROJETOS */}


<section className="mt-10">


<h2 className="
text-2xl
font-bold
mb-5
">

Projetos Realizados

</h2>



<div className="
grid
md:grid-cols-2
gap-4
">


{

desenvolvedor.projetos.map((projeto,index)=>(


<div

key={index}

className="
bg-gray-100
p-4
rounded-xl
border-l-4
border-red-600
"

>

{projeto}

</div>


))


}


</div>


</section>








{/* TECNOLOGIAS */}


<section className="mt-10">


<h2 className="
text-2xl
font-bold
mb-5
">

Tecnologias

</h2>




<div className="
flex
flex-wrap
gap-3
">


{

desenvolvedor.tecnologias.map((tec,index)=>(


<span

key={index}

className="
px-4
py-2
rounded-full
bg-red-100
text-red-700
font-medium
"

>

{tec}

</span>


))


}


</div>


</section>








{/* CONTACTO */}



<section className="
mt-10
bg-gray-900
text-white
rounded-2xl
p-8
">


<h2 className="
text-2xl
font-bold
mb-5
">

Contactos para Projetos

</h2>




<div className="
space-y-4
">


<p className="
flex
items-center
gap-3
">

<FaEnvelope className="text-red-500"/>

{desenvolvedor.email}

</p>




<p className="
flex
items-center
gap-3
">

<FaPhone className="text-red-500"/>

{desenvolvedor.telefone}

</p>



</div>





<div className="
flex
gap-6
mt-6
text-3xl
">


<a href="#">

<FaGithub/>

</a>


<a href="#">

<FaLinkedin/>

</a>


</div>



</section>




</div>


</div>



)


}


export default Desenvolvedores;