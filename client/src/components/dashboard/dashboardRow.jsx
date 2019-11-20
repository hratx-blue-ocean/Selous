import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import DashColorTile from './dashcolortile.jsx';
import styles from './dashboard.css';
import { addJobModalAction } from '../../redux/actions/actions.js';
import AddJobModal from '../Modals/AddJobModal/AddJobModal.jsx';

const mapStateToProps = (state) => ({
  show: state.addJobModal,
});

const DashboardRow = ({ job, dispatch }) => {
  const history = useHistory();
  const handleRoute = () => {
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
          {job.companyName}
          <br />
          {job.position}
        </button>
        {job.tiles.map((tile, i) => (
          <DashColorTile key={tile} tileName={tile} number={i} />
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

export default connect(mapStateToProps)(DashboardRow);
