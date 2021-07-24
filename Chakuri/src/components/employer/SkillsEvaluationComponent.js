
import React, { Component } from 'react';

import EmployerMenu from '../../components/employer/EmployerMenu';
import './SkillsEvaluationComponent.css'    
class SkillsEvalutationComponent extends Component{
render(){
    return(<div>

   
<div className="container align-items-center">
             <div className='mt-3'>
                <div className="border border-dark rounded-lg" >
                    <label><b>Skills Assesement Evaluation</b></label>
                    <hr className =" border-dark-40 " />   
                    <label><b><u>Python</u></b></label>
                    {/* <div class="skillsEvaluationTableHead"><h6>Required Proficiency:</h6>
                   <h6>Years of Experience</h6>
                    &nbsp;&nbsp;<h6>No of Tests given:</h6>
                    &nbsp;&nbsp;<h6>No of Tests yet to be taken</h6></div> */}
                    <div>
             <label style={{fontWeight:"bold"}}> &nbsp;  &nbsp;Required Proficiency:</label>
                    <label style={{color:"#ee8975"}}>7/10&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &emsp;&emsp;&emsp;</label>
                    
                    {/* <label style={{fontWeight:"bold"}}>&nbsp;&nbsp;&nbsp;Years of Experience :</label>
                    <label style={{color:"#ee8975"}}>2-5 years  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    
                    <label style={{fontWeight:"bold"}}>&nbsp;&nbsp;No of Tests given :</label>
                    <label style={{color:"#ee8975"}}>1 &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                  
                    <label style={{fontWeight:"bold"}}>&nbsp;&nbsp;No of Tests Yet to be taken :</label>
                    <label style={{color:"#ee8975"}}>5  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label> */}
                    
                    
                   
                    </div>
                    <hr class =" border-darkw-100 mx-auto " />
                    <div class = "scroll">
                    <div className="container align-items-center">
             <div className='mt-3'>
                    <div className="border border-dark " >

                    <div>
                   
                   
             <label style={{fontWeight:"bold"}}> &nbsp;  &nbsp;Kushal Rao:</label>
                    
             &emsp;&emsp;&emsp;&emsp;&emsp;
                    <label style={{fontWeight:"bold"}}>&nbsp;&nbsp;&nbsp;Test Score :</label>
                    <label style={{color:"#ee8975"}}>9/10  &nbsp; &nbsp;</label>
                    <label style={{fontWeight:"bold"}}>&nbsp;&nbsp;&nbsp;Test Date :</label>
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <label style={{fontWeight:"bold"}}>&nbsp;&nbsp;&nbsp;No of Test Tries :</label>
                    &emsp;&emsp;
                    <button type="submit"class=" btn btn-primary">View Test</button>
                    <button type="submit"class=" btn btn-primary">Accept</button>
                    <button type="submit"class=" btn btn-primary">Reject</button>
                    
                    
                    
                    <hr className =" border-dark-40 " />
                    <label style={{fontWeight:"bold"}}> &nbsp;  &nbsp;Kushal Rao:</label>
                    
             &emsp;&emsp;&emsp;&emsp;&emsp;
                    <label style={{fontWeight:"bold"}}>&nbsp;&nbsp;&nbsp;Test Score :</label>
                    <label style={{color:"#ee8975"}}>9/10  &nbsp; &nbsp;</label>
                    <label style={{fontWeight:"bold"}}>&nbsp;&nbsp;&nbsp;Test Date :</label>
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <label style={{fontWeight:"bold"}}>&nbsp;&nbsp;&nbsp;No of Test Tries :</label>
                    &emsp;&emsp;
                    <button type="submit"class=" btn btn-primary">View Test</button>
                    <button type="submit"class=" btn btn-primary">Accept</button>
                    <button type="submit"class=" btn btn-primary">Reject</button>
                           <hr className =" border-dark-40 " />

                           <label style={{fontWeight:"bold"}}> &nbsp;  &nbsp;Kushal Rao:</label>
                    
                    &emsp;&emsp;&emsp;&emsp;&emsp;
                           <label style={{fontWeight:"bold"}}>&nbsp;&nbsp;&nbsp;Test Score :</label>
                           <label style={{color:"#ee8975"}}>9/10  &nbsp; &nbsp;</label>
                           <label style={{fontWeight:"bold"}}>&nbsp;&nbsp;&nbsp;Test Date :</label>
                           &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                           <label style={{fontWeight:"bold"}}>&nbsp;&nbsp;&nbsp;No of Test Tries :</label>
                           &emsp;&emsp;
                           <button type="submit"class=" btn btn-primary">View Test</button>
                           <button type="submit"class=" btn btn-primary">Accept</button>
                           <button type="submit"class=" btn btn-primary">Reject</button>
                    
                        
                    
                   
                    
                    </div>
                    
</div>
</div>
</div>
</div>


                    
                    </div>
                    </div>
                    </div>
    </div>);
}
}
export default SkillsEvalutationComponent;