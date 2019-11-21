import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import styles from './CompanyNotes.css';
import EditDetailsModal from '../../Modals/EditModal.jsx';
import { editAction } from '../../../redux/actions/actions.js';

const CompanyNotes = ({ currentJob, dispatch }) => (
  <>
    <EditDetailsModal />
    <div className={styles.company_tab}>
      <div className={styles.company_tab_wrapper}>
        <h3 className={styles.company_notes_title}>{currentJob.company}</h3>
        <div className={styles.company_notes_body}>
          <h4 className={styles.notes}>Notes</h4>
          <div className={styles.company_notes}>{currentJob.notes}</div>
        </div>
        <div className={styles.button_wrapper}>
          <button type="button" onClick={() => dispatch(editAction())} className={styles.button}>Add Notes</button>
        </div>
      </div>
    </div>
  </>
);

const mapStateToProps = (state) => ({ currentJob: state.currentJob, showEdit: state.editModal });

const isEqual = (nextProps, prevProps) => _.isEqual(nextProps, prevProps);

export default connect(mapStateToProps)(React.memo(CompanyNotes, isEqual));
