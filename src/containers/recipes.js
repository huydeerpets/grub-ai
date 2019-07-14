import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import StackGrid from 'react-stack-grid';
import ReactResizeDetector from 'react-resize-detector'
import Recipe from './recipe';
import ajaxLoader from '../assets/img/ajax_loader.gif';

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
            <Recipe className="recipe" recipe={recipe} />
          </div>
        );
      });
    }
  }

  render() {    
    if (!this.props.allRecipes) return <img className="ajax-loader" src={ajaxLoader} />;

    return (
      <StackGrid
        gridRef={grid => this.grid = grid} 
        columnWidth={220}
        monitorImagesLoaded={true}
        duration={600}>
        {this.renderRecipes()}
      </StackGrid>
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