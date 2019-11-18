import React from 'react';
import styles from './CompanyNotes.css';

export default function CompanyNotes({ companyName, notes }) {
  return (
    <div className={styles.company_notes}>
      <div className={styles.company_notes_box}>{companyName}</div>
      <div>{notes}</div>
    </div>
  );
}
