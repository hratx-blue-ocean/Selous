/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './ProgressTabs.css';

// Components
import ButtonLeft from './ButtonLeft/ButtonLeft.jsx';
import ButtonRight from './ButtonRight/ButtonRight.jsx';
import TabOne from './TabOne/TabOne.jsx';
import TabTwo from './TabTwo/TabTwo.jsx';
import TabThree from './TabThree/TabThree.jsx';

// Actions
import { setDisplayedTabs } from '../../../redux/actions/actions.js';

const ProgressTabs = ({
  companyTabsTEST,
  whatsNextTab,
  displayedTabs,
  dispatch,
}) => {
  useEffect(() => {
    if (companyTabsTEST) {
      dispatch(setDisplayedTabs([...companyTabsTEST.slice(-2), whatsNextTab]));
    }
  }, [companyTabsTEST]);

  return (
    <div className={styles.progress_tabs_wrapper}>

      <div className={styles.progress_tabs_header}>
        <h1>PLACEHOLDER</h1>
      </div>

      <div className={styles.progress_tabs}>
        <ButtonLeft />
        <TabOne tab={displayedTabs[0]} />
        <TabTwo tab={displayedTabs[1]} />
        <TabThree tab={displayedTabs[2]} />
        <ButtonRight />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  companyTabsTEST: state.companyTabsTEST,
  whatsNextTab: state.whatsNextTab,
  displayedTabs: state.displayedTabs,
});

export default connect(mapStateToProps)(ProgressTabs);
