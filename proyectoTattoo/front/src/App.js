// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import HomePage from "./pages/HomePage";
import SobreMiPage from "./pages/SobreMiPage";
import TrabajosPage from "./pages/TrabajosPage";
import InformacionPage from "./pages/InformacionPage";
import ContactanosPage from "./pages/ContactanosPage";

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="sobremi" element={<SobreMiPage />} />
        <Route path="trabajos" element={<TrabajosPage />} />
        <Route path="informacion" element={<InformacionPage />} />
        <Route path="contactanos" element={<ContactanosPage />} />
      </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
