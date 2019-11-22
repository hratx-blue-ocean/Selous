/* eslint-disable dot-notation */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
/* eslint-disable arrow-body-style */
/* eslint-disable array-callback-return */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import axios from 'axios';
import styles from './TabOne.css';
import EditDetailsModal from '../../../Modals/EditModal.jsx';
import WhatsNext from '../../../Modals/WhatsNext.jsx';
import { currentJobAction, userToState } from '../../../../redux/actions/actions.js';

const stylesArr = ['bg_red', 'bg_orange', 'bg_yellow', 'bg_green', 'bg_blue', 'bg_pink', 'bg_purple', 'bg_grey'];
const cardDepth = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];

const Tab = ({
  tab,
  currentJob,
  whatsNextTab,
  userData,
  currentId,
  dispatch,
}) => {
  const handleOnClick = () => {
    const copyOfCurrentJob = _.clone(currentJob);
    const index = copyOfCurrentJob.progressArray.indexOf(tab);
    copyOfCurrentJob.progressArray[index].isCompleted = !copyOfCurrentJob.progressArray[index].isCompleted;
    axios.put('/db/dashboard/job/progress/check', {
      userId: userData._id,
      jobId: currentId,
      progId: index,
      completed: copyOfCurrentJob.progressArray[index].isCompleted,
    })
      .then(() => {
        axios.get('/db/login', {
          params: {
            userId: userData._id,
          },
        })
          .then((result) => {
            dispatch(userToState(result.data));
          });
      })
      .catch((err) => {
        console.log(err);
      });
    dispatch(currentJobAction({
      jobId: currentId,
      jobData: copyOfCurrentJob,
    }));
  };

  const [show, setShow] = useState(false);
  const [isWhatsNextTab, toggle] = useState(false);

  useEffect(() => {
    if (_.isEqual(tab, whatsNextTab)) {
      toggle(true);
      return;
    }
    toggle(false);
  }, [tab]);

  return (
    <>
      {tab ? (isWhatsNextTab ? <WhatsNext info={tab} setShow={setShow} show={show} /> : <EditDetailsModal info={tab} setShow={setShow} show={show} />) : ''}
      <div className={styles.tab_wrapper_one}>
        <div className={styles.card_holder}>
          {currentJob.progressArray.slice(0, currentJob.progressArray.indexOf(tab)).reduce((acc, cur, i) => {
            acc.unshift(styles[stylesArr[i]]);
            return acc;
          }, []).map((el, i) => {
            if (i <= 2) {
              return <span className={[styles[cardDepth[i]], el, styles.card].join(' ')} />;
            }
            return '';
          })}
          <div className={[tab ? (tab.isCompleted ? styles.gray : (styles[tab.color ? tab.color : 'default'])) : null, styles.tab].join(' ')}>
            <h3 className={styles.tab_header}>{tab ? tab.stepName : null}</h3>
            <div className={styles.tab_body}>{tab ? tab.stepNotes : null}</div>
            <div className={styles.tab_edit}>
              <button type="button" onClick={() => { setShow(!show); }} className={styles.edit}>{tab ? (isWhatsNextTab ? 'Next Step' : 'Edit') : null}</button>
            </div>
          </div>
        </div>
        {tab ? (isWhatsNextTab ? '' : <button type="button" className={styles.check} onClick={handleOnClick}>{tab.isCompleted ? (<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.875 14.1486L4.22625 10.4999L2.98375 11.7336L7.875 16.6249L18.375 6.12486L17.1412 4.89111L7.875 14.1486Z" fill="black" /></svg>) : ''}</button>) : ''}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  currentId: state.currentJob.jobId,
  showEdit: state.editModal,
  showWhatsNext: state.whatsNextModal,
  // currentJob: state.userData.userJobs[state.currentJob.jobId],
  currentJob: state.currentJob.jobData,
  whatsNextTab: state.whatsNextTab,
  userData: state.userData,
});

export default connect(mapStateToProps)(Tab);
