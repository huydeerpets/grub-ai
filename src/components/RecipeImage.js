import React, { Component } from 'react';
import Img from 'react-image';

export default class RecipeImage extends Component {
  render() {
    return( <Img className="recipe-img" src={this.props.source} alt={this.props.text} 
      onClick={this.props.onClick}/> )
  }
}