import React from "react";
import { Route, Routes } from "react-router-dom";
import Contacto from "./Contacto";
import Inicio from "./Inicio";
import Login from "./Login";
import Nosotros from "./Nosotros";
import Registro from "./Registro";
import Mascotas from "./Mascotas";

function Body() {
  return (
    <div className="col-md-8 offset-md-2 my-4">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/mascotas" element={<Mascotas />} />
      </Routes>
    </div>
  );
}

export default Body;
