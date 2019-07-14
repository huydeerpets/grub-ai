import * as types from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_RECIPES:
      console.log(action.payload)
        return {
          ...state,
          allRecipes: action.payload,
        };
    
    default:
        return state;
  }
};