import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faTrash,faEdit,faUpload} from '@fortawesome/free-solid-svg-icons'
import { Modal, ModalBody, ModalFooter, ModalHeader, Input } from 'reactstrap';
import {Dropdown} from 'react-bootstrap'
import{TextField} from '@material-ui/core'
import { Link } from 'react-router-dom';

import Footer1 from '../../components/Footer';
import Header from '../../components/Header';
import RecruiterMenu from '../../components/recruiter/RecruiterMenuComponent';



 class RecruiterProfilePage extends Component {

    render() {
      
        return (
            <div>
               <Header/>
             <RecruiterMenu/>
               <br></br>
               <br></br>
               <br></br>
               <br></br>
               <br></br>
               <br></br>
               <br></br>
               <br></br>
     <Footer1/>
            </div>
        )
    }
}
export default RecruiterProfilePage;