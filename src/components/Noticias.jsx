import {Link} from "react-router-dom";
import {FaArrowRight} from "react-icons/fa";


function Noticias(){

return(


<section className="max-w-7xl mx-auto px-6 py-24">


<div className="flex justify-between items-center mb-12">


<h2 className="text-4xl font-bold">

Últimas Notícias

</h2>


<Link

to="/noticias"

className="text-red-700 flex items-center gap-2 font-bold"

>

Ver todas

<FaArrowRight/>

</Link>


</div>




<div className="grid md:grid-cols-3 gap-8">


<Card

title="Assembleia de Balanço"

text="Informações sobre actividades realizadas pelo CAP."

/>


<Card

title="Renovação de Mandatos"

text="Apresentação dos novos responsáveis."

/>



<Card

title="Actividades Comunitárias"

text="Projectos e iniciativas junto da comunidade."

/>


</div>



</section>


)

}




function Card({title,text}){


return(

<div

className="
bg-white
rounded-2xl
shadow-lg
p-8
hover:-translate-y-2
transition
"


>


<h3 className="text-xl font-bold">

{title}

</h3>


<p className="mt-4 text-gray-600">

{text}

</p>


<button

className="
mt-6
text-red-700
font-bold
"

>

Ler mais →

</button>


</div>

)

}


export default Noticias;