import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ACTION_TYPES } from './actions';

const composeEnhancer = window.REDUX_DEVTOOLS_EXTENTION_COMPOSE || compose;
const middlewares = [thunk];

const initialState = {
  restaurantsListData: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.SAVE_RESTAURANTS: {
      const { payload } = action;

      return {
        ...state,
        restaurantsListData: payload,
      };
    }

    default:
      return state;
  }
}

export const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(...middlewares))
);
