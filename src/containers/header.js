import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ImageZoomModal from './image_zoom_modal';
import Dropdown from './Dropdown';

class Header extends Component {

  renderUserNavList() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li className="sign-in nav-item auth-nav-item">
          <a href="/"><i className="fa fa-twitter" aria-hidden="true"></i>Sign In</a>
        </li>
      </ul>
    );
  }

  renderNavList() {
    
    let addRecipeOptions = [
      {
        id: 0,
        title: 'URL',
        selected: false,
        key: 'url'
      },
      {
        id: 1,
        title: 'Manual',
        selected: false,
        key: 'manual'
      },
    ]

    return (
      <ul className="nav navbar-toolbar">
        <li className="toolbar-item active">
          <a href="/">MY LIBRARY</a>
        </li>
        {/* <li className="toolbar-item dropdown">
          <a href="/">ADD RECIPE</a>
        </li> */}
        <li>
          <Dropdown title="ADD RECIPE" list={addRecipeOptions}/>
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
              {this.renderNavList()}
              {this.renderUserNavList()}
          </div>
        </nav>
        <ImageZoomModal isOpen="false"/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};

export default connect(mapStateToProps, actions)(Header);
