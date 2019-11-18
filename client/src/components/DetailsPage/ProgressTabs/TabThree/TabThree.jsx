import React from 'react';
import { connect } from 'react-redux';
import styles from './TabThree.css';
import whatsNextAction from '../../../../redux/actions/actions.js';
import WhatsNext from '../../../Modals/WhatsNext.jsx';

const mapStateToProps = (state) => ({ show: state.whatsNextModal });

function Tab({ tab, dispatch }) {
  return (
    <>
      <WhatsNext />
      <div className={styles.tab_wrapper_three}>
        <div className={styles.tab}>
          <div className={styles.tab_header}>{tab ? tab.tabName : null}</div>
          <div className={styles.tab_body}>{tab ? tab.tabBody : null}</div>
          <div className={styles.tab_edit}>
            <button type="button" onClick={() => dispatch(whatsNextAction())} className={styles.edit}>{tab ? tab.tabEditText : null}</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default connect(mapStateToProps)(Tab);
