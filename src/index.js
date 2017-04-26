import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Layout from './components/Layout';

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={Layout} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>,
  document.getElementById('root')
);
