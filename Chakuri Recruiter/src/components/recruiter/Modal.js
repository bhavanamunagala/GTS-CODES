import React from 'react';
import {useEffect,useState} from 'react';
import axios from 'axios';

function Modal(props) {  
  const [data, setData] = useState([]);  

  useEffect(() => {  
    const GetData = async () => {  
      const result = await axios('http://localhost:1202/placement_popup');  
      setData(result.data);  
 };  
 GetData();  
 }, []);  

        return (

<div class="container">
  <button type="button" class="btn btn-primary" style={{borderRadius:"15px"}} data-toggle="modal" data-target="#myModal">
    View Resume
  </button>
  {
            data.map((item) => {  
              return <>
  <div class="modal fade" id="myModal">
    <div class="modal-dialog modal-lg" >
      <div class="modal-content" style={{borderRadius:"30px"}}>
      
     
         
          <button type="button" class="close" data-dismiss="modal"></button>
     
        <div class="modal-body">

        <div class="row">
                <div class="col-4" style={{fontSize:"25px"}}>
                     <b>{item.user_name}</b>
                    </div>
                    <div class="col-4"><b>
                     Date posted:<label class="text-danger">  <b>{item.date_posted}</b></label></b>
                    </div>
                    <div class="col-4"><b>
                     Location:<label class="text-danger">  <b>{item.location}</b></label></b>
                    </div>
                </div>
                <br></br>
                <br></br>
                <label><b style={{fontSize:"20px"}}>HeadLine:</b></label>
<br></br> 
<label class="text-danger"><b>{item.message}</b></label>



<table class="table table-bordered" style={{width:"100%",border:"1px solid black"}}>
  <thead>
  <tr>
        <th  rowspan="2" style={{fontWeight:"bold",borderColor:"black"}}>Skills</th>
        <th colSpan="3"  style={{fontWeight:"bold",borderColor:"black"}}>
       Self-Rating</th>
        <th colSpan="3"  style={{fontWeight:"bold",borderColor:"black"}}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chakuri Assessment
</th>
        <th rowSpan="2"  style={{fontWeight:"bold",borderColor:"black"}}>External Assessment</th>
        <th rowSpan="2"  style={{fontWeight:"bold",borderColor:"black"}}>&nbsp;&nbsp;&nbsp;Primary Skill</th>
        <th rowSpan="2"  style={{fontWeight:"bold",borderColor:"black"}}>&nbsp;&nbsp;&nbsp;Years of Experience</th>
   </tr>
      
    
    
      <tr>
      
  
      </tr>
      <tr>
        <th  rowspan="2" style={{fontWeight:"bold",borderColor:"black"}}>{item.skill}</th>
        <th colSpan="3" class="text-danger" style={{fontWeight:"bold",borderColor:"black"}}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.self_rating}</th>
        <th colSpan="3" class="text-danger" style={{fontWeight:"bold",borderColor:"black"}}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.chakuri_assesment}
</th>
        <th rowSpan="2" class="text-danger" style={{fontWeight:"bold",borderColor:"black"}}>{item.external_assesment}<br></br></th>
        <th rowSpan="2"  class="text-danger"style={{fontWeight:"bold",borderColor:"black"}}>&nbsp;&nbsp;&nbsp;{item.primary_skill}</th>
        <th rowSpan="2" class="text-danger" style={{fontWeight:"bold",borderColor:"black"}}>&nbsp;&nbsp;&nbsp;{item.year_of_experience}</th>
  </tr>
      
  </thead>
</table>
               
                 <label><b>Languages Known:</b></label><label class="text-danger">
                 <b>{item.languages}</b></label>
                 <br></br>
                 <label><b>Total Years of Experience:</b></label>
                 <label class="text-danger"><b>{item.exp}</b></label>
                 <br></br>
                 <div class="row">
                     <div class="col-3">
                 <label><b>Current salary:</b></label>
                 <label class="text-danger"><b>{item.current_salary}</b></label>
                 </div>
                 <div class="col-3">
                <label><b>Expected salary:</b></label>
                <label class="text-danger"><b>{item.expected_salary}</b></label>
                </div>
                </div>
                <label><b>Notice Period:</b></label>
                <label class="text-danger"><b>{item.notice_period}</b></label>
                <hr class =" border-darkw-100 mx-auto " />
                <div class="row">
                     <div class="col-3">
                     <label><b>Work Experience:</b>
                     <label class="text-danger">
                     <b> {item.exp}</b></label>   
                        </label> 
                  </div>
                 <div class="col-3">
                 <label><b>Work Experience:</b>
                 <label class="text-danger"><b>{item.exp}</b></label>
                 </label>
             </div>
                </div>
                <div class="row">
                     <div class="col-3">
                     <label><b>Company Name:</b>
                     <label class="text-danger"><b>{item.name_of_the_company}</b>
                     </label>
           
                     </label></div>
                 <div class="col-3">
                 <label><b>Start Date</b></label><label class="text-danger">
                   <b>{item.start_date}</b></label>
             </div>
                </div>
                <div class="row">
                     <div class="col-3">
                     <label><b>Position:</b>
                     <label class="text-danger"><b>{item.position}</b></label>
                     </label></div>
                 <div class="col-3">
                 <label><b>End Date</b></label><label class="text-danger">
                   <b>{item.end_date}</b></label>
             </div>
                </div>
                <label><b>Job Description:</b></label>
                <br></br>
                <label><b>{item.job_description}</b></label>
                <br></br>
                <label><b>Duration of Work Experienvce:</b></label>
                <label class="text-danger"><b>{item.exp}</b></label>
             
                <div class="row">
                     <div class="col-3">
                     <label><b>Company Name:</b></label>
                     <label class="text-danger"><b>{item.name_of_the_company}</b>
                     </label></div>
                 <div class="col-3">
                 <label><b>Start Date</b></label><label class="text-danger"><b>{item.start_date}</b>
                 </label>
             </div>
                </div>
                <div class="row">
                     <div class="col-3">
                     <label><b>Position:</b></label><label class="text-danger"><b>{item.position}</b></label></div>
                 <div class="col-3">
                 <label><b>End Date</b></label><label class="text-danger"><b>{item.end_date}</b></label>
             </div>
                </div>
                <label><b>Job Description:</b></label>
                <br></br>
                <label><b>{item.job_description}</b></label>
                <br></br>
                <label><b>Duration of Work Experienvce:</b></label>
                <label class="text-danger"><b>{item.exp}</b></label>
                <hr class =" border-darkw-100 mx-auto " />

                <label><b>Projects Undertaken:</b></label>
          <br></br>
                <label><b>Name:</b></label><label class="text-danger">
                  <b>{item.name_of_the_company}</b></label>
                <br></br>
                <label><b>Name of the company/University/Institution:</b></label>
                <label class="text-danger"><b>{item.name_of_the_company}</b>
                
                </label>
                <br></br>
                <label><b>Start Date:</b></label><label class="text-danger"><b>{item.start_date}</b></label>
                <br></br>
                <label><b>Date of Completion:</b></label><label class="text-danger">
                  <b>{item.date_of_completion}</b></label>
                <br></br>
                <label> <b>{item.message}</b></label>
           
                
                
                
                

  


       {item.message}
        </div>
        
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close</button>
        </div>
        
      </div>
    </div>
  </div>
  </>  
        })}    
</div>

        );
}

export default Modal;
