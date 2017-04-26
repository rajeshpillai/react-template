import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Layout from './components/Layout';
import AboutUs from './components/AboutUs';

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={Layout} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/about" component={AboutUs} />

    </div>
  </Router>,
  document.getElementById('root')
);
