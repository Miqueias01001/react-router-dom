import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";


function App() {
  return (
    <BrowserRouter>
    <Menu />
    

     <Routes>
     <Route path="/" element={<Inicio/>} />
     <Route path="/sobremim" element={<SobreMim/>} />
     <Route path="*" element={<div>Pagina não encontrada</div>} />
     </Routes>
    </BrowserRouter>
  ); 
}

export default App;
