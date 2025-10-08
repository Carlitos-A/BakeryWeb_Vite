import React from 'react'
import { catalogoItems } from '../constantes/catalogoItems';
import CartIcon from './CartIcon';

export default function Header() {


  return (
    <nav className="navbar navbar-expand-lg shadow-sm position-relative">
      <div className="container-fluid">
        {/* Marca */}
        <a className="navbar-brand" href="lander.html">
          <img src="assets/img/icons/logo.png" alt="Logo" height="80" />
        </a>

        {/* Botón hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Contenido colapsable */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Menú central */}
          <ul className="navbar-nav mb-2 mb-lg-0 central-menu">
            <li className="nav-item">
              <a className="nav-link" href="lander.html">
                Inicio
              </a>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="categoria.html" role="button">
                Catálogo
              </a>
              <ul className="dropdown-menu">
                {catalogoItems.map((item) => (
                  <li key={item.id}>
                    <a className="dropdown-item" href={item.href}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>


            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Sobre Nosotros
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="nuestra-historia.html">Nuestra Historia</a></li>
                <li><a className="dropdown-item" href="quienes_somos.html">Equipo</a></li>
                <li><a className="dropdown-item" href="procesos.html">Procesos</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="comunidad.html">Comunidad</a>
            </li>
          </ul>
        </div >
        <div className="ms-3">
          <CartIcon />
        </div>
      </div>
    </nav >
  );
}
