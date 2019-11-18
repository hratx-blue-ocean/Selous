import React from 'react';
import { connect } from 'react-redux';
import styles from './DetailsPage.css';
import CompanyNotes from './CompanyNotes/CompanyNotes.jsx';
import ProgressTabs from './ProgressTabs/ProgressTabs.jsx';

const DetailsPage = () => (
  <div className={styles.container}>
    <div className={styles.page_body}>
      <CompanyNotes />
      <ProgressTabs />
    </div>
  </div>
);

export default connect()(DetailsPage);
