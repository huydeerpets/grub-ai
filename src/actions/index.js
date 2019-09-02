import * as types from './types';
import axios from 'axios';

export const fetchRecipes = () => dispatch => {
    const dummyRecipes = [{
      id: 0,
      title: "Dutch Split Pea Soup",
      ingredients: {
        "Water": "1 cup",
        "Peas" : "2 cans",
        "Celery": "1 stalk",
        "Onion": "Half",
        "Carrot": "2",
        "Sausages": "300g"
      },
      instructions: "Gather the ingredients. In a large soup pot, bring water, split peas, pork belly or bacon, pork chop, and bouillon cube to a boil. Reduce the heat to a simmer, cover and let cook for 45 minutes, stirring occasionally and skimming off any foam that rises to the top. Remove the pork chop, debone, and thinly slice the meat. Set aside. Add the celery, carrots, potato, onion, leek, and celeriac to the soup. Return to the boil, reduce the heat to a simmer and let cook, uncovered, for another 30 minutes, adding a little extra water if the ingredients start to stick to the bottom of the pot. Add the smoked sausage for the last 15 minutes of cooking time. When the vegetables are tender, remove the bacon and smoked sausage, slice thinly and set aside. If you prefer a smooth consistency, purée the soup with a stick blender. Season to taste with salt and pepper. Add the meat back to the soup, setting some slices of rookworst aside. Serve in heated bowls or soup plates, garnished with slices of rookworst and chopped celery leaf.",
      time: "45 mins",
      image_url: "https://www.themealdb.com/images/media/meals/hyarod1565090529.jpg",
      yield: 5,
      description: "",
      url: "https://www.thespruceeats.com/stamppot-with-curly-kale-and-rookworst-1128837",
      source: "The Pruice Eats"
    }]
    dispatch({ type: types.FETCH_RECIPES, payload: dummyRecipes });
    // const URL = 'https://www.themealdb.com/api/json/v1/1/latest.php';
    // axios.get(URL)
    //     .then(res => {
    //         if (res.data.error) return dispatch(showError(res.data.error));



    //         // dispatch({ type: types.FETCH_RECIPES, payload: res.data.meals });
    //         // dispatch(resetError());
    //     })
    //     .catch(err => console.log(err));
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