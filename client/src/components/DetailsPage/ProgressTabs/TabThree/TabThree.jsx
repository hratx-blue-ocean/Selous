/* eslint-disable arrow-body-style */
/* eslint-disable no-nested-ternary */
/* eslint-disable array-callback-return */
/* eslint-disable max-len */
import React from 'react';
import { connect } from 'react-redux';
import styles from './TabThree.css';
import { whatsNextAction, setTabsCompanyTabsTEST } from '../../../../redux/actions/actions.js';
import WhatsNext from '../../../Modals/WhatsNext.jsx';

const stylesArr = ['bg_red', 'bg_orange', 'bg_yellow', 'bg_green', 'bg_blue', 'bg_pink', 'bg_purple', 'bg_grey'];
const cardDepth = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];

const Tab = ({ tab, companyTabsTEST, dispatch }) => {
  const handleOnClick = () => {
    const companyTabsTESTCopy = companyTabsTEST.slice();
    companyTabsTESTCopy[companyTabsTESTCopy.indexOf(tab)].completed = !companyTabsTESTCopy[companyTabsTESTCopy.indexOf(tab)].completed;
    dispatch(setTabsCompanyTabsTEST(companyTabsTESTCopy));
  };

  return (
    <>
      <WhatsNext />
      <div className={styles.tab_wrapper_three}>
        <div className={styles.card_holder}>
          {companyTabsTEST.indexOf(tab) !== -1 ? (companyTabsTEST.slice(companyTabsTEST.indexOf(tab) + 1).length !== 0 ? companyTabsTEST.slice(companyTabsTEST.indexOf(tab) + 1).reduce((acc, cur, i, arr) => {
            if (i === arr.length - 1) {
              acc.push(styles[stylesArr[companyTabsTEST.indexOf(cur)]], styles.whats_next_card);
              return acc;
            }
            acc.push(styles[stylesArr[companyTabsTEST.indexOf(cur)]]);
            return acc;
          }, []).map((el, i) => {
            return <span className={[el, styles[cardDepth[i]], styles.card].join(' ')} />;
          }) : <span className={[styles.whats_next_card, styles[cardDepth[0]]].join(' ')} />) : ''}
          <div className={[tab ? (styles[tab.color ? tab.color : 'tab']) : styles.border_gray, styles.tab].join(' ')}>
            <div className={styles.tab_header}>{tab ? tab.tabName : null}</div>
            <div className={styles.tab_body}>{tab ? tab.tabBody : null}</div>
            <div className={styles.tab_edit}>
              <button type="button" onClick={() => dispatch(whatsNextAction())} className={styles.edit}>{tab ? tab.tabEditText : null}</button>
            </div>
          </div>
        </div>
        {tab ? (tab.whatsNextTab ? '' : <button type="button" className={styles.check} onClick={handleOnClick}>{tab.completed ? (<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.875 14.1486L4.22625 10.4999L2.98375 11.7336L7.875 16.6249L18.375 6.12486L17.1412 4.89111L7.875 14.1486Z" fill="black" /></svg>) : ''}</button>) : ''}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({ show: state.whatsNextModal, companyTabsTEST: state.companyTabsTEST });

export default connect(mapStateToProps)(Tab);
