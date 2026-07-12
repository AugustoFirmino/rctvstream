import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./paginas/Home";
import Direcao from "./paginas/Direcao";
import Noticias from "./paginas/Noticias";
import Eventos from "./paginas/Eventos";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/direcao" element={<Direcao />} />

        <Route path="/noticias" element={<Noticias />} />

        <Route path="/eventos" element={<Eventos />} />

       

      </Routes>

    </BrowserRouter>
  );
}

export default App;