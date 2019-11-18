/* eslint-disable no-unneeded-ternary */
import React from 'react';
import styles from './TabOne.css';

export default function Tab({ tabName, tabBody, tabEditText }) {
  return (
    <div className={styles.tab_wrapper_one}>
      <div className={styles.tab}>
        <div className={styles.tab_header}>{tabName ? tabName : ''}</div>
        <div className={styles.tab_body}>{tabBody}</div>
        <div className={styles.tab_edit}>
          <div className={styles.edit}>{tabEditText}</div>
        </div>
      </div>
      <div className={styles.check} />
    </div>
  );
}
