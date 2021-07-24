import React, { Component } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
//import '../../components/employer/node_modules/bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faTrash,faEdit,faUpload} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import JobSeekerMenu from '../../components/jobseek/JobSeekerMenuComponent';
import TrainingWishlistComponent from '../../components/jobseek/TrainingWishlistComponent';
import ExternalAssessment from '../../components/jobseek/ExternalAssessmentComponent';
import {
  Button,Alert,FormGroup,Form,Input,InputGroupAddon,InputGroupText,InputGroup,Row,Col,Container
} from 'reactstrap';
import { FormControl, FormLabel, Card, CardBody,CardText } from 'react-bootstrap';


class TrainingWishlist extends Component {
  
  
  
    render()
     {
      
        return (
  
     
           <div>
                <Header/>
                <br></br>
              {/* <Header /> */}
             <JobSeekerMenu/>

             <div class =" border border-bottom border-dark mx-xl-5 mt-xl-2" />
            <br></br>         
<div class="row  mb-3">
<TrainingWishlistComponent/>                        
</div>
  <Footer /> 


           </div>  //main end



                
        )
    }
}
export default TrainingWishlist;