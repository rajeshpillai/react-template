import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Home';
import Login from './Login';

const Landing = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/login">LOG IN</Link></li>
        <li><Link to="/">HOME</Link></li>
      </ul>
      <hr/>

      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>
)
export default Landing;
