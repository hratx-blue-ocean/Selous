/* eslint-disable arrow-body-style */
/* eslint-disable no-nested-ternary */
/* eslint-disable array-callback-return */
/* eslint-disable max-len */
import React from 'react';
import { connect } from 'react-redux';
import styles from './TabThree.css';
import { whatsNextAction } from '../../../../redux/actions/actions.js';
import WhatsNext from '../../../Modals/WhatsNext.jsx';

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
      <WhatsNext />
      <div className={styles.tab_wrapper_three}>
        <div className={styles.card_holder}>
          {companyTabs.indexOf(tab) !== -1 ? (companyTabs.slice(companyTabs.indexOf(tab) + 1).length !== 0 ? companyTabs.slice(companyTabs.indexOf(tab) + 1).reduce((acc, cur, i, arr) => {
            if (i === arr.length - 1) {
              acc.push(styles[stylesArr[companyTabs.indexOf(cur)]], styles.whats_next_card);
              return acc;
            }
            acc.push(styles[stylesArr[companyTabs.indexOf(cur)]]);
            return acc;
          }, []).map((el, i) => {
            return <span className={[el, styles[cardDepth[i]]].join(' ')} />;
          }) : <span className={[styles.whats_next_card, styles[cardDepth[0]]].join(' ')} />) : ''}
          <div className={tab ? (styles[tab.color ? tab.color : 'tab']) : null}>
            <div className={styles.tab_header}>{tab ? tab.tabName : null}</div>
            <div className={styles.tab_body}>{tab ? tab.tabBody : null}</div>
            <div className={styles.tab_edit}>
              <button type="button" onClick={() => dispatch(whatsNextAction())} className={styles.edit}>{tab ? tab.tabEditText : null}</button>
            </div>
          </div>
        </div>
        {tab ? (tab.whatsNextTab ? '' : <div className={styles.check} onClick={() => ''} onKeyPress={() => ''} role="button" tabIndex={0}>{tab.completed ? (<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.875 14.1486L4.22625 10.4999L2.98375 11.7336L7.875 16.6249L18.375 6.12486L17.1412 4.89111L7.875 14.1486Z" fill="black" /></svg>) : ''}</div>) : ''}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({ show: state.editModal });

export default connect(mapStateToProps)(Tab);
