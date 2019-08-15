import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Close from '@material-ui/icons/Close';

class ImageZoomModal extends Component {

  renderModal() {
    if (this.props.recipe != null) {
      return (
        <Modal 
          isOpen={this.props.isOpen} 
          onRequestClose={this.props.hideImageZoomModal}
          className="display-modal"
          overlayClassName="overlay" >
          <div className="modal-toolbar">
            <Close className="modal-close-button" onClick={() => this.props.hideImageZoomModal()}/>
          </div>
          <div className="display-modal-content">
            <img src={this.props.recipe.strMealThumb}/>
            <div className="display-modal-desc">
              <h3 className="display-modal-title">{this.props.recipe.strMeal}</h3>
            </div>
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
