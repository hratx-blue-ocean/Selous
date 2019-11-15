import React from 'react';
import Goal from './goal.jsx';

const Goals = props => {
  render() {
    return (
      <div className='goals-container'>
        <div className='goals-header'>
          <h3 className='goal-title'>Goals</h3>
        </div>
        <hr></hr>
        <div className='goals-body'>
          {
            props.currentGoals.map(currentGoal => {
              <Goal currentGoal={currentGoal} />
            })
          }
        </div>
        <button 
          className='goals-button'
          // onClick={dispatchEvent()}
        />
      </div>
    );
  }
};

export default Goals;