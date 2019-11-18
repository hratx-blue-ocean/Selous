/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import styles from './ButtonRight.css';
import { moveRightDisplayedTabs } from '../../../../redux/actions/actions.js';

const ButtonRight = ({
  companyTabsTEST,
  displayedTabs,
  whatsNextTab,
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
            dispatch(moveRightDisplayedTabs(companyTabsTEST[i + 1]));
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
});

export default connect(mapStateToProps)(ButtonRight);
