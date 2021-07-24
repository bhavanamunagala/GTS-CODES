import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import {FormGroup,  Row,NavLink,NavItem, Col, ButtonGroup} from 'reactstrap';
import { Form,FormControl,FormLabel,FormRow, Button, FormCheck} from 'react-bootstrap';
import ls from 'local-storage';


import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faTrash,faEdit,faUpload, faCalendar, faPen} from '@fortawesome/free-solid-svg-icons'
import { MDBIcon } from 'mdbreact';
import axios from 'axios';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { data } from 'jquery';


class Demo extends React.Component{
constructor(props)
{
  super(props)
  this.state={
    gts_job_vacancy_numbers:'',
    gts_job_vacancy_closed_numbers:'',
    gts_job__candidate_apply:'',
    gts_job_candidate_rejected:'',
    gts_job_candidate_screening:'',
    
    // jobPostArr:[]
  }
}
//get all details.....................................

componentDidMount() {
   axios.get('http://localhost:4712/api/v1/job_post_activity/gts_job_employer_id/1')
//  axios.get('http://localhost:4712/api/v1/job_post_activity')
  .then(response => {

 console.log("Data viewed",response.data);
 
 this.setState({ gts_job_vacancy_numbers:response.data[0].gts_job_vacancy_numbers,
  gts_job_vacancy_closed_numbers:response.data[0].gts_job_vacancy_closed_numbers,
  gts_job_candidate_apply:response.data[0].gts_job_candidate_apply,
  gts_job_candidate_rejected:response.data[0].gts_job_candidate_rejected,
  gts_job_candidate_screening:response.data[0].gts_job_candidate_screening

})
 
  })
 
}

    render()
    {
      console.log(this.state);
      const{gts_job_vacancy_numbers,gts_job_vacancy_closed_numbers,gts_job__candidate_apply,gts_job_candidate_rejected,gts_job_candidate_screening}=this.state;
     return (
        <>

        <br/>
        <br/>
                <div>
              
      <div className="container">
      <div className="border border-dark rounded-lg" >
      {/* <table style={{width:"100%",border:"1px solid black",borderRadius:"15px"}}> */}
      <h1>List Of Applications</h1>
      <hr></hr>
      <table style={{width:"100%",border:"1px solid black"}}>
     
{/* //pratice */}
{/* <div class="table-wrapper-scroll-y my-custom-scrollbar"> */}
<div>
<div id="accordion">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
       
          <h3><span style={{color:"black",float:"left"}}><h5><u><b>Junior Web Developer &nbsp;:&nbsp;</b></u></h5></span>
              <button  align="right" className="btn btn-primary" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor:"white",color:"black", float:"right",}}>
              +</button></h3>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
      <div class="table-wrapper-scroll-y my-custom-scrollbar">

     <div className="row-sm">
           <label ><b> Job Title  &nbsp;:&nbsp;
              {gts_job_vacancy_numbers}</b>
              
            </label>
      </div>
        <div className="row-sm">
                      <label><b>Years of Experience &nbsp;:&nbsp; 
                        {gts_job__candidate_apply}
                        </b>
                      </label>
        </div>
        <div className="row-sm">
     <label><b>Date of posting Job&nbsp;:&nbsp;{gts_job_candidate_rejected}</b></label>
                    
        </div>
        <div className="row-sm">
     <label><b>Location&nbsp;:&nbsp;{gts_job_candidate_screening}</b></label>
                    
        </div>
        <div className="row-sm">
                      <label ><b>Skills required  &nbsp;:&nbsp;
                         {gts_job_vacancy_closed_numbers}</b>
                         {/* <input type="text" name="gts_job_vacancy_closed_numbers"  value={gts_job_vacancy_closed_numbers}></
                         <input>  */}
                      </label>
        </div>
        <div className="row-sm">
                      <label ><b>No. of Candidate  &nbsp;:&nbsp;
                         {gts_job_vacancy_closed_numbers}</b>
                         {/* <input type="text" name="gts_job_vacancy_closed_numbers"  value={gts_job_vacancy_closed_numbers}></
                         <input>  */}
                      </label>
        </div>
        <table class="table table-bordered" style={{width:"100%",border:"1px solid black"}}>
  <thead>
  <tr>
        <th  rowspan="2" style={{fontWeight:"bold",borderColor:"black"}}>Name of Jobseeker</th>
        <th colSpan="3"  style={{fontWeight:"bold",borderColor:"black"}}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Years of Experience</th>
        <th colSpan="3"  style={{fontWeight:"bold",borderColor:"black"}}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Self Assessment
</th>
        <th rowSpan="2"  style={{fontWeight:"bold",borderColor:"black"}}>Current Salary<br></br>&nbsp;&nbsp;&nbsp;&nbsp;(in LPA)</th>
        <th rowSpan="2"  style={{fontWeight:"bold",borderColor:"black"}}>&nbsp;&nbsp;&nbsp;Status</th>
        <th rowSpan="2"  style={{fontWeight:"bold",borderColor:"black"}}>&nbsp;&nbsp;&nbsp;Schedule Interview</th>
        <th rowSpan="2"  style={{fontWeight:"bold",borderColor:"black"}}>&nbsp;&nbsp;&nbsp;Recommend Training</th>
      </tr>
      
    
    
      <tr>
      
        <td style={{fontWeight:"bold",borderColor:"black"}}>HTML</td>
        <td style={{fontWeight:"bold",borderColor:"black"}}>CSS</td>
        <td style={{fontWeight:"bold",borderColor:"black"}}>JavaScript</td>
        <td style={{fontWeight:"bold",borderColor:"black"}}>HTML(Min.6/10) </td>
        <td style={{fontWeight:"bold",borderColor:"black"}}>CSS(Min.6/10) </td>
        <td style={{fontWeight:"bold",borderColor:"black"}}>JavaScript(Min.8/10) </td>
      </tr>
  </thead>
  <tbody>
    {/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr> */}
  </tbody>
</table>
        </div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header" id="headingTwo">
      <h5 class="mb-0">
      <h3><span style={{color:"black",float:"left"}}><h5><u><b>Intern Data Scientest &nbsp;:&nbsp;</b></u></h5></span>
              <button type="button"  align="right" className="btn btn-primary" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" style={{backgroundColor:"white",color:"black", float:"right",}}>
              +</button></h3>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div class="card-body">
      <div class="table-wrapper-scroll-y my-custom-scrollbar">
     <div className="row-sm">
           <label ><b> Job Title  &nbsp;:&nbsp;
              {gts_job_vacancy_numbers}</b>
              
            </label>
      </div>
        <div className="row-sm">
                      <label><b>Years of Experience &nbsp;:&nbsp; 
                        {gts_job__candidate_apply}
                        </b>
                      </label>
        </div>
        <div className="row-sm">
     <label><b>Date of posting Job&nbsp;:&nbsp;{gts_job_candidate_rejected}</b></label>
                    
        </div>
        <div className="row-sm">
     <label><b>Location&nbsp;:&nbsp;{gts_job_candidate_screening}</b></label>
                    
        </div>
        <div className="row-sm">
                      <label ><b>Skills required  &nbsp;:&nbsp;
                         {gts_job_vacancy_closed_numbers}</b>
                         {/* <input type="text" name="gts_job_vacancy_closed_numbers"  value={gts_job_vacancy_closed_numbers}></
                         <input>  */}
                      </label>
        </div>
        <div className="row-sm">
                      <label ><b>No. of Candidate  &nbsp;:&nbsp;
                         {gts_job_vacancy_closed_numbers}</b>
                         {/* <input type="text" name="gts_job_vacancy_closed_numbers"  value={gts_job_vacancy_closed_numbers}></
                         <input>  */}
                      </label>
        </div>
        <table class="table table-bordered" style={{width:"100%",border:"1px solid black"}}>
  <thead>
  <tr>
        <th  rowspan="2" style={{fontWeight:"bold",borderColor:"black"}}>Name of Jobseeker</th>
        <th colSpan="3"  style={{fontWeight:"bold",borderColor:"black"}}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Years of Experience</th>
        <th colSpan="3"  style={{fontWeight:"bold",borderColor:"black"}}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Self Assessment
</th>
        <th rowSpan="2"  style={{fontWeight:"bold",borderColor:"black"}}>Current Salary<br></br>&nbsp;&nbsp;&nbsp;&nbsp;(in LPA)</th>
        <th rowSpan="2"  style={{fontWeight:"bold",borderColor:"black"}}>&nbsp;&nbsp;&nbsp;Status</th>
        <th rowSpan="2"  style={{fontWeight:"bold",borderColor:"black"}}>&nbsp;&nbsp;&nbsp;Schedule Interview</th>
        <th rowSpan="2"  style={{fontWeight:"bold",borderColor:"black"}}>&nbsp;&nbsp;&nbsp;Recommend Training</th>
      </tr>
      
    
    
      <tr>
      
        <td style={{fontWeight:"bold",borderColor:"black"}}>HTML</td>
        <td style={{fontWeight:"bold",borderColor:"black"}}>CSS</td>
        <td style={{fontWeight:"bold",borderColor:"black"}}>JavaScript</td>
        <td style={{fontWeight:"bold",borderColor:"black"}}>HTML(Min.6/10) </td>
        <td style={{fontWeight:"bold",borderColor:"black"}}>CSS(Min.6/10) </td>
        <td style={{fontWeight:"bold",borderColor:"black"}}>JavaScript(Min.8/10) </td>
      </tr>
  </thead>
  <tbody>
    {/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr> */}
  </tbody>
</table>
        </div>
      </div>
    </div>
  </div>

 
  <div class="card">
    <div class="card-header" id="headingThree">
      <h5 class="mb-0">
      
         <h3><span style={{color:"black",float:"left"}}><h5><u><b>Software Engineer &nbsp;:&nbsp;</b></u></h5></span>
              <button  align="right" className="btn btn-primary" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="#collapseThree" style={{backgroundColor:"white",color:"black", float:"right",}}>
              +</button></h3>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body">
      <div class="table-wrapper-scroll-y my-custom-scrollbar">
     <div className="row-sm">
           <label ><b> Job Title  &nbsp;:&nbsp;
              {gts_job_vacancy_numbers}</b>
              
            </label>
      </div>
        <div className="row-sm">
                      <label><b>Years of Experience &nbsp;:&nbsp; 
                        {gts_job__candidate_apply}
                        </b>
                      </label>
        </div>
        <div className="row-sm">
     <label><b>Date of posting Job&nbsp;:&nbsp;{gts_job_candidate_rejected}</b></label>
                    
        </div>
        <div className="row-sm">
     <label><b>Location&nbsp;:&nbsp;{gts_job_candidate_screening}</b></label>
                    
        </div>
        <div className="row-sm">
                      <label ><b>Skills required  &nbsp;:&nbsp;
                         {gts_job_vacancy_closed_numbers}</b>
                         {/* <input type="text" name="gts_job_vacancy_closed_numbers"  value={gts_job_vacancy_closed_numbers}></
                         <input>  */}
                      </label>
        </div>
        <div className="row-sm">
                      <label ><b>No. of Candidate  &nbsp;:&nbsp;
                         {gts_job_vacancy_closed_numbers}</b>
                         {/* <input type="text" name="gts_job_vacancy_closed_numbers"  value={gts_job_vacancy_closed_numbers}></
                         <input>  */}
                      </label>
        </div>
        <table class="table table-bordered" style={{width:"100%",border:"1px solid black"}}>
  <thead>
  <tr>
        <th  rowspan="2" style={{fontWeight:"bold",borderColor:"black"}}>Name of Jobseeker</th>
        <th colSpan="3"  style={{fontWeight:"bold",borderColor:"black"}}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Years of Experience</th>
        <th colSpan="3"  style={{fontWeight:"bold",borderColor:"black"}}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Self Assessment
</th>
        <th rowSpan="2"  style={{fontWeight:"bold",borderColor:"black"}}>Current Salary<br></br>&nbsp;&nbsp;&nbsp;&nbsp;(in LPA)</th>
        <th rowSpan="2"  style={{fontWeight:"bold",borderColor:"black"}}>&nbsp;&nbsp;&nbsp;Status</th>
        <th rowSpan="2"  style={{fontWeight:"bold",borderColor:"black"}}>&nbsp;&nbsp;&nbsp;Schedule Interview</th>
        <th rowSpan="2"  style={{fontWeight:"bold",borderColor:"black"}}>&nbsp;&nbsp;&nbsp;Recommend Training</th>
      </tr>
      
    
    
      <tr>
      
        <td style={{fontWeight:"bold",borderColor:"black"}}>HTML</td>
        <td style={{fontWeight:"bold",borderColor:"black"}}>CSS</td>
        <td style={{fontWeight:"bold",borderColor:"black"}}>JavaScript</td>
        <td style={{fontWeight:"bold",borderColor:"black"}}>HTML(Min.6/10) </td>
        <td style={{fontWeight:"bold",borderColor:"black"}}>CSS(Min.6/10) </td>
        <td style={{fontWeight:"bold",borderColor:"black"}}>JavaScript(Min.8/10) </td>
      </tr>
  </thead>
  <tbody>
    {/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr> */}
  </tbody>
</table>
        </div>
      </div>
    </div>
  </div>




  <div class="card">
    <div class="card-header" id="headingFour">
      <h5 class="mb-0">
      
         <h3><span style={{color:"black",float:"left"}}><h5><u><b>DataBase Manager &nbsp;:&nbsp;</b></u></h5></span>
              <button  align="right" className="btn btn-primary" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="#collapseFour" style={{backgroundColor:"white",color:"black", float:"right",}}>
              +</button></h3>
      </h5>
    </div>
    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
      <div class="card-body">
      <div class="table-wrapper-scroll-y my-custom-scrollbar">
     <div className="row-sm">
           <label ><b> Job Title  &nbsp;:&nbsp;
              {gts_job_vacancy_numbers}</b>
              
            </label>
      </div>
        <div className="row-sm">
                      <label><b>Years of Experience &nbsp;:&nbsp; 
                        {gts_job__candidate_apply}
                        </b>
                      </label>
        </div>
        <div className="row-sm">
     <label><b>Date of posting Job&nbsp;:&nbsp;{gts_job_candidate_rejected}</b></label>
                    
        </div>
        <div className="row-sm">
     <label><b>Location&nbsp;:&nbsp;{gts_job_candidate_screening}</b></label>
                    
        </div>
        <div className="row-sm">
                      <label ><b>Skills required  &nbsp;:&nbsp;
                         {gts_job_vacancy_closed_numbers}</b>
                         {/* <input type="text" name="gts_job_vacancy_closed_numbers"  value={gts_job_vacancy_closed_numbers}></
                         <input>  */}
                      </label>
        </div>
        <div className="row-sm">
                      <label ><b>No. of Candidate  &nbsp;:&nbsp;
                         {gts_job_vacancy_closed_numbers}</b>
                         {/* <input type="text" name="gts_job_vacancy_closed_numbers"  value={gts_job_vacancy_closed_numbers}></
                         <input>  */}
                      </label>
        </div>
        <table class="table table-bordered" style={{width:"100%",border:"1px solid black"}}>
  <thead>
  <tr>
        <th  rowspan="2" style={{fontWeight:"bold",borderColor:"black"}}>Name of Jobseeker</th>
        <th colSpan="3"  style={{fontWeight:"bold",borderColor:"black"}}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Years of Experience</th>
        <th colSpan="3"  style={{fontWeight:"bold",borderColor:"black"}}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Self Assessment
</th>
        <th rowSpan="2"  style={{fontWeight:"bold",borderColor:"black"}}>Current Salary<br></br>&nbsp;&nbsp;&nbsp;&nbsp;(in LPA)</th>
        <th rowSpan="2"  style={{fontWeight:"bold",borderColor:"black"}}>&nbsp;&nbsp;&nbsp;Status</th>
        <th rowSpan="2"  style={{fontWeight:"bold",borderColor:"black"}}>&nbsp;&nbsp;&nbsp;Schedule Interview</th>
        <th rowSpan="2"  style={{fontWeight:"bold",borderColor:"black"}}>&nbsp;&nbsp;&nbsp;Recommend Training</th>
      </tr>
      
    
    
      <tr>
      
        <td style={{fontWeight:"bold",borderColor:"black"}}>HTML</td>
        <td style={{fontWeight:"bold",borderColor:"black"}}>CSS</td>
        <td style={{fontWeight:"bold",borderColor:"black"}}>JavaScript</td>
        <td style={{fontWeight:"bold",borderColor:"black"}}>HTML(Min.6/10) </td>
        <td style={{fontWeight:"bold",borderColor:"black"}}>CSS(Min.6/10) </td>
        <td style={{fontWeight:"bold",borderColor:"black"}}>JavaScript(Min.8/10) </td>
      </tr>
  </thead>
  <tbody>
    {/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr> */}
  </tbody>
</table>
        </div>
      </div>
    </div>
  </div>


  </div>
</div>
</table>
{/* </table> */}
</div>
</div>

</div>  
            </> );
}
}
export default Demo;
