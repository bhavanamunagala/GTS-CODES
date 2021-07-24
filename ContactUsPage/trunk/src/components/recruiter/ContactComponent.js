import { Alert, ButtonGroup, Col, Container, Form, Modal, Row,Toast } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {Typography,Grid,Button} from '@material-ui/core';
const ContactComponent = () => {
    const [details,setDetails] = useState({
        firstname:"",
        lastname:"",
        email:"",
        phonenumber:"",
      message:""
     });
    const {
     firstname,
     lastname,
     email,
     message,
     phonenumber,
    
       
    } = details;
    const onInputChange = e =>{
        setDetails({...details,[e.target.name] : e.target.value});
    };
    const onSubmit = async e =>{
        e.preventDefault();
        await Axios.post("http://localhost:1202/",details);
        window.location.reload(true);
     
    };

    return (
        <div>
           
            <div class="row" >
                <div class="col-6">
                    <h4 className="text" style={{paddingLeft:"100px" ,fontSize:"40px" ,color:"white"}} >
                    Send Your Message:</h4>
                    <br>
                    </br>
             
                     </div>
                      <div class="col-6">
                      <div class="row">
                      <div class="col-6">
                          <div class="form-group purple-border">
                              <label for="exampleFormControlTextarea2"></label>
                              <input style={{}} type="text" class="form-control" id="usr" name="username"
                               placeholder="First Name"onChange = {e => onInputChange(e)} name="firstname" value={firstname}rows="3"
                       ></input>
                        </div> 
                               </div>    
                     <div class="col-6">
                  <div class="form-group purple-border">
                       <label for="exampleFormControlTextarea2"></label>
                      <input  type="text" class="form-control" id="usr" name="username"
                        
                        placeholder="Last Name"
                        onChange = {e => onInputChange(e)} name="lastname" value={lastname}rows="3"
                       ></input>
             
                       </div> 
                       </div><br></br> 
                       </div>
                       
                 
                       <div class="row">
                      <div class="col-6">
                          <div class="form-group purple-border">
                              <label for="exampleFormControlTextarea2"></label>
                              <input  type="text" class="form-control" id="usr" name="username"
                        
                        placeholder="Email Id" onChange = {e => onInputChange(e)} name="email" value={email}rows="3"
                       ></input>
                       
                               </div> 
                               </div>           
              <div class="col-6">
                  <div class="form-group purple-border">
                      <label for="exampleFormControlTextarea2"></label>
                      <input  type="text" class="form-control" id="usr" name="username"
                        
                        placeholder="Phone Number" onChange = {e => onInputChange(e)} name="phonenumber" value={phonenumber}rows="3"
                        ></input>
                 
                       </div> 
                       </div><br></br> 
                       </div>
                       
               
        
                      <div class="row">
                     <div class="col-12">
                          <div class="form-group purple-border">
                              <label for="exampleFormControlTextarea2"></label>
                               <textarea class="form-control rounded-0"
                               placeholder="Message"id="exampleFormControlTextarea2" 
                               onChange = {e => onInputChange(e)} name="message" value={message}rows="3"></textarea>
                          </div> 
                      </div> 
                  </div>
                  <Button  style={{backgroundColor:"#ff9800",color:"white"}}variant="contained" >
                         Send  Message
                    </Button>             
                     </div>
                  </div>
                  <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
                   </div>
    )
}

export default ContactComponent;