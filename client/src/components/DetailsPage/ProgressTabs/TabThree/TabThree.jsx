/* eslint-disable no-nested-ternary */
/* eslint-disable array-callback-return */
/* eslint-disable max-len */
import React from 'react';
import { connect } from 'react-redux';
import styles from './TabThree.css';
import { whatsNextAction } from '../../../../redux/actions/actions.js';
import WhatsNext from '../../../Modals/WhatsNext.jsx';

const stylesArr = ['card_one', 'card_two'];

const Tab = ({ tab, companyTabs, dispatch }) => (
  <>
    <WhatsNext />
    <div className={styles.tab_wrapper_three}>
      <div className={styles.card_holder}>
        {companyTabs.indexOf(tab) !== -1 ? (companyTabs.slice(companyTabs.indexOf(tab) + 1).length ? companyTabs.slice(companyTabs.indexOf(tab) + 1).map((el, i) => {
          if (i === 0) {
            return (
              <>
                <span className={styles.whats_next_card} />
                <span className={styles[stylesArr[i]]} />
              </>
            );
          }
          if (i !== 0) {
            return <span className={styles[stylesArr[i]]} />;
          }
        }) : <span className={styles.whats_next_card} />) : ''}
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
