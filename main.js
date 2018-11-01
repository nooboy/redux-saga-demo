import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import sagaMiddlewareFactory from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension'

import Counter from './components/Counter';
import reducer from './reducers';  
// import { sagas } from './sagas';
import { sagas } from './sagas/index2';

const sagaMiddleware = sagaMiddlewareFactory();
const store = createStore(reducer, 
	composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(sagas);

const action = type => store.dispatch({ type });

function render() {
	ReactDOM.render( 
		<Counter 
			value = { store.getState() }
			onIncrement = { () => action('INCREMENT') }
			onDecrement = { () => action('DECREMENT') } 
			onIncrementAsync = { () => action('INCREMENT_ASYNC') }
			onDecrementAsync = { () => action('DECREMENT_ASYNC') }
		/>, 
		document.getElementById('root')
	);
}

render();
store.subscribe(render);