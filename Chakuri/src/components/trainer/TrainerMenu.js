import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle,faTrash,faEdit,faUpload} from '@fortawesome/free-solid-svg-icons'

 class TrainerMenu extends Component {
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
                                <label class="text-primary text-left">Trainer </label>
                          </div>
                    </div>

                    <div class="row"  >
                      <div class="col-3">
                          <button type="button" class="text-center" class="btn btn-primary btn-circle btn-sm btn-center">Switch Role</button>
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
                    <a href='/PasswordChangeJobSeeker' class="dropdown-item text-white" >PASSWORD CHANGE</a>
                    <a class="dropdown-item text-white" href="#">PROJECT DETAILS</a>
                    <a class="dropdown-item text-white" href="/WorkExperienceJobSeeker">WORK EXPERIENCE</a>
                    <a class="dropdown-item text-white" href="#">YOUR PROFILE VIEWER</a>
                  
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
                   <a class="dropdown-item text-white" href="/SelfAssesment">SELF ASSESSMENT</a>
                   <a class="dropdown-item text-white " href="/ChakuriAssesment">CHAKURI ASSESSMENT</a>
                   <a class="dropdown-item text-white" href="/ExternalAssesment">EXTERNAL ASSESSMENT</a>
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
                <a class="dropdown-item text-white" href="#">CONSULT WITH EMPLOYER</a>
                <a class="dropdown-item text-white" href="#">CONSULT WITH RECRUITTER</a>
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
                <a class="dropdown-item text-white" href="#">RECOMMENDED TRAINING</a>
                <a class="dropdown-item text-white" href="/UserTraining">TRAINING HISTORY</a>
                <a class="dropdown-item text-white" href="#">TRAININD IN PROGRESS</a>
                <a class="dropdown-item text-white" href="#">TRAINING WISHLIST</a>
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
                <a class="dropdown-item text-white" href="/ResumeShortlisted">RESUME SHORTLISTED</a>
               <a class="dropdown-item text-white" href="/PlacementStatusJobSeeker">ROUND STATUS</a>
               <a class="dropdown-item text-white" href="/JobOfferedRejected">JOB OFFERED/REJECTED</a>
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
                <a href="#" class="dropdown-toggle text-dark" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span class="nav-label">MESSAGES</span> <span class="caret"></span></a>
                <div class="dropdown-menu  text-white bg-dark">
                <h6 class="dropdown-header text-white text-center text-sm">MESSAGES</h6>
                <a class="dropdown-item text-white" href="#">MESSAGES</a>
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
                <a class="dropdown-item text-white" href="#">NOTIFICATION</a>
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
export default TrainerMenu;
