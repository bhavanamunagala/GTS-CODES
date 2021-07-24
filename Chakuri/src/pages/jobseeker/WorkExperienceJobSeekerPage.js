import React, { Component } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
//import '../../components/employer/node_modules/bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faTrash,faEdit,faUpload} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import JobSeekerMenu from '../../components/jobseek/JobSeekerMenuComponent';
import ChakuriEvaluation from '../../components/jobseek/ChakuriEvaluationComponent';
import {
  Button,Alert,FormGroup,Form,Input,InputGroupAddon,InputGroupText,InputGroup,Row,Col,Container
} from 'reactstrap';
import { FormControl, FormLabel, Card, CardBody,CardText } from 'react-bootstrap';
import WorkExperienceJSComponent from '../../components/jobseek/WorkExperienceJSComponent';


class WorkExperienceJobSeeker extends Component {
  
  
  
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
    {/* <hr class =" border-darkw-100 mx-auto " /> */}


{/*HeadLine start*/}


<WorkExperienceJSComponent/>
{/* Save and Reset Detail */}
<div class="row  mb-3">
                        
</div>
  <Footer /> 


           </div>  //main end



                
        )
    }
}
export default WorkExperienceJobSeeker;