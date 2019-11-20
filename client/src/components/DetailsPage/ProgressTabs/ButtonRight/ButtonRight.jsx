/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import styles from './ButtonRight.css';
import { moveRightDisplayedTabs } from '../../../../redux/actions/actions.js';

const ButtonRight = ({
  companyTabsTEST,
  displayedTabs,
  whatsNextTab,
  tabColors,
  dispatch,
}) => {
  const handleOnClick = () => {
    const lastDisplayedTab = JSON.stringify(displayedTabs[2]);
    if (lastDisplayedTab !== JSON.stringify(whatsNextTab)) {
      if (lastDisplayedTab === JSON.stringify(companyTabsTEST[companyTabsTEST.length - 1])) {
        dispatch(moveRightDisplayedTabs(whatsNextTab));
      } else {
        for (let i = 0, len = companyTabsTEST.length - 1; i < len; i += 1) {
          if (lastDisplayedTab === JSON.stringify(companyTabsTEST[i])) {
            const tab = companyTabsTEST[i + 1];
            tab.color = tabColors[companyTabsTEST.indexOf(tab)];
            dispatch(moveRightDisplayedTabs(tab));
          }
        }
      }
    }
  };

  return (
    <div className={styles.right_button}>
      <button type="button" className={styles.button} onClick={handleOnClick}>{}</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  companyTabsTEST: state.companyTabsTEST,
  whatsNextTab: state.whatsNextTab,
  displayedTabs: state.displayedTabs,
  tabColors: state.tabColors,
});

export default connect(mapStateToProps)(ButtonRight);
