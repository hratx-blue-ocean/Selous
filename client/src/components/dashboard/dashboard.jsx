import React from 'react';
import { connect } from 'react-redux';
import DashboardRow from './dashboardRow.jsx';
import styles from './dashboard.css';


const mapStateToProps = (state) => ({ jobs: state.userJobs });


const Dashboard = ({ jobs }) => (
  <div className={styles.flexbox}>
    <div className={styles.dashboard}>
      {jobs.map((job) => (
        <DashboardRow key={job.id} job={job} />
      ))}
      <DashboardRow key="+" job={null} />
    </div>
  </div>
);

export default connect(mapStateToProps)(Dashboard);
