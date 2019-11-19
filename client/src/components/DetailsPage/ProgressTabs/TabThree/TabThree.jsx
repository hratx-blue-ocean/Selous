/* eslint-disable max-len */
import React from 'react';
import { connect } from 'react-redux';
import styles from './TabThree.css';
import { whatsNextAction } from '../../../../redux/actions/actions.js';
import WhatsNext from '../../../Modals/WhatsNext.jsx';

const mapStateToProps = (state) => ({ show: state.whatsNextModal });

function Tab({ tab, companyTabs, dispatch }) {
  return (
    <>
      <WhatsNext />
      {console.log(companyTabs.indexOf(tab) !== -1 ? companyTabs.slice(companyTabs.indexOf(tab) + 1) : -1)}
      <div className={styles.tab_wrapper_three}>
        <div className={styles.card_holder}>
          {companyTabs.indexOf(tab) !== -1 ? '' : ''}
          <div className={tab ? (styles[tab.color ? tab.color : 'tab']) : null}>
            <div className={styles.tab_header}>{tab ? tab.tabName : null}</div>
            <div className={styles.tab_body}>{tab ? tab.tabBody : null}</div>
            <div className={styles.tab_edit}>
              <button type="button" onClick={() => dispatch(whatsNextAction())} className={styles.edit}>{tab ? tab.tabEditText : null}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default connect(mapStateToProps)(Tab);
