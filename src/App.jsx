import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContextGlobal from "./Components/utils/global.context";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import { routes } from "./Routes/routes";

function App() {
  return (
    <BrowserRouter>
      {/* Envuelve toda la aplicación con BrowserRouter para el enrutamiento */}
      <ContextGlobal>
        {/* Envuelve la aplicación con ContextGlobal para el estado global */}
        <div className="app">
          <Navbar /> 
          <Routes>
            {/* Define las rutas para tu aplicación */}
            <Route path="/" element={<Home />} />
            {/* Ruta para la página de inicio */}
            <Route path={routes.contact} element={<Contact />} />
            {/* Ruta para la página de Contacto */}
            <Route path={routes.detail} element={<Detail />} />
            {/* Ruta para la página de Detalle */}
            <Route path={routes.favs} element={<Favs />} />
            {/* Ruta para la página de Favoritos */}
          </Routes>
          <Footer /> 
        </div>
      </ContextGlobal>
    </BrowserRouter>
  );
}

export default App;