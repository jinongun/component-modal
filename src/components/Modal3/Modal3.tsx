import React from 'react';
import './Modal3.scss';
import ReactTransitionGroup from 'react-addons-css-transition-group'

const Modal3 = ({ isOpen, close }: any) => {
  return (
    <>
      {
        isOpen ?
          <ReactTransitionGroup
            transitionName={'Modal-anim'}
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}
          >
            <div className="Modal-overlay" onClick={close} />
            <div className="Modal">
              <p className="title">Modal Title</p>
              <div className="content">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel tempora nulla, non molestiae dicta ducimus. Et unde laborum eveniet ex quod doloribus quae, aliquam beatae atque, vero assumenda rem quo?
    	          </p>
              </div>
              <div className="button-wrap">
                <button onClick={close}>Confirm</button>
              </div>
            </div>
          </ReactTransitionGroup>
          :
          <ReactTransitionGroup transitionName={'Modal-anim'} transitionEnterTimeout={200} transitionLeaveTimeout={200} />

      }
    </>
  )
}

export default Modal3;