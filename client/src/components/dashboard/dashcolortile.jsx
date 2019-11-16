/* eslint-disable react/jsx-equals-spacing */
import React from 'react';
import styles from './dashboard.css';

const DashColorTile = ({ tileName, number }) => {
  const colors = {
    1: 'red',
    2: 'orange',
    3: 'yellow',
    4: 'green',
    5: 'blue',
    6: 'pinky',
    7: 'magenta',
    8: 'gray',
  };
  const style = `dash-${colors[number]}`;
  return (
    <div
      // className={styles['dash-step-tile']}
      className = {styles[style]}
      onMouseEnter={(e) => {
        const { bottom, width, left } = e.target.getBoundingClientRect();
        const modalWidth = document.getElementById('1dash-modal').clientWidth;
        console.log(modalWidth, bottom, width, left, tileName, number);
        // setState({
        //  modalString: tileName,
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
};

export default DashColorTile;
