import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import Details from './components/DetailsPage/DetailsPage.jsx';
import Login from './components/Login/Login.jsx';
import Signup from './components/SignUp/SignUp.jsx';

export default function Root({ store }) {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={App} />
        <Route path="/detail" component={Details} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Router>
    </Provider>
  );
}
