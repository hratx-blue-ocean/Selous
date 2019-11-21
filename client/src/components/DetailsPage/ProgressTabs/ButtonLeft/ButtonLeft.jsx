/* eslint-disable max-len */
/* eslint-disable prefer-const */
import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import styles from './ButtonLeft.css';
import { moveLeftDisplayedTabs } from '../../../../redux/actions/actions.js';

const ButtonLeft = ({
  currentJob,
  displayedTabs,
  tabColors,
  whatsNextTab,
  dispatch,
}) => {
  const handleOnClick = () => {
    if (!_.isEqual(displayedTabs, currentJob.progressArray[0])) {
      for (let i = 1, len = currentJob.progressArray.length; i < len; i += 1) {
        if (_.isEqual(displayedTabs[0], currentJob.progressArray[i])) {
          const tab = currentJob.progressArray[i - 1];
          tab.color = tabColors[currentJob.progressArray.indexOf(tab)];
          dispatch(moveLeftDisplayedTabs(tab));
        }
      }
    }
  };

  let [showButton, toggleShowButton] = useState(false);

  useEffect(() => {
    if (!_.isEqual(displayedTabs[0], currentJob.progressArray[0]) && !_.isEqual(displayedTabs[0], whatsNextTab)) {
      toggleShowButton(true);
      return;
    }
    toggleShowButton(false);
  }, [displayedTabs]);

  return (showButton ? (
    <div className={styles.left_button}>
      <button type="button" className={styles.button} onClick={handleOnClick}>
        <svg width="13" height="18" viewBox="5 3 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.7636 16.9436L16.1167 16.5904L15.7639 16.2368L11.5363 12L15.7639 7.76317L16.1167 7.40961L15.7636 7.05645L14.3536 5.64645L14 5.29289L13.6464 5.64645L7.64645 11.6464L7.29289 12L7.64645 12.3536L13.6464 18.3536L14 18.7071L14.3536 18.3536L15.7636 16.9436Z" fill="#F2F2F2" stroke="black" />
        </svg>
      </button>
    </div>
  ) : <div />
  );
};

const mapStateToProps = (state) => ({
  // currentJob: state.currentJob.jobData,
  currentJob: state.userData.userJobs[state.currentJob.jobId],
  displayedTabs: state.displayedTabs,
  tabColors: state.tabColors,
  whatsNextTab: state.whatsNextTab,
});

export default connect(mapStateToProps)(ButtonLeft);
