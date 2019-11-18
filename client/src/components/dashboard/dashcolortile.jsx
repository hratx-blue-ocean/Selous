/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-equals-spacing */
import React from 'react';
import Popper from '@material-ui/core/Popper';
import styles from './dashboard.css';

// const DashModalCss = {
//   height: '30px',
//   width: '114px',
//   border: 'solid 2px black',
//   background: '#FFFFFF',
//   boxSizing: 'border-box',
//   boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
//   borderRadius: '10px',
//   textAlign: 'center',
//   paddingTop: '5px',
//   zIndex: '2',

// };

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

  const squareStyle = `dash-${colors[number]}`;
  return (
    <>
      <div id={tileName} className = {styles[squareStyle]} />
      <Popper>
        <div className={styles['dash-modal-triangle']}> </div>
        <div className={styles['dash-modal-elipse']}>
          {tileName}
        </div>
      </Popper>
    </>
  );
};

export default DashColorTile;
