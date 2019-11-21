import React from 'react';
import { Provider } from 'react-redux';
import { Route, HashRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import JobSearch from './components/JobSearch/JobSearch.jsx';
import Login from './components/Login/Login.jsx';
import Signup from './components/SignUp/SignUp.jsx';
import Dashboard from './components/dashboard/dashboard.jsx';
import Details from './components/DetailsPage/DetailsPage.jsx';

export default function Root({ store }) {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={App} />
        <Route path="/jobs" component={JobSearch} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/details" component={Details} />
      </Router>
    </Provider>
  );
}
