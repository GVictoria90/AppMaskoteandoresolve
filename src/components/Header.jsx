import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { UserContext } from "./UserContext";
import NavButton from "./NavButton";

function Header() {
  const { user } = useContext(UserContext);
  //console.log(user)

  return (
    <>
      <header className="my-3">
        <Navbar expand="lg">
          <div className="container-fluid">
            <NavButton route={"/"} text={"Inicio"} />
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-center"
            >
              <Nav>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavButton route={"/nosotros"} text={"Nosotros"} />
                  </li>
                  <li className="nav-item">
                    <NavButton route={"/contacto"} text={"Contacto"} />
                  </li>
                
                  {user ? (
                    <>
                      <li className="nav-item">
                        <NavButton route={"/mascotas"} text={"Mascotas"} />
                      </li>
                      <li className="nav-item">
                         <NavButton route={"/registro"} text={"Registro"} />
                      </li>
                      <li className="nav-item">
                        <NavButton route={"/login"} text={"Logout"} />
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="nav-item">
                        <NavButton route={"/login"} text={"Login"} />
                      </li>
                    </>
                  )}
                </ul>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
