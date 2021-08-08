import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import { store } from './store';
import { RestourantsListPage } from './components/RestourantsListPage';

export const App = () => (
  <Provider store={store}>
    <div className="App">
      <RestourantsListPage />
    </div>
  </Provider>
);
