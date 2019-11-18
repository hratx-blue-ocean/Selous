import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import Header from './components/header/Header.jsx';

export default function Root({ store }) {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={App} />
        <Route path="/header" component={Header} />
      </Router>
    </Provider>
  );
}
