import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Headerbar from './components/headerbar/Headerbar.jsx';
import Landing from './components/landing/Landing.jsx';

const mapStateToProps = (state) => ({ show: state.isLoggedIn });

function App({ show }) {
  return (
    <>
      <Headerbar />
      {show ? null : <Landing />}
    </>
  );
}

export default connect(mapStateToProps)(App);
