import { combineReducers } from 'redux';

import recipeReducer from './recipe_reducer'
import errorReducer from './error_reducer';

const rootReducer = combineReducers({
    recipes: recipeReducer,
    error: errorReducer,
});

export default rootReducer;
