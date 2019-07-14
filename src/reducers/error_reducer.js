import * as types from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_ERROR:
      return { ...state, message: action.payload };

    case types.RESET_ERROR:
      return { ...state, message: null };

    default:
      return state;
  }
};
