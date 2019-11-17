import React from 'react';
import styles from './TabTwo.css';

export default function Tab() {
  return (
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
  );
}
