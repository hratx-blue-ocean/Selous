import React from 'react';
import { connect } from 'react-redux';
import styles from './CompanyNotes.css';

const CompanyNotes = ({ companyNotes }) => (
  <div className={styles.company_tab}>
    <div className={styles.company_tab_wrapper}>
      <h3 className={styles.company_notes_title}>{companyNotes.companyName}</h3>
      <div className={styles.company_notes_body}>
        <h5 className={styles.job_details}>Job Details</h5>
        <div className={styles.company_notes_job_details}>{companyNotes.jobDetails}</div>
        <h5 className={styles.notes}>Notes</h5>
        <div className={styles.company_notes}>{companyNotes.notes}</div>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({ companyNotes: state.companyNotes });

export default connect(mapStateToProps)(CompanyNotes);
