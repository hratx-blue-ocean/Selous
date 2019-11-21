/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './ProgressTabs.css';

// Components
import ButtonLeft from './ButtonLeft/ButtonLeft.jsx';
import ButtonRight from './ButtonRight/ButtonRight.jsx';
import TabOne from './TabOne/TabOne.jsx';
import TabTwo from './TabTwo/TabTwo.jsx';
import TabThree from './TabThree/TabThree.jsx';

// Actions
import { setDisplayedTabs } from '../../../redux/actions/actions.js';

const ProgressTabs = ({
  currentJob,
  whatsNextTab,
  displayedTabs,
  tabColors,
  dispatch,
}) => {
  useEffect(() => {
    let tempArr;
    switch (currentJob.progressArray.length) {
      case 0:
        dispatch(setDisplayedTabs([whatsNextTab]));
        break;
      case 1:
        tempArr = currentJob.progressArray.slice();
        tempArr[0].color = tabColors[currentJob.progressArray.indexOf(tempArr[0])];
        dispatch(setDisplayedTabs([...tempArr, whatsNextTab]));
        break;
      case 2:
        tempArr = currentJob.progressArray.slice();
        tempArr[0].color = tabColors[currentJob.progressArray.indexOf(tempArr[0])];
        tempArr[1].color = tabColors[currentJob.progressArray.indexOf(tempArr[1])];
        dispatch(setDisplayedTabs([...tempArr, whatsNextTab]));
        break;
      default:
        tempArr = currentJob.progressArray.slice(-2);
        tempArr[0].color = tabColors[currentJob.progressArray.indexOf(tempArr[0])];
        tempArr[1].color = tabColors[currentJob.progressArray.indexOf(tempArr[1])];
        dispatch(setDisplayedTabs([...tempArr, whatsNextTab]));
    }
  }, [currentJob.progressArray]);

  return (
    <div className={styles.progress_tabs_wrapper}>

      <div className={styles.progress_tabs_header}>
        <h1>{`Your progress with ${currentJob.company}`}</h1>
      </div>

      <div className={styles.progress_tabs}>
        <ButtonLeft />
        <TabOne tab={displayedTabs[0]} />
        <TabTwo tab={displayedTabs[1] ? displayedTabs[1] : null} />
        <TabThree tab={displayedTabs[2] ? displayedTabs[2] : null} />
        <ButtonRight />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentJob: state.currentJob,
  whatsNextTab: state.whatsNextTab,
  displayedTabs: state.displayedTabs,
  tabColors: state.tabColors,
});

export default connect(mapStateToProps)(ProgressTabs);
