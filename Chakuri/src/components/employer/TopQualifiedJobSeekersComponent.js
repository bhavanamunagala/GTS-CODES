
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faTrash,faEdit,faUpload, faMinus, faCheck,  faBox, faPlus, faSquare, faCheckSquare, faSquareFull, faAlignCenter} from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import "react-perfect-scrollbar/dist/css/styles.css";
import { BorderOuterOutlined } from '@material-ui/icons';
import { MDBContainer, MDBCollapse, MDBCard, MDBCardBody } from "mdbreact";
//import styles from '../pages/styles';
class TopQualifiedJobSeekersComponent extends React.Component{
  constructor(props){
    super(props);
    this.state={
      JobTitle: '',
      YearsOfExp: '',
      DateOfJobPosting: '',
      SkillsReq:'',
      Location:'',
      User1:'',
      K1:'',
      K2:'',
      K3:'',
      K4:'',
      K5:'',
      K6:'',
      K7:'',
      group1:'',

      User2:'',
      L1:'',
      L2:'',
      L3:'',
      L4:'',
      L5:'',
      L6:'',
      L7:'',
      group2:'',

      User3:'',
     T1:'',
     T2:'',
     T3:'',
     T4:'',
     T5:'',
     T6:'',
     T7:'',
      group3:'',

      User4:'',
      Y1:'',
      Y2:'',
      Y3:'',
      Y4:'',
      Y5:'',
      Y6:'',
      Y7:'',
      group4:'',
      
      User5:'',
      S1:'',
      S2:'',
      S3:'',
      S4:'',
      S5:'',
      S6:'',
      S7:'',
      group5:'',

      User6:'',
      A1:'',
      A2:'',
      A3:'',
      A4:'',
      A5:'',
      A6:'',
      A7:'',
      group6:'',

      User7:'',
      J1:'',
      J2:'',
      J3:'',
      J4:'',
      J5:'',
      J6:'',
      J7:'',
      group7:'',
      
      User8:'',
      C1:'',
      C2:'',
      C3:'',
      C4:'',
      C5:'',
      C6:'',
      C7:'',
      group8:'',
      
      User9:'',
      R1:'',
      R2:'',
      R3:'',
      R4:'',
      R5:'',
      R6:'',
      R7:'',
      group9:'',

      User10:'',
      N1:'',
      N2:'',
      N3:'',
      N4:'',
      N5:'',
      N6:'',
      N7:'',
      group10:'',

      JobTitleTwo:'',
      YearsOfExpTwo:'',
      DateOfJobPostingTwo:'',
      CandidatesOne:'',
       JobTitleThree:'',
      YearsOfExpThree:'',
      DateOfJobPostingThree:'',
      CandidatesTwo:'',
    };
  }
  submitHandler(event) {
    alert('sucess: ' + this.state.value);
    event.preventDefault();
  }
  changeJobTitleHandler=(event) =>{
    this.setState({JobTitle: event.target.value})
    }
    changeYearsOfExpHandler=(event) =>{
      this.setState({YearsOfExp: event.target.value})
    }
    changeSkillsReqHandler=(event) =>{
      this.setState({SkillsReq: event.target.value})
    }
    changeLocationHandler=(event) =>{
      this.setState({Location: event.target.value})
    }
    changeUser1Handler=(event) =>{
      this.setState({User1: event.target.value})
    }
    changeK1Handler=(event) =>{
      this.setState({K1: event.target.value})
    }
    changeK2Handler=(event) =>{
      this.setState({K2: event.target.value})
    }
    changeK3Handler=(event) =>{
      this.setState({K3: event.target.value})
    }
    changeK4Handler=(event) =>{
      this.setState({K4: event.target.value})
    }
    changeK5Handler=(event) =>{
      this.setState({K5: event.target.value})
    }
    changeK6Handler=(event) =>{
      this.setState({K6: event.target.value})
    }
    changeK7Handler=(event) =>{
      this.setState({K7: event.target.value})
    }
    changegroup1Handler=(event) =>{
      this.setState({group1: event.target.value})
    }
    changeUser2Handler=(event) =>{
      this.setState({User2: event.target.value})
    }
    changeL1Handler=(event) =>{
      this.setState({L1: event.target.value})
    }
    changeL2Handler=(event) =>{
      this.setState({L2: event.target.value})
    }
    changeL3Handler=(event) =>{
      this.setState({L3: event.target.value})
    }
    changeL4Handler=(event) =>{
      this.setState({L4: event.target.value})
    }
    changeL5Handler=(event) =>{
      this.setState({L5: event.target.value})
    }
    changeL6Handler=(event) =>{
      this.setState({L6: event.target.value})
    }
    changeL7Handler=(event) =>{
      this.setState({L7: event.target.value})
    }
    changegroup2Handler=(event) =>{
      this.setState({group2: event.target.value})
    }
    changeUser3Handler=(event) =>{
      this.setState({User3: event.target.value})
    }
    changeT1Handler=(event) =>{
      this.setState({T1: event.target.value})
    }
    changeT2Handler=(event) =>{
      this.setState({T2: event.target.value})
    }
    changeT3Handler=(event) =>{
      this.setState({T3: event.target.value})
    }
    changeT4Handler=(event) =>{
      this.setState({T4: event.target.value})
    }
    changeT5Handler=(event) =>{
      this.setState({T5: event.target.value})
    }
    changeT6Handler=(event) =>{
      this.setState({T6: event.target.value})
    }
    changeT7Handler=(event) =>{
      this.setState({T7: event.target.value})
    }
    changegroup3Handler=(event) =>{
      this.setState({group3: event.target.value})
    }
    changeUser4Handler=(event) =>{
      this.setState({User4: event.target.value})
    }
    changeY1Handler=(event) =>{
      this.setState({Y1: event.target.value})
    }
    changeY2Handler=(event) =>{
      this.setState({Y2: event.target.value})
    }
    changeY3Handler=(event) =>{
      this.setState({Y3: event.target.value})
    }
    changeY4Handler=(event) =>{
      this.setState({Y4: event.target.value})
    }
    changeY5Handler=(event) =>{
      this.setState({Y5: event.target.value})
    }
    changeY6Handler=(event) =>{
      this.setState({Y6: event.target.value})
    }
    changeY7Handler=(event) =>{
      this.setState({Y7: event.target.value})
    }
    changegroup4Handler=(event) =>{
      this.setState({group4: event.target.value})
    }
    changeUser5Handler=(event) =>{
      this.setState({User5: event.target.value})
    }
    changeS1Handler=(event) =>{
      this.setState({S1: event.target.value})
    }
    changeS2Handler=(event) =>{
      this.setState({S2: event.target.value})
    }
    changeS3Handler=(event) =>{
      this.setState({S3: event.target.value})
    }
    changeS4Handler=(event) =>{
      this.setState({S4: event.target.value})
    }
    changeS5Handler=(event) =>{
      this.setState({S5: event.target.value})
    }
    changeS6Handler=(event) =>{
      this.setState({S6: event.target.value})
    }
    changeS7Handler=(event) =>{
      this.setState({S7: event.target.value})
    }
    changegroup5Handler=(event) =>{
      this.setState({group5: event.target.value})
    }
    changeUser6Handler=(event) =>{
      this.setState({User6: event.target.value})
    }
    changeA1Handler=(event) =>{
      this.setState({A1: event.target.value})
    }
    changeA2Handler=(event) =>{
      this.setState({A2: event.target.value})
    }
    changeA3Handler=(event) =>{
      this.setState({A3: event.target.value})
    }
    changeA4Handler=(event) =>{
      this.setState({A4: event.target.value})
    }
    changeA5Handler=(event) =>{
      this.setState({A5: event.target.value})
    }
    changeA6Handler=(event) =>{
      this.setState({A6: event.target.value})
    }
    changeA7Handler=(event) =>{
      this.setState({A7: event.target.value})
    }
    changegroup6Handler=(event) =>{
      this.setState({group6: event.target.value})
    }
    changeUser7Handler=(event) =>{
      this.setState({User7: event.target.value})
    }
    changeJ1Handler=(event) =>{
      this.setState({J1: event.target.value})
    }
    changeJ2Handler=(event) =>{
      this.setState({J2: event.target.value})
    }
    changeJ3Handler=(event) =>{
      this.setState({J3: event.target.value})
    }
    changeJ4Handler=(event) =>{
      this.setState({J4: event.target.value})
    }
    changeJ5Handler=(event) =>{
      this.setState({J5: event.target.value})
    }
    changeJ6Handler=(event) =>{
      this.setState({J6: event.target.value})
    }
    changeJ7Handler=(event) =>{
      this.setState({J7: event.target.value})
    }
    changegroup7Handler=(event) =>{
      this.setState({group7: event.target.value})
    }
    changeUser8Handler=(event) =>{
      this.setState({User8: event.target.value})
    }
    changeC1Handler=(event) =>{
      this.setState({C1: event.target.value})
    }
    changeC2Handler=(event) =>{
      this.setState({C2: event.target.value})
    }
    changeC3Handler=(event) =>{
      this.setState({C3: event.target.value})
    }
    changeC4Handler=(event) =>{
      this.setState({C4: event.target.value})
    }
    changeC5Handler=(event) =>{
      this.setState({C5: event.target.value})
    }
    changeC6Handler=(event) =>{
      this.setState({C6: event.target.value})
    }
    changeC7Handler=(event) =>{
      this.setState({C7: event.target.value})
    }
    changegroup8Handler=(event) =>{
      this.setState({group8: event.target.value})
    }
    changeUser9Handler=(event) =>{
      this.setState({User9: event.target.value})
    }
    changeR1Handler=(event) =>{
      this.setState({R1: event.target.value})
    }
    changeR2Handler=(event) =>{
      this.setState({R2: event.target.value})
    }
    changeR3Handler=(event) =>{
      this.setState({R3: event.target.value})
    }
    changeR4Handler=(event) =>{
      this.setState({R4: event.target.value})
    }
    changeR5Handler=(event) =>{
      this.setState({R5: event.target.value})
    }
    changeR6Handler=(event) =>{
      this.setState({R6: event.target.value})
    }
    changeR7Handler=(event) =>{
      this.setState({R7: event.target.value})
    }
    changegroup9Handler=(event) =>{
      this.setState({group9: event.target.value})
    }
    changeUser10Handler=(event) =>{
      this.setState({User10: event.target.value})
    }
    changeN1Handler=(event) =>{
      this.setState({N1: event.target.value})
    }
    changeN2Handler=(event) =>{
      this.setState({N2: event.target.value})
    }
    changeN3Handler=(event) =>{
      this.setState({N3: event.target.value})
    }
    changeN4Handler=(event) =>{
      this.setState({N4: event.target.value})
    }
    changeN5Handler=(event) =>{
      this.setState({N5: event.target.value})
    }
    changeN6Handler=(event) =>{
      this.setState({N6: event.target.value})
    }
    changeN7Handler=(event) =>{
      this.setState({N7: event.target.value})
    }
    changegroup10Handler=(event) =>{
      this.setState({group10: event.target.value})
    }
    changeJobTitleTwoHandler=(event) =>{
      this.setState({JobTitleTwo: event.target.value})
      }
      changeYearsOfExpTwoHandler=(event) =>{
        this.setState({YearsOfexpTwo: event.target.value})
        }
        changeDateOfJobPostingTwoHandler=(event) =>{
          this.setState({DateOfJobPostingTwo: event.target.value})
          }
          changeCandidatesOneHandler=(event) =>{
            this.setState({CandidatesOne: event.target.value})
            }
            changeJobTitleThreeHandler=(event) =>{
              this.setState({JobTitleThree: event.target.value})
              }
              changeYearsOfExpThreeHandler=(event) =>{
                this.setState({YearsOfexpThree: event.target.value})
                }
                changeDateOfJobPostingThreeHandler=(event) =>{
                  this.setState({DateOfJobPostingThree: event.target.value})
                  }
                  changeCandidatesThreeHandler=(event) =>{
                    this.setState({CandidatesThree: event.target.value})
                    }
        
  state={
    collapseID: ""
  }
  
  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  
render()
{
  const { collapseID } = this.state;
    return(
<div className="container align-items-center"  >
   <div className='mt-3' >
   <div className="border border-dark rounded-lg" >
    <div class = "scroll" style={{display:"block",width:"1000px",height:"1000px",overflowX:"auto",overflowX:"hidden"}}>
    <div class="row">
    <div class="col">              
 <h5 class="mb-3 p-2" >TOP QUALIFIED JOBSEEKERS</h5>
 <hr class="border-darkw-100 mx-auto" />
</div>
 </div>
 <form onSubmit={this.submitHandler}>
 {/* <div class="col-md-12">
<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
    <div class="panel panel-default">
        <div class="panel-heading" role="tab" id="headingOne">
             <h4 class="panel-title" >
             <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" 
    aria-expanded="true" aria-controls="collapseOne" style={{background:"#4285f4",float:"right",color:"black",padding:"5px"}} ><FontAwesomeIcon icon={faMinus}/> </a>
    </h4>

        </div>
        <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
            <div class="panel-body"></div>
        </div>
    </div>
</div>
</div> */}
 <div class="container-fluid">     
  {/* <div id="collapseOne" class="collapse">   */}
  <div class="row-sm">
                   <label  style={{ fontWeight:"bold"}}>Job Title</label>  
                    <label>:</label>
 <input type="text" Name="JobTitle"  
 value={this.state.JobTitle} onChange={this.changeJobTitleHandler} style={{color:"#ee6724",outline:"none"}}/>
 </div>
 
 <div class="row-sm">
 <label style={{fontWeight:"bold"}}>Years of Experience</label>
  <label>:</label>
  <input type="text" Name="YearsOfExp"  
  value={this.state.YearsOfExp} onChange={this.changeYearsOfExpHandler}
  style={{color:"#ee6724",outline:"none"}}/>
 </div>

  <div class="row-sm">
 <label  style={{fontWeight:"bold"}}>Date of posting job </label>
 <label>:</label>
  <input type="text" Name="DateOfJobPosting"  
   onChange={this.changeDateOfJobPostingHandler}
  style={{color:"#ee6724",outline:"none"}}/>
  </div>

  < div class="row-sm">
  <label  style={{fontWeight:"bold"}}>Location</label>
  <label>:</label>
  <input type="text" Name="Location" 
  value={this.state.Location} onChange={this.changeLocationHandler}
  style={{color:"#ee6724",outline:"none"}}/>
 </div>

 < div class="row-sm">
<label  style={{fontWeight:"bold"}}>Skills required</label>
<label>:</label>
<input type="text" Name="SkillsReq"  
value={this.state.SkillsReq} onChange={this.changeSkillsReqHandler}
style={{color:"#ee6724",outline:"none"}}/><br></br>
</div>
                 
  <div class="table-responsive-sm">          
  <table class="table table-bordered" >
  <tbody style={{borderColor:"black"}}>
      <tr>
        <th  rowspan="2" style={{fontWeight:"bold",borderColor:"black"}}>Name of Jobseeker</th>
        <th colSpan="3"  style={{fontWeight:"bold",borderColor:"black"}}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Years of Experience</th>
        <th colSpan="3"  style={{fontWeight:"bold",borderColor:"black"}}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Proficiency Test</th>
        <th rowSpan="2"  style={{fontWeight:"bold",borderColor:"black"}}>Current Salary<br></br>&nbsp;&nbsp;&nbsp;&nbsp;(in LPA)</th>
        <th rowSpan="2"  style={{fontWeight:"bold",borderColor:"black"}}>&nbsp;&nbsp;&nbsp;Select<br></br>Candidate</th>
      </tr>
      
    
    
      <tr>
      
        <td style={{fontWeight:"bold",borderColor:"black"}}>HTML</td>
        <td style={{fontWeight:"bold",borderColor:"black"}}>CSS</td>
        <td style={{fontWeight:"bold",borderColor:"black"}}>JavaScript</td>
        <td style={{fontWeight:"bold",borderColor:"black"}}>HTML</td>
        <td style={{fontWeight:"bold",borderColor:"black"}}>CSS</td>
        <td style={{fontWeight:"bold",borderColor:"black"}}>JavaScript</td>
      </tr>
      <tr>
       
        <td style={{borderColor:"black"}}>
        <input type="text" Name="User1" 
        value={this.state.User1} onChange={this.changeUser1Handler}
        style={{color:"#ee6724",outline:"none",width:"120px"}}/>
        </td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="K1" 
        value={this.state.K1} onChange={this.changeK1Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="K2"
        value={this.state.K2} onChange={this.changeK2Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="K3" 
        value={this.state.K3} onChange={this.changeK3Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="K4" 
        value={this.state.k4} onChange={this.changek4Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="K5" 
        value={this.state.K5} onChange={this.changeK5Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="K6"
        value={this.state.K6} onChange={this.changeK6Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="K7"
        value={this.state.K7} onChange={this.changeK7Handler}
        style={{color:"black",outline:"none",width:"50px"}}/>
        </td>
        <td style={{borderColor:"black"}}>
        <div class="col-1">
       {/* <a href ="#" class="btn  "><FontAwesomeIcon icon={faCheckSquare}/></a> */}
       <input type="checkbox" id="group1_a"
 Name="group1" value="1a" value={this.state.group1} onChange={this.changegroup1Handler}
  style={{width:"40px",height:"30px"}} />
      </div>
        </td>
      </tr>
      <tr>
       
       <td style={{borderColor:"black"}}>
       <input type="text" Name="User2" 
       value={this.state.User2} onChange={this.changeUser2Handler}
        style={{color:"#ee6724",outline:"none",width:"120px"}}/>
       </td>
       <td style={{borderColor:"black"}}>
        <input type="text" Name="L1"
        value={this.state.L1} onChange={this.changeL1Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text"
        value={this.state.L2} onChange={this.changeL2Handler}
        Name="L2" style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="L3"
        value={this.state.L3} onChange={this.changeL3Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="L4" 
        value={this.state.L4} onChange={this.changeL4Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="L5" 
        value={this.state.L5} onChange={this.changeL5Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="L6"
        value={this.state.L6} onChange={this.changeL6Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="L7" 
        value={this.state.L7} onChange={this.changeL7Handler}
        style={{color:"black",outline:"none",width:"50px"}}/>
        </td>

       <td style={{borderColor:"black"}}>
       <div class="col-1">
       {/* <a href ="#" class="btn  "><FontAwesomeIcon icon={faCheckSquare}/></a> */}
       <input type="checkbox" id="group2_b" Name="group2" value="2b"
       value={this.state.group2} onChange={this.changegroup2Handler}
       style={{width:"40px",height:"30px"}} />
      </div>
       </td>
     </tr>
     <tr>
       
        <td style={{borderColor:"black"}}>
        <input type="text" Name="User3"
        value={this.state.User3} onChange={this.changeUser3Handler}
        style={{outline:"none",width:"120px"}}/>
        </td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="T1"
        value={this.state.T1} onChange={this.changeT1Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="T2"
        value={this.state.T2} onChange={this.changeT3Handler} style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="T3" 
        value={this.state.T3} onChange={this.changeT3Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="T4"
        value={this.state.T4} onChange={this.changeT4Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="T5" 
        value={this.state.T5} onChange={this.changeT5Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="T6" 
        value={this.state.T6} onChange={this.changeT6Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="T7"
        value={this.state.T7} onChange={this.changeT7Handler}
        style={{color:"black",outline:"none",width:"50px"}}/>
        </td>

        <td style={{borderColor:"black"}}>
        <div class="col-1">
       {/* <a href ="#" class="btn  "><FontAwesomeIcon icon={faCheckSquare}/></a> */}
       <input type="checkbox" id="group3_c" Name="group3" value="3b"
       value={this.state.group3} onChange={this.changegroup3Handler}
       style={{width:"40px",height:"30px"}} />
      </div>
        </td>
      </tr>
     
     <tr>
       
       <td style={{borderColor:"black"}}>
       <input type="text"  Name="User4"
       value={this.state.User4} onChange={this.changeUser4Handler}
       style={{outline:"none",width:"120px"}}/>
       </td>
       <td style={{borderColor:"black"}}>
        <input type="text" Name="Y1"
        value={this.state.Y1} onChange={this.changeY1Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="Y2"
        value={this.state.Y2} onChange={this.changeY2Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="Y3"
        value={this.state.Y3} onChange={this.changeY3Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="Y4"
        value={this.state.Y4} onChange={this.changeY4Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="Y5" 
        value={this.state.Y5} onChange={this.changeY5Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="Y6" 
        value={this.state.Y6} onChange={this.changeY6Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="Y7"
        value={this.state.Y7} onChange={this.changeY7Handler}
        style={{color:"black",outline:"none",width:"50px"}}/>
        </td>

       <td style={{borderColor:"black"}}>
       <div class="col-1">
       {/* <a href ="#" class="btn  "><FontAwesomeIcon icon={faCheckSquare}/></a> */}
       <input type="checkbox" id="group4_d" Name="group4" value="4d" 
       value={this.state.group4} onChange={this.changegroup4Handler}
       style={{width:"40px",height:"30px"}} />
      </div>
       </td>
     </tr>
    
     <tr>  
       <td style={{borderColor:"black"}}>
       <input type="text" Name="User5"
       value={this.state.User5} onChange={this.changeUser5Handler}
       style={{outline:"none",width:"120px"}}/>
       </td>
       <td style={{borderColor:"black"}}>
        <input type="text" Name="S1" 
        value={this.state.S1} onChange={this.changeS1Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="S2" 
        value={this.state.S2} onChange={this.changeS2Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="S3" 
        value={this.state.S3} onChange={this.changeS3Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="S4" 
        value={this.state.S4} onChange={this.changeS4Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="S5" 
        value={this.state.S5} onChange={this.changeS5Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="S6" 
        value={this.state.S6} onChange={this.changeS6Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="S7"
        value={this.state.S7} onChange={this.changeS7Handler}
         style={{color:"black",outline:"none",width:"50px"}}/>
        </td>

       <td style={{borderColor:"black"}}>
       <div class="col-5">
       {/* <a href ="#" class="btn  " style={{fontFamily:"fontAwesome",content:"&#xf096",
       borderColor:"black",padding:"10px"}}></a> */}
       <input type="checkbox" id="group5_e" Name="group5" value="5e" 
       value={this.state.group5} onChange={this.changegroup5Handler}
       style={{width:"40px",height:"30px"}} />
      </div>
       </td>
     </tr>
    
     <tr>
       
       <td style={{borderColor:"black"}}>
       <input type="text" Name="User6"
       value={this.state.User6} onChange={this.changeUser6Handler}
       style={{outline:"none",width:"120px"}}/>
       </td>
       <td style={{borderColor:"black"}}>
        <input type="text" Name="A1" 
        value={this.state.A1} onChange={this.changeA1Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="A2" 
        value={this.state.A2} onChange={this.changeA2Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="A3" 
        value={this.state.A3} onChange={this.changeA3Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="A4"
        value={this.state.A4} onChange={this.changeA4Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="A5"
        value={this.state.A5} onChange={this.changeA5Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="A6" 
        value={this.state.A6} onChange={this.changeA6Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="A7"
        value={this.state.A7} onChange={this.changeA7Handler}
        style={{color:"black",outline:"none",width:"50px"}}/>
        </td>

       <td style={{borderColor:"black"}}>
       <div class="col-1">
       {/* <a href ="#" class="btn  "><FontAwesomeIcon icon={faCheckSquare}/></a> */}
       <input type="checkbox" id="group6_f" Name="group6" value="6f"
       value={this.state.group6} onChange={this.changegroup6Handler}
       style={{width:"40px",height:"30px"}} />
      </div>
       </td>
     </tr>
    
     <tr>
       
       <td style={{borderColor:"black"}}>
       <input type="text" Name="user7" 
       value={this.state.User7} onChange={this.changeUser7Handler}
       style={{outline:"none",width:"120px"}}/>
       </td>
       <td style={{borderColor:"black"}}>
        <input type="text" Name="J1"
        value={this.state.J1} onChange={this.changeJ1Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="J2" 
        value={this.state.J2} onChange={this.changeJ2Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="J3" 
        value={this.state.J3} onChange={this.changeJ3Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="J4"
        value={this.state.J4} onChange={this.changeJ4Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="J5" 
        value={this.state.J5} onChange={this.changeJ5Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="J6" 
        value={this.state.J6} onChange={this.changeJ6Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="J7" 
        value={this.state.J7} onChange={this.changeJ7Handler}
        style={{color:"black",outline:"none",width:"50px"}}/>
        </td>

       <td style={{borderColor:"black"}}>
       <div class="col-1">
       {/* <a href ="#" class="btn  "><FontAwesomeIcon icon={faCheckSquare}/></a> */}
       <input type="checkbox" id="group7_g" Name="group7" value="7g" 
       value={this.state.group7} onChange={this.changegroup7Handler}
       style={{width:"40px",height:"30px"}} />
      </div>
       </td>
     </tr>
    
     <tr>
       
       <td style={{borderColor:"black"}}>
       <input type="text" Name="User8" 
       value={this.state.User8} onChange={this.changeUser8Handler}
       style={{outline:"none",width:"120px"}}/>
       </td>
       <td style={{borderColor:"black"}}>
        <input type="text" Name="C1" 
        value={this.state.C1} onChange={this.changeC1Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="C2" 
        value={this.state.C2} onChange={this.changeC2Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="C3"
        value={this.state.C3} onChange={this.changeC3Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="C4" 
        value={this.state.C4} onChange={this.changeC4Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="C5"
        value={this.state.C5} onChange={this.changeC5Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="C6"
        value={this.state.C6} onChange={this.changeC6Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="C7" 
        value={this.state.C7} onChange={this.changeC7Handler}
        style={{color:"black",outline:"none",width:"50px"}}/>
        </td>
       <td style={{borderColor:"black"}}>
       <div class="col-1">
       {/* <a href ="#" class="btn  " style={{fontFamily:"fontAwesome",content:"&#xf096",
       borderColor:"black",padding:"10px"}}></a> */}
       <input type="checkbox" id="group8_h" Name="group8" value="8h"
       value={this.state.group8} onChange={this.changegroup8Handler}
       style={{width:"40px",height:"30px"}} />
      </div>
       </td>
     </tr>
    
     <tr>
       
       <td style={{borderColor:"black"}}>
       <input type="text" Name="User9" 
       value={this.state.User9} onChange={this.changeUser9Handler}
       style={{outline:"none",width:"120px"}}/>
       </td>
       <td style={{borderColor:"black"}}>
        <input type="text" Name="R1" 
        value={this.state.R1} onChange={this.changeR1Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="R2" 
        value={this.state.R2} onChange={this.changeR2Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="R3"
        value={this.state.R3} onChange={this.changeR3Handler}
         style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="R4" 
        value={this.state.R4} onChange={this.changeR4Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="R5"
        value={this.state.R5} onChange={this.changeR5Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="R6" 
        value={this.state.R6} onChange={this.changeR6Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="R7" 
        value={this.state.R7} onChange={this.changeR7Handler}
        style={{color:"black",outline:"none",width:"50px"}}/>
        </td>

       <td style={{borderColor:"black"}}>
       <div class="col-1">
       {/* <a href ="#" class="btn  " style={{fontFamily:"fontAwesome",content:"&#xf096",
       borderColor:"black",padding:"10px"}}></a> */}
       <input type="checkbox" id="group9_i" Name="group9" value="9i"
       value={this.state.group9} onChange={this.changegroup9Handler}
       style={{width:"40px",height:"30px"}} />
      </div>
       </td>
     </tr>
     <tr>
       
       <td  style={{borderColor:"black"}}>
       <input type="text"  Name="User10"
       value={this.state.User10} onChange={this.changeUser10Handler}
       style={{outline:"none",width:"120px"}}/>
       </td>
       <td style={{borderColor:"black"}}>
        <input type="text" Name="N1"
        value={this.state.N1} onChange={this.changeN1Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="N2"
        value={this.state.N2} onChange={this.changeN2Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="N3"
        value={this.state.N3} onChange={this.changeN3Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="N4" 
        value={this.state.N4} onChange={this.changeN4Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="N5"
        value={this.state.N5} onChange={this.changeN5Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="N6"
        value={this.state.N6} onChange={this.changeN6Handler}
        style={{color:"#ee6724",outline:"none",width:"50px"}}/></td>
        <td style={{borderColor:"black"}}>
        <input type="text" Name="N7" 
        value={this.state.N7} onChange={this.changeN7Handler}
        style={{color:"black",outline:"none",width:"50px"}}/>
        </td>

       <td style={{borderColor:"black"}}>
       <div class="col-1" >
       {/* <a href ="#" class="btn  " style={{fontFamily:"fontAwesome",content:"&#xf096",
       borderColor:"black",padding:"10px"}}></a> */}
  <input type="checkbox" id="group10_j" Name="group10" value="1j" style={{width:"40px",height:"30px"}} />
      </div>
       </td>
     </tr>
    </tbody>
  </table>
</div>
</div>
 
<div class="row py-3" >
<div class="col col-sm offset-9 ">
<button type="submit"  class="btn btn-primary" >Contact Selected Candidate</button>
{/* onClick={this.ContactSelectedCandidates} */}
</div>
 </div>
 </form>
             {/* <div class="container">
             <hr class="border-darkw-100 mx-auto"/>
             <div class="col-md-12">
 <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
  <div class="panel panel-default">
   <div class="panel-heading1" role="tab" id="headingTwo">
    <h4 class="panel-title"  >
    <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" 
    aria-expanded="true" aria-controls="collapseTwo"
     style={{background:"#4285f4",float:"right",color:"black",fontWeight:"bold"}} >+</a>
    </h4>
  </div>
  <div id="collapseTwo" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingTwo">
 <div class="panel-body1"></div>
    </div>  
  </div>
   </div>
 </div>
 <div class="container-fluid">     
<div id="collapseTwo" class="collapse">  
                                                          
             <div>
             <label style={{fontWeight:"bold"}}>Job Title :</label>
             <input type="text" className="JobTitleOne"   style={{outline:"none"}}/>
            <label style={{fontWeight:"bold"}}>Years of Experience :</label>
            <input type="text" className="YearsOfExpOne"   style={{outline:"none"}}/>
           <label style={{fontWeight:"bold"}}>Date of posting Jobs :</label>
           <input type="text" className="DateOfJobPostingOne"   style={{outline:"none"}}/>
           <label style={{fontWeight:"bold"}}>No of Candidates :</label>
           <input type="text" className="CandidatesOne"   style={{outline:"none"}}/>
                    <br></br><br></br>
                    </div>
                    </div>
                    </div>
                    <hr class="border-darkw-100 mx-auto"/>
                    <div class="col-md-12">
 <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
  <div class="panel panel-default">
   <div class="panel-heading" role="tab" id="headingThree">
    <h4 class="panel-title"  >
    <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree" 
    aria-expanded="true" aria-controls="collapseThree" style={{background:"#4285f4",float:"right",color:"black",fontWeight:"bold"}} >+</a>
    </h4>
  </div>
  <div id="collapseThree" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingThree">
 <div class="panel-body"></div>
    </div>  
  </div>
   </div>
 </div>
 <div class="container-fluid">     
<div id="collapseThree" class="collapse">  
                     
             <div>
             <label style={{fontWeight:"bold"}}>Job Title :</label>
             <input type="text" className="JobTitleTwo"   style={{outline:"none"}}/>
            <label style={{fontWeight:"bold"}}>Years of Experience :</label>
            <input type="text" className="YearsOfExpTwo"   style={{outline:"none"}}/>
           <label style={{fontWeight:"bold"}}>Date of posting Jobs :</label>
           <input type="text" className="DateOfJobPostingTwo"   style={{outline:"none"}}/>
           <label style={{fontWeight:"bold"}}>No of Candidates :</label>
           <input type="text" className="CandidatesTwo"   style={{outline:"none"}}/>
                    </div>
                    <hr class="border-darkw-100 mx-auto"/>

                     
                     
    
               </div>
               
               </div>
               </div> */}
<MDBContainer>
      <MDBContainer className="mt-5" style={{width:"1000px"}} >
        <MDBCard className="mt-3">
          <a style={{height:"35px",paddingRight:"35px"}} onClick={this.toggleCollapse("collapse1")}>
  <label style={{background:"#4285f4",float:"right",color:"black",
  fontWeight:"bold" ,width:"30px",paddingLeft:"10px",
  paddingTop:"5px",paddingBottom:"5px",paddingRight:"20px"}}>
    <FontAwesomeIcon icon={faPlus}/></label>
            <i className={ collapseID==="collapse1" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
          </a>
          <MDBCollapse id="collapse1" isOpen={collapseID}>
            <MDBCardBody>
            <label style={{fontWeight:"bold"}}>Job Title :</label>
             <input type="text" Name="JobTitleTwo"  
             value={this.state.JobTitleTwo} onChange={this.changeJobTitleTwoHandler}
             style={{color:"#ee6724", width:"150px",outline:"none"}}/>
            <label style={{fontWeight:"bold"}}>Years of Experience :</label>
            <input type="text" Name="YearsOfExpTwo" 
            value={this.state.YearsOfExpTwo} onChange={this.changeYearsOfExpTwoHandler}
            style={{ color:"#ee6724",width:"70px",outline:"none"}}/>
           <label style={{fontWeight:"bold"}}>Date of posting Jobs :</label>
           <input type="text" Name="DateOfJobPostingTwo"  
           value={this.state.DateOfJobPostingTwo} onChange={this.changeDateOfJobPostingTwoHandler}
           style={{color:"#ee6724",width:"100px",outline:"none"}}/>
           <label style={{fontWeight:"bold"}}>No of Candidates :</label>
           <input type="text" Name="CandidatesOne"   
           value={this.state.CandidatesOne} onChange={this.changeCandidatesOneHandler}
           style={{color:"#ee6724",width:"50px",outline:"none"}}/>
            </MDBCardBody>
          </MDBCollapse>
        </MDBCard>

        <MDBCard>
          <a style={{height:"35px",paddingRight:"35px"}} onClick={this.toggleCollapse("collapse2")}>
  <label style={{background:"#4285f4",float:"right",color:"black",
  fontWeight:"bold" ,width:"30px",paddingLeft:"10px",
  paddingTop:"5px",paddingBottom:"5px",paddingRight:"20px"}}>
    <FontAwesomeIcon icon={faPlus}/></label>
            <i className={ collapseID==="collapse2" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
          </a>
          <MDBCollapse id="collapse2" isOpen={collapseID} >
            <MDBCardBody>
            <label style={{fontWeight:"bold"}}>Job Title :</label>
             <input type="text" Name="JobTitleThree"  
             value={this.state.JobTitleThree} onChange={this.changeJobTitleThreeHandler}
             style={{ color:"#ee6724",color:"#ee6724",width:"150px",outline:"none"}}/>
            <label style={{fontWeight:"bold"}}>Years of Experience :</label>
            <input type="text" Name="YearsOfExpThree"  
            value={this.state.YearsOfExpThree} onChange={this.changeYearsOfExpThreeHandler}
            style={{ color:"#ee6724",width:"70px",outline:"none"}}/>
           <label style={{fontWeight:"bold"}}>Date of posting Jobs :</label>
           <input type="text" Name="DateOfJobPostingThree"  
           value={this.state.DateOfJobPostingThree} onChange={this.changeDateOfJobPostingThreeHandler}
           style={{color:"#ee6724",width:"100px",outline:"none"}}/>
           <label style={{fontWeight:"bold"}}>No of Candidates :</label>
           <input type="text" Name="CandidatesTwo"  
           value={this.state.CandidatesTwo} onChange={this.changeCandidatesTwoHandler}
           style={{color:"#ee6724",width:"50px",outline:"none"}}/>

            </MDBCardBody>
          </MDBCollapse>
        </MDBCard>
      </MDBContainer>
    </MDBContainer>


               </div>
               </div>

</div>
        
             {/* <div class="form-group">
             
             <button type="submit"  class="btn btn-primary"  style={{float:"right"}} >Go to Employer Profile</button>
             <button type="submit"  class="btn btn-primary" style={{float:"right"}}>Go to Employer Job Post</button>
             </div> */}
             
        </div>
        
        

  
  
      

    )
}
}
export default TopQualifiedJobSeekersComponent;