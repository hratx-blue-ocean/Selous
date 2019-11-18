import React from 'react';
// import { connect } from 'react-redux';
import DashColorTile from './dashcolortile.jsx';
import styles from './dashboard.css';


const DashboardRow = ({ job }) => (
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

export default DashboardRow;
