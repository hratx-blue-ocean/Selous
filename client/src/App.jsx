import React from 'react';
// import Goals from './components/goals.jsx';
import DetailsPage from './components/DetailsPage/DetailsPage.jsx';
import Headerbar from './components/headerbar/Headerbar.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import Login from './components/Login/Login.jsx';
import JobPostingModal from './components/Modals/JobPostingModal/JobPostingModal.jsx';

export default function App() {
  return (
    <div>
      <Headerbar />
      <JobPostingModal />
    </div>
  );
}
