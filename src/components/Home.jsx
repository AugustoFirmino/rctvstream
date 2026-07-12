import Hero from "./Hero";
import Estatisticas from "./Estatisticas";
import Missao from "./Missao";
import Objectivos from "../components/Objectivos";
import Noticias from "./Noticias";
import Direcao from "./Direcao";
import Contactos from "./Contactos";
import Footer from "../components/Footer";


function Home(){

return(

<div className="bg-gray-50 text-gray-800">

<Hero/>

<Estatisticas/>

<Missao/>

<Objectivos/>

<Noticias/>

<Direcao/>

<Contactos/>

<Footer/>

</div>

)

}

export default Home;