import React from 'react';
import {useEffect,useState} from 'react';
import axios from 'axios';

function Modal2(props) {  
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


  <button type="check-box" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
   
  </button>
  {
            data.map((item) => {  
              return <>
  <div class="modal fade" id="myModal">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
      
        <div class="modal-header">
          <h4 class="modal-title">{item.user_name}</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <div class="modal-body">
            {item.message}
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

export default Modal2;