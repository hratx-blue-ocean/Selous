/* eslint-disable no-nested-ternary */
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

const Tab = ({ tab, companyTabs, dispatch }) => {
  // const handleOnClick = () => {
  //   const companyTabsCopy = companyTabs.slice();
  //   companyTabsCopy[companyTabsCopy.indexOf(tab)].completed = !companyTabsCopy[companyTabsCopy.indexOf(tab)].completed;
  //   dispatch(setTabsCompanyTabsTEST(companyTabsCopy));
  // };


  return (
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
        <div className={styles.check} onClick={() => ''} onKeyPress={() => ''} role="button" tabIndex={0}>
          {tab ? (tab.completed ? (<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.875 14.1486L4.22625 10.4999L2.98375 11.7336L7.875 16.6249L18.375 6.12486L17.1412 4.89111L7.875 14.1486Z" fill="black" /></svg>) : '') : ''}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({ show: state.editModal });

export default connect(mapStateToProps)(Tab);
