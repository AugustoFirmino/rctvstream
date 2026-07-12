import React from "react";

import {
  FaUser,
  FaGraduationCap,
  FaCode,
  FaProjectDiagram,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaRocket
} from "react-icons/fa";


import Hero from "../components/Hero";
import Estatisticas from "../components/Estatisticas";
import Footer from "../components/footer";



export default function Criador() {


return (
  <div className="bg-gray-50 text-gray-800">
    
    <Hero />
    <Estatisticas />
    <Footer />
  </div>
)


}