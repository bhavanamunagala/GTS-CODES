import React from 'react';
import {useEffect,useState} from 'react';
import axios from 'axios';
import { Alert, Button, ButtonGroup, Col, Container, Form, Modal, Row,Toast } from 'react-bootstrap';


function CandidateAgreementModal(props) {  
    const [data, setData] = useState([]);  
  
    useEffect(() => {  
      const GetData = async () => {  
        const result = await axios('http://localhost:1202/candidate_agreement');  
        setData(result.data);  
   };  
   GetData();  
   }, []);  
   function refreshPage() {
    window.location.reload(false);
 
  }
        return (

<div class="container">


   
   
  <button  style={{borderRadius:"15px" }}type="radio" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
   View
  </button>

  {
            data.map((item) => {  
              return <>
  <div class="modal fade" id="myModal">
  <div class="modal-dialog modal-lg">
  <div class="modal-content"  style={{borderRadius:"30px" }}>
      
        <div class="modal-header">
        <h6><label type="text"class="text=danger"style={{fontWeight:"Bold"}} >&emsp;
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; <b>CANDIDATE AGREEMENT </b>
        </label></h6> 
    
     
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <div class="modal-body" style={{fontSize:"15px"}}>
 

        <div className="container">
      
        <Container fluid>

<br></br>
<br></br>

   
<div className="mt-3">


    <Row>
        <Col>
           
                <Alert className="border border-dark rounded-lg">
                    <p style={{"text-align":"justify"}}>
                      This contract is made between &nbsp;                        
               {item.recruiter_name}
                          of CHAUKURI GTS and &nbsp;                      
                   {item.employer_name}
                  of &nbsp;                        
                      
                      {item.employer_company_name} &nbsp;                      
                     {item.employer_company_name}&#46;&nbsp;
                        This document constitutes an employment agreement between these two parties and is governed by the laws of Banglore, Karnataka &#46; IN CONSIDERATION of this mutual understanding,the parties agree to the following terms and conditions:
                    </p>
                    <p style={{"text-align":"justify"}}>This contract is only to be considered where the Jobseeker &nbsp;
                       {item.jobseeker_name}&nbsp;
                        has agreed to willfully and to the best of their ability to carry out the duties and responsibilities communicated to them by the &nbsp;
                    {item.project_manager}
                    &nbsp;
                   {item.client_company_name}&nbsp;
                   {item.client_company_location}&nbsp;
                        complying with  all company policies. 
                    </p>                                 
                    <p style={{"text-align":"justify"}}>As a &nbsp;
                     {item.job_title}&nbsp;  
                        it is the duty of the Jobseeker to perform all essential jon functions and duties which are as of follows:
                    </p>
                  
                  
                    <div className="container align-items-center"></div>
                    <p style={{"text-align":"justify"}}>From time to time,the Employer may also add other duties within the reasonable scope of the Jobseeker's work. The task is to worked on &nbsp;
                 {item.date} for &nbsp;
                     {item.no_of_months}&nbsp;
                        months.
                    </p>
                    <p style={{"text-align":"justify"}}>As compensation for the services provided,the Jobseeker shall be paid a wage of&nbsp;
                   {item.salary}&nbsp;   
                    {item.salary_currency}  [permonth] and will be subject to
                        an [quarterly/annual] performance review.All payments shall be subject to mandatory employment deductions(State & Federal Taxes, Social Security and Medicare).
                    </p>
                    <p><u><strong>Contact Details:</strong></u></p>
                    <p style={{"text-align":"justify"}}>
                        <Row>
                            <Col>
                                <label htmlFor="jobseeker_email"><strong>Jobseeker Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong></label>
                           {item.jobseeker_email}
                            </Col>
                            <Col>
                                <label htmlFor="employer_email"><strong>Employer Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong></label>
                         {item.employer_email}
                            </Col>
                            <Col>
                                <label htmlFor="project_manager_email"><strong>Project Manager Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong></label>
                          {item.project_manager_email}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="jobseeker_contact"><strong>Jobseeker Contact:&nbsp;</strong></label>
                               {item.jobseeker_contact}
                            </Col>
                            <Col>
                                <label htmlFor="employer_contact"><strong>Employer Contact:&nbsp;</strong></label>
                             {item.employer_contact}
                            </Col>
                            <Col>
                                <label htmlFor="project_manager_contact"><strong>Project Manager Contact:&nbsp;</strong></label>
                           {item.project_manager_contact}
                            </Col>
                        </Row>
                    </p>
                    <hr/>
                    <Alert>
                        <Row>
                            <Col>
                                <Row><label><strong>Employee Signature:</strong></label></Row>
                                <Row><label><strong>Date:</strong></label></Row>
                            </Col>
                            <Col sm={4}>
                                <Row><label><strong>Jobseeker Signature:</strong></label></Row>
                                <Row><label><strong>Date:</strong></label></Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Row><label><strong>Recruiter Signature:</strong></label></Row>
                                <Row><label><strong>Date:</strong></label></Row>
                            </Col>
                            <Col sm={4}>
                                <Row><label><strong>Admin Signature:</strong></label></Row>
                                <Row><label><strong>Date:</strong></label></Row>
                            </Col>
                        </Row>
                    </Alert>
                </Alert>
             
                <ButtonGroup>
             

                    <Button variant="primary" type="submit"
                     className="border rounded-lg" 
                  >Save Details</Button>{" "}
                
             
               </ButtonGroup>
             
                    <Button variant="primary" type="reset"onClick={refreshPage}
               className="btn border rounded-lg">Reset Details</Button>
      
                <Button variant="primary"
                 type="submit" 
                 className="border rounded-lg" 
                 style={{"float":"right"}}>Submit Contract</Button>
               
         

   
        
        </Col>
    </Row>
</div>
</Container>


    </div>
   



        </div>
        
        <div class="modal-footer">
          <button   style={{borderRadius:"15px" }}type="button" class="btn btn-secondary" 
          data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
 </div>
  </>  
        })}   
         
</div>
   );

}

export default CandidateAgreementModal;