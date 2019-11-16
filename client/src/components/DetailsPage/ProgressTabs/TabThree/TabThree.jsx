import React from 'react';
import styles from './TabThree.css';

export default function Tab() {
  return (
    <div className={styles.tab_wrapper_three}>
      <div className={styles.tab}>
        <div className={styles.tab_header} />
        <div className={styles.tab_body}>Whats next?</div>
        <div className={styles.tab_edit}>
          <div className={styles.edit}>Next Step</div>
        </div>
      </div>
    </div>
  );
}
