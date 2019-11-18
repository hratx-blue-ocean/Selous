import React from 'react';
import { connect } from 'react-redux';
import styles from './TabOne.css';

import EditDetailsModal from '../../../Modals/EditModal.jsx';
import editAction from '../../../../redux/actions/editAction.js';

const mapStateToProps = (state) => ({ show: state.editModal });

const Tab = ({ dispatch }) => {
  return (
    <>
      <EditDetailsModal />
      <div className={styles.tab_wrapper_one}>
        <div className={styles.tab}>
          <div className={styles.tab_header}>Title</div>
          <div className={styles.tab_body}>Body</div>
          <div className={styles.tab_edit}>
            <button type="button" onClick={() => dispatch(editAction())} className={styles.edit}>Edit</button>
          </div>
        </div>
        <div className={styles.check} />
      </div>
    </>
  );
};

export default connect(mapStateToProps)(Tab);
