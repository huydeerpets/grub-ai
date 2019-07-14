import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import thunk from 'redux-thunk'

import Recipes from './containers/recipes';
import './assets/css/styles.css';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const render = () => {
  fancyLog();
	ReactDOM.render(
		<Provider store={store}>
				<div>
						<Recipes />
				</div>
		</Provider>
		, document.getElementById('root')
	);
};

render();
store.subscribe(render);

function fancyLog() {
  console.log("%c Rendered with 👉 👉👇", "background: purple; color: #fff");
  console.log(store.getState());
};