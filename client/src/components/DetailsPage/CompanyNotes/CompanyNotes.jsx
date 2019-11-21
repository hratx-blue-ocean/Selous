/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import styles from './CompanyNotes.css';
import EditDetailsModal from '../../Modals/EditModal.jsx';

const CompanyNotes = ({ currentJob }) => {
  const [show, setShow] = useState(false);

  if (currentJob) {
    return (
      <>
        <EditDetailsModal info={currentJob} show={show} setShow={setShow} />
        <div className={styles.company_tab}>
          <div className={styles.company_tab_wrapper}>
            <h3 className={styles.company_notes_title}>{currentJob.company}</h3>
            <div className={styles.company_notes_body}>
              <h4 className={styles.notes}>Notes</h4>
              <div
                className={styles.company_notes}
                dangerouslySetInnerHTML={{ __html: currentJob.notes }}
              />
            </div>
            <div className={styles.button_wrapper}>
              <button type="button" onClick={() => { setShow(!show); }} className={styles.button}>Edit Notes</button>
            </div>
          </div>
        </div>
      </>
    );
  }
  return <div>Placeholder</div>;
};

const mapStateToProps = (state) => ({
  // currentJob: state.currentJob.jobData,
  currentJob: state.userData.userJobs[state.currentJob.jobId],
  showEdit: state.editModal,
});

export default connect(mapStateToProps)(React.memo(CompanyNotes));
