import React, { Component } from "react";

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
            <a href="#"><i className="px-nav-icon ion-stats-bars"></i><span className="px-nav-label">Cotações</span></a>
          </li>

        </ul>
      </nav>
    );
  }
}

export default Menu;