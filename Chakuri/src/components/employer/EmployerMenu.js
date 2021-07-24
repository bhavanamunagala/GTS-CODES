import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faTrash,faEdit,faUpload} from '@fortawesome/free-solid-svg-icons'

class EmployerMenu extends Component {

render()
{

return(<div>

    {/* <Header /> */}
     <div className="container-fluid">
        <div class="row">    {/* MAIN    ROW*/}
       
      <div class="col border-right ">  {/*FRIST col START*/}
            <label> <big><FontAwesomeIcon icon={faUser}/></big></label>
    
          <div class="row">
                   <div class="col-3 pl-0 pr-0 ">
                      <label >Name:</label>
                    </div>
                   <div class="col-9  pr-0 "  >
                      <label class="text-primary"> Yaswanth</label>
                   </div>
            </div>
    
          <div class="row">
                 <div class="col  pl-0 pr-0">
                    <label>CurrentRole:</label>
                 </div>
                 <div class="col  pl-0 pr-0 ">
                      <label class="text-primary text-left">Employer </label>
                </div>
          </div>
    
          <div class="row"  >
            <div class="col-3">
                <button type="button" class="text-center" class="btn btn-primary btn-sm btn-center">Switch Mode</button>
          </div>
          </div>
    
    
    </div> {/* Frist col ends*/}
     
    
        
          <div class="col border-right ">
          <ul class="nav navbar-nav">
          <li class="dropdown ">
          <a href="#" class="dropdown-toggle"   data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span class="nav-label">PROFILE</span> <span class="caret"></span></a>
          <div class="dropdown-menu text-white bg-dark">
  
          <a class="dropdown-item text-white" href="/EmployerProfilePage">PROFILE MANAGEMENT </a>
          
          <a class="dropdown-item text-white" href="/PasswordChangeEmployerPage">PASSWORD CHANGE</a>
        
          </div>
          </li>
          </ul>
          </div>
    
      
      
      
         <div class="col border-right">
         <ul class="nav navbar-nav">
         <li class="dropdown">
         <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span class="nav-label">JOB</span> <span class="caret"></span></a>
         <div class="dropdown-menu  text-white bg-dark">
         <a class="dropdown-item text-white"href="/JobPostPage">POST A JOB</a>
         <a class="dropdown-item text-white" href="/JobPostActivityPage">JOB POST ACTIVITY</a>
         <a class="dropdown-item text-white" href="/SearchJobPage">SEARCH JOB</a>
         
        </div>
         </li>
         </ul>
         </div>
    
    
    
      <div class="col border-right">
      <ul class="nav navbar-nav">
      <li class="dropdown">
      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span class="nav-label">JOB SEEKER LOOK OUT</span> <span class="caret"></span></a>
      <div class="dropdown-menu  text-white bg-dark">
      <a class="dropdown-item text-white"href="/TopQualifiedJobSeekersPage">TOP QUALIFIED JOB SEEKERS</a>
      <a class="dropdown-item text-white" href="/SkillsEvaluationPage">SKILLS EVALUATION</a>
      <a class="dropdown-item text-white" href="/ChakuriSkillBase">CHAKURI SKILL BASE</a>
      <a class="dropdown-item text-white" href="/JobSeekerSearchPage">SEARCH JOB SEEKERS</a>
      
      </div>
      </li>
      </ul>
      </div>
    
    
      <div class="col border-right">
      <ul class="nav navbar-nav">
      <li class="dropdown">
      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span class="nav-label">EMPLOYMENT ACTIVITY </span> <span class="caret"></span></a>
      <div class="dropdown-menu  text-white bg-dark">
      <a class="dropdown-item text-white"href="/EmploymentAgreementPage">EMPLOYMENT AGREEMENT</a>
      <a class="dropdown-item text-white" href="/CurrentEmploymentPage">CURRENT EMPLOYMENT</a>
      <a class="dropdown-item text-white" href="/EmployerEmploymentHistoryPage">EMPLOYMENT HISTORY</a>
      <a class="dropdown-item text-white"href="/RecruitementContractPage">RECRUITMENT CONTRACT</a>
      <a class="dropdown-item text-white" href="/RecruitementContractHistoryPage">RECRUITMENT CONTRACT HISTORY</a>

      </div>
      </li>
       </ul>
      </div>
    
    
    
      
    
    
    </div>  {/* MAIN    ROW ENDS*/}
    </div>  {/* Container ENDS*/}
    
    
    <hr class =" border-darkw-100 mx-auto " />
    
    
    
    
    
    
    
    
    </div> ) //main end)
}}
export default EmployerMenu;