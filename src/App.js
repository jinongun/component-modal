import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Modal from 'components/Modal';
import Button from 'components/Button';

import { toggleModal } from 'store/modules/modal';
import { bindActionCreators } from 'redux';


class App extends React.Component {

  componentDidUpdate(prevProps) {
    if (this.props.isModalOpen && this.props.history.action === "POP") {
      this.props.toggleModal()
    }
  }
  openModal = () => {
    const { history} = this.props;
    history.push('/');
    this.props.toggleModal()
  }
  closeModal = () => { 
    const { history } = this.props;
    if(this.props.isModalOpen){
      history.goBack();
      this.props.toggleModal()
    }
  }
  render(){
    return (
      <div className="App">
        <Button name="Modal Open" className="purple" onClick={this.openModal}/>
        <Modal isOpen={this.props.isModalOpen} close={this.closeModal} /> 
      </div>
    );
  }
}

export default connect(
  (state) => ({
    isModalOpen: state.modal.isModalOpen,
  }),
  (dispatch) => ({
    toggleModal: bindActionCreators(toggleModal, dispatch)
  })
)(withRouter(App));

