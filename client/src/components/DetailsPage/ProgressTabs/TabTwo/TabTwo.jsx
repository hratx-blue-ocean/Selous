/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { connect } from 'react-redux';
import styles from './TabTwo.css';

import EditDetailsModal from '../../../Modals/EditModal.jsx';
import { editAction, setTabsCompanyTabsTEST } from '../../../../redux/actions/actions.js';


const Tab = ({ tab, companyTabsTEST, dispatch }) => {
  const handleOnClick = () => {
    const companyTabsTESTCopy = companyTabsTEST.slice();
    companyTabsTESTCopy[companyTabsTESTCopy.indexOf(tab)].completed = !companyTabsTESTCopy[companyTabsTESTCopy.indexOf(tab)].completed;
    dispatch(setTabsCompanyTabsTEST(companyTabsTESTCopy));
  };

  return (
    <>
      <EditDetailsModal />
      <div className={styles.tab_wrapper_two}>
        <div className={[tab ? (styles[tab.color ? tab.color : 'tab']) : styles.border_gray, styles.tab].join(' ')}>
          <div className={styles.tab_header}>{tab ? tab.tabName : null}</div>
          <div className={styles.tab_body}>{tab ? tab.tabBody : null}</div>
          {tab ? (
            <div className={styles.tab_edit}>
              <button type="button" onClick={() => dispatch(editAction())} className={styles.edit}>{tab.tabEditText}</button>
            </div>
          ) : ''}
        </div>
        {tab ? (tab.whatsNextTab ? '' : <button type="button" className={styles.check} onClick={handleOnClick}>{tab.completed ? (<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.875 14.1486L4.22625 10.4999L2.98375 11.7336L7.875 16.6249L18.375 6.12486L17.1412 4.89111L7.875 14.1486Z" fill="black" /></svg>) : ''}</button>) : ''}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({ show: state.whatsNextModal, companyTabsTEST: state.companyTabsTEST });

export default connect(mapStateToProps)(Tab);
