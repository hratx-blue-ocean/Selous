import React from 'react';
import { connect } from 'react-redux';
import DashColorTile from './dashcolortile.jsx';
import styles from './dashboard.css';

const mapStateToProps = (state) => ({
  show: state.addJobModal,
});

const DashboardRow = ({ job, dispatch }) => {
  if (job) {
    return (
      <div className={styles['dashboard-row']}>
        <div
          className={styles['dash-companytile']}
          onMouseEnter={(e) => { e.target.innerHTML = `<b>${job.companyName}</b> \n ${job.position}`; }}
          onMouseLeave={(e) => { e.target.innerHTML = `<b>${job.companyName}</b>`; }}
        >
          {job.companyName}
        </div>
        {job.tiles.map((tile, i) => (
          <DashColorTile key={tile} tileName={tile} number={i} />
        ))}
      </div>
    );
  }
  return (
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
  );
};

export default connect(mapStateToProps)(DashboardRow);
