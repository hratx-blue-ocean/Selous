import React from 'react';
import { connect } from 'react-redux';
import styles from './DetailsPage.css';
import CompanyNotes from './CompanyNotes/CompanyNotes.jsx';

const mapStateToProps = (state) => ({ toggle: state.toggle });

const DetailsPage = () => (
  <div className={styles.container}>
    <div className={styles.page_body}>

      <CompanyNotes />

      <div className={styles.progress_tabs_wrapper}>

        <div className={styles.progress_tabs_header}>
          <h1>Your progress with Amazon</h1>
        </div>

        <div className={styles.progress_tabs}>

          <div className={styles.left_button}>
            <div className={styles.button} />
          </div>

          <div className={styles.tab_wrapper_one}>

            <div className={styles.tab}>
              <div className={styles.tab_header}>Title</div>
              <div className={styles.tab_body}>Body</div>
              <div className={styles.tab_edit}>
                <div className={styles.edit}>Edit</div>
              </div>
            </div>
            <div className={styles.check} />
          </div>

          <div className={styles.tab_wrapper_two}>

            <div className={styles.tab}>
              <div className={styles.tab_header}>Title</div>
              <div className={styles.tab_body}>Body</div>
              <div className={styles.tab_edit}>
                <div className={styles.edit}>Edit</div>
              </div>
            </div>
            <div className={styles.check} />

          </div>

          <div className={styles.tab_wrapper_three}>

            <div className={styles.tab}>
              <div className={styles.tab_header} />
              <div className={styles.tab_body}>Whats next?</div>
              <div className={styles.tab_edit}>
                <div className={styles.edit}>Next Step</div>
              </div>
            </div>
          </div>

          <div className={styles.right_button}>
            <div className={styles.button} />
          </div>

        </div>
      </div>
    </div>
  </div>
);

export default connect(mapStateToProps)(DetailsPage);
