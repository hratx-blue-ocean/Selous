import React from 'react';
import { connect } from 'react-redux';
import styles from './DetailsPage.css';

const mapStateToProps = (state) => ({ toggle: state.toggle });

const DetailsPage = () => (
  <div className={styles.container}>
    <div className={styles.header}>Header</div>
    <div className={styles.page_body}>
      <div className={styles.company_notes}>Company Notes</div>
      <div className={styles.progress_tabs_wrapper}>
        <div className={styles.progress_tabs_header}>Progress Tabs Header</div>
        <div className={styles.progress_tabs}>
          <div className={styles.left_button}>Left Button</div>
          <div className={styles.tab1}>Tab 1</div>
          <div className={styles.tab2}>Tab 2</div>
          <div className={styles.tab3}>Tab 3</div>
          <div className={styles.right_button}>Right Button</div>
        </div>
      </div>
    </div>
  </div>
);

export default connect(mapStateToProps)(DetailsPage);
