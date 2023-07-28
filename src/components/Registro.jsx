import React, { useState } from "react";
import Header from "./Header";

function Registro() {
  const urlBase = "https://64a8087edca581464b852f0d.mockapi.io/mascotas";

  const [nombre, setNombre] = useState("");
  const [especie, setEspecie] = useState("");
  const [raza, setRaza] = useState("");
  const [edad, setEdad] = useState("");
  const [propietario, setPropietario] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [proximoTurno, setProximoTurno] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newMascota = {
      Nombre: nombre,
      Especie: especie,
      Raza: raza,
      Edad: edad,
      Propietario: propietario,
      Telefono: telefono,
      Direccion: direccion,
      ProximoTurno: proximoTurno,
    };

    addOne(newMascota);
  };

  async function addOne(mascota) {
    try {
      const response = await fetch(urlBase, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mascota),
      });

      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div>
        <h2 className="text-center">Registra tu Mascota</h2>

        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="nombreMascota" className="form-label">
              Nombre de la mascota:
            </label>
            <input
              type="text"
              id="nombreMascota"
              className="form-control"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="especie" className="form-label">
              Especie:
            </label>
            <input
              type="text"
              id="especie"
              className="form-control"
              value={especie}
              onChange={(e) => setEspecie(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="raza" className="form-label">
              Raza:
            </label>
            <input
              type="text"
              id="raza"
              className="form-control"
              value={raza}
              onChange={(e) => setRaza(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="edad" className="form-label">
              Edad:
            </label>
            <input
              type="number"
              id="edad"
              className="form-control"
              value={edad}
              onChange={(e) => setEdad(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="propietario" className="form-label">
              Propietario:
            </label>
            <input
              type="text"
              id="propietario"
              className="form-control"
              value={propietario}
              onChange={(e) => setPropietario(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="telefono" className="form-label">
              Teléfono:
            </label>
            <input
              type="tel"
              id="telefono"
              className="form-control"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="direccion" className="form-label">
              Dirección:
            </label>
            <input
              type="text"
              id="direccion"
              className="form-control"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="ProximoTurno" className="form-label">
              Proximo Turno:
            </label>
            <input
              type="date"
              id="ProximoTurno"
              className="form-control"
              value={proximoTurno}
              onChange={(e) => setProximoTurno(e.target.value)}
              required
            />
          </div>
          <div className="Boton text-center my-3">
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Registro;
