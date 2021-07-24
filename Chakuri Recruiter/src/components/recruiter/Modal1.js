import React from 'react';
import {useEffect,useState} from 'react';
import axios from 'axios';

function Modal1(props) {  
    const [data, setData] = useState([]);  
  
    useEffect(() => {  
      const GetData = async () => {  
        const result = await axios('http://localhost:1202/Applied_Jobseekers');  
        setData(result.data);  
   };  
   GetData();  
   }, []);  
        return (

<div class="container">


   
   
  <button type="radio" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
    Inform Candidate
  </button>

  {
            data.map((item) => {  
              return <>
  <div class="modal fade" id="myModal">
  <div class="modal-dialog modal-md">
  <div class="modal-content"  style={{borderRadius:"30px" }}>
      
        <div class="modal-header">
       <b> <label class="text-danger" style={{fontSize:"20px"}}>{item.user_name}</label></b>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <div class="modal-body">
        <label  style={{fontSize:"20px"}}>{item.message}</label>
        </div>
        
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>
  </>  
        })}   
         
</div>
   );

}

export default Modal1;














