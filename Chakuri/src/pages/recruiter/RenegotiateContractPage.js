
import React, { Component } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
//import '../../components/employer/node_modules/bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faTrash,faEdit,faUpload} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import RecruiterMenu from '../../components/recruiter/RecruiterMenuComponent';
import EmployerContract from '../../components/recruiter/RenegotiateContractComponent';
import {
  Button,Alert,FormGroup,Form,Input,InputGroupAddon,InputGroupText,InputGroup,Row,Col,Container
} from 'reactstrap';
import { FormControl, FormLabel, Card, CardBody,CardText } from 'react-bootstrap';


class RenegotiateContractPage extends Component {
  
  
  
    render()
     {
      
        return (
           <div>
                <Header/>
                <RecruiterMenu/>
                <hr className="border-dark  sm"></hr>
                <EmployerContract/>
                <Footer /> 
           </div>  //main end       
        )
    }
}
export default RenegotiateContractPage;
