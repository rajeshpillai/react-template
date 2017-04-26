import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Layout extends Component {
  render() {
    return (
      <div>
      <h2>LAYOUT</h2>
        <ul>
          <li><Link to="/login">LOG IN</Link></li>
          <li><Link to="/home">HOME</Link></li>
        </ul>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;
