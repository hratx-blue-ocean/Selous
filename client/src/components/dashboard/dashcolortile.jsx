/* eslint-disable react/jsx-equals-spacing */
import React from 'react';
import { Manager, Reference, Popper } from 'react-popper';
import styles from './dashboard.css';

const DashModalCss = {
  height: '30px',
  width: '114px',
  border: 'solid 2px black',
  background: '#FFFFFF',
  boxSizing: 'border-box',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: '10px',
  textAlign: 'center',
  paddingTop: '5px',
  zIndex: '2',
  display: 'hidden',

};

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
    <Manager>
      <Reference>
        {({ ref }) => (
          <div className = {styles[squareStyle]} ref={ref} />
        )}
      </Reference>
      <Popper placement="bottom" data-styles={DashModalCss}>
        {({
          ref, style, arrowProps, placement,
        }) => (
          <div ref={ref} style={style} className={styles['dash-modal-elipse']}>
            {tileName}
            <div innerRef={arrowProps.ref} style={arrowProps.style} data-placement={placement} />
          </div>
        )}
      </Popper>
    </Manager>
  );
};

export default DashColorTile;
