
import React, { useState } from "react";

function Contacto() {
  const [formData, setFormData] = useState({
    fullname: "",
    asunto: "",
    mensaje: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar alguna acción con los datos del formulario
    console.log(formData);
  };

  return (
    <>
      <div>
        <h2 className="text-center">Contactanos</h2>
        <div className="text-success">
          <hr />
        </div>
        <p>Profesional: Dr. Juan Pérez</p>
        <div className="text-success">
          <hr />
        </div>
        <p>Teléfono: +1 123 456 7890</p>
        <div className="text-success">
          <hr />
        </div>
        <p>Email: info@veterinaria.com</p>
        <div className="text-success">
          <hr />
        </div>
        <p>Nuestra Dirección: Calle Principal 123</p>
        <div className="text-success">
          <hr />
        </div>
        <div className="nt-4">
          <h1 className="text-center">Formulario de Contacto</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="fullname">Nombre completo:</label>
            <div className="text-success"></div>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <hr className="text-success" />
          <div className="mb-3">
            <label htmlFor="asunto">Asunto:</label>
            <div className="text-success"></div>
            <input
              type="text"
              id="asunto"
              name="asunto"
              value={formData.asunto}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <hr className="text-success" />
          <div className="mb-3">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              className="form-control"
              // @ts-ignore
              rows="3"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>
    </>
  );
}

export default Contacto;

