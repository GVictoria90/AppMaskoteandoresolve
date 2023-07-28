import React from 'react';
import {useNavigate} from 'react-router-dom';

const NavButton = ({ route, text }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    // Lógica para manejar el clic en el botón "Nosotros"
    // Por ejemplo, redireccionar a la página "Nosotros"
    navigate(route);
  };

  return (
    <button className="btn btn-primary mx-1" type='button' onClick={handleClick}>
      {text}
    </button>
  );
};

export default NavButton;