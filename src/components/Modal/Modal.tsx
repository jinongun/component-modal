import React from 'react';
import './Modal.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Modal extends React.Component<any> {

  render() {
    return (
      <>
        {
          this.props.isOpen ?

            <ReactCSSTransitionGroup transitionName={this.props.name} transitionEnterTimeout={500}
              transitionLeaveTimeout={300}>
              <div className="Modal-overlay" />
              <div className="Modal">
                {this.props.children}
              </div>
            </ReactCSSTransitionGroup>
            :
            <ReactCSSTransitionGroup transitionName={this.props.name} transitionEnterTimeout={500}
              transitionLeaveTimeout={300} />
        }
      </>
    )
  }
}

export default Modal;


/*
      <>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>

          <div className="Modal-overlay" onClick={this.props.close}></div>
        </ReactCSSTransitionGroup>

        <div className="Modal">
          <p className="title">Title</p>
          <div className="content">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel tempora nulla, non molestiae dicta ducimus. Et unde laborum eveniet ex quod doloribus quae, aliquam beatae atque, vero assumenda rem quo?
            </p>
          </div>
          <div className="button-wrap">
            <button onClick={this.props.close}>Confirm</button>
          </div>
        </div>
      </>

*/