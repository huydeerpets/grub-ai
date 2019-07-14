import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as actions from '../actions';
import * as actions from '../actions';
import Recipe from './recipe';

class Recipes extends Component {

  componentWillMount() {
    this.props.fetchRecipes()
  }

  renderRecipes() {
    if (!this.props.allRecipes) {
      return <div>No recipes available!</div>;
    }
    else {
      return this.props.allRecipes.map(recipe => {
        return (
          <div key={recipe.idMeal}>
            <Recipe className="recipe" recipe={recipe}/>
          </div>
        );
      });
    }
  }

  render() {
    return (
      <div className="Recipes">
        {this.renderRecipes()}
      </div>
    )
  ;}
}

const mapStateToProps = state => {
  return {
    allRecipes: state.recipes.allRecipes,
    error: state.error
  };
};

export default connect(mapStateToProps, actions)(Recipes);