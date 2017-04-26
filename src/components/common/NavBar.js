import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li className="active"><a href="#">Home</a></li>
          <li><Link to="/about">About</Link></li>
          <li><a href="/contact">Contact</a></li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
            <ul className="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" className="divider"></li>
              <li className="dropdown-header">Nav header</li>
              <li><a href="#">Separated link</a></li>
              <li><a href="#">One more separated link</a></li>
            </ul>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="../navbar/">Default</a></li>
          <li className="active"><a href="./">Static top <span className="sr-only">(current)</span></a></li>
          <li><a href="../navbar-fixed-top/">Fixed top</a></li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
