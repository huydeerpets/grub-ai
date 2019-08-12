import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ImageZoomModal extends Component {

  renderModal() {
    if (this.props.recipe != null) {
      return (
        <Modal 
          isOpen={this.props.isOpen} 
          onRequestClose={this.props.hideImageZoomModal}
          className="modal"
          overlayClassName="overlay" >
          <div className="modal-heading">
            <h3>{this.props.recipe.strMeal}</h3>
            <button onClick={() => this.props.hideImageZoomModal()} value="X"/>
          </div>
          <div className="modal-content">
            <img className="modal-img" src={this.props.recipe.strMealThumb}/>
          </div>
        </Modal>
      )
    }
  }

  render() {
    console.log(this.props.recipe);
    return (
      <div className='layout-page'>
        <main className='layout-main'>
          <div className='container'>
            {this.renderModal()}
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isOpen: state.modal.imageZoomIsOpen,
    recipe: state.modal.recipe
  };
};

export default connect(mapStateToProps, actions)(ImageZoomModal);
