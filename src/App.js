import React from 'react';
import { withRouter } from 'react-router-dom';
import Modal from 'components/Modal';
import Button from 'components/Button';

class App extends React.Component {

  state = {
    isModalOpen: false,
  }
  componentDidUpdate(prevProps) {
    if (this.state.isModalOpen && this.props.history.action === "POP") {
      this.setState({
        isModalOpen: false,
      })
    }
  }
  openModal = () => {
    const { history, match} = this.props;
    history.push('/');
    //history.push(match.path);
    this.setState({isModalOpen: true }) 
  }
  closeModal = () => { 
    const { history } = this.props;
    history.goBack();
    this.setState({isModalOpen: false }) 
  }
  render(){
    return (
      <div className="App">
        <Button name="Modal Open" className="purple" onClick={this.openModal}/>
        <Modal isOpen={this.state.isModalOpen} close={this.closeModal} /> 
      </div>
    );
  }
}

export default withRouter(App);
