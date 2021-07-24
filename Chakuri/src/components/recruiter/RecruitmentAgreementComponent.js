import { faPen,faTrash,faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
 import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { black } from 'material-ui/styles/colors';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem'
//import { MenuItem } from 'material-ui';

import {  Button, FormGroup, Form,Input, InputGroupAddon,InputGroupText,InputGroup, Container, Row,Col,Alert, ButtonGroup} from 'reactstrap';

class RecruitmentAgreementComponent extends React.Component{
     constructor(props) {
          super(props)
          this.state = {
            gts_job_position: '',
            gts_skillset: '',
            gts_max_years_of_exp: '',
            gts_min_years_of_exp: '',
            gts_no_of_candidates: '',
            gts_user_alternate_mobile_number: '',
            gtsSkillSelfRatings:'',
            userSkill:'',
            gtsSkillChakuriRatings:'',
            gtsSkillExternalRatings:'',
            
          };
     }

    render(){
        const RecruiterName=[{title:'',}]
        const Currency = [{title:'INR'},{ title:'dollars'}]
       const Day = [{title:'1'},{title:'2'}]
       const month = [{title:'12'},{title:'02'}]
        const year = [{title:'2020'},{title:'2021'}]
        
        // const iconStyles= { 
        //      float: "center",
        //      clear: "center",
        //      height:"30px",
        //      width:"50px"
             
        //    }
        return(
            <div class="container">
             <hr class="border-darkw-100 mx-auto" />           
            
             <div class="row">
                 
                 <div className="col">

                   
                <h3 className="mb-3 p-2" style={{paddingLeft:"15px"}}>Company Address:
    <a data-toggle="modal" data-target="#myModal" href ="#" className="btn  " style={{float:"right"}}><FontAwesomeIcon icon={faPen}/></a></h3></div>
     <div className="modal fade" id="myModal">
    <div className="modal-dialog modal-lg">
    <div className="modal-content">
    <div className="modal-header">
    <button type="button" className="close" data-dismiss="modal">&times;</button>
    </div>
    <div className="modal-body">
    <div className="container">
        <form onSubmit={this.submitHandler}>
        <div className="form-group">
     <div class="row-sm">
     <label style={{fontWeight:"bold"}}>Company name :</label>
          <input type="text" style={{color:"red"}}></input><br></br>
      </div>
     <div class="row-sm">
     <label style={{fontWeight:"bold"}}>Address Line 1:</label>
          <input type="text" style={{color:"red"}}></input><br></br>
                </div>
     <div class="row-sm">
     <label style={{fontWeight:"bold"}}>Address Line 2:</label>
          <input type="text" style={{color:"red"}}></input><br></br>
          </div>
          <div class="row-sm">
     <label style={{fontWeight:"bold"}}>Town:</label>
          <input type="text" style={{color:"red"}}></input><br></br>
          </div>
          <div class="row-sm">
     <label style={{fontWeight:"bold"}}>city:</label>
          <input type="text" style={{color:"red"}}></input><br></br>
          </div>
          <div class="row-sm">
     <label style={{fontWeight:"bold"}}>State/Province:</label>
          <input type="text" style={{color:"red"}}></input><br></br>
          </div>
          <div class="row-sm">
     <label style={{fontWeight:"bold"}}>Country:</label>
          <input type="text" style={{color:"red"}}></input><br></br>
          </div>
    
                <div class="row-sm" >
                <label style={{fontWeight:"bold"}}>Pincode :</label>
          <input type="text" style={{color:"red"}}></input><br></br>
              
                </div>
                <div>
  <button type="submit"  class="btn btn-primary"  id="SaveDetails"  onClick={this.saveDetail}
 style={{float:"right"}} >Save Details</button>
               </div>
                                  
  

        <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
        </div>
        </form>
        </div>
      </div>
    </div>
  </div>
        </div>
                 <form onSubmit={this.submitHandler}>           
                     <div className="form-group">
    <div class="row-sm">
     <label  style={{fontWeight:"bold",paddingLeft:"15px"}}>Company Name</label>
     <input type="text" style={{color:"red"}}></input><br></br>   
     </div>
     <div class="row-sm">
     <label style={{fontWeight:"bold",paddingLeft:"15px"}}>Address Line 1:</label>
          <input type="text" style={{color:"red"}}></input><br></br>
                </div>
     <div class="row-sm">
     <label style={{fontWeight:"bold",paddingLeft:"15px"}}>Address Line 2:</label>
          <input type="text" style={{color:"red"}}></input><br></br>
          </div>
          <div class="row-sm">
     <label style={{fontWeight:"bold",paddingLeft:"15px"}}>Town:</label>
          <input type="text" style={{color:"red"}}></input><br></br>
          </div>
          <div class="row-sm">
     <label style={{fontWeight:"bold",paddingLeft:"15px"}}>city:</label>
          <input type="text" style={{color:"red"}}></input><br></br>
          </div>
          <div class="row-sm">
     <label style={{fontWeight:"bold",paddingLeft:"15px"}}>State/Province:</label>
          <input type="text" style={{color:"red"}}></input><br></br>
          </div>
          <div class="row-sm">
     <label style={{fontWeight:"bold",paddingLeft:"15px"}}>Country:</label>
          <input type="text" style={{color:"red"}}></input><br></br>
          </div>
    
                <div class="row-sm" >
                <label style={{fontWeight:"bold",paddingLeft:"15px"}}>Pincode :</label>
          <input type="text" style={{color:"red"}}></input><br></br>
              
                </div>
                </div>
                </form>

                
                      </div>
                      <hr class="border-darkw-100 mx-auto" />
           <div className="container align-items-center"  >
   <div className='mt-3' >
   <div className="border border-dark rounded-lg" >
       <br></br>
       <div className="row">
           <div className="col-4" style={{float:"right"}}><img src={process.env.PUBLIC_URL + "/image/goraitech.jpg"} 
alt="pic" width="70px" class="iconStyles"   />
</div>
       <div className="col-4">
<h4 className="text-center display-1 font-weight-bold underline" >
CHAKURI</h4>
<h4 class="text-center">Employer Contract</h4></div>
      </div>


<div className="paragraph" style={{paddingLeft:"10px"}}>
    This contract is made between the recruiter&emsp;
    <Autocomplete
      id="combo-box-zero"
      options={RecruiterName}
      getOptionLabel={(option) => option.title}
      style={{ width: 200,display:"inline-block",borderColor:"black"}}
      renderInput={(params) => <TextField {...params} label="" placeholder="Recruiter Name" variant="outlined" />}
   />
    
    &emsp; GTS and Employer &emsp;
     <input type="text" placeholder="Employer Name" style={{width:"200px",font:"italic"}}/>  of &emsp;
     <input type="text" placeholder="Employer Company Name" style={{width:"200px",font:"italic"}}/>&emsp;
     <input type="text" placeholder="Employer Company Location" style={{width:"220px",font:"italic"}}/>&emsp;<br></br><br></br>
 This document constitutes an employment agreement between the two parties and is governed by the laws of bangalore,karnataka.
     <br></br><br></br>
     IN CONSIDERATION of this mutual understanding ,the parties agreeto the following terms and conditions:<br></br><br></br>
     Both parties must agree to the rate of charge when selecting multiple potential candidates
      from CHAKURI platform where the rate of charge is
      <br></br><br></br>
      <input type="text" style={{width:"100px",border:black}} />&emsp;&emsp;
      
 <Autocomplete
      id="combo-box-one"
      options={Currency}
      getOptionLabel={(option) => option.title}
      style={{ width: 200,display:"inline-block",borderColor:"black"}}
      renderInput={(params) => <TextField {...params} label="" placeholder="Select Currency" variant="outlined" />}
    />&emsp;
      per selected candidate and  <input type="text" style={{width:"100px"}} />&emsp; per additional candidate.
</div><br></br>
<form onSubmit={this.submitHandler}>
    <div className="row">
    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
     If no Max. Years of Experience is needed,then leave it blank
     &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
    <button type="submit"  class="btn btn-primary"  id="Add Job Position"  onClick={this.AddJobPosition}
 style={{float:"right",width:"150px",display:"inline-block"}} >Add Job Position</button>
    </div>
     {/* open model of editing */}
    <div className="container align-items-center"  >
   <div className='mt-3' >
   <div className="border border-dark rounded-lg" >
       
       <br></br>
       <div class = "scroll" style={{display:"block",width:"1000px",overflowX:"auto",overflowy:"hidden"}}>


       <div class="table-responsive-sm">          
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
 <td style={{borderColor:"black"}}> <input type="text" style={{color:"#ee6724",outline:"none"}}/></td>
 <td style={{borderColor:"black"}}> <input type="text" style={{color:"#ee6724",outline:"none"}}/></td>
 <td style={{borderColor:"black"}}> <input type="text" style={{color:"#ee6724",outline:"none"}}/></td>
 <td style={{borderColor:"black"}}> <input type="text" style={{color:"#ee6724",outline:"none"}}/></td>
 <td style={{borderColor:"black"}}> <input type="text" style={{color:"#ee6724",outline:"none"}}/></td>
 
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
        <form onSubmit={this.submitHandler}>
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
  <button type="submit"  class="btn btn-primary"  id="SaveDetails"  onClick={this.saveDetail}
 style={{float:"right"}} >Save Details</button>
               </div>
                                  
  

        <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
        </div>
        </form>
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
{/* close model o editing */}
<br></br>
<div className="para" style={{paddingLeft:"20px"}}>The recruiter must try to meet the employer requirement from&emsp;
<input type="date"/>&emsp;
months.
<br></br>
The employer must  allow the recruiter to  view the screening progress.Employer and Recruiter both should be able to reject candidates.
<br></br><br></br>

<label>Contact Details:</label>
 <textarea  name="ContactDetails" rows="5" cols="15" style={{width:"1000px"}} /><br></br><br></br>

<label>Employer Email:</label>
<input type="text" style={{width:"200px"}} /><br></br>

<label>Employer Contact Number:</label>
<input type="text" style={{width:"200px"}} /><br></br><br></br>

<label>Employer Signature:</label>
<input type="text"style={{width:"200px"}}  /><br></br>

<label>Date:</label>
<input type="text" style={{width:"200px"}} /><br></br><br></br>

 <label>Recruiter Signature:</label>
<input type="text" style={{width:"200px"}} />&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
<label>Admin Signature:</label>
<input type="text" style={{width:"200px"}} />
<br></br><br></br>

<label>Date</label>
<input type="Date"  />&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
<label>Date</label>
<input type="Date"  /><br></br>

</div>
</form>
                                              

       </div></div></div>
       <br></br>
 


 <button type="submit"  class="btn btn-primary"  id="Submit Contract"  onClick={this.SubmitContract}
 style={{float:"right",width:"150px"}} >Submit Contract</button>
  <br></br>
            </div>
            
            
        )
    }
}
export default RecruitmentAgreementComponent;
