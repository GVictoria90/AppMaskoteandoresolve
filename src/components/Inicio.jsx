import React, { useContext } from "react";
import { UserContext } from "./UserContext";
function Inicio() {
  const { user } = useContext(UserContext);

  return (
    <>
      <h1 className="text-center">¡¡¡Bienvenido!!!</h1>
      <div className="text-center">
        <h2>Veterinaria "Maskoteando"</h2>
      </div>
      <div>
        <img
          className="img-fluid mx-auto d-block"
          src="./logo.ico"
          alt="logo"
        />
      </div>
    </>
  );
}

export default Inicio;
