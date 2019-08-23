import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { MdClose } from 'react-icons/md';

class AddRecipeModal extends Component {

  renderModal() {
    return (
      <Modal 
        isOpen={this.props.isOpen} 
        onRequestClose={this.props.hideAddRecipeModal}
        className="display-modal"
        overlayClassName="overlay" >
        <div className="modal-toolbar">
          <MdClose className="modal-close-button" onClick={() => this.props.closeAddRecipeModal()}/>
        </div>
        <div className="display-modal-content">
          <div className="display-modal-desc">
          </div>
        </div>
      </Modal>
    )
  }

  render() {
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
    isOpen: state.modal.addRecipeModalIsOpen,
    addRecipeType: state.modal.addRecipeModalType
  };
};

export default connect(mapStateToProps, actions)(AddRecipeModal);
