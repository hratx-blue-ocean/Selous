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

const Tab = ({ tab, companyTabs, dispatch }) => (
  <>
    <WhatsNext />
    <div className={styles.tab_wrapper_three}>
      <div className={styles.card_holder}>
        {companyTabs.indexOf(tab) !== -1 ? (companyTabs.slice(companyTabs.indexOf(tab) + 1).length !== 0 ? companyTabs.slice(companyTabs.indexOf(tab) + 1).reduce((acc, cur, i) => {
          if (i === 0) {
            acc.unshift(styles[stylesArr[companyTabs.indexOf(tab) + 1]], styles.whats_next_card);
            return acc;
          }
          acc.unshift(styles[stylesArr[companyTabs.indexOf(tab) + 1]]);
          return acc;
        }, []).map((el, i) => {
          return <span className={[styles[cardDepth[i]], el].join(' ')} />;
        }) : <span className={[styles.whats_next_card, styles[cardDepth[0]]].join(' ')} />) : ''}
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

const mapStateToProps = (state) => ({ show: state.whatsNextModal });

export default connect(mapStateToProps)(Tab);
