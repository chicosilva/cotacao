import React, { Component } from "react";

class Menu extends Component {

  render() {
    return (
      <nav className="px-nav px-nav-left">
        <button type="button" className="px-nav-toggle" data-toggle="px-nav">
          <span className="px-nav-toggle-arrow"></span>
          <span className="navbar-toggle-icon"></span>
          <span className="px-nav-toggle-label font-size-11">HIDE MENU</span>
        </button>

        <ul className="px-nav-content">

          <li className="px-nav-item px-nav-dropdown">
            <a href="#"><i className="px-nav-icon ion-stats-bars"></i><span className="px-nav-label">Charts</span></a>

            <ul className="px-nav-dropdown-menu">
              <li className="px-nav-item"><a href="charts-flot.html"><span className="px-nav-label">Flot.js</span></a></li>
              <li className="px-nav-item"><a href="charts-morris.html"><span className="px-nav-label">Morris.js</span></a></li>
              <li className="px-nav-item"><a href="charts-chart.html"><span className="px-nav-label">Chart.js</span></a></li>
              <li className="px-nav-item"><a href="charts-chartist.html"><span className="px-nav-label">Chartist</span></a></li>
              <li className="px-nav-item"><a href="charts-c3.html"><span className="px-nav-label">C3.js</span></a></li>
              <li className="px-nav-item"><a href="charts-sparkline.html"><span className="px-nav-label">Sparkline</span></a></li>
              <li className="px-nav-item"><a href="charts-easy-pie-chart.html"><span className="px-nav-label">Easy Pie Chart</span></a></li>
            </ul>
          </li>

        </ul>
      </nav>
    );
  }
}

export default Menu;