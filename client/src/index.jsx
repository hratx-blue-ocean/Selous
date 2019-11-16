import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers/index.js';

import App from './App.jsx';
import Header from './components/header/Header.jsx';

const store = createStore(rootReducer);

const routing = (
  <Router>
    <div>
      <Route path="/header" component={Header} />
      <Route path="/" component={App} />
    </div>
  </Router>
);

ReactDOM.render(
  routing,
  document.getElementById('root'),
);
