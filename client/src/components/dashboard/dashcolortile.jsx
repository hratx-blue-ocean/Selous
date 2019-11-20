/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-equals-spacing */
import React from 'react';
import Popper from '@material-ui/core/Popper';
import Resume from '@material-ui/icons/Description';
import PhoneCall from '@material-ui/icons/PhoneCallback';
import PhoneInterview from '@material-ui/icons/PhoneInTalk';
import Apply from '@material-ui/icons/ListAlt';
import InPersonInterview from '@material-ui/icons/Group';
import OnSiteInterview from '@material-ui/icons/Business';
import Offer from '@material-ui/icons/MonetizationOn';
import GotJob from '@material-ui/icons/BusinessCenter';
import styles from './dashboard.css';


const DashColorTile = ({ tileName, number }) => {
  const squares = {
    0: { color: 'red', icon: <Resume /> },
    1: { color: 'orange', icon: <Apply /> },
    2: { color: 'yellow', icon: <PhoneCall /> },
    3: { color: 'green', icon: <PhoneInterview /> },
    4: { color: 'blue', icon: <InPersonInterview /> },
    5: { color: 'pinky', icon: <OnSiteInterview /> },
    6: { color: 'magenta', icon: <Offer /> },
    7: { color: 'gray', icon: <GotJob /> },
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  const squareStyle = `dash-${squares[number].color}`;
  const popperStyle = `dash-modal-elipse-${squares[number].color}`;
  const triangleStyle = `dash-modal-triangle-${squares[number].color}`;
  const { icon } = squares[number];
  return (
    <>
      <div
        id={tileName}
        className = {styles[squareStyle]}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {icon}
        <Popper
          placement= "bottom"
          id={id}
          open={open}
          anchorEl={anchorEl}
          modifiers={{
            arrow: {
              enabled: true,
            },
          }}
        >
          <div>
            <div className={styles[triangleStyle]}> </div>
            <div className={styles[popperStyle]}>
              {tileName}
            </div>
          </div>
        </Popper>
      </div>
    </>
  );
};

export default DashColorTile;
