import React from 'react';
// import { connect } from 'react-redux';
import DashColorTile from './dashcolortile.jsx';
import styles from './dashboard.css';


const DashboardRow = ({ job }) => (
  <div className={styles['dashboard-row']}>
    <div
      className={styles['dash-companytile']}
      onMouseLeave={(e) => { e.target.innerHTML = `<b>${job.companyName}</b> \n ${job.position}`; }}
      onMouseEnter={(e) => { e.target.innerHTML = `<b>${job.companyName}</b>`; }}
    >
      <div>
        <b>{job.companyName}</b>
      </div>
      {job.position}
    </div>
    {job.tiles.map((tile, i) => (
      <DashColorTile key={tile} tileName={tile} number={i} />
    ))}
  </div>
);

export default DashboardRow;
