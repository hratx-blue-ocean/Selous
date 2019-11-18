import React from 'react';
import styles from './TabThree.css';

export default function Tab({ tab }) {
  return (
    <div className={styles.tab_wrapper_three}>
      <div className={styles.tab}>
        <div className={styles.tab_header}>{tab ? tab.tabName : null}</div>
        <div className={styles.tab_body}>{tab ? tab.tabBody : null}</div>
        <div className={styles.tab_edit}>
          <div className={styles.edit}>{tab ? tab.tabEditText : null}</div>
        </div>
      </div>
    </div>
  );
}
