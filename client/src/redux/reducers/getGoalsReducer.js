// import fetch from 'node-fetch';

export default function getGoalsReducer(currentGoals = [], action) {
  const newGoals = [
    {
      id: 1,
      title: 'Submit 5 applications/week',
      progress: 2,
      goal: 5,
    },
    {
      id: 2,
      title: 'Conduct 3 phone screens/week',
      progress: 2,
      goal: 3,
    },
    {
      id: 3,
      title: 'Complete 5 toy problems/week',
      progress: 4,
      goal: 5,
    },
    {
      id: 4,
      title: 'Send 7 intro emails/week',
      progress: 10,
      goal: 7,
    },
  ];
  switch (action.type) {
    case 'GET_GOALS':
      // fetch('mongoAtlasURL')
      //   .then((res) => res.json())
      //   .then((result) => {
      //     newGoals = result.data;
      //   });
      return newGoals;
    default:
      return currentGoals;
  }
}
