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

    case types.OPEN_ADD_RECIPE_MODAL:
      return { ...state,  addRecipeModalType: action.payload, 
        addRecipeModalIsOpen: true };

    case types.CLOSE_ADD_RECIPE_MODAL:
      return { ...state,  addRecipeModalType: action.payload, 
        addRecipeModalIsOpen: false };

    default:
      return state;
  }
};
