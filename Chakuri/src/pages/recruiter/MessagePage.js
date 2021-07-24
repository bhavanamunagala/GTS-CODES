
import React, { Component } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
//import '../../components/employer/node_modules/bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faTrash,faEdit,faUpload} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import RecruiterMenu from '../../components/recruiter/RecruiterMenuComponent';
import {
  Button,Alert,FormGroup,Form,Input,InputGroupAddon,InputGroupText,InputGroup,Row,Col,Container
} from 'reactstrap';
import { FormControl, FormLabel, Card, CardBody,CardText } from 'react-bootstrap';
import Messages from '../../components/recruiter/MessagesComponent';


class MessagePage extends Component {
  
  
  
    render()
     {
      
        return (
           <div>
                <Header/>
                <RecruiterMenu/>
                <hr className="border-dark  sm"></hr>
                <Messages/>
                <Footer /> 
            </div>        
        )
    }
}
export default MessagePage;
