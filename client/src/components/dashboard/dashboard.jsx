import React from 'react';
import { connect } from 'react-redux';
import DashboardRow from './dashboardRow.jsx';
import styles from './dashboard.css';
import DashStepModal from './dashModal.jsx';

const mapStateToProps = (state) => ({ jobs: state.userJobs });


const Dashboard = ({ jobs }) => (
  <div className={styles.dashboard}>
    {jobs.map((job) => (
      <DashboardRow key={job.id} job={job} />
    ))}
    <DashStepModal />
  </div>
);

export default connect(mapStateToProps)(Dashboard);
