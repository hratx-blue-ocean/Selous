// import fetch from 'node-fetch';

export default function goalsHandlerReducer(state = [], action) {
  const newGoals = [
    {
      goalName: 'Submit 5 applications/week',
      goalProgress: 2,
      goalTarget: 5,
    },
    {
      goalName: 'Conduct 3 phone screens/week',
      goalProgress: 2,
      goalTarget: 3,
    },
    {
      goalName: 'Complete 5 toy problems/week',
      goalProgress: 4,
      goalTarget: 5,
    },
    {
      goalName: 'Send 7 intro emails/week',
      goalProgress: 10,
      goalTarget: 7,
    },
  ];

  switch (action.type) {
    case 'GET_GOALS':
      return newGoals;
    case 'DECREMENT_GOAL':
      return state.map((currentGoal, index) => {
        if (index === action.id) {
          return { ...currentGoal, goalProgress: currentGoal.goalProgress - 1 };
        }
        return currentGoal;
      });
    case 'INCREMENT_GOAL':
      return state.map((currentGoal, index) => {
        if (index === action.id) {
          return { ...currentGoal, goalProgress: currentGoal.goalProgress + 1 };
        }
        return currentGoal;
      });
    default:
      return state;
  }
}
