import React, { useCallback, useEffect, useState } from "react";

const Mascotas = () => {
  const [mascotas, setMascotas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMascotas, setFilteredMascotas] = useState([]);

  const fetchMascotas = useCallback(async () => {
    try {
      const response = await fetch(
        "https://64a8087edca581464b852f0d.mockapi.io/mascotas/"
      );
      const data = await response.json();
      setMascotas(data);
      setFilteredMascotas(data);
    } catch (error) {
      console.log("Error al obtener las mascotas:", error);
    }
  }, []);

  useEffect(() => {
    fetchMascotas();
  }, [fetchMascotas]);

  useEffect(() => {
    const filteredResults = mascotas.filter((mascota) =>
      mascota.Nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMascotas(filteredResults);
  }, [searchTerm, mascotas]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const editMascota = async (editedMascota) => {
    const updatedNombre = prompt(
      "Ingresa el nuevo nombre",
      editedMascota.Nombre
    );
    const updatedEspecie = prompt(
      "Ingresa la nueva especie",
      editedMascota.Especie
    );
    const updatedRaza = prompt("Ingresa la nueva raza", editedMascota.Raza);
    const updatedEdad = prompt("Ingresa la nueva edad", editedMascota.Edad);
    const updatedPropietario = prompt(
      "Ingresa el nuevo propietario",
      editedMascota.Propietario
    );
    const updatedTelefono = prompt(
      "Ingresa el nuevo telefono",
      editedMascota.Telefono
    );
    const updatedDireccion = prompt(
      "Ingresa la nueva direccion",
      editedMascota.Direccion
    );
    const updatedProximoTurno = prompt(
      "Ingresa el proximo turno",
      editedMascota.ProximoTurno
    );

    if (updatedNombre) {
      const updatedMascota = {
        ...editedMascota,
        Nombre: updatedNombre,
        Especie: updatedEspecie,
        Raza: updatedRaza,
        Edad: updatedEdad,
        Propietario: updatedPropietario,
        Telefono: updatedTelefono,
        Direccion: updatedDireccion,
        ProximoTurno: updatedProximoTurno,
      };

      try {
        await fetch(
          `https://64a8087edca581464b852f0d.mockapi.io/mascotas/${editedMascota.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedMascota),
          }
        );

        setMascotas((prevMascotas) =>
          prevMascotas.map((mascota) =>
            mascota.id === editedMascota.id ? updatedMascota : mascota
          )
        );

        alert("La mascota ha sido actualizada correctamente.");
      } catch (error) {
        console.log("Error al editar la mascota:", error);
        alert("Ocurrió un error al editar la mascota. Por favor, inténtalo de nuevo más tarde.");
      }
    }
  };

  const deleteMascota = async (mascotaId) => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que deseas eliminar esta mascota?"
    );

    if (confirmDelete) {
      try {
        await fetch(
          `https://64a8087edca581464b852f0d.mockapi.io/mascotas/${mascotaId}`,
          {
            method: "DELETE",
          }
        );

        setMascotas((prevMascotas) =>
          prevMascotas.filter((mascota) => mascota.id !== mascotaId)
        );

        alert("La mascota ha sido eliminada correctamente.");
      } catch (error) {
        console.log("Error al eliminar la mascota:", error);
        alert("Ocurrió un error al eliminar la mascota. Por favor, inténtalo de nuevo más tarde.");
      }
    }
  };

  return (
    <div>
      <nav className="navbar mb-4">
        <div className="container-fluid">
          <h2 className="navbar-brand">Listado de Mascotas</h2>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearch}
            />
            <button className="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </nav>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {filteredMascotas.map((mascota) => (
          <div className="card" key={mascota.id}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Nombre: {mascota.Nombre}</li>
              <li className="list-group-item">Especie: {mascota.Especie}</li>
              <li className="list-group-item">Raza: {mascota.Raza}</li>
              <li className="list-group-item">Edad: {mascota.Edad}</li>
              <li className="list-group-item">Dueño/a: {mascota.Propietario}</li>
              <li className="list-group-item">Telefono: {mascota.Telefono}</li>
              <li className="list-group-item">Direccion: {mascota.Direccion}</li>
              <li className="list-group-item">Proximo turno: {mascota.ProximoTurno}</li>
              <li className="list-group-item">
                <img className="img-fluid" src={mascota.Imagen} alt="" />
              </li>
              <li className="list-group-item text-center">
                <button
                  className="btn btn-primary mx-1"
                  onClick={() => editMascota(mascota)}
                  type="button"
                >
                  Editar
                </button>

                <button
                  className="btn btn-primary mx-1"
                  onClick={() => deleteMascota(mascota.id)}
                  type="button"
                >
                  Eliminar
                </button>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mascotas;

