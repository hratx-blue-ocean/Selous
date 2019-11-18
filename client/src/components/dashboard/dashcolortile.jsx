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
  const [anchorE1, setAnchorE1] = React.useState(null);
  const handleMouseEnter = (event) => {
    setAnchorE1(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorE1(null);
  };
  const open = Boolean(anchorE1);
  const id = open ? 'simple-popper' : undefined;
  const squareStyle = `dash-${colors[number]}`;
  return (
    <>
      <div
        id={tileName}
        className = {styles[squareStyle]}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <Popper
        container={document.getElementById(tileName)}
        id={id}
        open={open}
        anchorE1={anchorE1}
        position= "bottom"
      >
        <div className={styles['dash-modal-triangle']}> </div>
        <div className={styles['dash-modal-elipse']}>
          {tileName}
        </div>
      </Popper>
    </>
  );
};

export default DashColorTile;
