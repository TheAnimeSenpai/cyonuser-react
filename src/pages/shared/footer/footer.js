import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {

  render() {
    return (
        <div className="footer" >
            <div className="pull-right">
                Built by <strong>Aincrad Technology.</strong>
            </div>
            <div>
                <strong>CYON</strong> St Alphonsus Catholic Church, Akute &copy; 2017-2018
            </div>
        </div>
    );
  }

}

export default Footer;
