import Hero from "../components/Hero";
import Estatisticas from "../components/Estatisticas";
import Missao from "../components/Missao";
import Objectivos from "../components/Objectivos";
import Noticias from "../components/Noticias";

import Direcao from "../components/Direcao";
import Contactos from "../components/Contactos";
import Footer from "../components/Footer";
import Stream from "../components/stream";


function Home(){

return(

<div className="bg-gray-50 text-gray-800">

<Hero/>

<Estatisticas/>

<Missao/>

<Stream/>
<Objectivos/>



<Contactos/>

<Footer/>

</div>

)

}

export default Home;