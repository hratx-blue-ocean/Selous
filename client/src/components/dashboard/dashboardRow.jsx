import React from 'react';
import DashColorTile from './dashcolortile.jsx';
import styles from './dashboard.css';

const DashboardRow = () => (
  <div className={styles['dashboard-row']}>
    <div className={styles['dash-companytile']}>
      IBM
    </div>
    <DashColorTile class="dash-red" />
  </div>
);

export default DashboardRow;
