import React, { Component } from 'react'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css'
import { Form,FormControl,FormLabel,FormRow, Button, FormCheck} from 'react-bootstrap';


import {Modal} from 'react-bootstrap';
import CandidateAgreementModal from './CandidateAgreementModal';


 class CandidateAgreementHistoryComponent extends Component {
     
     constructor(props) {
         super(props);
       this.state = {
         addModalShow: false,
         candidateagreementhistoryShow : false,
         candidateagreementhistory : []
       };
 
  }
  togglePopup() {
    this.setState({
      addModalShow: !this.state.addModalShow
    });

  };
  candidateagreementhistoryHandler = () => {
   const doesShow = this.state.candidateagreementhistoryShow;
   this.setState({candidateagreementhistoryShow: !doesShow});
 
 }
 
 replaceModalItem(index) {
   this.setState({
     requiredItem: index,
     addModalShow: true
   });
 }
 saveModalDetails(item) {
   const requiredItem = this.state.requiredItem;
   let tempbrochure = this.state.candidateagreementhistory;
   tempbrochure[requiredItem] = item;
   this.setState({ candidateagreementhistory: tempbrochure });
 }
 
  
  componentDidMount(){
    axios.get('http://localhost:1202/candidate_agreement_history ')
    .then(response => {
         console.log(response)
         this.setState({candidateagreementhistory: response.data})
    })
    
  }
     render() {
     
         return(
             <div class="container">
              <br></br>
              <ul>
       <li><h5>CANDIDATE AGREEMENT |  <label class="text-primary"> 
       CANDIDATE AGREEEMENT HISTORY </label></h5>
       </li>
       </ul>
       <br></br>
       
             
               <table class="table table-bordered table-wrapper-scroll-y my-custom-scrollbar">
     
         
                    {this.state.candidateagreementhistory.map((agreementhistory, i) => (
                       
       
                        <div className="container">
                    
         <thead>
    <tr>
      <th  rowspan="2" style={{fontWeight:"Bold"}}scope="col">Sr.No.</th>
      <th colSpan="3"style={{fontWeight:"Bold"}} scope="col">Recruiter Name</th>
      <th style={{fontWeight:"Bold"}}scope="col">Employer Name</th>
      <th style={{fontWeight:"Bold"}} scope="col">Employer Company Name</th>
      <th  style={{fontWeight:"Bold"}}scope="col">Employer Company Location</th>
      <th style={{fontWeight:"Bold"}}scope="col">Jobseeker Name</th>
      <th style={{fontWeight:"Bold"}} scope="col">Project Manager</th>
      <th style={{fontWeight:"Bold"}}scope="col">Client Company Name</th>
      <th style={{fontWeight:"Bold"}}scope="col">Client Company Location</th>
      <th style={{fontWeight:"Bold"}}scope="col">Job Titile</th>
      <th style={{fontWeight:"Bold"}}scope="col">Date</th>
      <th style={{fontWeight:"Bold"}}scope="col">No of months</th>
      <th style={{fontWeight:"Bold"}}scope="col">Select Currency</th>
      <th style={{fontWeight:"Bold"}}scope="col">Jobseeker Email</th>
      <th style={{fontWeight:"Bold"}}scope="col">Employer Email</th>
      <th style={{fontWeight:"Bold"}}scope="col">Project Manager Email</th>
      <th style={{fontWeight:"Bold"}} scope="col">Jobseeker Contact Number</th>
      <th style={{fontWeight:"Bold"}}scope="col">Employer Contact Number</th>
      <th style={{fontWeight:"Bold"}}scope="col">Project Manager Contact Number</th>
      <th style={{fontWeight:"Bold"}}scope="col">View/Edit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th style={{fontWeight:"Bold"}}rowspan="2"scope="col">{agreementhistory.user_id}</th>
      <td style={{fontWeight:"Bold"}}colSpan="3" scope="col" class="text-danger">{agreementhistory.recruiter_name}</td>
      <td style={{fontWeight:"Bold"}}class="text-danger">{agreementhistory.employer_name}</td>
      <td style={{fontWeight:"Bold"}} class="text-danger">{agreementhistory.employer_company_name}</td>
      <td style={{fontWeight:"Bold"}}class="text-danger">{agreementhistory.employer_company_location}</td>
      <td style={{fontWeight:"Bold"}}class="text-danger">{agreementhistory.jobseeker_name}</td>
      <td style={{fontWeight:"Bold"}}class="text-danger">{agreementhistory.project_manager}</td>
      <td style={{fontWeight:"Bold"}}class="text-danger">{agreementhistory.client_company_name}</td>
      <td style={{fontWeight:"Bold"}} class="text-danger">{agreementhistory.client_company_location}</td>
      <td style={{fontWeight:"Bold"}}class="text-danger">{agreementhistory.job_title}</td>
      <td style={{fontWeight:"Bold"}}class="text-danger">{agreementhistory.date}</td>
      <td style={{fontWeight:"Bold"}}class="text-danger">{agreementhistory.no_of_months}</td>
      <td style={{fontWeight:"Bold"}}class="text-danger">{agreementhistory.select_currency}</td>
      <td style={{fontWeight:"Bold"}} class="text-danger">{agreementhistory.jobseeker_email}</td>
      <td style={{fontWeight:"Bold"}}class="text-danger">{agreementhistory.employer_email}</td>
      <td style={{fontWeight:"Bold"}}class="text-danger">{agreementhistory.project_manager_email}</td>
      <td style={{fontWeight:"Bold"}}class="text-danger">{agreementhistory.jobseeker_contact_number}</td>
      <td style={{fontWeight:"Bold"}}class="text-danger">{agreementhistory.employer_contact_number}</td>
      <td style={{fontWeight:"Bold"}}class="text-danger">{agreementhistory.project_manager_contact_number}</td>
  
   
          <td>
         
                <div class="col-3">
      
      <CandidateAgreementModal/>
                    
    
      </div>
          
           </td>
    </tr>
 

      


   
  </tbody>
  <br></br>
     <br></br>
</div>

      ))
    }
    
    </table>
                  </div>
                   
                  
                            

             
         )
     }
 }
  

 export default CandidateAgreementHistoryComponent;
