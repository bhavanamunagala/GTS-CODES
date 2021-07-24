import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import useState from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './pages/common/Login';
import Register from './pages/common/Register';

import Footer1 from './components/Footer';
import GlobalHomePage from './components/GlobalHomePage';
import Logout from './pages/common/Logout';

import store from './redux/store';
import AddEducation from './components/common/EducationDetails/AddEducation';
import EmployerAgreement from './components/recruiter/EmployerAgreementComponent';
import EmployerContract from './components/recruiter/RenegotiateContractComponent';
import RecruiterMenu from './components/recruiter/RecruiterMenuComponent';
import JobseekerPlacement from './components/recruiter/AppliedJobseekerComponent';
import RecruitementContractHistoryPage from './pages/employer/RecruitementContractHistoryPage'
import JobseekerNotification from './components/recruiter/JobseekerNotificationComponent';
import Messages from './components/recruiter/MessagesComponent';
import EmployerSearch from './components/recruiter/EmployerSearchComponent';
import GTSFieldOfRecruitment from './components/recruiter/GTSFieldOfRecruitmentComponent';
import JobSeekerSearchComponent from './components/recruiter/JobSeekerSearchComponent';
import UpdateEducation from './components/common/EducationDetails/UpdateEducation';
import EducationData from './components/common/EducationDetails/EducationData';
//import Project from './components/Project';
import Project from '../src/components/common/Project/Project'
import Language from './components/common/Language';
import EmployerEmploymentHistoryPage from './pages/employer/EmployerEmploymentHistoryPage';
import ProjectDetails from  './components/admin/EmpRegComponents/ProjectDetails';
import WorkExperience from './pages/common/WorkExperience';
import StarRating from './components/common/StarRating';
import ChakuriSkillBase from './pages/employer/ChakuriSkillBase';
import ContactUs from  '../src/components/common/ContactUs';
import PlacementStatus from './pages/employer/PlacementStatus';
import JobPostActivityPage from'./pages/employer/JobPostActivityPage';
import JobPostPage from'./pages/employer/JobPostPage'

import ConsultationJobSeeker from './pages/jobseeker/ConsultationJobSeekerPage';
import ApplySavedJobs from './pages/jobseeker/ApplySavedJobsPage';
import SelfAssessmentJobSeeker from './pages/jobseeker/SelfAssessmentJobSeekerPage';
import JobSeekerChakuriAssessment from './pages/jobseeker/JobSeekerChakuriAssessmentPage';
import JobSeekerProjectDetails from './pages/jobseeker/JobSeekerProjectDetailsPage';
import PasswordChangeJobSeeker from  './pages/jobseeker/PasswordChangeJobSeekerPage';
import WorkExperienceJobSeeker from  './pages/jobseeker/WorkExperienceJobSeekerPage';
import RecommendedJobs from  './pages/jobseeker/RecommendedJobsPage';
import TrainingHistory from  './pages/jobseeker/TrainingHistoryPage';
import JobOfferedRejected from './pages/jobseeker/JobOfferedRejectedPage';
import PlacementStatusJobSeeker from './pages/jobseeker/PlacementStatusJobSeekerPage';
import ResumeReviewed from './pages/jobseeker/ResumeReviewedPage';
import ResumeShortlisted from './pages/jobseeker/ResumeShortlistedPage';
import JobseekerProfile from './pages/jobseeker/JobseekerProfilePage';
import Salary from './components/jobseek/SalaryComponent';
import JobSeekerHeadLine from './components/jobseek/JobSeekerHeadLineComponent';
import SearchJobPage from './pages/employer/SearchJobPage';
import JobSeekerSearchPage from './pages/employer/JobSeekerSearchPage';
import AdminProfile from './pages/admin/AdminProfile';
import RecruiterProfile from './pages/recruiter/RecruiterProfilePage';
import JobSeekerProfileViewer from './pages/jobseeker/JobSeekerProfileViewerPage';
import JobSeekerExternalAssessment from './pages/jobseeker/JobSeekerExternalAssessmentPage';
import TrainingWishlistComponent from './pages/jobseeker/TrainingWishlistPage';

import TrainerProfile from './pages/trainer/TrainerProfile'

import PrimarySkillsComponent from'./components/employer/PrimarySkillsComponent'
import RenegotiateContractPage from  './pages/recruiter/RenegotiateContractPage';
import RecruitementContractPage from './pages/employer/RecruitmentContractPage'
import NotificationJobseekerPage from  './pages/recruiter/NotificationJobseekerPage';
import PasswordChangeRecruiter from  './components/recruiter/PasswordChangeRecruiterComponent';

import PasswordChangeRecruiterComponent from  './components/recruiter/PasswordChangeRecruiterComponent';
import PasswordChangeEmployerPage from './pages/employer/PasswordChangeEmployerPage'
import EmploymentAgreementPage from './pages/employer/EmploymentAgreementPage';
import CurrentEmploymentPage from './pages/employer/CurrentEmploymentPage';
import TopQualifiedJobSeekersPage from './pages/employer/TopQualifiedJobSeekersPage'
import SkillsEvaluationPage from './pages/employer/SkillsEvaluationPage';
import EmployerProfilePage from './pages/employer/EmployerProfilePage'
import JobseekerSearchPage from './pages/recruiter/JobseekerSearchPage';
import AppliedJobseekerPage from './pages/recruiter/AppliedJobseekerPage';
import MessagePage from './pages/recruiter/MessagePage';
import PasswordChangeRecruiterPage from './pages/recruiter/PasswordChangeRecruiterPage';
import RecruitementAgreementPage from './pages/recruiter/RecruitementAgreementPage';
import GTSProjectUpdate from './components/recruiter/UsersProject/GTSProjectUpdate'


 {/*import Profile from './pages/recruiter/Project/CreateRetrivePage';
import GTSProjectUpdate from './pages/recruiter/Project/GTSProjectUpdate';
*/}
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
        <Route path="/AdminProfile" component={AdminProfile}exact></Route>
        <Route path="/TopQualifiedJobSeekersPage" component={TopQualifiedJobSeekersPage} exact></Route>
        <Route path="/EmployerProfilePage" component={EmployerProfilePage} exact></Route>
          <Route path="/" component={GlobalHomePage} exact></Route>
          <Route path="/login" component={Login} exact></Route>
          <Route path="/logout" component={Logout}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/AppliedJobseekerPage" component={AppliedJobseekerPage}exact></Route>
          <Route path="/JobSeekerChakuriAssessment" component={JobSeekerChakuriAssessment}exact></Route>
          <Route path="/StarRating" component={StarRating}exact></Route>
          <Route path="/useState" component={useState}exact></Route>
          <Route path="/RecruiterMenu" component={RecruiterMenu}exact></Route>
          <Route path="/Footer1" component={Footer1} exact></Route>
          <Route path="/JobSeekerSearchPage" component={JobSeekerSearchPage} exact></Route>
          <Route path="/MessagePage" component={MessagePage}exact></Route>
          <Route path="/RecommendedJobs" component={RecommendedJobs}exact></Route>
          <Route path="/PasswordChangeRecruiterPage" component={PasswordChangeRecruiterPage} exact></Route>
          <Route path="/PasswordChangeRecruiterComponent" component={PasswordChangeRecruiterComponent} exact></Route>
          
          <Route path="/ConsultationJobSeeker" component={ConsultationJobSeeker} exact></Route>
          <Route path="/ApplySavedJobs" component={ApplySavedJobs} exact></Route>
          <Route path="/EmployerEmploymentHistoryPage" component={EmployerEmploymentHistoryPage}exact></Route>
          <Route path="/Salary" component={Salary} exact></Route>
          <Route path="/JobSeekerHeadLine" component={JobSeekerHeadLine} exact></Route>
          <Route path="/RenegotiateContractPage" component={RenegotiateContractPage}exact></Route>
          <Route path="/JobseekerPlacement" component={JobseekerPlacement}exact></Route>
          <Route path="/EmployerContract" component={EmployerContract}exact></Route>
          <Route path="/EmployerAgreement" component={EmployerAgreement}exact></Route>
          <Route path="/JobseekerNotification" component={JobseekerNotification}exact></Route>
          <Route path="/NotificationJobseekerPage" component={NotificationJobseekerPage}exact></Route>
          <Route path="/Messages" component={Messages}exact></Route>
          <Route path="/EmployerSearch" component={EmployerSearch}exact></Route>
          <Route path="/RecruiterProfile/UpdateProject/:id" component={GTSProjectUpdate} exact ></Route>
          <Route path="/RecruiterProfile" component={RecruiterProfile}exact></Route>
          <Route path="/TrainerProfile" component={TrainerProfile}exact></Route>
  
          <Route path="/Project" component={Project}exact></Route>
          <Route exact path="/Add" component={AddEducation}/>
          <Route exact path="/Edit/:id" component={UpdateEducation}/>
							<Route exact path="/List" component={EducationData}/>
          <Route path="/PasswordChangeJobSeeker" component={PasswordChangeJobSeeker}exact></Route>
          
          <Route path="/ProjectDetails" component={ProjectDetails}exact></Route>
          <Route path="/RecruitementContractHistoryPage" component={RecruitementContractHistoryPage}exact></Route>
          <Route path="/WorkExperience" component={WorkExperience}exact></Route>
         
          <Route path="/ResumeReviewed" component={ResumeReviewed}exact></Route>
          <Route path="/ResumeShortlisted" component={ResumeShortlisted}exact></Route>
          <Route path="/PlacementStatusJobSeeker" component={PlacementStatusJobSeeker}exact></Route>
         
         
          <Route path="/JobOfferedRejected" component={JobOfferedRejected}exact></Route>
          
          <Route path="/ChakuriSkillBase" component={ChakuriSkillBase}exact></Route>
          <Route path="/PrimarySkillsComponent" component={PrimarySkillsComponent}exact></Route>
          <Route path="/ContactUs" component={ContactUs}exact></Route>
          <Route path="/SkillsEvaluationPage" component={SkillsEvaluationPage}exact></Route>
          <Route path="/TrainingHistory" component={TrainingHistory} exact></Route>

          <Route path="/JobSeekerProfileViewer" component={JobSeekerProfileViewer} exact></Route>
          
          
          <Route path="/SearchJobPage" component={SearchJobPage}exact></Route>
          <Route path="/Language" component={Language}exact></Route>
          <Route path="/RecruitementContractPage" component={RecruitementContractPage}exact></Route>
         <Route path="/WorkExperienceJobSeeker" component={WorkExperienceJobSeeker}exact></Route>
              
          <Route path="/EmploymentAgreementPage" component={EmploymentAgreementPage}exact></Route>
          
          <Route path="/JobSeekerSearchComponent" component={JobSeekerSearchComponent} exact></Route>
          <Route path="/GTSFieldOfRecruitment" component={GTSFieldOfRecruitment} exact></Route>

          <Route path="/JobPostActivityPage" component={JobPostActivityPage} exact></Route>
          <Route path="/JobPostPage" component={JobPostPage} exact></Route>
          <Route path="/PasswordChangeEmployerPage" component={PasswordChangeEmployerPage} exact></Route>
          
          <Route path="/CurrentEmploymentPage" component={CurrentEmploymentPage} exact></Route>
          <Route path="/PlacementStatus" exact component={PlacementStatus} ></Route>
          <Route Path="/JobseekerProfile" component={JobseekerProfile} exact></Route>
          <Route path="/JobSeekerProjectDetails" component={JobSeekerProjectDetails} exact></Route>
          <Route path="/SelfAssessmentJobSeeker" component={SelfAssessmentJobSeeker} exact></Route>      
          <Route path="/JobSeekerExternalAssessment" component={JobSeekerExternalAssessment}exact></Route>
          <Route path="/JobseekerSearchPage" component={JobseekerSearchPage}exact></Route>
          <Route path="/TrainingWishlistComponent" component={TrainingWishlistComponent}exact></Route>
          <Route path="/RecruitementAgreementPage" component={RecruitementAgreementPage}exact></Route>
        
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
