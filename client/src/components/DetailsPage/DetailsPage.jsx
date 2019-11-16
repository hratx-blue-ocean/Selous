import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './DetailsPage.css';
import CompanyNotes from './CompanyNotes/CompanyNotes.jsx';
import ProgressTabs from './ProgressTabs/ProgressTabs.jsx';
import { addDataForTest } from '../../redux/actions/actions.js';

const exampleData = {
  companyName: 'Amazon',
  notes: '',
  tabs: [
    {
      whatsNextTab: false,
      tabName: 'Cover Letter',
      tabBody: '',
      tabEditText: 'Edit',
    },
    {
      whatsNextTab: false,
      tabName: 'Cover Letter',
      tabBody: '',
      tabEditText: 'Edit',
    },
    {
      whatsNextTab: false,
      tabName: 'Cover Letter',
      tabBody: '',
      tabEditText: 'Edit',
    },
    {
      whatsNextTab: true,
      tabName: '',
      tabBody: 'Whats up?',
      tabEditText: 'Next Step',
    },
  ],
};

const mapStateToProps = (state) => ({ test: state.testData });

const DetailsPage = ({ test, dispatch }) => {
  useEffect(() => {
    dispatch(addDataForTest(exampleData));
  });

  return (
    <div className={styles.container}>
      <div className={styles.page_body}>
        <CompanyNotes companyName={test.companyName} notes={test.notes} />
        <ProgressTabs companyName={test.companyName} tabs={test.tabs} />
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(DetailsPage);
