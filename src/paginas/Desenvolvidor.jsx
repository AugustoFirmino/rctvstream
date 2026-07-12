import React, { useState } from "react";
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
  FaBullhorn,
  FaTimes
} from "react-icons/fa";


import dev1 from "../assets/devs1.jpeg";



function Desenvolvedores() {


const [projetoSelecionado, setProjetoSelecionado] = useState(null);



const desenvolvedor = {


nome:"Augusto Firmino Correia",

foto:dev1,


instituicao:"Ensino Médio: Instituto de Telecomunicações - ITEL",

universidade:"Ensino Superior: Instituto Superior Politécnico Kalandula de Angola - ISPEKA",


funcao:"Programador Full Stack | Técnico de Informática",



biografia:`

Augusto Firmino Correia, concluiu o Instituto de Telecomunicações - ITEL na área de formação média técnica como Técnico de Informática.

Atualmente frequenta o 2º Ano do Curso de Engenharia Informática no Instituto Superior Politécnico Kalandula de Angola - ISPEKA.

Dedicado ao desenvolvimento de soluções tecnológicas modernas, inovadoras e eficientes.

Atua na criação de aplicações web completas, sistemas digitais, plataformas online e soluções personalizadas.

Possui experiência em React.js, Node.js, APIs, MySQL, Tailwind CSS, Inteligência Artificial, Marketing Digital, Excel Avançado e Informática na Óptica do Utilizador.

`,




projetos:[


{

nome:"RCTV Stream - Plataforma de transmissão online",

descricao:`

Plataforma de transmissão de conteúdos em directo desenvolvida para permitir
a distribuição de canais online.

O sistema possui integração com streaming, reprodução de vídeo, gestão de canais,
interface responsiva e experiência semelhante às plataformas profissionais de TV online.

`,

tecnologias:[
"React.js",
"Node.js",
"Socket.io",
"Tailwind CSS"
]

},



{

nome:"Sistema de Gestão de Directores",

descricao:`

Sistema desenvolvido para cadastro e gestão completa de directores.

Permite armazenar informações pessoais, biografias, experiências profissionais,
qualificações, imagens e depoimentos.

Possui integração entre frontend React e backend Node.js com base de dados MySQL.

`,

tecnologias:[
"React.js",
"Node.js",
"MySQL",
"Cloudinary"
]

},




{

nome:"Tradutor Português - Kimbundu",

descricao:`

Projeto de inteligência linguística criado para tradução entre português e kimbundu.

O sistema trabalha com dicionário personalizado, regras gramaticais,
processamento de frases e possibilidade de integração com reconhecimento de voz.

`,

tecnologias:[
"React",
"Node.js",
"MySQL",
"IA"
]

},




{

nome:"Sistemas Web Empresariais",

descricao:`

Desenvolvimento de sistemas personalizados para empresas,
incluindo dashboards administrativos, gestão de dados,
autenticação de utilizadores e APIs.

`,

tecnologias:[
"React",
"Express",
"MySQL"
]

},




{

nome:"Aplicações Digitais Personalizadas",

descricao:`

Criação de soluções digitais adaptadas às necessidades dos clientes,
desde websites institucionais até plataformas completas.

`,

tecnologias:[
"JavaScript",
"React",
"Node.js"
]

}



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



email:"gugufirmino1@email.com",

telefone:"+244 942 081 324"


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



<Link

to="/"

className="
flex
items-center
gap-3
mb-10
text-red-600
font-bold
"

>

<FaArrowLeft/>

Voltar

</Link>






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
"

/>



<div>

<h1 className="
text-4xl
font-bold
">

{desenvolvedor.nome}

</h1>


<h2 className="
text-red-600
font-semibold
mt-2
">

{desenvolvedor.funcao}

</h2>


<p className="mt-3 text-gray-600">

{desenvolvedor.instituicao}

</p>


<p className="text-gray-600">

{desenvolvedor.universidade}

</p>


</div>


</div>







<section className="mt-10">


<h2 className="text-2xl font-bold mb-4">

Sobre mim

</h2>


<p className="
whitespace-pre-line
leading-relaxed
text-gray-700
">

{desenvolvedor.biografia}

</p>


</section>










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
gap-5
">


{

desenvolvedor.projetos.map((projeto,index)=>(


<button

key={index}

onClick={()=>setProjetoSelecionado(projeto)}

className="
text-left
bg-gray-100
p-5
rounded-xl
border-l-4
border-red-600
hover:bg-red-50
transition
"

>


<h3 className="
font-bold
text-lg
">

{projeto.nome}

</h3>


<p className="
text-sm
text-gray-500
mt-2
">

Clique para ver detalhes

</p>


</button>


))


}


</div>


</section>








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
bg-red-100
text-red-700
px-4
py-2
rounded-full
"

>

{tec}

</span>


))


}


</div>


</section>









<section className="
mt-10
bg-gray-900
text-white
rounded-2xl
p-8
">


<h2 className="text-2xl font-bold mb-5">

Contactos para Projetos

</h2>



<p className="flex gap-3 items-center">

<FaEnvelope className="text-red-500"/>

{desenvolvedor.email}

</p>


<p className="flex gap-3 items-center mt-3">

<FaPhone className="text-red-500"/>

{desenvolvedor.telefone}

</p>



<div className="
flex
gap-6
text-3xl
mt-6
">


<a href="https://github.com/AugustoFirmino">

<FaGithub/>

</a>


<a href="https://www.linkedin.com/in/augusto-firmino-correia-a71287270/">

<FaLinkedin/>

</a>


</div>


</section>








{/* MODAL DOS PROJETOS */}


{

projetoSelecionado && (


<div className="
fixed
inset-0
bg-black/60
flex
items-center
justify-center
p-5
z-50
">


<div className="
bg-white
max-w-xl
w-full
rounded-2xl
p-8
relative
">


<button

onClick={()=>setProjetoSelecionado(null)}

className="
absolute
right-5
top-5
text-red-600
text-xl
"

>

<FaTimes/>

</button>




<h2 className="
text-2xl
font-bold
mb-4
">

{projetoSelecionado.nome}

</h2>



<p className="
text-gray-700
whitespace-pre-line
leading-relaxed
">

{projetoSelecionado.descricao}

</p>



<h3 className="
font-bold
mt-5
">

Tecnologias usadas:

</h3>


<div className="
flex
flex-wrap
gap-2
mt-3
">


{

projetoSelecionado.tecnologias.map((tec,index)=>(

<span

key={index}

className="
bg-red-100
text-red-700
px-3
py-1
rounded-full
"

>

{tec}

</span>


))

}


</div>



</div>


</div>


)


}





</div>


</div>


)

}


export default Desenvolvedores;