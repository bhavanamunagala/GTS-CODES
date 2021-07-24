import React, { Component } from 'react';

import {FormGroup,  Row,NavLink,NavItem, Col, ButtonGroup} from 'reactstrap';
import { Form,FormControl,FormLabel,FormRow, Button, FormCheck} from 'react-bootstrap';

import { MDBCol, MDBInput, MDBTable } from "mdbreact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash, faEdit,faMinus, faPen } from '@fortawesome/free-solid-svg-icons';
import './JobPostComponent.css';
import axios from 'axios'
//import PerfectScrollbar from 'react-PerfectScrollbar';
//import "react-perfect-scrollbar/dist/css/styles.css";
//import ReactScrollbar from 'react-scrollbar-js';
// import { Card, CardBody,CardText } from 'react-bootstrap';
// import jobPostService from '../service/jobPostService';
// import { spacing } from 'material-ui/styles';

class JobPostComponent extends React.Component{
constructor(props){
  super(props)
  this.state={
        
    // gts_job_title_name:'',
    // gts_job_min_exp:'',
    // gts_job_posted_date:'',
    // gts_city_name:'',
    // gts_job_description:'',
    // gts_job_skills:'',
    // gts_skill_is_primary:'',
    // gts_job_salary:'',
    //MinNoticePeriod:'',
    // gts_job_applicant_highest_qualification:'',
    
      title_id:1,
      gts_job_skills:'',
       gts_job_is_personal_requirement:"false",
       company_id:1,
       user_id:1,        
       gts_job_expiry_date: "2020-05-12",
       gts_job_min_exp:'',
      gts_job_min_exp_unit:"month",
       city_id:1,
       country_id:1,
       gts_job_description:'',
       gts_job_is_remote_work:true,
       gts_job_salary:'',
       gts_job_salary_currency:"INR",
       gts_job_salary_duration:1,
       gts_job_salary_duration_unit:"month",
       gts_job_type:"full time",
     gts_job_applicant_highest_qualification:'',
     gts_job_applicant_first_language:"English",
       gts_job_expected_hiring_weeks:2,
       gts_job_vacancy_numbers:21,
       gts_job_vacancy_closed_numbers:5,
       gts_job_contact_email:"abc@gmail.com",
       gts_job_contact_mobile_number:4458564,
       gts_job_contact_whatsapp_number:54534366
       
}

    
 
    
}

changeHandler = (e) => {
    
  this.setState({ [e.target.name] : e.target.value})
}

submitHandler = (e) => {
  e.preventDefault()
    console.log(this.state);
    console.log("Kiran Patel");
        axios.post('http://localhost:4712/api/v1/employer/job_post/',this.state)
        .then(response =>{
          console.log("added  job succesfully");
          console.log(response);
    })
    
      .catch(error => {
        console.log(error)
    })

    
}

componentDidMount() {

  axios.get('http://localhost:4712/api/v1/employer/job_post')
  .then(response => {
 console.log(response)
  })
.catch(error =>{
 console.log(error)
})
}

  render()
  {
    const{ 
    
    gts_job_title_name,
    gts_job_min_exp,
    gts_job_posted_date,
    gts_city_name,
    gts_skill_name,
    gts_skill_is_primary,
    MinNoticePeriod,
    gts_job_description,
    gts_job_salary,
    gts_job_applicant_highest_qualification 

    }=this.state

    return(
     <>
     
         <div className="container align-items-center"  >
          <div className='mt-3' >
            <div className="border border-dark rounded-lg" >
            <form  onSubmit={this.submitHandler}>
              
                <div className="row">
                    <div className="col">  <br/> 
                     
                        <b className="mb-3 p-2">Job Post</b>
                        <button type="Submit" className="btn btn-primary" style={{float:"right", borderRadius: "20px", fontSize: "15px", fontWeight: "light bold", padding: "10px", width: "100px", height: "30px" }}>
                          Add Job</button>
                        
                    </div>  
                   <hr className="border-darkw-100 mx-auto" border-top="2px" />
                 </div>  
                     
                <div className="col-md-12">                             
                  
                            <h6 className="panel-title" >
                            
{/* <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button> */}
 {/* <!-- Modal content--> */}

<div className="modal fade" id="myModal" role="dialog">
<div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">

      <h4 className="modal-title">Job Post</h4>
        <button type="button" className="close" data-dismiss="modal">&times;</button>
        
      </div>
      <div className="modal-body">
        <div className="row">
          <div className="col">
        <div className="row-sm">
        <label>Job Title&nbsp;:&nbsp;</label>
                <input type="text" className="text-primary" name="gts_job_title_name" value={gts_job_title_name} onChange={this.changeHandler} 
                style={{color:"black"}}>
                </input>
          </div>
          <div className="row-sm">
                <label>Year of Experience&nbsp;:&nbsp;</label>
                      <input type="number" name="gts_job_min_exp" value={gts_job_min_exp} onChange={this.changeHandler}>
                      </input>
          </div>
          <div className="row-sm">           
                        <label>Date of posting Job&nbsp;:&nbsp;</label>
                       <input type="date" name="gts_job_posted_date" value={gts_job_posted_date} onChange={this.changeHandler}>
                          </input>
          </div>
          <div className="row-sm">
                          <label>Job Location&nbsp;:&nbsp;</label>
                    <input type="text" name="gts_city_name" value={gts_city_name}onChange={this.changeHandler}>
                      </input>
          </div>
          <div className="row-sm">
                      <label>Job Description&nbsp;:&nbsp;</label>
                    <MDBInput type="textarea" name="gts_job_description" rows="1" col="5"  value={gts_job_description} onChange={this.changeHandler}></MDBInput>
                    <label>Skills required&nbsp;:&nbsp;</label>
                     <input type="text" name="gts_job_skills" value={gts_skill_name} onChange={this.changeHandler}>
                      </input>
          </div>
          <div className="row-sm">
                      <label>Skills good to have&nbsp;:&nbsp;</label>
                    <input type="text" name="gts_skill_is_primary" value={gts_skill_is_primary} onChange={this.changeHandler}>
                      </input>
          </div>
          <div className="row-sm">
                      <label>Salary Offered &nbsp;:&nbsp;</label>
                    <input type="text" name="gts_job_salary"  value={gts_job_salary} onChange={this.changeHandler}>
                    </input>
          </div>
          </div>
          
          <div className="row-sm">
                      <label>Min. Notice Period&nbsp;:&nbsp;</label>
                    <input type="number" name="MinNoticePeriod" value={MinNoticePeriod} onChange={this.changeHandler}>
                      </input>
          </div>
          <div className="row-sm">      
                      <label>Educational Qualification&nbsp;:&nbsp;</label>
                    <input type="text"  name="gts_job_applicant_highest_qualification" value={gts_job_applicant_highest_qualification} onChange={this.changeHandler}></input>
           </div>  

 
        </div>
        
      </div>
      <div className="modal-footer">
        {/* <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> */}
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
    
  </div>
</div>
{/* end Model */}
 </h6>
  </div>


{/* main code overflow-x:"auto";
  overflow-x: "hidden" */}     
            <div className="container-fluid">  
              <div className="row-sm">
                
                <label><b>Job Title&nbsp;:&nbsp;</b></label>
                <input type="text" className="text-primary" name="gts_job_title_name" value={gts_job_title_name} onChange={this.changeHandler} 
                style={{color:"black"}}></input>
              
                  <div className="row-sm">
                      <label><b>Year of Experience&nbsp;:&nbsp;</b></label>
                     <input type="number" name="gts_job_min_exp" value={gts_job_min_exp} onChange={this.changeHandler}>
                        </input>
                  </div>
                      <div className="row-sm">
                        <label><b>Date of posting Job&nbsp;:&nbsp;</b></label>
                        {/* <label style={{color:"red",fontWeight:"bold " }}>(master Data)</label> */}
                        <input type="date" name="gts_job_posted_date" value={gts_job_posted_date} onChange={this.changeHandler}></input>
                      </div>
                  <div className="row-sm">
                    <label><b>Job Location&nbsp;:&nbsp;</b></label>
                  <input type="text" name="gts_city_name" value={gts_city_name}onChange={this.changeHandler}></input>
                  </div>
                  <div className="row-sm">
                    <label><b>Job Description&nbsp;:&nbsp;</b></label>
                    <label>
                    <MDBInput type="textarea" name="gts_job_description" rows="1" col="5"  value={gts_job_description} onChange={this.changeHandler}></MDBInput>
                    </label>     
                    <br/>
                  </div>
                  <div className="row-sm">
                    <label><b>Skills required&nbsp;:&nbsp;</b></label>
                    <input type="text" name="gts_job_skills" value={gts_skill_name} onChange={this.changeHandler}></input>
                  </div>
                  <div className="row-sm">
                    <label><b>Skills good to have&nbsp;:&nbsp;</b></label>
                    <input type="text" name="gts_skill_is_primary" value={gts_skill_is_primary} onChange={this.changeHandler}></input>
                  </div>
                  <div className="row-sm">
                    <label><b>Salary Offered&nbsp;:&nbsp;</b></label>
                    <input type="text" name="gts_job_salary"  value={gts_job_salary} onChange={this.changeHandler}></input>
                  </div>
                  
                  <div className="row-sm">
                    <label><b>Min. Notice Period&nbsp;:&nbsp;</b></label>
                    <input type="number" name="MinNoticePeriod" value={MinNoticePeriod} onChange={this.changeHandler}></input>
                  </div>
                  <div className="row-sm">
                    <label><b>Educational Qualification&nbsp;:&nbsp;</b></label>
                    <input type="text"  name="gts_job_applicant_highest_qualification" value={gts_job_applicant_highest_qualification} onChange={this.changeHandler}></input>
                  </div>
                </div>
                </div>    
              </form>
            
            </div>
          </div>
        </div>
        <br/>
      
    </>  
);}
}
export default JobPostComponent;
