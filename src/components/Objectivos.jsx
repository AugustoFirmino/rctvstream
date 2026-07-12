import {
  FaBullseye,
  FaBroadcastTower,
  FaUsers,
  FaNewspaper,
  FaHandshake,
  FaChartLine
} from "react-icons/fa";


function Objectivos(){


const lista=[

{
icon:<FaBullseye/>,
titulo:"Informação de Qualidade",
texto:"Disponibilizar notícias credíveis, actualizadas e relevantes para manter Angola e o mundo informados."
},


{
icon:<FaBroadcastTower/>,
titulo:"Transmissão ao Vivo",
texto:"Oferecer uma plataforma de streaming moderna com cobertura em tempo real de acontecimentos nacionais e internacionais."
},


{
icon:<FaUsers/>,
titulo:"Interação com a Audiência",
texto:"Criar uma ligação próxima com os espectadores através de participação, comentários e redes sociais."
},


{
icon:<FaNewspaper/>,
titulo:"Jornalismo Responsável",
texto:"Produzir conteúdos jornalísticos com compromisso, transparência e respeito pela verdade."
},


{
icon:<FaChartLine/>,
titulo:"Inovação Digital",
texto:"Investir em tecnologia para melhorar a experiência dos utilizadores através de novas plataformas digitais."
},


{
icon:<FaHandshake/>,
titulo:"Proximidade com Angola",
texto:"Valorizar histórias, culturas, comunidades e acontecimentos de todas as regiões do país."
}

];



return(


<section className="
bg-gradient-to-b
from-gray-100
to-white
py-24
">


<div className="max-w-7xl mx-auto px-6">



{/* TITULO */}

<div className="text-center mb-16">


<span

className="
text-red-700
font-semibold
uppercase
tracking-widest
"

>

RCTV STREAM

</span>



<h2

className="
text-4xl
md:text-5xl
font-bold
mt-4
text-gray-900
"

>

Objectivos Estratégicos

</h2>




<p

className="
text-gray-600
max-w-2xl
mx-auto
mt-5
text-lg
"

>

Compromissos que orientam a RCTV Stream
na missão de informar, aproximar pessoas
e oferecer conteúdos de qualidade.

</p>



</div>






{/* CARDS */}


<div

className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
"

>


{

lista.map((item,index)=>(



<div

key={index}

className="
group
relative
bg-white
rounded-3xl
p-8
shadow-lg
border
border-gray-100
hover:-translate-y-3
hover:shadow-2xl
transition-all
duration-500
overflow-hidden
"

>



{/* Número */}

<div

className="
absolute
right-6
top-5
text-6xl
font-bold
text-gray-100
group-hover:text-red-50
transition
"

>


</div>







{/* Ícone */}

<div

className="
relative
w-16
h-16
rounded-2xl
bg-gradient-to-br
from-red-800
to-red-500
text-white
flex
items-center
justify-center
text-3xl
shadow-lg
group-hover:scale-110
transition
"

>

{item.icon}

</div>







<h3

className="
text-xl
font-bold
mt-7
text-gray-900
"

>

{item.titulo}

</h3>







<div

className="
w-12
h-1
bg-red-700
rounded-full
mt-4
mb-5
group-hover:w-full
transition-all
duration-500
"

></div>







<p

className="
text-gray-600
leading-relaxed
"

>

{item.texto}

</p>







<button

className="
mt-6
text-red-700
font-semibold
hover:text-red-900
transition
"

>



</button>





</div>



))


}



</div>




</div>


</section>


)

}


export default Objectivos;