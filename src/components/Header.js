import React, { useContext} from "react";
import { DataContext } from "context/DataProvider";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  const value = useContext(DataContext);
  const [carrito] = value.carrito;
  const [menu, setMenu] = value.menu;
  
  const toggleMenu = () =>{
    setMenu(!menu)
  }

  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top">
    <div className="container-fluid">
      <Link className="navbar-brand" to={"/"}>
        <img className=".d-inline-block .align-text-top" src="loguito.webp" alt="WEARBOX Logo"/>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul className="navbar-nav mb-2 fs-5 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to={"/"}>Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/productos"}>Productos</Link>
          </li>
          <li className="nav-item cart" onClick={toggleMenu}>
            <box-icon name="cart"></box-icon>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};
