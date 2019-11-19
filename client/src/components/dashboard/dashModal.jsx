import React from 'react';
import styles from './dashboard.css';
import { mergeClasses } from '@material-ui/styles';

const DashModal = () => (
  <div id="1dash-modal" className={mergeClasses.paper}>
    <div className={styles['dash-modal-triangle']}> </div>
    <div className={styles['dash-modal-elipse']}>
      Lorem Ipsum
    </div>
  </div>
);

export default DashModal;
