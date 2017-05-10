import React, { Component } from 'react';
import './dashboard.css';

//import other classes...
import Header from '../pages/shared/header/header';
import Sidemenu from '../pages/shared/sidemenu/sidemenu';
import Footer from '../pages/shared/footer/footer';

class Dashboard extends Component {

    render() {
        return (
            <div id="wrapper">
                <Sidemenu/>
                <div id="page-wrapper" className="gray-bg">
                    <Header auth={this.props.route.auth}/>

                    {this.props.children}

                    <Footer/>
                </div>
            </div>
        );
    }

}

export default Dashboard;
