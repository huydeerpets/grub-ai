import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {

  renderList() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li className="sign-in nav-item auth-nav-item">
          <a href="/"><i className="fa fa-twitter" aria-hidden="true"></i>Sign In</a>
        </li>
      </ul>
    );
  }

  render() {
    return (
      <div className="nav-and-modal-container">
        <nav className="header navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <div className="navbar-brand">
                <h1 className="navbar-brand-link">GrubAI</h1>
              </div>
            </div>
            <div>
              {this.renderList()}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};

export default connect(mapStateToProps, actions)(Header);
