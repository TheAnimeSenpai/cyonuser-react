import React, { Component } from 'react';
import './login.css';

class Login extends Component {

    getAuthParams() {
        return {
            email: this.state.username,
            password: this.state.password
        }
    }

    login(e) {
        e.preventDefault();
        const { email, password } = this.getAuthParams();
        console.log(this.props);
        this.props.auth.login(email, password);
    }

    state = {
        username : '',
        password : ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert('A user was submitted: ' + this.state.username + ',' + this.state.password);
    }

    render() {
        return (
        <div className="middle-box text-center loginscreen animated fadeInDown">
            <div>
                <div>
                    <h1 className="logo-name">
                        <img src="assets/img/cyonLogoTrans.png" alt="" />
                    </h1>
                </div>
                <h2><b>CYON</b></h2>
                <p>Welcome to the CYON administrative site. Where all details of your account will be taken care of.</p>
                <form className="m-t" role="form" action="index.html" onSubmit={this.login.bind(this)}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Username" required 
                            value={this.state.username}
                            onChange={(event) => this.setState({ username : event.target.value })} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" required 
                            value={this.state.password}
                            onChange={(event) => this.setState({ password : event.target.value })} />
                    </div>
                    <button type="submit" className="btn btn-warning block full-width m-b">Login</button>

                    <a href="#"><small>Forgot password?</small></a>
                </form>
                <p className="m-t"> <small>CYON, St Alphonsus Catholic Church, Akute &copy; 2017</small> </p>
            </div>
        </div>
        );
    }

}

export default Login;
