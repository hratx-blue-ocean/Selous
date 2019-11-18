/* eslint-disable no-unneeded-ternary */
import React from 'react';
import { connect } from 'react-redux';
import styles from './TabOne.css';

import EditDetailsModal from '../../../Modals/EditModal.jsx';
import editAction from '../../../../redux/actions/actions.js';

const mapStateToProps = (state) => ({ show: state.editModal });

const Tab = ({
  tabName,
  tabBody,
  tabEditText,
  dispatch,
}) => (
  <>
    <EditDetailsModal />
    <div className={styles.tab_wrapper_one}>
      <div className={styles.tab}>
        <div className={styles.tab_header}>{tabName ? tabName : ''}</div>
        <div className={styles.tab_body}>{tabBody}</div>
        <div className={styles.tab_edit}>
          <button type="button" onClick={() => dispatch(editAction())} className={styles.edit}>Edit</button>
        </div>
      </div>
      <div className={styles.check} />
    </div>
  </>
);

export default connect(mapStateToProps)(Tab);
