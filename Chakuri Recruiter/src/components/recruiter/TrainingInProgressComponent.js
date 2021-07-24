import React from 'react'  
import axios from 'axios';  
import { useState, useEffect } from 'react' 
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';  


function TrainingInProgressComponent(props) {  
  const [data, setData] = useState([]);  


  useEffect(() => {  
    const GetData = async () => {  
      const result = await axios('http://localhost:1202/training_inprogress');  
      setData(result.data);  

    };  


    GetData();  

  }, []);  
  return (  
  
    <div className="container-fluid">  
      <br></br>
      <h4 class="Head">Gauri Dutt</h4>
          <div>
              <ul>
              <li><h5>SKILLS RATING | SEARCH TRAINING | RECOMMENDED TRAINING LIST  |< label class="text-primary">TRAINING IN PROGRESS</label> </h5>
           
                  </li>
              </ul>
         
          </div>
         
            {  
             data.map((item) => {  
                      return <>
              
                  
      <div className="container-fluid">


    
        <label class="label"style={{fontSize: "25px"}}><b>{item.training}</b></label>
       
                 
        
      
       <div class="row">
 
         <div class="div" style={{margin: "20px",
  width: "95%",
  height: "500px",
  border: "1px solid black"}}> 
        <div class="row">
    <div class="div" 
       style={{margin: "15px", width: "5%",
       height: "50px",
       marginBottom: "10px",
       size: "20px",
       border: "1px solid black"}}> 
       <i class='fab fa-python fa-2x' ></i>
                    </div>
                    
                         <div class="col-4">
                          <h4 class="para">{item.training_name}</h4>
                                      </div>
                         <div class="col-2">
                     <h6>Date posted:<label class="text-danger">{item.date_posted}</label> </h6>
                                         </div>
                               <div class="col-2">
          <h6>Date Applied:<label class="text-danger">{item.date_applied}</label> </h6>
        
                       </div>
                     
                        <div class="col-2">
                   <h6>Experience:<label class="text-danger">{item.experience}</label></h6>
                    </div>
                                                                      </div>
                                                                      
                      <div class="div"
                      style={{ float: "right",
                        margin: "15px",
                        marginBottom: "10px",
                        width: "5%",
                        height: "50px",
                        size: "20px",
                        border: "1px solid black",
                        borderRadius: "10px",
                        float: "right"}}>
                      <h6>Skills:<label class="text-danger">{item.skills}</label> </h6>
                      </div>
            <label>{item.fees}</label>
                                                                            
                <p class="para" style={{paddingLeft:"100px"}}>We are pleased to announce that the we are holding a training session for undergraduates and<br></br>post graduates in python company XYZ is a company established since 1995,we have worked .... </p>

                                     <div class="row">
<h6 class="para" style={{ textAlign: "center"}}>Lectures attended:<label class="text-danger">{item.lectures_attended}</label> </h6>
<h6 class="para" style={{ textAlign: "center"}}>Assignments Completed:<label class="text-danger">{item.assignments_completed}</label> </h6>
<h6 class="para" style={{ textAlign: "center"}}>trainer test Score:<label class="text-danger">{item.trainer_test_score}</label> </h6>
<h6 class="para" style={{ textAlign: "center"}}>Proficiency Score in
<label class="text-danger">{item.proficiency_score}</label> 
<br></br>
Jobseeker rating on the trainer:
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span> </h6>
  
  </div>             

          
<br></br>
<br></br>
<div class="head" style={{paddingLeft:"300px"}}>Jobseekers Feedback:</div>
  <div class="div" 
       style={{marginLeft: "300px", width: "60%",
       height: "80px",
       marginBottom: "10px",
       size: "20px",
       border: "1px solid black"}}> 
          <b>Very good Trainer explained python.Would Recommend to friends</b>
       </div>
       </div>
        <br></br>
  
        </div>
  
        </div>

        </>  
        
        
      })}    
    
       <br></br>
       
        </div>  
       )  

}  
export default TrainingInProgressComponent;