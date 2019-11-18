import React from 'react';
import { Provider } from 'react-redux';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import Header from './components/header/Header.jsx';

export default function Root({ store }) {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/header">Header</Link>
            </li>
          </ul>
          {/* <Route exact path="/" component={App} /> */}
          <Route path="/header" component={Header} />
        </div>
      </Router>
    </Provider>
  );
}
