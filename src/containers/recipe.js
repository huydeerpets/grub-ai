import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeTitle from '../components/RecipeTitle';
import RecipeImage from '../components/RecipeImage';
import * as actions from '../actions';

class Recipe extends Component {

  handleRecipeImgClick() {
    this.props.setModalRecipe(this.props.recipe);
    this.props.openImageZoomModal();
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

const mapStateToProps = state => {
  return {
  };
};

export default connect(mapStateToProps, actions)(Recipe);