	import React from 'react';
	import ReactDOM from 'react-dom';
	import { Provider } from 'react-redux';
	import { createStore, applyMiddleware, combineReducers } from 'redux';
	import { searchRobots, requestRobots } from './reducers';
	// Redux Thunk listens for actions- waits for a function handles fetching
	import thunkMiddleware from 'redux-thunk';
	import './index.css';
	import * as serviceWorker from './serviceWorker';
	import 'tachyons';
	import App from './containers/App';
	import { createLogger } from 'redux-logger';
	
	// Middleware (a Tunnel) for actions to pass through before the reducer
	const logger = createLogger();

	const rootReducer = combineReducers({ searchRobots, requestRobots})
	// Store is a JS object that defines App state so it can be rendered
	// Combines Reducers to make one reducer
	// Provider Component passes down store to all components
	const store = 
	createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))
	

	ReactDOM.render(
		<Provider store={store} >
	    <App /> 
	    </Provider>,
	  document.getElementById('root')
	);
		



	// If you want your app to work offline and load faster, you can change
	// unregister() to register() below. Note this comes with some pitfalls.
	// Learn more about service workers: https://bit.ly/CRA-PWA
	serviceWorker.unregister();
