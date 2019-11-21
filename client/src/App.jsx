import React from 'react';
import _ from 'lodash';
import './App.css';
import { connect } from 'react-redux';
import Headerbar from './components/headerbar/Headerbar.jsx';
import Landing from './components/landing/Landing.jsx';

const mapStateToProps = (state) => ({ show: state.haveLanding });

function App({ show }) {
  return (
    <>
      <Headerbar />
      {show ? <Landing /> : null}
    </>
  );
}

const areEqual = (prevProps, nextProps) => _.isEqual(prevProps, nextProps);

export default connect(mapStateToProps)(React.memo(App, areEqual));
