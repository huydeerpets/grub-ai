import * as types from './types';
import axios from 'axios';

export const fetchRecipes = () => dispatch => {
    const URL = 'https://www.themealdb.com/api/json/v1/1/latest.php';
    axios.get(URL)
        .then(res => {
            if (res.data.error) return dispatch(showError(res.data.error));

            dispatch({ type: types.FETCH_RECIPES, payload: res.data.meals });
            // dispatch(resetError());
        })
        .catch(err => console.log(err));
}

export const showError = error => {
    console.log(error);
    return { type: types.SHOW_ERROR, payload: error };
  };
  
export const resetError = () => {
  return { type: types.RESET_ERROR };
};

export const openImageZoomModal = () => {
  return { type: types.OPEN_IMAGE_ZOOM_MODAL };
};

export const hideImageZoomModal = () => {
  return { type: types.CLOSE_IMAGE_ZOOM_MODAL };
};

export const setModalRecipe = pin => {
  return { type: types.SET_MODAL_RECIPE, payload: pin };
};

export const openAddRecipeModal = type => {
  return { type: types.OPEN_ADD_RECIPE_MODAL, payload: type };
};

export const closeAddRecipeModal = type => {
  return { type: types.CLOSE_ADD_RECIPE_MODAL, payload: type };

};