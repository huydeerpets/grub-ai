import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { MdClose } from 'react-icons/md';
import { Form, Button } from 'react-bootstrap';
import ImagePlaceholder from '../assets/img/image-placeholder-square.png';

class AddRecipeModal extends Component {

  renderAddRecipeByURL() {
    return (
      <div className="add-recipe-modal-container">
        <h2 className="add-recipe-title">Add Recipe by URL</h2>
        <form id="add-recipe-url-bar">
          <input id="add-recipe-url" type="text" placeholder="Enter URL here..."/>
          <button className="add-recipe-button" type="button">Search</button>
        </form>
      </div> 
    )
  }

  renderAddRecipeManually() {
    return (
      <div className="add-recipe-modal-container">
        <h2 className="add-recipe-title">Add Recipe Manually</h2>
        <div className="add-recipe-modal-content">
          <img src={ImagePlaceholder}/>
          <div className="display-modal-desc">
            <Form>
              <Form.Group controlId="formGroupTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    )
  }

  renderModal() {
    return (
      <Modal 
        isOpen={this.props.isOpen} 
        onRequestClose={this.props.hideAddRecipeModal}
        className="add-recipe-modal"
        overlayClassName="overlay" >
        <div className="modal-toolbar">
          <MdClose className="modal-close-button" onClick={() => this.props.closeAddRecipeModal()}/>
        </div>
        {this.props.addRecipeType === "url" ? 
          this.renderAddRecipeByURL() : this.renderAddRecipeManually()
        }
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
