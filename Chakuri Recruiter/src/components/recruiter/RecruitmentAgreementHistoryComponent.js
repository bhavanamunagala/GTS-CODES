import React, { Component } from 'react'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css'
import RecruitmentAgreementModal from './RecruitmentAgreementModal';
import { Form,FormControl,FormLabel,FormRow, Button, FormCheck} from 'react-bootstrap';


import {Modal} from 'react-bootstrap';


 class RecruitmentAgreementHistoryComponent extends Component {
     
     constructor(props) {
         super(props);
       this.state = {
         addModalShow: false,
         recruitmentagreementhistory : []
       };
 
  }
   
  componentDidMount(){
    axios.get('http://localhost:1202/recruitment_agreement_history')
    .then(response => {
         console.log(response)
         this.setState({recruitmentagreementhistory: response.data})
    })
    
  }
     render() {
       let addModalClose =() => this.setState({addModalShow: false});
         return(
             <div class="container">
              <br></br>
              <ul>
       <li><h5>RECRUITMENT AGREEMENT |  <label class="text-primary"> 
       RECRUITMENT AGREEEMENT HISTORY </label></h5>
       </li>
       </ul>
       <br></br>
       
             
               <table class="table table-bordered table-wrapper-scroll-y my-custom-scrollbar">
     
         
                    {this.state.recruitmentagreementhistory.map((agreementhistory, i) => (
                       
       
                        <div className="container">
                    
         <thead>
    <tr>
      <th style={{fontWeight:"Bold"}} rowspan="2"scope="col">Sr.No.</th>
      <th style={{fontWeight:"Bold"}}colSpan="3" scope="col">Recruiter Name</th>
      <th  style={{fontWeight:"Bold"}}scope="col">Employer Name</th>
      <th style={{fontWeight:"Bold"}}scope="col">Employer Company Name</th>
      <th style={{fontWeight:"Bold"}}scope="col">Employer Company Location</th>
      <th style={{fontWeight:"Bold"}}scope="col">Date</th>
      <th style={{fontWeight:"Bold"}}scope="col">No of months</th>
      <th style={{fontWeight:"Bold"}} scope="col">Select Currency</th>
      <th style={{fontWeight:"Bold"}}scope="col">Contact Details</th>
      <th style={{fontWeight:"Bold"}}scope="col">Employer Email</th>
      <th style={{fontWeight:"Bold"}}scope="col">Employer Contact Number</th>
      <th style={{fontWeight:"Bold"}}scope="col">View/Edit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th  style={{fontWeight:"Bold"}}rowspan="2"scope="col">{agreementhistory.user_id}</th>
      <td style={{fontWeight:"Bold"}}colSpan="3" scope="col" class="text-danger">{agreementhistory.recruiter_name}</td>
      <td style={{fontWeight:"Bold"}}class="text-danger">{agreementhistory.employer_name}</td>
      <td style={{fontWeight:"Bold"}} class="text-danger">{agreementhistory.employer_company_name}</td>
      <td style={{fontWeight:"Bold"}}class="text-danger">{agreementhistory.employer_company_location}</td>
      <td style={{fontWeight:"Bold"}}class="text-danger">{agreementhistory.date}</td>
      <td style={{fontWeight:"Bold"}}class="text-danger">{agreementhistory.no_of_months}</td>
      <td style={{fontWeight:"Bold"}}class="text-danger">{agreementhistory.select_currency}</td>
      <td style={{fontWeight:"Bold"}}class="text-danger">{agreementhistory.contact_details}</td>
      <td style={{fontWeight:"Bold"}}class="text-danger">{agreementhistory.employer_email}</td>
      <td style={{fontWeight:"Bold"}}class="text-danger">{agreementhistory.employer_contact_number}</td>
   
   
          <td>
         
                <div class="col-3">
      
      <RecruitmentAgreementModal/>
                    
    
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
  

 export default RecruitmentAgreementHistoryComponent;
