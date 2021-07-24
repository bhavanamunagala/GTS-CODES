import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import useState from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';
import Homepage from './pages/Homepage';
import store from './redux/store';
import EmployerNotificationPage  from './pages/recruiter/EmployerNotificationPage'
import PlacementStatusPage  from './pages/recruiter/PlacementStatusPage'
import RecommendedTrainingPage  from './pages/recruiter/RecommendedTrainingPage'
import RecruitmentAgreementPage  from './pages/recruiter/RecruitmentAgreementPage'
import TrainingInProgressPage  from './pages/recruiter/TrainingInProgressPage'
import SearchTrainingPage  from './pages/recruiter/SearchTrainingPage'
import SearchEmployerPage  from './pages/recruiter/SearchEmployerPage'
import PersonalDetailsPage  from './pages/recruiter/PersonalDetailsPage'
import UpdateProfilePage  from './pages/recruiter/UpdateProfilePage'
import JobseekerPlacementPage from './pages/recruiter/JobseekerPlacementPage';
import JobSeekerSearchPage from './pages/recruiter/JobSeekerSearchPage';
import CandidateAgreementPage  from './pages/recruiter/CandidateAgreementPage'


import AdminNotificationsPage  from './pages/recruiter/AdminNotificationsPage'

import JobSeekersMessagesPage  from './pages/recruiter/JobSeekersMessagesPage'

import EmployerMessagesPage  from './pages/recruiter/EmployerMessagesPage'







import PasswordChangePage from './pages/recruiter/PasswordChangePage';
import InterviewInProgressPage from './pages/recruiter/InterviewInProgressPage';
import JobSeekersRecruitedPage from './pages/recruiter/JobSeekersRecruitedPage';

import RecruiterProfilePage  from './pages/recruiter/RecruiterProfilePage'
import UpdateProject from './components/recruiter/UsersProject/GTSProjectUpdate'

import PlacementPopupPage  from './pages/recruiter/PlacementPopupPage'






import Message  from './frontend/pages/Message'


import ViewResume  from './pages/recruiter/ViewResume'

import View  from './pages/recruiter/View'

import CandidateAgreementHistoryPage from './pages/recruiter/CandidateAgreementHistoryPage';
import RecruitmentAgreementHistoryPage from './pages/recruiter/RecruitmentAgreementHistoryPage';

import TrainerNotificationPage from './pages/recruiter/TrainerNotificationPage';

import JobseekerNotificationPage from './pages/recruiter/JobseekerNotificationPage';


import Place from './pages/recruiter/Place';

import Demo from './pages/recruiter/Demo';


import Collapser from './pages/recruiter/Collapser';





function App() {
  return (
    <BrowserRouter>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/register">Regis</Link>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" component={Login} exact></Route>
        <Route path="/register" component={Register} exact></Route>
        <Route path="/dashboard" component={Dashboard} exact></Route>
      </Switch> */}
      <Provider store={store}>
        <Switch>
         <Route path="/" component={Homepage} exact></Route>
          <Route path="/login" component={Login} exact></Route>
          <Route path="/logout" component={Logout}></Route>
          <Route path="/register" component={Register}></Route>
          
   
        
 
          <Route path="/useState" component={useState}exact></Route>
        
          <Route path="/CandidateAgreementPage" component={CandidateAgreementPage} exact></Route>
          <Route path="/RecruitmentAgreementPage" component={RecruitmentAgreementPage} exact></Route>
         
          <Route path="/EmployerNotificationPage" component={EmployerNotificationPage} exact></Route>
          <Route path="/PlacementStatusPage" component={PlacementStatusPage} exact></Route>
          <Route path="/RecommendedTrainingPage" component={RecommendedTrainingPage} exact></Route>
           <Route path="/TrainingInProgressPage" component={TrainingInProgressPage} exact></Route>
          <Route path="/SearchTrainingPage" component={SearchTrainingPage} exact></Route>
          <Route path="/SearchEmployerPage" component={SearchEmployerPage} exact></Route>
          <Route path="/PersonalDetailsPage" component={PersonalDetailsPage} exact></Route>
          <Route path="/UpdateProfilePage" component={UpdateProfilePage} exact></Route>
          <Route path="/JobseekerPlacementPage" component={JobseekerPlacementPage} exact></Route>
          <Route path="/JobSeekerSearchPage" component={JobSeekerSearchPage} exact></Route>
            <Route path="/AdminNotificationsPage" component={AdminNotificationsPage} exact></Route>
           <Route path="/JobSeekersMessagesPage" component={JobSeekersMessagesPage} exact></Route>
          <Route path="/EmployerMessagesPage" component={EmployerMessagesPage} exact></Route>
   
          <Route path="/PlacementPopupPage" component={PlacementPopupPage} exact></Route>
   
          <Route path="/RecruiterProfile/UpdateProject/:id" component={UpdateProject} exact></Route>
   
     
   <Route path="/PasswordChangePage" component={PasswordChangePage} exact></Route>
          <Route path="/InterviewInProgressPage" component={InterviewInProgressPage} exact></Route>
          <Route path="/jobSeekersRecruitedPage" component={JobSeekersRecruitedPage} exact></Route>
             
          <Route path="/RecruiterProfilePage" component={RecruiterProfilePage} exact></Route>
   
     
          <Route path="/Message" component={Message} exact></Route>
   
          <Route path="/ViewResume" component={ViewResume} exact></Route>
   
        
          <Route path="/View" component={View} exact></Route>
   
        


          <Route path="/CandidateAgreementHistoryPage" component={CandidateAgreementHistoryPage} exact></Route>
   
          <Route path="/RecruitmentAgreementHistoryPage" component={RecruitmentAgreementHistoryPage} exact></Route>
   

          <Route path="/TrainerNotificationPage" component={TrainerNotificationPage} exact></Route>
   

          <Route path="/JobseekerNotificationPage" component={JobseekerNotificationPage} exact></Route>
   
          <Route path="/Place" component={Place} exact></Route>
   
          <Route path="/Demo" component={Demo} exact></Route>
   
          <Route path="/Collapser" component={Collapser} exact></Route>
   
   
          
          
          
          
          <Route
            path="/homepage"
            render={props => <Homepage {...props}></Homepage>}
          ></Route>
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
