/* eslint-disable arrow-body-style */
/* eslint-disable no-nested-ternary */
/* eslint-disable array-callback-return */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import axios from 'axios';
import styles from './TabThree.css';
import {
  whatsNextAction,
  currentJobAction,
  editAction,
  userToState,
} from '../../../../redux/actions/actions.js';
import WhatsNext from '../../../Modals/WhatsNext.jsx';
import EditDetailsModal from '../../../Modals/EditModal.jsx';

const stylesArr = ['bg_red', 'bg_orange', 'bg_yellow', 'bg_green', 'bg_blue', 'bg_pink', 'bg_purple', 'bg_grey'];
const cardDepth = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];

const Tab = ({
  tab,
  currentJob,
  whatsNextTab,
  userData,
  dispatch,
}) => {
  const handleOnClick = () => {
    const copyOfCurrentJob = _.clone(currentJob);
    const index = copyOfCurrentJob.progressArray.indexOf(tab);
    copyOfCurrentJob.progressArray[index].isCompleted = !copyOfCurrentJob.progressArray[index].isCompleted;
    axios.put('/db/dashboard/job/progress/check', {
      userId: userData._id,
      jobId: userData.userJobs.indexOf(currentJob),
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
    dispatch(currentJobAction(copyOfCurrentJob));
  };

  const [isWhatsNextTab, toggle] = useState(false);

  console.log(isWhatsNextTab);

  useEffect(() => {
    if (_.isEqual(tab, whatsNextTab)) {
      toggle(true);
      return;
    }
    toggle(false);
  }, [tab]);

  return (
    <>
      {tab ? (isWhatsNextTab ? <WhatsNext /> : <EditDetailsModal />) : ''}
      <div className={styles.tab_wrapper_three}>
        <div className={styles.card_holder}>
          {currentJob.progressArray.indexOf(tab) !== -1 ? (currentJob.progressArray.slice(currentJob.progressArray.indexOf(tab) + 1).length !== 0 ? currentJob.progressArray.slice(currentJob.progressArray.indexOf(tab) + 1).reduce((acc, cur, i, arr) => {
            if (i === arr.length - 1) {
              acc.push(styles[stylesArr[currentJob.progressArray.indexOf(cur)]], styles.whats_next_card);
              return acc;
            }
            acc.push(styles[stylesArr[currentJob.progressArray.indexOf(cur)]]);
            return acc;
          }, []).map((el, i) => {
            if (i <= 2) {
              return <span className={[el, styles[cardDepth[i]], styles.card].join(' ')} />;
            }
            return '';
          }) : <span className={[styles.whats_next_card, styles[cardDepth[0]]].join(' ')} />) : ''}
          <div className={[tab ? (tab.isCompleted ? styles.gray : (styles[tab.color ? tab.color : 'default'])) : styles.border_gray, styles.tab].join(' ')}>
            <h3 className={styles.tab_header}>{tab ? tab.stepName : null}</h3>
            <div className={styles.tab_body}>{tab ? tab.stepNotes : null}</div>
            {tab ? (
              <div className={styles.tab_edit}>
                <button type="button" onClick={() => dispatch(isWhatsNextTab ? whatsNextAction() : editAction())} className={styles.edit}>{isWhatsNextTab ? 'Next Step' : 'Edit'}</button>
              </div>
            ) : ''}
          </div>
        </div>
        {tab ? (isWhatsNextTab ? '' : <button type="button" className={styles.check} onClick={handleOnClick}>{tab.isCompleted ? (<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.875 14.1486L4.22625 10.4999L2.98375 11.7336L7.875 16.6249L18.375 6.12486L17.1412 4.89111L7.875 14.1486Z" fill="black" /></svg>) : ''}</button>) : ''}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  showEdit: state.editModal,
  showWhatsNext: state.whatsNextModal,
  currentJob: state.currentJob.jobData,
  whatsNextTab: state.whatsNextTab,
  userData: state.userData,
});

export default connect(mapStateToProps)(Tab);
