import React from 'react';
import { connect } from 'react-redux';
import styles from './ButtonLeft.css';
import { moveLeftDisplayedTabs } from '../../../../redux/actions/actions.js';


const ButtonLeft = ({
  companyTabsTEST,
  displayedTabs,
  dispatch,
}) => {
  const handleOnClick = () => {
    if (JSON.stringify(displayedTabs[0]) !== JSON.stringify(companyTabsTEST[0])) {
      for (let i = 1, len = companyTabsTEST.length; i < len; i += 1) {
        if (JSON.stringify(displayedTabs[0]) === JSON.stringify(companyTabsTEST[i])) {
          dispatch(moveLeftDisplayedTabs(companyTabsTEST[i - 1]));
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
});

export default connect(mapStateToProps)(ButtonLeft);
