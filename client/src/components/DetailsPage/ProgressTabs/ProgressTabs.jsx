import React from 'react';
import styles from './ProgressTabs.css';
import ButtonLeft from './ButtonLeft/ButtonLeft.jsx';
import ButtonRight from './ButtonRight/ButtonRight.jsx';
import TabOne from './TabOne/TabOne.jsx';

export default function ProgressTabs() {
  return (
    <div className={styles.progress_tabs_wrapper}>

      <div className={styles.progress_tabs_header}>
        <h1>Your progress with Amazon</h1>
      </div>

      <div className={styles.progress_tabs}>

        <ButtonLeft />
        <TabOne />

        <div className={styles.tab_wrapper_two}>

          <div className={styles.tab}>
            <div className={styles.tab_header}>Title</div>
            <div className={styles.tab_body}>Body</div>
            <div className={styles.tab_edit}>
              <div className={styles.edit}>Edit</div>
            </div>
          </div>
          <div className={styles.check} />

        </div>

        <div className={styles.tab_wrapper_three}>

          <div className={styles.tab}>
            <div className={styles.tab_header} />
            <div className={styles.tab_body}>Whats next?</div>
            <div className={styles.tab_edit}>
              <div className={styles.edit}>Next Step</div>
            </div>
          </div>
        </div>

        <ButtonRight />

      </div>
    </div>
  );
}
