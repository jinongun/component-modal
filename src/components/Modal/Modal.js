import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'components/Button';
import ReactTransitionGroup from 'react-addons-css-transition-group'
import './Modal.scss';

const Modal = (props) => {
  return (
    <>
    {
      props.isOpen?
        <ReactTransitionGroup
        transitionName={'anim'}
        transitionEnterTimeout={200}
        transitionLeaveTimeout={200}
        >
        <div className="Modal_Overlay" onClick={props.close}></div>
        <div className="Modal">
          <div className="header">
            <h2>Allow Location Tracking?</h2>
          </div>
          <div className="content">
            Location Tracking helps us make better decisions so you can get more value. By enabling location tracking, you're allowing us to monitor your movement.  
            <NavLink to="#"> Learn More</NavLink>
          </div>
          <div className="footer">
            <Button name="Cancel" onClick={props.close}/>
            <Button name="Allow" className="purple" onClick={props.close}/>
          </div>
        </div>
        </ReactTransitionGroup>
      :
      <ReactTransitionGroup
        transitionName={'anim'}
        transitionEnterTimeout={200}
        transitionLeaveTimeout={200}
      />
    }
    </>
  )
}


export default Modal;