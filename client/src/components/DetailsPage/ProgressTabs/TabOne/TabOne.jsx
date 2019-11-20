import React from 'react';
import { connect } from 'react-redux';
import styles from './TabOne.css';

import EditDetailsModal from '../../../Modals/EditModal.jsx';
import { editAction } from '../../../../redux/actions/actions.js';

const mapStateToProps = (state) => ({ show: state.editModal });

const Tab = ({ tab, dispatch }) => (
  <>
    <EditDetailsModal />
    <div className={styles.tab_wrapper_one}>
      <div className={tab ? (styles[tab.color ? tab.color : 'tab']) : null}>
        <div className={styles.tab_header}>{tab ? tab.tabName : null}</div>
        <div className={styles.tab_body}>{tab ? tab.tabBody : null}</div>
        <div className={styles.tab_edit}>
          <button type="button" onClick={() => dispatch(editAction())} className={styles.edit}>{tab ? tab.tabEditText : null}</button>
        </div>
      </div>
      <div className={styles.check} />
    </div>
  </>
);


export default connect(mapStateToProps)(Tab);
