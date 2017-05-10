import React, { Component } from 'react';
import './pagetitle.css';

class PageTitle extends Component {
  render() {
    return (
        <div className="row wrapper border-bottom white-bg page-heading">
            <div className="col-lg-12">
                <h2>{this.props.title}</h2>
            </div>
        </div>
    );
  }
}

export default PageTitle;
