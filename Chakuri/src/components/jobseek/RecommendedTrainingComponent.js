import React from 'react'  
import axios from 'axios';  
import { useState, useEffect } from 'react' 

function RecommendedTrainingComponent(props) {  
  const [data, setData] = useState([]);  


  useEffect(() => {  
    const GetData = async () => {  
      const result = await axios('http://localhost:1200/recommended_trainings');  
      setData(result.data);  

    };  


    GetData();  

  }, []);  
  return (  
  
    <div className="container-fluid">  
      <br></br>
         <h4 class="Head" style={{fontSize:"30px"}}>Gauri Dutt</h4>
         <br></br>
            <div>
       <ul>
       <li><h5>SKILLS RATING | SEARCH TRAINING | <label class="text-primary">RECOMMENDED TRAINING LIST  |</label> TRAINING IN PROGRESS</h5>
      </li>
       </ul>
   </div>
    
            {  
             data.map((item) => {  
                      return <>
              
                  
      <div className="container-fluid">
        <label class="label"style={{fontSize: "25px"}}><b>{item.training}</b></label>
                    </div>
   
       <div class="row">
         <div class="div" style={{margin: "20px",
  width: "95%",
  height: "200px",
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
                                                            
                                  </div>
                                                                        
                      <br></br>
                 </div>
       
     
                   </>  
                   
                  })}       
                    <br></br>
                  </div>  
                  

  )  

}  

  

export default RecommendedTrainingComponent;