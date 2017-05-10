import React, { Component } from 'react';
import './sidemenu.css';

class Sidemenu extends Component {
  render() {
    return (
        <nav className="navbar-default navbar-static-side" role="navigation">
            <div className="sidebar-collapse">
                <ul className="nav" id="side-menu">
                    <li className="nav-header">
                        <div className="dropdown profile-element"> <span>
                                    <img alt="imagex" className="img-circle" src="assets/img/profile_small.jpg" />
                                    </span>
                            <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                                    <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">David Williams</strong>
                                    </span> <span className="text-muted text-xs block">Art Director <b className="caret"></b></span> </span> </a>
                            <ul className="dropdown-menu animated fadeInRight m-t-xs">
                                <li><a href="profile.html">Profile</a></li>
                                <li className="divider"></li>
                                <li><a href="login.html">Logout</a></li>
                            </ul>
                        </div>
                        <div className="logo-element">
                            IN+
                        </div>
                    </li>
                    <li className="active">
                        <a href="layouts.html"><i className="fa fa-th-large"></i> <span className="nav-label">Dashboard</span></a>
                    </li>
                    <li>
                        <a href="widgets.html"><i className="fa fa-envelope-o"></i> <span className="nav-label">Mailbox</span> </a>
                    </li>
                    <li>
                        <a href="widgets.html"><i className="fa fa-book"></i> <span className="nav-label">Minutes</span> </a>
                    </li>
                    <li>
                        <a href="grid_options.html"><i className="fa fa-users"></i> <span className="nav-label">Memebers</span></a>
                    </li>
                    <li>
                        <a href="css_animation.html"><i className="fa fa-credit-card"></i> <span className="nav-label">Finance</span></a>
                    </li>
                    <li>
                        <a href="css_animation.html"><i className="fa fa-newspaper-o"></i> <span className="nav-label">Reports</span></a>
                    </li>
                </ul>

            </div>
        </nav>

    );
  }
}

export default Sidemenu;
