import React from 'react';
import './Modal.scss';


class Modal extends React.Component {

  render() {
    return (
      <>
        <div className="Modal-overlay"></div>
        <div className="Modal">
          <p className="title">모달입니다.</p>
          <div className="content">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel tempora nulla, non molestiae dicta ducimus. Et unde laborum eveniet ex quod doloribus quae, aliquam beatae atque, vero assumenda rem quo?
            </p>
          </div>
          <div className="button-wrap">
            <button>Confirm</button>
          </div>
        </div>
      </>

    )
  }
}

export default Modal;