import React from "react";
import './style.css';
import Carrito from '../carrito';
import { Link } from "react-router-dom";


const NavBar = () => {
    return(
    <div className="contenedor-navbar m-8">
    <nav className="navbar navbar-expand-lg bg-primary">
      <Link to="/" className="navbar-brand navbar-logo">BEBIVERY</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="container-fluid navbar-items" id="navbarNavDropdown">
          <ul className="navbar-nav">            
            <li className="nav-item">
              <Link to={`/categoria/${"whiskies"}`} className="nav-link">Whiskies</Link>
            </li>
            <li className="nav-item">
              <Link to={`/categoria/${"vinos"}`} className="nav-link">Vinos</Link>
            </li>
            <li className="nav-item">
              <Link to={`/categoria/${"spirits"}`} className="nav-link">Spirits</Link>
            </li>
            <li className="nav-item">
              <Link to={`/categoria/${"cervezas"}`} className="nav-link">Cervezas</Link>
            </li>
            <Carrito/>                                    
          </ul>
        </div>    
      </div>
    </nav>  
  </div>
  )
}


export default NavBar