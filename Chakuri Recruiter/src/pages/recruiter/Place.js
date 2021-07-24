import React from 'react';
import axios from 'axios';  
import { useState, useEffect } from 'react' 

   
function Place(props) {
  const [data, setData] = useState([]);  
 


  useEffect(() => {  
    const GetData = async () => {  
      const result = await axios('http://localhost:1202/placement_status');  
      setData(result.data);  

    };  
    GetData();  

  }, []);  


  return (
    
    <div className="animated fadeIn">  
    <br></br>
    <ul>
       <li><h5>APPLIED JOBSEEKERS | SKILLS EVALUATION | <label class="text-primary"> PLACEMENT STATUS </label></h5>
       </li>
       </ul>
       <h4 class="head"><u>Intern Data Scientist</u></h4><br></br>
       <div class="col">
               <h6>Shortlisted Candidates:<label class="text-danger">10</label></h6>
                   </div>
  
         {  
          
          data.map((item) => {  
         
            var avg=8/10;
            item.average_testscore=avg;
          
if (item.average_testscore>=8.5/10){
  
    return (
   
        <div>{item.user_name}Shortlisted Students
        {item.status} {item.round_status}

        </div>
      )
    } 
  else if (item.average_testscore<= 6/10) {
    return (
        <div>{item.user_name} Rejected Students{item.status}
          {item.round_status}
        </div>
      )
    }

 else if (item.average_testscore>=7/10&&item.average_testscore<=8/10){
     return (
    
     <div>{item.user_name}
     <br></br>Screening Students
     <br></br>{item.status}
       {item.round_status}
     </div>
              )
              
            }
   
      })}      
    </div>
  );
}
   
export default Place;
