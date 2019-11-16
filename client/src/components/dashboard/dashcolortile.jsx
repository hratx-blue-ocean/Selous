import React from 'react';
import styles from './dashboard.css';

const DashColorTile = () => (
  <div
    className={styles['dash-step-tile']}
    onMouseEnter={(e) => {
      console.log(e.target.getBoundingClientRect());
    }}
  />
);

export default DashColorTile;
