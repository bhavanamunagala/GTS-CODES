
import React, { Component } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
//import '../../components/employer/node_modules/bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faTrash,faEdit,faUpload} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import RecruiterMenu from '../../components/recruiter/RecruiterMenuComponent';
import  AppliedJobseekerComponent from '../../components/recruiter/AppliedJobseekerComponent';
import {
  Button,Alert,FormGroup,Form,Input,InputGroupAddon,InputGroupText,InputGroup,Row,Col,Container
} from 'reactstrap';
import { FormControl, FormLabel, Card, CardBody,CardText } from 'react-bootstrap';


class AppliedJobseekerPage extends Component {
  
  
  
    render()
     {
      
        return (
           <div>
                <Header/>
                <RecruiterMenu/>
                <hr className="border-dark  sm"></hr>
                <AppliedJobseekerPage/>
                <Footer /> 
           </div>         
        )
    }
}
export default AppliedJobseekerPage;
