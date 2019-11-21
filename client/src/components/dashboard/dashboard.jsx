import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DashboardRow from './dashboardRow.jsx';
import styles from './dashboard.css';
import Headerbar from '../headerbar/Headerbar.jsx';
import Footer from '../footer/Footer.jsx';
import Goals from '../Goals/Goals.jsx';

const mapStateToProps = (state) => ({ user: state.userData });

const Dashboard = ({ user }) => (
  <>
    <Headerbar />
    <div className={styles.flexbox}>
      <div className={styles.dashboard}>
        {user.userJobs.map((job) => (
          <DashboardRow component={Link} to="/details" key={job._id} job={job} />
        ))}
        <DashboardRow key="+" job={null} />
      </div>
      <Goals />
    </div>
    <Footer />
  </>
);

export default connect(mapStateToProps)(Dashboard);
