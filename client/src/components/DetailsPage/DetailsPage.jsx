import React from 'react';
import { connect } from 'react-redux';
import styles from './DetailsPage.css';
import toggleAction from '../../redux/actions/actions.js';

const mapStateToProps = (state) => ({ toggle: state.toggle });

const DetailsPage = ({ toggle, dispatch }) => (
  <div className={styles.container}>
    <div className={styles.header}>Header</div>
    <div className={styles.page_body}>Body</div>

    {toggle ? <div>Show if true</div> : <div>Show if false</div>}

    <button type="button" onClick={() => dispatch(toggleAction())}>Toggle</button>
  </div>
);

export default connect(mapStateToProps)(DetailsPage);
