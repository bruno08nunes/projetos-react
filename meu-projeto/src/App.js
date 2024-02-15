import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Empresa from "./components/pages/Empresa";
import Contatos from "./components/pages/Contatos";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Teste from "./components/tests/Teste";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/contatos" element={<Contatos />} />
      </Routes>
      <Teste />
      <Footer />
    </BrowserRouter>
  );
}

export default App;