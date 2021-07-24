
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
// import backgroundImage from '../assets/img/icons/common/4.svg';
import { connect } from 'react-redux';
// import { login } from '../redux/action/user';
import {FormGroup,  Row,NavLink,NavItem, Col, ButtonGroup} from 'reactstrap';
import { Form,FormControl,FormLabel,FormRow, Button, FormCheck} from 'react-bootstrap';
import ls from 'local-storage';
import { Link, Redirect } from 'react-router-dom';
import Header from '../../components/Header';
import Footer1 from '../../components/Footer';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faTrash,faEdit,faUpload, faCalendar} from '@fortawesome/free-solid-svg-icons'
import { MDBIcon } from 'mdbreact';
import './jobPostActivityComponent.css';

import { Card, CardBody,CardText } from 'react-bootstrap';
//import {BorderVertical, Gride} from '@material-ui/icons';
//import { Divider } from 'material-ui';
//import { Grid } from '@material-ui/core';

class JobPostActivityComponent extends Component{
    render() {
        return ( 
            <>
               
               
               {/* <div class="container-fluid">  */}
               <div class="container pt-5 ">
                <form class='card p-3 '>
                    <h4><b>Job Post Activity</b></h4>
                    <hr className="hrName"/>
                    <h8><u><b>Junior Web Developer</b></u></h8> 
                    {/* <a href=""><span class="glyphicon glyphicon-minus"></span>   */}
                     <div className="text-right"> 
                        <button type="button" class="btnn btn-primary btn-sm">View Candidates Entrollment</button></div>   
                    <div>  
                    <b>Maximum No. of seat :</b><span class="label"></span><br></br>
                    <b> No. of Candidates Applied :</b><span class="label"></span><br></br>
                    <b> No. of  Candidates Rejected :</b><span class="label"></span><br></br>
                    <b> No. of Candidates in Screening :</b><span class="label"></span><br></br>
                    <b> No of Candidates who got the job :</b><span class="label"></span>  <br></br> 
                    </div>
                    <hr/>
                    <h8><u><b>Intern Data Scientest</b></u></h8>
                    <div>
                    <b>Maximum No. of seat:</b><span class="label"></span><br></br>
                        <b>No. of Candidates Applied:</b><span class="label"></span><br></br>
                        <b>No. of Candidates Rejected:</b><span class="label"></span><br></br>
                        <b> No. of Candidates in Screening:</b><span class="label"></span><br></br>
                       <b> No of Candidates who got the job:</b><span class="label"></span>  <br></br> 
                    </div>  
                    </form>                                
        `     </div>  
                   
                                
    
           
 </>);
           }
        }
    export default JobPostActivityComponent;