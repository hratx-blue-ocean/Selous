import React from 'react';
import { connect } from 'react-redux';
import styles from './CompanyNotes.css';

const CompanyNotes = ({ currentJob }) => (
  <div className={styles.company_tab}>
    <div className={styles.company_tab_wrapper}>
      <h3 className={styles.company_notes_title}>{currentJob.company}</h3>
      <div className={styles.company_notes_body}>
        <h5 className={styles.job_details}>Job Details</h5>
        <div className={styles.company_notes_job_details}>ADD_TO_CURRENT_JOB_STATE</div>
        <h5 className={styles.notes}>Notes</h5>
        <div className={styles.company_notes}>{currentJob.notes}</div>
      </div>
    </div>
  </div>
);

// Implment notes button, add job details from state

const mapStateToProps = (state) => ({ currentJob: state.currentJob });

export default connect(mapStateToProps)(CompanyNotes);
