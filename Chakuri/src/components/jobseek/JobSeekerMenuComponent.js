import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle,faTrash,faEdit,faUpload} from '@fortawesome/free-solid-svg-icons'
import {Dropdown} from 'react-bootstrap'
import{TextField} from '@material-ui/core'
import { Link } from 'react-router-dom';
 class JobSeekerMenu extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                  <div class="row">                    
                <div class="col border-right border-dark ">
                    
                      <label><FontAwesomeIcon size="lg" icon={faUserCircle}/></label>

                    <div class="row">
                             <div class="col-3 pl-0 pr-0 ">
                                <label >Name:</label>
                              </div>
                             <div class="col-9  pr-0 "  >
                                <label class="text-primary"> Aditiya Mukund </label>
                             </div>
                      </div>


                    <div class="row">
                           <div class="col  pl-0 pr-0 ">
                              <label>CurrentRole:</label>
                           </div>
                           <div class="col  pl-1 ">
                                <label class="text-primary text-left">JobSeeker </label>
                          </div>
                    </div>
                    <div class="row"  >
                      <div class="col-3">
                      <Dropdown>
  <Dropdown.Toggle variant="primary" id="dropdown-basic">
    Switch Role
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <input id="Admin" type="radio"  name="radio" value="first"/><label for="admin"><Link to="/AdminMenu" >Admin</Link></label> <br></br>
    <input id="employer" type="radio"  name="radio" value="second"/><label for="employer"><Link to="/EmployerProfilePage" >Employer</Link></label> <br></br>
    <input id="JobSeeker" type="radio"  name="radio" value="third"/><label for="Jobseeker"><Link to="/JobseekerProfile" >Jobseeker</Link></label><br></br>
    <input id="recruiter" type="radio"  name="radio" value="fourth"/><label for="recruiter"><Link to="/RecruiterProfile" >Recruiter</Link></label> <br></br>
<input id="trainer" type="radio"  name="radio" value="fifth"/><label for="trainer"><Link to="/TrainerMenu" >Trainer</Link></label>
  </Dropdown.Menu>
</Dropdown>
                    </div>
                    </div>


             </div> 
               

                  
                    <div class="col border-right border-dark border-sm text-center">
                    <ul class="nav navbar-nav">
                    <li class="dropdown ">
                    <a href="#" class="dropdown-toggle text-dark center"   data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span class="nav-label">PROFILE</span> <span class="caret"></span></a>
                    <div class="dropdown-menu text-white bg-dark">
                  
                    <h6 class="dropdown-header text-white text-center text-sm">PROFILE  </h6>
                    <a class="dropdown-item text-white" href="/JobseekerProfile">UPDATE PROFILE</a>
                    <a class="dropdown-item text-white" href="/PasswordChangeJobSeeker">PASSWORD CHANGE</a>
                    <a class="dropdown-item text-white" href="/JobSeekerProjectDetails">PROJECT DETAILS</a>
                    <a class="dropdown-item text-white" href="/WorkExperienceJobSeeker">WORK EXPERIENCE</a>
                    <a class="dropdown-item text-white" href="/JobSeekerProfileViewer">YOUR PROFILE VIEWER</a>
                  
                    </div>
                    </li>
                    </ul>
                    </div>

                
                
                
                   <div class="col border-right border-dark text-center">
                   <ul class="nav navbar-nav">
                   <li class="dropdown">
                   <a href="#" class="dropdown-toggle text-dark" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span class="nav-label">SKILLS</span> <span class="caret"></span></a>
                   <div class="dropdown-menu  text-white bg-dark">
                   <h6 class="dropdown-header text-white text-center text-sm">SKILLS</h6>
                   <a class="dropdown-item text-white" href="/SelfAssessmentJobSeeker">SELF ASSESSMENT</a>
                   <a class="dropdown-item text-white " href="/JobSeekerChakuriAssessment">CHAKURI ASSESSMENT</a>
                   <a class="dropdown-item text-white" href="/JobSeekerExternalAssessment">EXTERNAL ASSESSMENT</a>
                  </div>
                   </li>
                   </ul>
                   </div>


                <div class="col pr-2 border-right border-dark text-center">
                <ul class="nav navbar-nav">
                <li class="dropdown">
                <a href="#" class="dropdown-toggle text-dark" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span class="nav-label">JOB</span> <span class="caret"></span></a>
                <div class="dropdown-menu  text-white bg-dark">
                <h6 class="dropdown-header text-white text-center text-sm">JOB</h6>
                <a class="dropdown-item text-white" href="/RecommendedJobs">RECOMMENDED JOBS</a>
                <a class="dropdown-item text-white" href="/ApplySavedJobs">APPLIED SAVED JOBS</a>
                <a class="dropdown-item text-white" href="/ConsultationJobSeeker">CONSULTATION</a>
                </div>
                </li>
                </ul>
                </div>


                <div class="col border-right border-dark text-center" >
                <ul class="nav navbar-nav ">
                <li class="dropdown">
                <a href="#" class="dropdown-toggle text-dark" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span class="nav-label">TRAININGS </span> <span class="caret"></span></a>
                <div class="dropdown-menu  text-white bg-dark">
                <h6 class="dropdown-header text-white text-center text-sm">TRAININGS</h6>
                <a class="dropdown-item text-white" href="/RecommendedTraining">RECOMMENDED TRAINING</a>
                <a class="dropdown-item text-white" href="/TrainingHistory">TRAINING HISTORY</a>
                <a class="dropdown-item text-white" href="/TrainingInProgress">TRAINING IN PROGRESS</a>
                <a class="dropdown-item text-white" href="/TrainingWishlist">TRAINING WISHLIST</a>
                </div>
                </li>
                 </ul>
                </div>



                <div class="col border-right  border-dark text-center">
                <ul class="nav navbar-nav">
                <li class="dropdown">
                <a href="#" class="dropdown-toggle text-dark" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span class="nav-label">PLACEMENT</span> <span class="caret"></span></a>
                <div class="dropdown-menu  text-white bg-dark">
                <h6 class="dropdown-header text-white text-center text-sm">PLACEMENT</h6>
                <a class="dropdown-item text-white" href="/ResumeReviewed">RESUME REVIEWED</a>
               <a class="dropdown-item text-white" href="/PlacementStatusJobSeeker">PLACEMENT STATUS</a>
               <a class="dropdown-item text-white" href="/JobOfferedRejected">JOB OFFERED/REJECTED</a>
               <a class="dropdown-item text-white" href="/JobOfferS">JOB OFFERS</a>

               </div>
               </li>
               </ul>
               </div>

               <div class="col border-right  border-dark text-center">
                <ul class="nav navbar-nav">
                <li class="dropdown">
                <a href="#" class="dropdown-toggle text-dark" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span class="nav-label">PAYMENT</span> <span class="caret"></span></a>
                <div class="dropdown-menu  text-white bg-dark">
                <h6 class="dropdown-header text-white text-center text-sm ">PAYMENT</h6>
                <a class="dropdown-item text-white" href="#">MAKE PAYMENT</a>
                <a class="dropdown-item text-white" href="#">PAYMENT HISTORY</a>
               <a class="dropdown-item text-white" href="#">PAYMENT ISSUES</a>
               </div>
               </li>
               </ul>
               </div>


               <div class="col border-right  border-dark text-center">
                <ul class="nav navbar-nav">
                <li class="dropdown">
                <a href="#" class="dropdown-toggle text-dark" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span class="nav-label">NOTIFICATION</span> <span class="caret"></span></a>
                <div class="dropdown-menu  text-white bg-dark">
                <h6 class="dropdown-header text-white text-center text-sm">NOTIFICATION</h6>
                <a class="dropdown-item text-white" href="/JobseekerNotificationPage">NOTIFICATION</a>
               </div>
               </li>
               </ul>
               </div>

            </div>  
        </div>

            </div>
        )
    }
}
export default JobSeekerMenu;
