/* eslint-disable max-len */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
/* eslint-disable prefer-const */
import {
  Avatar,
  Card,
  Button,
  Typography,
  Grid,
} from '@material-ui/core/';
import AssignmentIcon from '@material-ui/icons/Assignment';

import JobPostingModal from '../Modals/JobPostingModal/JobPostingModal.jsx';

const mapStateToProps = (state) => ({ show: state.jobPostingModal });

const useStyles = makeStyles({
  root: {
    margin: 10,
    borderWidth: 1,
    borderColor: 'purple',
    borderStyle: 'solid',
    boxShadow: 3,
    '&:hover': {
      background: '#9f6cb7',
    },
    textTransform: 'none',
    textAlign: 'left',
  },
  logo: {
    margin: 10,
    width: '60px',
    height: '60px',
    background: 'rgb(200, 169, 214)',
  },
  searchDaysAgo: {
    marginRight: 10,
    alignItems: 'flex-end',
  },
  mainContainer: {
    width: '100%',
  },
  text: {
    width: '800px',
  },
  companyImage: {
    width: '60px',
  },
  postDate: {
    'justify-content': 'flex-end',
  },
  assignIcon: {
    width: '45px',
    height: '45px',
    color: 'purple',
  },
});

const JobComponent = ({ job }) => {
  const classes = useStyles();

  let [show, setShow] = useState(false);

  return (
    <>
      <JobPostingModal setShow={setShow} show={show} oneJob={job} />
      <Button>
        <Card
          className={classes.root}
          onClick={() => { setShow(show = !show); }}
        >
          <Grid container className={classes.mainContainer}>
            <Grid item alignItems="center">
              <Avatar className={classes.logo}>
                {
                  job.company_logo
                    ? <img className={classes.companyImage} src={job.company_logo} alt={job.id} />
                    : <AssignmentIcon className={classes.assignIcon} />
                }
              </Avatar>
            </Grid>
            <Grid container item xs direction="column" className={classes.text}>
              <Typography variant="h5">
                {job.title}
              </Typography>
              <Typography>
                {job.company}
              </Typography>
              <Typography>
                {job.location}
              </Typography>
            </Grid>
            <Grid container item xs={3} className={classes.postDate} display="flex" alignItems="flex-end">
              <Typography className={classes.searchDaysAgo}>
                {`Posted: ${job.created_at.slice(0, 10)}`}
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Button>
    </>
  );
};

export default connect(mapStateToProps)(JobComponent);
