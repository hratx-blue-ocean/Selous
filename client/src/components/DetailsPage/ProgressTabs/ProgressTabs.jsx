import React from 'react';
import styles from './ProgressTabs.css';

// Components
import ButtonLeft from './ButtonLeft/ButtonLeft.jsx';
import ButtonRight from './ButtonRight/ButtonRight.jsx';
import TabOne from './TabOne/TabOne.jsx';
import TabTwo from './TabTwo/TabTwo.jsx';
import TabThree from './TabThree/TabThree.jsx';

export default function ProgressTabs({ companyName, tabs }) {
  return (
    <div className={styles.progress_tabs_wrapper}>

      <div className={styles.progress_tabs_header}>
        <h1>{`Your progress with ${companyName}`}</h1>
      </div>

      <div className={styles.progress_tabs}>
        <ButtonLeft />
        <TabOne tab={tabs ? tabs[tabs.length - 3] : null} />
        <TabTwo tab={tabs ? tabs[tabs.length - 2] : null} />
        <TabThree tab={tabs ? tabs[tabs.length - 1] : null} />
        <ButtonRight />
      </div>
    </div>
  );
}
