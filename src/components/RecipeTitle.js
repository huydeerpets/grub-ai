import React, { Component } from 'react';
export default class RecipeTitle extends Component {
 render(){
  return( <h2 className="recipe-title">{this.props.title}</h2> )
 }
}