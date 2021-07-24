import React, { Component} from 'react';
import {Modal ,Row,Container,Table,Col,Button} from 'react-bootstrap'

import {useEffect,useState} from 'react';
import axios from 'axios';

function Popup(props) {  
  const [data, setData] = useState([]);  

  useEffect(() => {  
    const GetData = async () => {  
      const result = await axios('http://localhost:1202/placement_popup');  
      setData(result.data);  
 };  
 GetData();  
 }, []);  
 return(
   <Container hover bordered responsive className=" border border-bottom-0 border-dark text-center" style={{"font-size":"14px"}}>
   
      {
        data.map((item) => {  
          return <>
<div>
            <Modal
            {...props}
    
      size="lg"
     aria-labelledby="contained-modal-title-vcenter"
     centered
   >
     <Modal.Header closeButton>
       <Modal.Title id="contained-modal-title-vcenter">

       </Modal.Title>
     </Modal.Header>
     <Modal.Body>



     <br></br>
                    <br></br>
                    <div class="row">
                <div class="col-4" style={{fontSize:"30px"}}>
                     <b>{item.user_name}</b>
                    </div>
                    <div class="col-4">
                     Date posted:<label class="text-danger">{item.date_posted}</label>
                    </div>
                    <div class="col-4">
                     Location:<label class="text-danger">{item.location}</label>
                    </div>
                </div>
                <br></br>
                <br></br>
                <label><b style={{fontSize:"20px"}}>HeadLine:</b></label>
<br></br> 
<label class="text-danger">{item.message}</label>
<hr class =" border-darkw-100 mx-auto " />

        
              
               
                 <label><b>Languages Known:</b></label><label class="text-danger">{item.languages}</label>
                 <br></br>
                 <label><b>Total Years of Experience:</b></label><label class="text-danger">{item.exp}</label>
                 <br></br>
                 <div class="row">
                     <div class="col-3">
                 <label><b>Current salary:</b></label><label class="text-danger">{item.current_salary}</label>
                 </div>
                 <div class="col-3">
                <label><b>Expected salary:</b></label><label class="text-danger">{item.expected_salary}</label>
                </div>
                </div>
                <label><b>Notice Period:</b></label><label class="text-danger">{item.notice_period}</label>
                <hr class =" border-darkw-100 mx-auto " />
                <div class="row">
                     <div class="col-3">
                     <label><b>Work Experience:</b></label> <label class="text-danger">{item.exp}</label>    </div>
                 <div class="col-3">
                 <label><b>Total Work Experience</b></label><label class="text-danger">{item.exp}</label>
             </div>
                </div>
                <div class="row">
                     <div class="col-3">
                     <label><b>Name of the Company:</b></label><label class="text-danger">{item.name_of_the_company}</label></div>
                 <div class="col-3">
                 <label><b>Start Date</b></label><label class="text-danger">{item.start_date}</label>
             </div>
                </div>
                <div class="row">
                     <div class="col-3">
                     <label><b>Position:</b></label><label class="text-danger">{item.position}</label></div>
                 <div class="col-3">
                 <label><b>End Date</b></label><label class="text-danger">{item.end_date}</label>
             </div>
                </div>
                <label><b>Job Description:</b></label>
                <br></br>
                <label>{item.job_description}</label>
                <br></br>
                <label><b>Duration of Work Experienvce:</b></label><label class="text-danger">{item.exp}</label>
             
                <div class="row">
                     <div class="col-3">
                     <label><b>Name of the Company:</b></label><label class="text-danger">{item.name_of_the_company}</label></div>
                 <div class="col-3">
                 <label><b>Start Date</b></label><label class="text-danger">{item.start_date}</label>
             </div>
                </div>
                <div class="row">
                     <div class="col-3">
                     <label><b>Position:</b></label><label class="text-danger">{item.position}</label></div>
                 <div class="col-3">
                 <label><b>End Date</b></label><label class="text-danger">{item.end_date}</label>
             </div>
                </div>
                <label><b>Job Description:</b></label>
                <br></br>
                <label>{item.job_description}</label>
                <br></br>
                <label><b>Duration of Work Experienvce:</b></label><label class="text-danger">{item.exp}</label>
                <hr class =" border-darkw-100 mx-auto " />

                <label><b>Projects Undertaken:</b></label>
          <br></br>
                <label><b>Name:</b></label><label class="text-danger">{item.name_of_the_company}</label>
                <br></br>
                <label><b>Name of the company/University/Institution:</b></label><label class="text-danger">{item.name_of_the_company}</label>
                <br></br>
                <label><b>Start Date:</b></label><label class="text-danger">{item.start_date}</label>
                <br></br>
                <label><b>Date of Completion:</b></label><label class="text-danger">{item.date_of_completion}</label>
                <br></br>
                <label>{item.message}</label>
           
                
                
                
                

     </Modal.Body>
 
   </Modal>
   </div>

          </>  
    })}    
  </Container>

);
};
      
export default Popup;
