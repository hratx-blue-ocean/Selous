import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import DashColorTile from './dashcolortile.jsx';
import styles from './dashboard.css';
import { addJobModalAction, currentJobAction } from '../../redux/actions/actions.js';
import AddJobModal from '../Modals/AddJobModal/AddJobModal.jsx';

const mapStateToProps = (state) => ({
  show: state.addJobModal,
});

const DashboardRow = ({ job, dispatch }) => {
  const history = useHistory();
  const handleRoute = () => {
    dispatch(currentJobAction(job));
    history.push('/details');
  };
  if (job) {
    return (
      <div className={styles['dashboard-row']}>
        <button
          type="button"
          onClick={handleRoute}
          className={styles['dash-companytile']}
        >
          {job.company}
          <br />
          {job.position}
        </button>
        {job.progressArray.map((tile, i) => (
          <DashColorTile key={tile} tile={tile} number={i} />
        ))}
      </div>
    );
  }
  return (
    <>
      <div className={styles['modal-container']}>
        <AddJobModal />
      </div>
      <div className={styles['dashboard-row']}>
        <div
          role="button"
          tabIndex={0}
          className={styles['dash-companytile']}
          onClick={() => { dispatch(addJobModalAction()); }}
          onKeyPress=""
        >
          +
        </div>
      </div>
    </>
  );
};

const areEqual = (prevProps, nextProps) => _.isEqual(prevProps, nextProps);

export default connect(mapStateToProps)(React.memo(DashboardRow, areEqual));
