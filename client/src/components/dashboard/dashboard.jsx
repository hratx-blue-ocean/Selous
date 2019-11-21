import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DashboardRow from './dashboardRow.jsx';
import styles from './dashboard.css';
import Headerbar from '../headerbar/Headerbar.jsx';
import Footer from '../footer/Footer.jsx';

const mapStateToProps = (state) => ({ user: state.userData });


const Dashboard = ({ user }) => (
  <>
    <Headerbar />
    <div className={styles.flexbox}>
      <div className={styles.dashboard}>
        {console.log(user)}
        {user.userJobs.map((job) => (
          // eslint-disable-next-line
          <DashboardRow component={Link} to="/details" key={job._id} job={job} />
        ))}
        <DashboardRow key="+" job={null} />
      </div>
    </div>
    <Footer />
  </>
);

export default connect(mapStateToProps)(Dashboard);
