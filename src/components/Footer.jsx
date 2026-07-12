import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaArrowRight,
  FaBroadcastTower,
  FaPlayCircle
} from "react-icons/fa";

import logo from "../assets/rctvstream-branco.png";
import { Link } from "react-router-dom";


function Footer(){

return(

<footer className="
bg-gradient-to-br
from-gray-950
via-gray-900
to-red-950
text-white
pt-20
">


<div className="
max-w-7xl
mx-auto
px-6
grid
md:grid-cols-4
gap-12
">



{/* LOGO E DESCRIÇÃO */}

<div>


<div className="flex items-center gap-4">


<img
src={logo}
alt="Stream RCTV"
className="
w-16
h-16
object-contain
bg-white
rounded-full
p-2
"
/>


<div>

<h3 className="
text-2xl
font-bold
">
RCTV Stream
</h3>

<div className="
flex
items-center
gap-2
text-red-500
text-sm
">

<FaBroadcastTower/>

AO VIVO

</div>

</div>


</div>



<p className="
text-gray-400
mt-6
leading-relaxed
">

Plataforma digital de notícias,
transmissões ao vivo, informação,
entretenimento e cobertura dos
principais acontecimentos de Angola.

</p>



<div className="
mt-6
w-16
h-1
bg-red-600
rounded
"></div>


</div>





{/* NAVEGAÇÃO */}

<div>


<h3 className="
text-xl
font-bold
mb-6
">

Explorar

</h3>


<ul className="
space-y-4
text-gray-400
">

<a  href="#transmissao">
<li
 
className="
hover:text-white
transition
flex
items-center
gap-2
">

<FaPlayCircle/>
Assistir ao Vivo

</li>
</a>

<li className="
hover:text-white
transition
">

Últimas Notícias

</li>



<li className="
hover:text-white
transition
">

Desporto

</li>



<li className="
hover:text-white
transition
">

Vídeos

</li>


</ul>


</div>






{/* CONTACTOS */}

<div>


<h3 className="
text-xl
font-bold
mb-6
">

Contactos

</h3>



<div className="
space-y-5
text-gray-400
">


<div className="
flex
gap-4
items-center
hover:text-white
transition
">

<FaMapMarkerAlt
className="text-red-500"
/>

<span>

Luanda, Angola

</span>

</div>




<div className="
flex
gap-4
items-center
hover:text-white
transition
">

<FaPhone
className="text-red-500"
/>

<span>

+244 942 081 324

</span>

</div>




<div className="
flex
gap-4
items-center
hover:text-white
transition
">


<FaEnvelope
className="text-red-500"
/>

<span>

contacto@rctvstream.com

</span>

</div>



</div>


</div>








{/* REDES SOCIAIS */}

<div>


<h3 className="
text-xl
font-bold
mb-6
">

Siga a RCTV

</h3>



<p className="
text-gray-400
mb-6
">

Receba notícias,
transmissões e novidades
em primeira mão.

</p>




<div className="
flex
gap-4
">


<a
className="
w-12
h-12
rounded-full
bg-white/10
flex
items-center
justify-center
hover:bg-red-700
transition
"
>

<FaFacebookF/>

</a>



<a
className="
w-12
h-12
rounded-full
bg-white/10
flex
items-center
justify-center
hover:bg-red-700
transition
"
>

<FaInstagram/>

</a>




<a
className="
w-12
h-12
rounded-full
bg-white/10
flex
items-center
justify-center
hover:bg-red-700
transition
"
>

<FaYoutube/>

</a>



</div>




<button

className="
mt-8
flex
items-center
gap-3
bg-red-700
px-6
py-3
rounded-full
font-semibold
hover:bg-red-800
transition
"

>
Conheça o Desenvolvedor da RCTV Stream

<FaArrowRight/>

</button>



</div>



</div>







{/* BARRA FINAL */}


<div

className="
border-t
border-white/10
mt-16
"

>


<div

className="
max-w-7xl
mx-auto
px-6
py-6
flex
flex-col
md:flex-row
justify-between
gap-4
text-gray-400
text-sm
"

>


<p>

© 2026 RCTV Stream. Todos os direitos reservados.

</p>



<p>

Notícias • Informação • Streaming

</p>


</div>


</div>



</footer>

)

}


export default Footer;