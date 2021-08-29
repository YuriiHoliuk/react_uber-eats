import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';

const composeEnhancer = window.REDUX_DEVTOOLS_EXTENTION_COMPOSE || compose;
const middlewares = [thunk];

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(...middlewares))
);
