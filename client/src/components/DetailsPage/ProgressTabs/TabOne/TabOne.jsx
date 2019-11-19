/* eslint-disable arrow-body-style */
/* eslint-disable array-callback-return */
/* eslint-disable max-len */
import React from 'react';
import { connect } from 'react-redux';
import styles from './TabOne.css';
import EditDetailsModal from '../../../Modals/EditModal.jsx';
import { editAction } from '../../../../redux/actions/actions.js';

const stylesArr = ['card_one', 'card_two', 'card_three', 'card_four', 'card_five', 'card_six', 'card_seven', 'card_eight'];
const cardDepth = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];

const Tab = ({ tab, companyTabs, dispatch }) => (
  <>
    <EditDetailsModal />
    <div className={styles.tab_wrapper_one}>
      <div className={styles.card_holder}>
        {companyTabs.slice(0, companyTabs.indexOf(tab)).reduce((acc, cur, i) => {
          acc.unshift(styles[stylesArr[i]]);
          return acc;
        }, []).map((el, i) => {
          return <span className={[styles[cardDepth[i]], el].join(' ')} />;
        })}
        <div className={tab ? (styles[tab.color ? tab.color : 'tab']) : null}>
          <div className={styles.tab_header}>{tab ? tab.tabName : null}</div>
          <div className={styles.tab_body}>{tab ? tab.tabBody : null}</div>
          <div className={styles.tab_edit}>
            <button type="button" onClick={() => dispatch(editAction())} className={styles.edit}>{tab ? tab.tabEditText : null}</button>
          </div>
        </div>
      </div>
      <div className={styles.check} />
    </div>
  </>
);

const mapStateToProps = (state) => ({ show: state.editModal });

export default connect(mapStateToProps)(Tab);
