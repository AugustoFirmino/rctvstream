import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./paginas/Home";
import Desenvolvidor from "./paginas/Desenvolvidor";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="rctvstream/devs" element={<Desenvolvidor />} />


       

      </Routes>

    </BrowserRouter>
  );
}

export default App;