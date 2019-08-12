import { combineReducers } from 'redux';

import recipeReducer from './recipe_reducer';
import errorReducer from './error_reducer';
import modalReducer from './modal_reducer';

const rootReducer = combineReducers({
    recipes: recipeReducer,
    error: errorReducer,  
    modal: modalReducer,
});

export default rootReducer;
