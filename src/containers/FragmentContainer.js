import React, { Component } from 'react';
import Recipes from './recipes';

class FragmentContainer extends Component {
  render() {
    return (
      <div className="fragment-container">
        <Recipes/>
      </div>
    )
  }
}

export default FragmentContainer;