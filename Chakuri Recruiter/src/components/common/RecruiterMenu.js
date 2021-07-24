import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faTrash,faEdit,faUpload} from '@fortawesome/free-solid-svg-icons'
import { Modal, ModalBody, ModalFooter, ModalHeader, Input } from 'reactstrap';
import {Dropdown} from 'react-bootstrap'
import{TextField} from '@material-ui/core'
import { Link } from 'react-router-dom';

 class RecruiterMenu extends Component {

    render() {
      
        return (
            <div>
                <div className="container-fluid">
                  <div class="row">    {/* MAIN    ROW*/}
                 
                <div class="col  border-dark  border-right border-bottom "
               >  {/*FRIST col START*/}
               

                      <label> <big><FontAwesomeIcon icon={faUser}/></big></label>

                    <div class="row">
                             <div class="col-3 pl-0 pr-0 ">
                                <label >Name:</label>
                              </div>
                             <div class="col-9  pr-0 "  >
                                <label class="text-primary"> Aditiya Mukund </label>
                             </div>
                      </div>

                    <div class="row">
                           <div class="col  pl-0 pr-0">
                              <label>CurrentRole:</label>
                           </div>
                           <div class="col  pl-0 pr-0 ">
                                <label class="text-primary text-left">Recruiter </label>
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
    <input id="trainer" type="radio"  name="radio" value="third"/><label for="Jobseeker"><Link to="/JobseekerSearchProfile" >Jobseeker</Link></label><br></br>
    <input id="recruiter" type="radio"  name="radio" value="fourth"/><label for="recruiter"><Link to="/RecruiterProfile" >Recruiter</Link></label> <br></br>
<input id="trainer" type="radio"  name="radio" value="fifth"/><label for="trainer"><Link to="/TrainerMenu" >Trainer</Link></label>
  </Dropdown.Menu>
</Dropdown>
                    </div>
                    </div>


             </div> {/* Frist col ends*/}
               

                  
                    <div class="col border-dark border-right border-bottom">
                   
                    <ul class="nav navbar-nav">
                    <li class="dropdown ">
                    <a href="#" class="dropdown-toggle"   data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span class="nav-label">MANAGE PROFILE </span> <span class="caret"></span> <span class="caret"></span></a>
                    <div class="dropdown-menu text-white bg-dark">
                  
                    
                    <a class="dropdown-item text-white" href="/UpdateProfilePage">RECRUITER PROFILE</a>
                    <a class="dropdown-item text-white" href="/PasswordChangePage">PASSWORD CHANGE</a>
                    
                    </div>
                    </li>
                    </ul>
                    </div>
                    

                
                
                
                   <div class="col border-dark border-right border-bottom">
                   <ul class="nav navbar-nav">
                   <li class="dropdown">
                   <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span class="nav-label">MANAGE EMPLOYER </span> <span class="caret"></span></a>
                   <div class="dropdown-menu  text-white bg-dark">
                   <a class="dropdown-item text-white " href="/SearchEmployerPage">EMPLOYER SEARCH</a>
          
              
                  </div>
                   </li>
                   </ul>
                   </div>



                <div class="col border-dark border-right border-bottom">
                <ul class="nav navbar-nav">
                <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span class="nav-label">MANAGE JOBSEEKERS </span> <span class="caret"></span></a>
                <div class="dropdown-menu  text-white bg-dark">
                <a class="dropdown-item text-white" href="/jobseekerPlacementPage">JOBSEEKER PLACEMENT</a>
                <a class="dropdown-item text-white" href="/JobSeekerSearchPage">SEARCH JOBSEEKER</a>
                <a class="dropdown-item text-white" href="/SearchTrainingPage">SKILL & TRAINING</a>
        <a class="dropdown-item text-white" href="/JobSeekersRecruitedPage">JOBSEEKERS RECRUITED</a>

                </div>
                </li>
                </ul>
                </div>
                <div class="col border-dark border-right border-bottom">
                   <ul class="nav navbar-nav">
                   <li class="dropdown">
                   <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span class="nav-label">MANAGE AGREEMENTS </span> <span class="caret"></span></a>
                   <div class="dropdown-menu  text-white bg-dark">
                 <a class="dropdown-item text-white" href="/RecruitmentAgreementPage">RECRUITEMENT AGREEMENT</a>
                 <a class="dropdown-item text-white" href="/RecruitmentAgreementHistoryPage">RECRUITEMENT AGREEMENT HISTORY</a>
                 
                   <a class="dropdown-item text-white" href="/CandidateAgreementPage">CANDIDATE AGREEMENT</a>
                   <a class="dropdown-item text-white" href="/CandidateAgreementHistoryPage">CANDIDATE AGREEMENT HISTORY</a>

                  </div>
                   </li>
                   </ul>
                   </div>


                <div class="col border-dark border-right border-bottom">
                <ul class="nav navbar-nav">
                <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span class="nav-label">MESSAGES </span> <span class="caret"></span></a>
                <div class="dropdown-menu  text-white bg-dark">
                <a class="dropdown-item text-white" href="/JobSeekersMessagesPage">MESSAGES JOBSEEKER</a>
                <a class="dropdown-item text-white" href="/EmployerMessagesPage">MESSAGES EMPLOYER</a>
                <a class="dropdown-item text-white" href="/AdminMessagesPage">MESSAGES ADMIN</a>
                <a class="dropdown-item text-white" href="/TrainerMessagesPage">MESSAGES TRAINER</a>

                </div>
                </li>
                 </ul>
                </div>



                <div class="col border-dark border-right border-bottom">
                <ul class="nav navbar-nav">
                <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span class="nav-label">NOTIFICATION </span> <span class="caret"></span></a>
                <div class="dropdown-menu  text-white bg-dark">
                <a class="dropdown-item text-white" href="/JobseekerNotificationPage">NOTIFICATIONS JOBSEEKER</a>
                <a class="dropdown-item text-white" href="/EmployerNotificationPage">NOTIFICATIONS EMPLOYER</a>
                <a class="dropdown-item text-white" href="/AdminNotificationsPage">NOTIFICATIONS ADMIN</a>
                <a class="dropdown-item text-white" href="/TrainerNotificationPage">NOTIFICATIONS TRAINER</a>
               
               </div>
               </li>
               </ul>
               </div>




            </div>  {/* MAIN    ROW ENDS*/}
          </div>  {/* Container ENDS*/}

            </div>
        )
    }
}
export default RecruiterMenu;