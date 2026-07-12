import secretaria from "../assets/primeira-secretaria.png";


function Direcao(){

return(

<section className="bg-gray-100 py-24">


<div className="max-w-7xl mx-auto px-6 text-center">


<h2 className="text-4xl font-bold mb-12">

Direção do CAP

</h2>



<div

className="
bg-white
max-w-sm
mx-auto
rounded-3xl
shadow-xl
p-8
"


>


<img

src={secretaria}

alt="Primeira Secretária"

className="
w-40
h-40
rounded-full
mx-auto
object-cover
"

 />



<h3 className="text-2xl font-bold mt-6">

Lídia Abílio

</h3>



<p className="text-gray-500 mt-2">

Primeira Secretária

</p>



</div>


</div>


</section>


)

}


export default Direcao;