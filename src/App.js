import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'
import './App.css';

import AuthService from './utils/AuthService'

//import page components...
import Login from './login/login';
import Dashboard from './dashboard/dashboard';
import Home from './pages/home/home';

const auth = new AuthService('YY1ufTwiHaIpoP002goNYqsKHA6M4jw8', 'aincrad.auth0.com');

const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

const parseAuthHash = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.parseHash(nextState.location.hash)
  }
}

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
          <Route path="/">
            <IndexRedirect to="/home" />
            <Route path="login" component={() => (<Login auth={auth}/>)} onEnter={parseAuthHash}/>
            <Route component={Dashboard} auth={auth}>
              <Route path="home" component={Home} onEnter={requireAuth} />
            </Route>
          </Route>
      </Router>
    );
  }
}

export default App;
