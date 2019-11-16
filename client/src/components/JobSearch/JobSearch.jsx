import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Axios from 'axios';

const apiObj = [];

const apiReq = () => {
  Axios('https://jobs.github.com/positions.json?description=node').then((results) => {
    results.forEach((element) => {
      apiObj.push(element);
    });
  });
};

export default function JobSearch() {
  apiReq();
  return (
    <Paper>
      <Typography>
        This is a test
      </Typography>
    </Paper>
  );
}