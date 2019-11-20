import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DashColorTile from './dashcolortile.jsx';
import styles from './dashboard.css';
import { addJobModalAction } from '../../redux/actions/actions.js';
import AddJobModal from '../Modals/AddJobModal/AddJobModal.jsx';

const mapStateToProps = (state) => ({
  show: state.addJobModal,
});

const DashboardRow = ({ job, dispatch }) => {
  if (job) {
    return (
      <div className={styles['dashboard-row']} component={Link} to="/details">
        <div
          href="/details"
          // component={Link}
          // to="/details"
          className={styles['dash-companytile']}
          onMouseLeave={(e) => { e.target.innerHTML = `<b>${job.companyName}</b> \n ${job.position}`; }}
          onMouseEnter={(e) => { e.target.innerHTML = `<b>${job.companyName}</b>`; }}
        >
          <div component={Link} to="/details">
            <b>{job.companyName}</b>
          </div>
          {job.position}
        </div>
        {job.tiles.map((tile, i) => (
          <DashColorTile key={tile} tileName={tile} number={i} />
        ))}
      </div>
    );
  }
  return (
    <>
      <AddJobModal />
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
