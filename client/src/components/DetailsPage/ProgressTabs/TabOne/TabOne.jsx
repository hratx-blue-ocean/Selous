/* eslint-disable no-unneeded-ternary */
import React from 'react';
import styles from './TabOne.css';

export default function Tab({ tab }) {
  return (
    <div className={styles.tab_wrapper_one}>
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
