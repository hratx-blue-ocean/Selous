import React from 'react';
import { connect } from 'react-redux';
import styles from './ButtonLeft.css';
import { moveLeftDisplayedTabs } from '../../../../redux/actions/actions.js';

const ButtonLeft = ({
  companyTabsTEST,
  displayedTabs,
  tabColors,
  dispatch,
}) => {
  const handleOnClick = () => {
    if (JSON.stringify(displayedTabs[0]) !== JSON.stringify(companyTabsTEST[0])) {
      for (let i = 1, len = companyTabsTEST.length; i < len; i += 1) {
        if (JSON.stringify(displayedTabs[0]) === JSON.stringify(companyTabsTEST[i])) {
          const tab = companyTabsTEST[i - 1];
          tab.color = tabColors[companyTabsTEST.indexOf(tab)];
          dispatch(moveLeftDisplayedTabs(tab));
        }
      }
    }
  };

  return (
    <div className={styles.left_button}>
      <button type="button" className={styles.button} onClick={handleOnClick}>{}</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  companyTabsTEST: state.companyTabsTEST,
  whatsNextTab: state.whatsNextTab,
  displayedTabs: state.displayedTabs,
  tabColors: state.tabColors,
});

export default connect(mapStateToProps)(ButtonLeft);
