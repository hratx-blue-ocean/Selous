import React from 'react';
import _ from 'lodash';
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

const areEqual = (prevProps, nextProps) => _.isEqual(prevProps, nextProps);

export default connect(mapStateToProps)(React.memo(App, areEqual));
