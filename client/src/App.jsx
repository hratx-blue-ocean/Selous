import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Headerbar from './components/headerbar/Headerbar.jsx';
import Landing from './components/landing/Landing.jsx';

const mapStateToProps = (state) => ({ user: state.userData });

function App({ user }) {
  return (
    <>
      <Headerbar />
      {user.userName ? null : <Landing />}
    </>
  );
}

export default connect(mapStateToProps)(App);
