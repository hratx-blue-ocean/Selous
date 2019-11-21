import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  ad: {
    marginLeft: '1%',
    height: '600px',
    width: '500px',
    float: 'left',
  },
  adHead: {
    paddingLeft: 30,
    margin: 0,
    marginTop: -11,
  },
});

export default function Ad() {
  const classes = useStyles();
  return (
    <div className={classes.ad}>
      <p className={classes.adHead}>Advertisment</p>
      <img src="https://selious.s3.amazonaws.com/ad2.jpg" alt="ad" height="595px" width="150px" />
    </div>
  );
}
