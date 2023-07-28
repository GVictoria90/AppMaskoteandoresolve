import React, { useState } from "react";

const Citas = () => {
  // Estado para almacenar la lista de citas
  const [citas, setCitas] = useState([]);

  // Estado para almacenar los campos del formulario
  const [nuevaCita, setNuevaCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  // Función para manejar cambios en los campos del formulario
  const handleChange = (e) => {
    setNuevaCita({
      ...nuevaCita,
      [e.target.name]: e.target.value,
    });
  };

  // Función para agregar una nueva cita
  const agregarCita = (e) => {
    e.preventDefault();

    // Validar que todos los campos estén completos
    for (const campo in nuevaCita) {
      if (nuevaCita[campo].trim() === "") {
        alert("Por favor, complete todos los campos.");
        return;
      }
    }

    // Agregar la nueva cita a la lista
    setCitas([...citas, nuevaCita]);

    // Reiniciar los campos del formulario
    setNuevaCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <div>
      <h2>Lista de Citas</h2>

      <ul>
        {citas.map((cita, index) => (
          <li key={index}>
            <strong>Mascota:</strong> {cita.mascota} <br />
            <strong>Propietario:</strong> {cita.propietario} <br />
            <strong>Fecha:</strong> {cita.fecha} <br />
            <strong>Hora:</strong> {cita.hora} <br />
            <strong>Síntomas:</strong> {cita.sintomas}
          </li>
        ))}
      </ul>

      <h3>Agregar Cita</h3>

      <form onSubmit={agregarCita}>
        <label htmlFor="mascota">Mascota:</label>
        <input
          type="text"
          id="mascota"
          name="mascota"
          value={nuevaCita.mascota}
          onChange={handleChange}
        />

        <label htmlFor="propietario">Propietario:</label>
        <input
          type="text"
          id="propietario"
          name="propietario"
          value={nuevaCita.propietario}
          onChange={handleChange}
        />

        <label htmlFor="fecha">Fecha:</label>
        <input
          type="date"
          id="fecha"
          name="fecha"
          value={nuevaCita.fecha}
          onChange={handleChange}
        />

        <label htmlFor="hora">Hora:</label>
        <input
          type="time"
          id="hora"
          name="hora"
          value={nuevaCita.hora}
          onChange={handleChange}
        />

        <label htmlFor="sintomas">Síntomas:</label>
        <textarea
          id="sintomas"
          name="sintomas"
          value={nuevaCita.sintomas}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default Citas;
