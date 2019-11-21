/* eslint-disable max-len */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import styles from './ButtonRight.css';
import { moveRightDisplayedTabs } from '../../../../redux/actions/actions.js';

const ButtonRight = ({
  currentJob,
  displayedTabs,
  whatsNextTab,
  tabColors,
  dispatch,
}) => {
  const handleOnClick = () => {
    const lastDisplayedTab = JSON.stringify(displayedTabs[2]);
    if (lastDisplayedTab !== JSON.stringify(whatsNextTab)) {
      if (lastDisplayedTab === JSON.stringify(currentJob.progressArray[currentJob.progressArray.length - 1])) {
        dispatch(moveRightDisplayedTabs(whatsNextTab));
      } else {
        for (let i = 0, len = currentJob.progressArray.length - 1; i < len; i += 1) {
          if (lastDisplayedTab === JSON.stringify(currentJob.progressArray[i])) {
            const tab = currentJob.progressArray[i + 1];
            tab.color = tabColors[currentJob.progressArray.indexOf(tab)];
            dispatch(moveRightDisplayedTabs(tab));
          }
        }
      }
    }
  };

  let [showButton, toggleShowButton] = useState(false);

  useEffect(() => {
    if (JSON.stringify(displayedTabs[2]) !== JSON.stringify(whatsNextTab) && displayedTabs[2] !== undefined) {
      toggleShowButton(true);
      return;
    }
    toggleShowButton(false);
  }, [displayedTabs]);

  return (showButton ? (
    <div className={styles.right_button}>
      <button type="button" className={styles.button} onClick={handleOnClick}>
        <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.23603 12.2368L0.883244 12.5904L1.23641 12.9436L2.64641 14.3536L2.99997 14.7071L3.35352 14.3536L9.35352 8.35355L9.70707 8L9.35352 7.64645L3.35352 1.64645L2.99997 1.29289L2.64641 1.64645L1.23641 3.05645L0.883244 3.40961L1.23603 3.76317L5.46363 8L1.23603 12.2368Z" fill="#F2F2F2" stroke="black" />
        </svg>
      </button>
    </div>
  ) : <div />
  );
};


const mapStateToProps = (state) => ({
  currentJob: state.currentJob.jobData,
  whatsNextTab: state.whatsNextTab,
  displayedTabs: state.displayedTabs,
  tabColors: state.tabColors,
});

export default connect(mapStateToProps)(ButtonRight);
