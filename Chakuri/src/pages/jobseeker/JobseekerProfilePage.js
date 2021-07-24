
import React, { Component } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
//import '../../components/employer/node_modules/bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faTrash,faEdit,faUpload} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import Language from '../../components/common/Language';
 import JobSeekerHeadLine from '../../components/jobseek/JobSeekerHeadLineComponent';
 import CompanyDetailsComponent from '../../components/employer/CompanyDetailsComponent'
import JobSeekerMenu from '../../components/jobseek/JobSeekerMenuComponent';
import EmployerPersonalDetailsComponent from '../../components/employer/EmployerPersonalDetailsComponent'
import EducationalBackground from '../../components/admin/EmpRegComponents/EducationalBackground'
import Project from '../../components/common/Project'
import AddSalary from '../../components/jobseek/AddSalaryComponent';
import {
  Button,Alert,FormGroup,Form,Input,InputGroupAddon,InputGroupText,InputGroup,Row,Col,Container
} from 'reactstrap';
import { FormControl, FormLabel, Card, CardBody,CardText } from 'react-bootstrap';


class JobseekerProfile extends Component {
  
  
  
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


<JobSeekerHeadLine/>
<EmployerPersonalDetailsComponent/>
<EducationalBackground/>
<Language/>
<Project/>
<AddSalary/>
{/* Save and Reset Detail */}
<div class="row  mb-3">
                             <div class="col-10 ">
                             <a class="btn btn-primary offset-11" href="#" role="button">Reset Detail</a>
                             </div>
                             <div class="col-1">
                             <a class="btn btn-primary" href="#" role="button">Save Detail</a>
                              </div>
</div>
  <Footer /> 


           </div>  //main end



                
        )
    }
}
export default JobseekerProfile;
