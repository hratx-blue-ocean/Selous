import React from 'react';
import DetailsPage from './components/DetailsPage/DetailsPage.jsx';
import Headerbar from './components/headerbar/Headerbar.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import Login from './components/Login/Login.jsx';
import AddJobModal from './components/Modals/AddJobModal/AddJobModal.jsx';
import AddGoalModal from './components/Modals/AddGoalModal/AddGoalModal.jsx';
import JobPostingModal from './components/Modals/JobPostingModal/JobPostingModal.jsx';

export default function App() {
  return (
    <div>
      {/* <Headerbar /> */}
      {/* <Goals /> */}
      {/* <DetailsPage /> */}
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <AddJobModal /> */}
      {/* <AddGoalModal /> */}
      <JobPostingModal />
    </div>
  );
}
