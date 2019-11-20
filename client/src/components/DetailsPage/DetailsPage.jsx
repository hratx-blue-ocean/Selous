import React from 'react';
import styles from './DetailsPage.css';
import CompanyNotes from './CompanyNotes/CompanyNotes.jsx';
import ProgressTabs from './ProgressTabs/ProgressTabs.jsx';
import Headerbar from '../headerbar/Headerbar.jsx';

const DetailsPage = () => (
  <>
    <Headerbar />
    <div className={styles.container}>
      <div className={styles.page_body}>
        <CompanyNotes />
        <ProgressTabs />
      </div>
    </div>
  </>
);

export default DetailsPage;
