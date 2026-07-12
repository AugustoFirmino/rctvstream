import {
  FaBullseye,
  FaEye,
  FaHandshake
} from "react-icons/fa";


function Missao(){

return(

<section className="max-w-7xl mx-auto px-6 py-24">


<div className="text-center mb-16">


<span className="
text-red-700
font-semibold
uppercase
tracking-wider
">

Identidade Institucional

</span>


<h2 className="
text-4xl
md:text-5xl
font-bold
mt-3
text-gray-900
">

Missão, Visão e Valores

</h2>


<p className="
text-gray-600
mt-5
max-w-2xl
mx-auto
text-lg
">

Conheça os princípios fundamentais que orientam
a nossa organização, compromisso e atuação.

</p>


</div>





<div className="grid md:grid-cols-3 gap-10">



<Card

number="01"

icon={<FaBullseye/>}

title="Missão"

text="
Promover organização, comunicação e participação,
criando soluções e fortalecendo a ligação com a comunidade.
"

/>



<Card

number="02"

icon={<FaEye/>}

title="Visão"

text="
Ser uma referência de excelência, proximidade e liderança,
contribuindo para o desenvolvimento sustentável.
"

/>



<Card

number="03"

icon={<FaHandshake/>}

title="Valores"

text="
Baseamos a nossa atuação na unidade, disciplina,
responsabilidade, transparência e compromisso.
"

/>


</div>


</section>


)

}





function Card({number,icon,title,text}){


return(

<div

className="
relative
bg-white
rounded-3xl
p-8
shadow-xl
border
border-gray-100
overflow-hidden
group
hover:shadow-2xl
hover:-translate-y-3
transition-all
duration-500
"


>


{/* Número decorativo */}

<div

className="
absolute
right-6
top-4
text-7xl
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
w-20
h-20
rounded-2xl
bg-red-700
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





{/* Conteúdo */}

<h3

className="
text-2xl
font-bold
mt-8
text-gray-900
"

>

{title}

</h3>




<div

className="
w-14
h-1
bg-red-700
rounded-full
mt-4
"

>

</div>





<p

className="
mt-5
text-gray-600
leading-relaxed
"

>

{text}

</p>




<button

className="
mt-8
text-red-700
font-semibold
hover:text-red-900
transition
"

>



</button>



</div>


)

}


export default Missao;