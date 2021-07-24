import React from 'react'  
import axios from 'axios';  
import { useState, useEffect } from 'react' 


function TrainerNotificationComponent(props) {  
  const [data, setData] = useState([]);  

  useEffect(() => {  
    const GetData = async () => {  
      const result = await axios('http://localhost:1202/employer_notification');  
      setData(result.data);  
 };  
 GetData();  
 }, []);  
 
 return (  
  
    <div className="container-fluid">  
    <div>
  <br></br>
  <br></br>
   <br></br>
    <ul>
       <li><h4>JOBSEEKER  |EMPLOYER|ADMIN |< label class="text-primary">TRAINER</label></h4>
       </li>
       </ul>
       <hr class="border border-dark" style={{font:"5px"}}></hr>
        </div>
         {  
         data.map((item) => {  
            return <>
            <br></br>
            <br></br>
            <div class="div" 
             style={{marginLeft: "50px", width: "85%",
              height: "150px",
              marginBottom: "5px",
              size: "20px",
               border: "1px solid black"}}> 
               
            <div className="table-wrapper-scroll-y my-custom-scrollbar">
                <i class="fa fa-user-circle fa-4x" style={{paddingLeft:"30px",paddingTop:"20px"}} aria-hidden="true"></i>
                <label class="label"style={{fontSize: "24px",paddingLeft: "15px"}}><b>{item.user_name}:</b></label>
                <label class="label"style={{fontSize: "24px",paddingLeft: "15px"}}><b>{item.check}</b></label>
                <br></br>
                <label class="label"style={{fontSize: "20px",paddingLeft: "110px"}}>{item.message}</label>
                 </div>
                 </div>
                   </>  
                  })}       
                
                    <br></br>
                  
                  </div>  
                  

  )  
}  
export default TrainerNotificationComponent;