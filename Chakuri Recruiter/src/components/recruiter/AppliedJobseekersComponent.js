import React, { Component, useContext } from "react";
import { Accordion, AccordionContext, Card, Button, Col, Container, Row , Table } from 'react-bootstrap';
import {useEffect,useState} from 'react';
import axios from 'axios';
import Modal1 from './Modal1';
import { UncontrolledCollapse,  CardBody} from 'reactstrap';  

function AppliedJobseekersComponent(props) {  
    const [data, setData] = useState([]);  
  
      const [isOpen, setIsOpen] = useState(false);
    
      const toggle = () => setIsOpen(!isOpen);
    

  
    useEffect(() => {  
      const GetData = async () => {  
        const result = await axios('http://localhost:1202/Applied_Jobseekers');  
        setData(result.data);  
   };  
   GetData();  
   }, []);  
  
 

   return (

    <div class="container">
           <ul>
       <li><h5><label class="text-primary">APPLIED JOBSEEKERS </label>| SKILLS EVALUATION |  PLACEMENT STATUS </h5>
       </li>
       </ul>
      {
                data.map((item) => {  
                  return <>


      
    <Button color="info" id="toggler" style={{ marginTop: '1rem',float:"right" }}>  
                                       +
                                  
    
                </Button>  
   
          
    
                      <Card>
                                        
                      <div>
                  
                          <div className="row">
                            
                        
                       <div  style={{fontWeight:"bold",borderColor:"black"}} className="col-3">Job Title :
                          <label class="text-danger">{item.job_title}</label>
                      
                     </div>
                    <div   style={{fontWeight:"bold",borderColor:"black"}}className="col-3">Years of experience :
                    <label class="text-danger">{item.exp}</label>
                        </div>
                         <div  style={{fontWeight:"bold",borderColor:"black"}} className="col-3">Date of posting jobs :
                         <label class="text-danger">{item.date_of_posting_jobs}</label>
                         </div>
                  <div   style={{fontWeight:"bold",borderColor:"black"}}className="col-3">No. of candidates :
                  <label class="text-danger">{item.no_of_candidates}</label>
                  </div>
                              <div className="col">
                                               
                    </div>
             
                                            
                 </div>


                  
                                            
                               
                                        <Card.Body>
                                        <UncontrolledCollapse toggler="#toggler">  
                                        <h6  style={{fontWeight:"bold",borderColor:"black"}}>Location :
                                          <label  style={{fontWeight:"bold",borderColor:"black"}}class="text-danger">{item.location}</label>
 
                                            </h6>
                                            <h6 style={{fontWeight:"bold",borderColor:"black"}}>Skills Required :
                                           <label   style={{fontWeight:"bold",borderColor:"black"}}class="text-danger">{item.skills_required}</label>
 
                                            </h6>
                                       
                                          
                                          
                                          
               
         
          <table class="table table-bordered" style={{width:"100%",border:"1px solid black"}}>
  <thead>
  <tr>
        <th  rowspan="2" style={{fontWeight:"bold",borderColor:"black"}}>Name of Jobseeker</th>
        <th colSpan="3"  style={{fontWeight:"bold",borderColor:"black"}}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Years of Experience</th>
        <th colSpan="3"  style={{fontWeight:"bold",borderColor:"black"}}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Proficiency test(Chakuri)
</th>
        <th rowSpan="2"  style={{fontWeight:"bold",borderColor:"black"}}>Current Salary<br></br>&nbsp;&nbsp;&nbsp;&nbsp;(in LPA)</th>
         <th rowSpan="2"  style={{fontWeight:"bold",borderColor:"black"}}>&nbsp;&nbsp;&nbsp;
          Candidate Selected</th>
        <th rowSpan="2"  style={{fontWeight:"bold",borderColor:"black"}}>&nbsp;&nbsp;&nbsp;Recommend Training</th>
        <th rowSpan="2"  style={{fontWeight:"bold",borderColor:"black"}}>&nbsp;&nbsp;&nbsp;
        Inform Candidate
   </th>
      </tr>
      
    
    
      <tr>
      
        <td style={{fontWeight:"bold",borderColor:"black"}}>HTML</td>
        <td style={{fontWeight:"bold",borderColor:"black"}}>CSS</td>
        <td style={{fontWeight:"bold",borderColor:"black"}}>JavaScript</td>
        <td style={{fontWeight:"bold",borderColor:"black"}}>HTML(Min 6/10) </td>
        <td style={{fontWeight:"bold",borderColor:"black"}}>CSS (Min 6/10)</td>
        <td style={{fontWeight:"bold",borderColor:"black"}}>JavaScript (Min6/10)</td>
      </tr>
  </thead>
  <tbody>
      </tbody>

 <thead>
  <tr>
        <th className="border-right border-dark text-danger" rowspan="4" style={{fontWeight:"bold",borderColor:"black"}}>{item.user_name}</th>
        <th  className="border-right border-dark text-danger"colSpan="3"  style={{fontWeight:"bold",borderColor:"black"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     
Experience
      </th>
        <th colSpan="3"  className="border-right border-dark text-danger"
         style={{fontWeight:"bold",borderColor:"black"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Proficiency test
</th>
        <th  className="border-right border-dark text-danger"rowSpan="2"  style={{fontWeight:"bold",borderColor:"black"}}>
          {item.current_salary}</th>
         <th rowSpan="2"  style={{fontWeight:"bold",borderColor:"black"}}>&nbsp;&nbsp;&nbsp;
         <div className="container">
                <input type="radio"  data-toggle="modal" data-target="#myModalTwo" >
  </input>
  <div class="modal fade" id="myModalTwo">
    <div class="modal-dialog modal-md">
      <div class="modal-content"  style={{borderRadius:"30px" }}>
      
        <div class="modal-header">
        <b><label class="text-danger" style={{fontSize:"20px"}}>{item.user_name}</label></b>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <div class="modal-body">
        <label  style={{fontSize:"20px", paddingLeft:"10px"}}>{item.messagee}</label>
           <b><div class="head" style={{fontSize:"20px"}} >Job Post: <label class="text-danger" style={{fontSize:"20px"}}>{item.job_title}</label></div></b>
        </div>
        
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>
  </div>
             </th>
        <th rowSpan="2"  style={{fontWeight:"bold",borderColor:"black"}}>&nbsp;&nbsp;&nbsp;
        <div className="container">
                <input type="radio"  data-toggle="modal" data-target="#myModalOne" >
  </input>
  <div class="modal fade" id="myModalOne">
    <div class="modal-dialog modal-md">
      <div class="modal-content"  style={{borderRadius:"30px" }}>
      
        <div class="modal-header">
        <b><label class="text-danger" style={{fontSize:"20px"}}>{item.user_name}</label></b>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <div class="modal-body">
        <label  style={{fontSize:"20px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {item.messageee}</label>
           <b><div class="head" style={{fontSize:"20px"}} >Job Post: <label class="text-danger" style={{fontSize:"20px"}}>{item.job_title}</label></div></b>
        </div>
        
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>
  </div></th>
  <th rowSpan="2"  style={{fontWeight:"bold",borderColor:"black"}}>
  <Modal1/>
   </th>
      </tr>
      
    
    
   
      
        <th  className="border-right border-dark text-danger"
        style={{fontWeight:"bold",borderColor:"black"}}>{item.html_exp}</th>
        <th  className="border-right border-dark text-danger"
        style={{fontWeight:"bold",borderColor:"black"}}>{item.css_exp}</th>
        <th  className="border-right border-dark text-danger"
        style={{fontWeight:"bold",borderColor:"black"}}>{item.js_exp}</th>
        <th className="border-right border-dark text-danger"
        style={{fontWeight:"bold",borderColor:"black"}}>{item.html_proficiency}</th>
        <th className="border-right border-dark text-danger"
        style={{fontWeight:"bold",borderColor:"black"}}>{item.css_proficiency} </th>
        <th className="border-right border-dark text-danger"
        style={{fontWeight:"bold",borderColor:"black"}}>{item.js_proficiency}</th>
    
  </thead>

</table>


             
                             
      </UncontrolledCollapse>
                                          </Card.Body>
                                      
                                          </div>
                                        
                                </Card>
                              
                    
                                <br></br>
                                


      </>  
      
            })}    
         
    </div>
  
            );
}

export default AppliedJobseekersComponent;

