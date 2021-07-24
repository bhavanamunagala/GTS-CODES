
import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import { faPen,faTrash,faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { black } from 'material-ui/styles/colors';
import { Alert, Button, ButtonGroup, Col, Container, Form, Modal, Row,Toast } from 'react-bootstrap';
import { Link ,useHistory} from 'react-router-dom';


function Retrive (props){

    const [details,setDetails] = useState({area:'',});
    const {area} = details;
    const onInputChange = e => {
        setDetails({...details,[e.target.name]:e.target.value})};
    useEffect(() => {loadUsers();},[]);
    const loadUsers = async() => {
        const result = await Axios.get('http://localhost:1202/recruitment_agreement');
        setDetails(result.data);
    };
    const deleteDetails = async id => {
        await Axios.delete(`http://localhost:1202/recruitment_agreement/${id}`);
        alert("Submited Successfully");
        window.location.reload(true);
        loadUsers();
    }
    
    return(
        <Container>
           
        </Container>
    );
};

function RecruitmentAgreementComponent (){
    const [modalShow, setModalShow] = useState(false);
    const [show, setShow] = useState(false);
    const [showA, setShowA] = useState(false);
    const [showB, setShowB] = useState(false);
    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);
    const [details,setDetails] = useState({
    
        recruiter_name:"",
        employer_name:"",
        employer_company_name:"",
        employer_company_location:"",
        job_position:"",
        skill_set:"",
        max_years_of_exp:"",
        min_years_of_exp:"",
        no_of_candidates:"",
        contact_details:"",
        employer_email:"",
        employer_contact_number:"",
        employer_signature:"",
        date:"",
        recruiter_signature:"",
        admin_signature:""
    });
    const {
    
     
        recruiter_name,
        employer_name,
        employer_company_name,
        employer_company_location,
        job_position,
        skill_set,
        max_years_of_exp,
        min_years_of_exp,
        no_of_candidates,
        contact_details,
        employer_email,
        employer_contact_number,
        employer_signature,
        date,
        recruiter_signature,
        admin_signature,
    } = details;
    const resetDetails = e =>{
        setDetails({...details,[e.target.name] : " "});
    };
    const onInputChange = e =>{
        setDetails({...details,[e.target.name] : e.target.value});
    };
    const onSubmit = async e =>{
        e.preventDefault();
        await Axios.post("http://localhost:1202/recruitment_agreement",details);

    
        window.location.reload(true);
        //history.push("/SubmitAgreement");
    };
    
    function refreshPage() {
        window.location.reload(false);
     
      }
    return(
        <Container fluid>
               <Form onSubmit={e => onSubmit(e)}>
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
    <input required type ="text" 
                                    className="border border-dark" 
                                    onChange = {e => onInputChange(e)}
                                     name="recruiter_name" value={recruiter_name}
                                      placeholder = "Recruiter name" /> 
                                      of CHAUKURI GTS and &nbsp;                      
                           
  
  
    
 GTS and Employer &emsp;
    <label style={{fontWeight:"bold"}}></label>
          <input required type="text" 

onChange = {e => onInputChange(e)} 
name="employer_name" 
value={employer_name}
 placeholder="Employer Name"></input>
         of
        &emsp; <label style={{fontWeight:"bold"}}></label>
          <input required type="text" 

onChange = {e => onInputChange(e)} name="employer_company_name"  value={employer_company_name}
 placeholder="Employer Company Name" style={{color:"red"}}></input>
    
    &emsp;  &emsp;   <label style={{fontWeight:"bold"}}></label>
          <input required type="text" 

onChange = {e => onInputChange(e)} name="employer_company_location"  value={employer_company_location}
 placeholder="Employer Company Location" style={{color:"red"}}></input><br></br>
&emsp;<br></br><br></br>
 This document constitutes an employment agreement between the two parties and is governed by the laws of bangalore,karnataka.
     <br></br><br></br>
     IN CONSIDERATION of this mutual understanding ,the parties agreeto the following terms and conditions:<br></br><br></br>
     Both parties must agree to the rate of charge when selecting multiple potential candidates
      from CHAKURI platform where the rate of charge is
      <br></br><br></br>
      <input required type="text" name="selected" style={{width:"100px",border:black}} />&emsp;&emsp;
      
 
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
   <div className="border border-dark rounded-lg" >
       
       <br></br>
       <div class = "scroll" style={{display:"block",width:"1000px",overflowX:"auto",overflowy:"hidden"}}>


       <div class="table-container-responsive-lg ">          
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
 <td style={{borderColor:"black"}}> <input required type="text"
 
onChange = {e => onInputChange(e)} name="job_position"  value={job_position}
  style={{color:"#ee6724",outline:"none"}}/></td>
 <td style={{borderColor:"black"}}> <input required type="text" 
 
onChange = {e => onInputChange(e)} name="skill_set"  value={skill_set}
 style={{color:"#ee6724",outline:"none"}}/></td>
 <td style={{borderColor:"black"}}> <input required type="text" 
 
onChange = {e => onInputChange(e)} name="max_years_of_exp"  value={max_years_of_exp}
 style={{color:"#ee6724",outline:"none"}}/></td>
 <td style={{borderColor:"black"}}> <input required type="text" 
 onChange = {e => onInputChange(e)} name="min_years_of_exp"  value={min_years_of_exp}
 style={{color:"#ee6724",outline:"none"}}/></td>
 <td style={{borderColor:"black"}}> <input required type="text" 
 onChange = {e => onInputChange(e)} name="no_of_candidates"  value={no_of_candidates}
 style={{color:"#ee6724",outline:"none"}}/></td>
 
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
          <input type="text" style={{color:"red"}}></input><br></br>
      </div>
     <div class="row-sm">
     <label style={{fontWeight:"bold"}}>Skillset:</label>
          <input type="text" style={{color:"red"}}></input><br></br>
                </div>
     <div class="row-sm">
     <label style={{fontWeight:"bold"}}>Max Year of Experience:</label>
          <input type="text" style={{color:"red"}}></input><br></br>
          </div>
          <div class="row-sm">
     <label style={{fontWeight:"bold"}}>Min Year of Experience:</label>
          <input type="text" style={{color:"red"}}></input><br></br>
          </div>
          <div class="row-sm">
     <label style={{fontWeight:"bold"}}>No of candidates:</label>
          <input type="text" style={{color:"red"}}></input><br></br>
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
          <input required type="text" 
name="contact_details" 
onChange = {e => onInputChange(e)}  value={contact_details}
 style={{color:"red"}}></input><br></br>
    
<label>Employer Email:</label>
<label style={{fontWeight:"bold"}}></label>
          <input required type="text" 
name="employer_email" 
onChange = {e => onInputChange(e)}  value={employer_email}
 style={{color:"red"}}></input><br></br>
    
<label>Employer Contact Number:</label>
<label style={{fontWeight:"bold"}}></label>
          <input required type="text" 
name="employer_contact_number" 
onChange = {e => onInputChange(e)}  value={employer_contact_number}
 style={{color:"red"}}></input><br></br>
    
<label>Employer Signature:</label>
<label style={{fontWeight:"bold"}}></label>
          <input required type="text" 
name="employer_signature" 
onChange = {e => onInputChange(e)}  value={employer_signature}
 style={{color:"red"}}></input><br></br>
    
<label>Date:</label>
<label style={{fontWeight:"bold"}}></label>
          <input required type="text" 
name="date" 
onChange = {e => onInputChange(e)}  value={date}
 style={{color:"red"}}></input><br></br>
    
 <label>Recruiter Signature:</label>
 <label style={{fontWeight:"bold"}}></label>
          <input required type="text" 
name="recruiter_signature" 
onChange = {e => onInputChange(e)}  value={recruiter_signature}
 style={{color:"red"}}></input><br></br>
    
<label>Admin Signature:</label>
<label style={{fontWeight:"bold"}}></label>
          <input required type="text" 
name="admin_signature" 
onChange = {e => onInputChange(e)}  value={admin_signature}
 style={{color:"red"}}></input><br></br>
    
<label>Date</label>
<label style={{fontWeight:"bold"}}></label>
          <input required type="text" 
name="date" 
onChange = {e => onInputChange(e)}  value={date}
 style={{color:"red"}}></input><br></br>
    
<label>Date</label>
<input type="Date"  /><br></br>

</div>
                                              

       </div>
       </div></div> 
       <br></br>
 
       <ButtonGroup>
        <Button variant="primary" type="submit" className="border rounded-lg"onClick={toggleShowA}>Save Details</Button>{" "}
     
      
                                
       <Button variant="primary" type="reset"onClick={refreshPage} onReset={(e) => resetDetails(e)} className="btn border rounded-lg">Reset Details</Button>
        </ButtonGroup>

        <Button variant="primary"
                             type="submit" onClick={() => setModalShow(true)} 
                             className="border rounded-lg" onClick={toggleShowB} 
                             style={{"float":"right"}}>Submit Contract
                      
                             </Button>
                             <Toast show={showA} onClose={toggleShowA}>
                                    
                                    <Toast.Header>
                                <strong className="mr-auto" 
                                class="text-success">Saved details succesfully  </strong>
                              </Toast.Header>
                                 </Toast>
       

            </div>
        
            </div>
            <Retrive show={modalShow} onHide={() => setModalShow(false)}/>
            </Form>
        </Container>
    );
};

export default RecruitmentAgreementComponent;