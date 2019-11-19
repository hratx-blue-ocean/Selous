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
      <button type="button" className={styles.button} onClick={handleOnClick}>
        <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.7636 16.9436L16.1167 16.5904L15.7639 16.2368L11.5363 12L15.7639 7.76317L16.1167 7.40961L15.7636 7.05645L14.3536 5.64645L14 5.29289L13.6464 5.64645L7.64645 11.6464L7.29289 12L7.64645 12.3536L13.6464 18.3536L14 18.7071L14.3536 18.3536L15.7636 16.9436Z" fill="#F2F2F2" stroke="black" />
        </svg>
      </button>
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
