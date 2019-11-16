import React from 'react';
import DashboardRow from './dashboardRow.jsx';
import styles from './dashboard.css';
import DashStepModal from './dashModal.jsx';


const Dashboard = () => (
  <div className={styles.dashboard}>
    <DashboardRow />
    <DashboardRow />
    <DashboardRow />
    <DashboardRow />
    <DashboardRow />
    <DashStepModal />
  </div>
);

export default Dashboard;
