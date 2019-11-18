import React from 'react';
import styles from './TabTwo.css';

export default function Tab({ tab }) {
  return (
    <div className={styles.tab_wrapper_two}>
      <div className={styles.tab}>
        <div className={styles.tab_header}>{tab ? tab.tabName : null}</div>
        <div className={styles.tab_body}>{tab ? tab.tabBody : null}</div>
        <div className={styles.tab_edit}>
          <div className={styles.edit}>{tab ? tab.tabEditText : null}</div>
        </div>
      </div>
      <div className={styles.check} />
    </div>
  );
}
