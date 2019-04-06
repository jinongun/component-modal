import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Modal from './components/Modal';

class App extends Component<RouteComponentProps, any> {

  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      isModalOpen: false,
    }
  }
  componentDidUpdate(prevProps: RouteComponentProps) {
    if (this.state.isModalOpen && this.props.history.action === "POP") {
      this.setState({
        isModalOpen: false,
      })
    }
  }
  openModal = () => {
    const { history } = this.props;
    history.push('/', 'Modal');
    this.setState({
      isModalOpen: true
    })
  }
  closeModal = () => {
    const { history } = this.props;
    history.goBack();
    this.setState({
      isModalOpen: false,
    })
  }
  render() {
    return (
      <main className="App">
        <button className="btn" onClick={this.openModal}>Modal Open</button>
        <Modal isOpen={this.state.isModalOpen} name="Modal-anim">

          <p className="title">Title</p>
          <div className="content">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel tempora nulla, non molestiae dicta ducimus. Et unde laborum eveniet ex quod doloribus quae, aliquam beatae atque, vero assumenda rem quo?
            </p>
          </div>
          <div className="button-wrap">
            <button onClick={this.closeModal}>Confirm</button>
          </div>

        </Modal>

      </main>
    );
  }
}

export default App;
