import React from 'react';
import { AppRegistry } from 'react-native';

import CounterComponent from './components/CounterComponent';

//REDUX
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './reducers';
import CounterContainer from './containers/CounterContainer';
//reducersu birleştirmek için  reducers/index.js

//REDUX SAGA
import createSagaMiddleware from 'redux-saga';
//Middleware
const sagaMiddleware = createSagaMiddleware();
import rootSaga from './sagas/rootSaga';

let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
const App = () => (
    <Provider store={store}>
        <CounterContainer />
    </Provider>
);
sagaMiddleware.run(rootSaga);
AppRegistry.registerComponent('redux_Saga_App', () => App);
