import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Recipe from './recipe';
import ajaxLoader from '../assets/img/ajax_loader.gif';
import Masonry from 'react-masonry-component';

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
          <div key={recipe.id}>
            <Recipe className="recipe" recipe={recipe} />
          </div>
        );
      });
    }
  }

  render() {    
    if (!this.props.allRecipes) return <img className="ajax-loader" src={ajaxLoader} />;

    const masonryOptions = {
      transitionDuration: 800,
      fitWidth: true
    };
    return (
      <div className="recipes-container">
        <Masonry
          enableResizableChildren={true}
          className={'masonry-grid'}
          elementType={'div'}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}>
          {this.renderRecipes()}
        </Masonry>
      </div>
      
    );
  ;}
}

const mapStateToProps = state => {
  return {
    allRecipes: state.recipes.allRecipes,
    error: state.error
  };
};

export default connect(mapStateToProps, actions)(Recipes);