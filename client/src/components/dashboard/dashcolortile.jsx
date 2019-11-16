import React from 'react';
import styles from './dashboard.css';

const DashColorTile = () => (
  <div
    className={styles['dash-step-tile']}
    onMouseEnter={(e) => {
      const { bottom, width, left } = e.target.getBoundingClientRect();
      const modalWidth = document.getElementById('1dash-modal').clientWidth;
      console.log(modalWidth, bottom, width, left);
      // setState({
      //  leftDSModalOffset: left + (width / 2) - (modalWidth / 2),
      //  bottomDSModalOffset: bottom + 5,
      //  DSmodalHidden = false,
      // });
    }}
    onMouseLeave={() => {
      // setState({
      //   DSModalHidden = true;
      // })
    }}
  />
);

export default DashColorTile;
