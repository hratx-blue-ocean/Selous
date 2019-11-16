import React from 'react';
import styles from './TabOne.css';

export default function Tab() {
  return (
    <div className={styles.tab_wrapper_one}>
      <div className={styles.tab}>
        <div className={styles.tab_header}>Title</div>
        <div className={styles.tab_body}>Body</div>
        <div className={styles.tab_edit}>
          <div className={styles.edit}>Edit</div>
        </div>
      </div>
      <div className={styles.check} />
    </div>
  );
}
