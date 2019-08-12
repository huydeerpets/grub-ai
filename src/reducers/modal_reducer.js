import * as types from '../actions/types';

const initialState = { isOpen: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_IMAGE_ZOOM_MODAL:
      return { ...state,  imageZoomIsOpen: true };

    case types.CLOSE_IMAGE_ZOOM_MODAL:
      return { ...state,  imageZoomIsOpen: false };

    case types.SET_MODAL_RECIPE:
      return { ...state, recipe: action.payload };

    default:
      return state;
  }
};
