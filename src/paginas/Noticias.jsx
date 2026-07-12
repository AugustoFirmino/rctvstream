import Hero from "../components/Hero";
import Estatisticas from "../components/Estatisticas";

import Noticias from "../components/Noticias";

import Contactos from "../components/Contactos";
import Footer from "../components/Footer";


function Home(){

return(

<div className="bg-gray-50 text-gray-800">

<Hero/>

<Estatisticas/>

<Noticias/>


<Contactos/>

<Footer/>

</div>

)

}

export default Home;