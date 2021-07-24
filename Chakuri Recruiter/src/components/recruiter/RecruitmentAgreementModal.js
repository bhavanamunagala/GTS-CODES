import React from 'react';
import {useEffect,useState} from 'react';
import axios from 'axios';
import { Alert, Button, ButtonGroup, Col, Container, Form, Modal, Row,Toast } from 'react-bootstrap';
import { faPen,faTrash,faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function RecruitmentAgreementModal(props) {  
    const [data, setData] = useState([]);  
  
    useEffect(() => {  
      const GetData = async () => {  
        const result = await axios('http://localhost:1202/recruitment_agreement_history');  
        setData(result.data);  
   };  
   GetData();  
   }, []);  
        return (

<div class="container">


   
   
  <button  style={{borderRadius:"15px" }}type="radio" class="btn btn-primary"
   data-toggle="modal" data-target="#myModal">
   View
  </button>

  {
            data.map((item) => {  
              return <>
  <div class="modal fade" id="myModal">
  <div class="modal-dialog modal-lg">
  <div class="modal-content"  style={{borderRadius:"30px" }}>
      
        <div class="modal-header">
       <h6><label type="text"class="text=danger" ><b>RECRUITEMENT  AGREEMENT HISTORY </b></label></h6> 
     
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <div class="modal-body" style={{fontSize:"15px"}}>
 

        <Container fluid>
           
           <div className="mt-3">
          
           <div class="container">

                 
          <div className="container align-items-center"  >
  <div className='mt-3' >
  <div className="border border-dark rounded-lg" >
      <br></br>
      <div className="row">
      <div className="col-4" style={{ paddingLeft :"350px"}}><img src={process.env.PUBLIC_URL + "/image/goraitech.jpg"} 
alt="pic" width="70px" class="iconStyles"   />
</div>
      <div className="col-4">
<h4 className="text-center display-1 font-weight-bold underline" >
CHAKURI</h4>
<h4 class="text-center">Recruitment Agreement</h4></div>
     </div>


<div className="paragraph" style={{paddingLeft:"10px"}}>
   This contract is made between 
{item.recruiter_name}
                                     of CHAUKURI GTS and &nbsp;                      
                          
 
 
   
GTS and Employer &emsp;
   <label style={{fontWeight:"bold"}}></label>
{item.employer_name}
        of
       &emsp; <label style={{fontWeight:"bold"}}></label>
   {item.employer_company_name}
   
   &emsp;  &emsp;   <label style={{fontWeight:"bold"}}></label>
{item.employer_company_location}
&emsp;<br></br><br></br>
This document constitutes an employment agreement between the two parties and is governed by the laws of bangalore,karnataka.
    <br></br><br></br>
    IN CONSIDERATION of this mutual understanding ,the parties agreeto the following terms and conditions:<br></br><br></br>
    Both parties must agree to the rate of charge when selecting multiple potential candidates
     from CHAKURI platform where the rate of charge is
     <br></br><br></br>
     <input required type="text" name="selected" 
     style={{width:"100px",border:"black"}} />&emsp;&emsp;
     

     per selected candidate and  <input type="text" style={{width:"100px"}} 
     />&emsp; per additional candidate.
</div><br></br>

   <div className="row">
   &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
    If no Max. Years of Experience is needed,then leave it blank
    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
   <button type="submit"  class="btn btn-primary"  id="Add Job Position"  
style={{float:"right",width:"150px",display:"inline-block"}} >Add Job Position</button>
   </div>
    {/* open model of editing */}

      <br></br>
 
{/* close model o editing */}
<br></br>
<div className="container align-items-center"  >
  <div className='mt-3' >
  <div className="border border-dark rounded-sm" >
      
      <br></br>
      <div class = "scroll" style={{display:"block",width:"1000px",overflowX:"auto",overflowy:"hidden"}}>


      <div class="table-container-responsive-sm">          
 <table class="table table-bordered" style={{borderCollapse:"collapse",borderColor:"#f2f2f2"}}>
 <tbody style={{borderColor:"black"}}>
     <tr>
       <th   style={{fontWeight:"bold",borderColor:"black"}}>Job Position</th>
       <th   style={{fontWeight:"bold",borderColor:"black" }}>Skillset</th>
       <th   style={{fontWeight:"bold",borderColor:"black"}}>max Years of Experience</th>
       <th   style={{fontWeight:"bold",borderColor:"black"}}>max Years of Experience</th>
       <th   style={{fontWeight:"bold",borderColor:"black"}}>No of candidates</th>
       <th style={{borderColor:"black"}}></th>
     </tr>
     <tr>
<td style={{borderColor:"black"}}> 
{item.job_position}</td>
<td style={{borderColor:"black"}}>
  {item.skill_set}

</td>
<td style={{borderColor:"black"}}> {item.job_position}</td>
<td style={{borderColor:"black"}}> {item.min_years_of_exp}</td>
<td style={{borderColor:"black"}}> {item.max_years_of_exp}</td>

<td style={{borderColor:"black"}}>
<a data-toggle="modal" data-target="#myModal" href ="#" className="btn  " ><FontAwesomeIcon icon={faEdit}/></a>
    <div className="modal fade" id="myModal">
   <div className="modal-dialog modal-lg">
   <div className="modal-content">
   <div className="modal-header">
   <button type="button" className="close" data-dismiss="modal">&times;</button>
   </div>
   <div className="modal-body">
   <div className="container">
    
       <div className="form-group">
    <div class="row-sm">
    <label style={{fontWeight:"bold"}}>Job Position :</label>
      {item.job_position}    </div>
    <div class="row-sm">
    <label style={{fontWeight:"bold"}}>Skillset:</label>
        {item.skillset}
               </div>
    <div class="row-sm">
    <label style={{fontWeight:"bold"}}>Max Year of Experience:</label>
    {item.max_years_of_exp}
         </div>
         <div class="row-sm">
    <label style={{fontWeight:"bold"}}>Min Year of Experience:</label>
       {item.min_years_of_exp}   </div>
         <div class="row-sm">
    <label style={{fontWeight:"bold"}}>No of candidates:</label>
     {item.no_of_candidates}
         </div>
               <div>
 <button type="submit"  class="btn btn-primary"  id="SaveDetails" 
 
 
style={{float:"right"}} >Save Details</button>
              </div>
                                 
 

       <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
       </div>
   
       </div>
     </div>
</div>
</div>
</div>
   
                          

<a href ="#" class="btn  "><FontAwesomeIcon icon={faTrash}/></a>
</td>
    
     </tr>
     <tr>
<td style={{borderColor:"black"}}> <input type="text" style={{color:"#ee6724",outline:"none"}}/></td>
<td style={{borderColor:"black"}}> <input type="text" style={{color:"#ee6724",outline:"none"}}/></td>
<td style={{borderColor:"black"}}> <input type="text" style={{color:"#ee6724",outline:"none"}}/></td>
<td style={{borderColor:"black"}}> <input type="text" style={{color:"#ee6724",outline:"none"}}/></td>
<td style={{borderColor:"black"}}> <input type="text" style={{color:"#ee6724",outline:"none"}}/></td>

<td style={{borderColor:"black"}}><a href ="#" class="btn  "><FontAwesomeIcon icon={faEdit}/></a>
<a href ="#" class="btn  "><FontAwesomeIcon icon={faTrash}/></a>
</td>
    
     </tr>
     <tr>
<td style={{borderColor:"black"}}> <input type="text" style={{color:"#ee6724",outline:"none"}}/></td>
<td style={{borderColor:"black"}}> <input type="text" style={{color:"#ee6724",outline:"none"}}/></td>
<td style={{borderColor:"black"}}> <input type="text" style={{color:"#ee6724",outline:"none"}}/></td>
<td style={{borderColor:"black"}}> <input type="text" style={{color:"#ee6724",outline:"none"}}/></td>
<td style={{borderColor:"black"}}> <input type="text" style={{color:"#ee6724",outline:"none"}}/></td>

<td style={{borderColor:"black"}}><a href ="#" class="btn  "><FontAwesomeIcon icon={faEdit}/></a>
<a href ="#" class="btn  "><FontAwesomeIcon icon={faTrash}/></a>
</td>
    
     </tr>
    </tbody>
 </table>
 </div>
</div>
      <br></br>
       </div>
      </div>
  </div>
<div className="para" style={{paddingLeft:"20px"}}>The recruiter must try to meet the employer requirement from&emsp;
<input type="date"/>&emsp;
months.
<br></br>
The employer must  allow the recruiter to  view the screening progress.Employer and Recruiter both should be able to reject candidates.
<br></br><br></br>
<label>Contact Details:</label>
<label style={{fontWeight:"bold"}}></label>
 {item.contact_details}
<label>Employer Email:</label>
<label style={{fontWeight:"bold"}}></label>
   {item.employer_email}
<label>Employer Contact Number:</label>
<label style={{fontWeight:"bold"}}></label>
{item.employer_contact_number}
<label>Employer Signature:</label>
<label style={{fontWeight:"bold"}}></label>
    {item.employer_signature}
   
<label>Date:</label>
<label style={{fontWeight:"bold"}}></label>
 {item.date}
<label>Recruiter Signature:</label>
<label style={{fontWeight:"bold"}}></label>
     {item.recruiter_signature}
<label>Admin Signature:</label>
<label style={{fontWeight:"bold"}}></label>
{item.admin_signature}
<label>Date</label>
<label style={{fontWeight:"bold"}}></label>
{item.date}
<label>Date</label>
<input type="Date"  />

<br></br>

</div>
                                             

      </div>
      </div></div> 
      <br></br>

      <ButtonGroup>
       <Button variant="primary" type="submit" className="border rounded-lg"
  >Save Details</Button>{" "}
    
     
                               
      <Button variant="primary" type="reset"
 className="btn border rounded-lg">Reset Details</Button>
       </ButtonGroup>

       <Button variant="primary"
                            type="submit" 
                            className="border rounded-lg" 
                            style={{"float":"right"}}>Submit Contract
                     
                            </Button>
                                      
                           
      

           </div>
       
           </div>
 
       </Container>

        </div>
        
        <div class="modal-footer">
          <button   style={{borderRadius:"15px" }}type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>
  </>  
        })}   
         
</div>
   );

}

export default RecruitmentAgreementModal;