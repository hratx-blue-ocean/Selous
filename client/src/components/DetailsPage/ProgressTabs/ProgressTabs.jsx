import React from 'react';
import styles from './ProgressTabs.css';
import ButtonLeft from './ButtonLeft/ButtonLeft.jsx';
import ButtonRight from './ButtonRight/ButtonRight.jsx';
import TabOne from './TabOne/TabOne.jsx';
import TabTwo from './TabTwo/TabTwo.jsx';
import TabThree from './TabThree/TabThree.jsx';

export default function ProgressTabs() {
  return (
    <div className={styles.progress_tabs_wrapper}>

      <div className={styles.progress_tabs_header}>
        <h1>Your progress with Amazon</h1>
      </div>

      <div className={styles.progress_tabs}>
        <ButtonLeft />
        <TabOne />
        <TabTwo />
        <TabThree />
        <ButtonRight />
      </div>
    </div>
  );
}
