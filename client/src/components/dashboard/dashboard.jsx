import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DashboardRow from './dashboardRow.jsx';
import styles from './dashboard.css';
import Headerbar from '../headerbar/Headerbar.jsx';


const mapStateToProps = (state) => ({ jobs: state.userData.userJobs });


const Dashboard = ({ jobs }) => (
  <>
    <Headerbar />
    <div className={styles.flexbox}>
      <div className={styles.dashboard}>
        {jobs.map((job) => (
          <DashboardRow component={Link} to="/details" key={job.id} job={job} />
        ))}
        <DashboardRow key="+" job={null} />
      </div>
    </div>
  </>
);

export default connect(mapStateToProps)(Dashboard);
