import { createAction, handleActions } from 'redux-actions';


// action types
export const TOGGLE_MODAL = 'modal/TOGGLE_MODAL';


// action creators
export const toggleModal = createAction(TOGGLE_MODAL);


const initialState = {
  isModalOpen: false
};

export default handleActions({
  [TOGGLE_MODAL]: (state, action) => {
    return ({
      ...state,
      isModalOpen: !state.isModalOpen
    })
  }
}, initialState)