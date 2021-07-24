import React, { Component } from 'react';
import {  FormGroup,Row,NavLink,NavItem, Col, ButtonGroup} from 'reactstrap';
import { Form,FormControl,FormLabel,FormRow, Button, FormCheck} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faTrash,faEdit,faUpload, faCalendar} from '@fortawesome/free-solid-svg-icons'

import AdminMenu from '../admin/AdminMenu';
import 'bootstrap/dist/css/bootstrap.css'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import { MDBIcon } from 'mdbreact';

class EmploymentAgreementComponent extends Component {
  
    render() {
       const iconStyles= {
        // marginLeft:"100%", 
         float: "left",
         clear: "left",
         height:"60px",
         width:"90px"
         
       }
      

        return (
            <>
           {/* <Header */}
           <h1 style={{color: "red"}}>"EmploymentAgreementComponent" still under construction... </h1>
                <div className="container align-items-center">      {/*MAIN class BORDER */}
                    <div divID="icon" styles={iconStyles} align="left">
            
                        <img src={process.env.PUBLIC_URL + "/image/goraitech.jpg"}
                        alt="pic" width="150px" class="iconStyles" align="left" />
                    </div>
                  
                    <h1 className="text-left display-1 font-weight-bold underline" fontSize= "700px">CHAKURI</h1>
                    <h3 class="text-left">CANDIDATE AGREEMENT</h3>
               

                    <div class="container">
                        <div className='mt-5 mb-3'>
                            <div className="border m-2  border-dark" >
                                <div class="w-100 h-50">
                                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                        <div class="carousel-inner center">
                                            <div class="carousel-item active ">
                                                <img class="d-block w-100 h-50" src={"/image/skill.jpg"} alt="First slide"/>
                                            </div>
                                        </div>
                                        <a class="carousel-control-prev" href="#carouselExampleControls"  data-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carouselExampleControls"  data-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    
                        <br /> <br />
                        {/*< Footer1 /> */}

                    </div>
                </div>        

                

                {/*MAIN START BORDER */}
                      
                         
            </>
        );
    }
}
export default EmploymentAgreementComponent;