import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

import Recipes from './containers/recipes';
import './assets/css/styles.css';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Recipes />
        </div>
    </Provider>
    , document.getElementById('root')
);
