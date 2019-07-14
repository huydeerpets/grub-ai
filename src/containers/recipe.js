import React, { Component } from 'react';
import RecipeTitle from '../components/RecipeTitle';
import RecipeImage from '../components/RecipeImage';

class Recipe extends Component {

  handleRecipeImgClick() {

  }

  render() {
    const { recipe } = this.props;
    const imgSource = recipe.strMealThumb;

    return (
      <div className="recipe">
        <div className="recipe-img-wrapper">
          <RecipeImage source={imgSource} onClick={this.handleRecipeImgClick.bind(this)} />
        </div>
        <div className="recipe-info-wrapper">
            <RecipeTitle title={recipe.strMeal} />
        </div>
      </div>
    );
  }
};

export default Recipe;