import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import { store } from './store';
import { RestourantsListPage } from './components/RestourantsListPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const App = () => (
  <Provider store={store}>
    <div className="App">
      <Header />
      <main className="page">
        <div className="content">
          <RestourantsListPage />
        </div>
      </main>
      <Footer />
    </div>
  </Provider>
);
