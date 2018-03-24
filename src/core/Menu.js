import React, { Component } from "react";
import {Link} from "react-router-dom";

class Menu extends Component {

  render() {
    return (
      <nav className="px-nav px-nav-left">
        <button type="button" className="px-nav-toggle" data-toggle="px-nav">
          <span className="px-nav-toggle-arrow"></span>
          <span className="navbar-toggle-icon"></span>
          <span className="px-nav-toggle-label font-size-11">OCULTAR MENU</span>
        </button>

        <ul className="px-nav-content">

          <li className="px-nav-item">
            <Link to="/budgets">
              <i className="px-nav-icon ion-stats-bars"></i><span className="px-nav-label">Orçamentos (1 nova resposta)</span>
            </Link>
            <Link to="/fornecedores">
              <i className="px-nav-icon ion-stats-bars"></i><span className="px-nav-label">Fornecedores</span>
            </Link>

            <Link to="/produtos">
              <i className="px-nav-icon ion-stats-bars"></i><span className="px-nav-label">Produtos</span>
            </Link>

            <Link to="/produtos">
              <i className="px-nav-icon ion-stats-bars"></i><span className="px-nav-label">Configurações</span>
            </Link>

            <Link to="/new-user/">
              <i className="px-nav-icon ion-stats-bars">
              </i><span className="px-nav-label">
              Novo usuário</span>
            </Link>
          </li>

        </ul>
      </nav>
    );
  }
}

export default Menu;