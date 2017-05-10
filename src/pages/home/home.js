import React, { Component } from 'react';
import logo from '../../logo.svg';
import './home.css';

import PageTitle from '../shared/pagetitle/pagetitle';

class Home extends Component {
    render() {
      return (
        <div>
          <PageTitle title="Dashboard" />
          <div className="wrapper wrapper-content animated fadeInRight">
            <div className="row">
              <div className="col-lg-12">
                <div className="App">
                  <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                  </div>
                  <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default Home;
