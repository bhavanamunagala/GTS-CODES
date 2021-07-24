
import React, { Component } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
//import '../../components/employer/node_modules/bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faTrash,faEdit,faUpload} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

 import EmployerHeadLineComponent from '../../components/employer/EmployerHeadlineComponent';
 import CompanyDetailsComponent from '../../components/employer/CompanyDetailsComponent'
import EmployerMenu from '../../components/employer/EmployerMenu';
import EmployerPersonalDetailsComponent from '../../components/employer/EmployerPersonalDetailsComponent'
import Language from '../../components/common/Language';
import PrimarySkillsComponent from '../../components/employer/PrimarySkillsComponent'

import Project from '../../../src/components/common/Project/CreateRetrive';
import EducationData from '../../../src/components/common/EducationDetails/EducationData';
import {
  Button,Alert,FormGroup,Form,Input,InputGroupAddon,InputGroupText,InputGroup,Row,Col,Container
} from 'reactstrap';
import { FormControl, FormLabel, Card, CardBody,CardText } from 'react-bootstrap';
import LanguagePreferredComponent from '../../components/employer/LanguagePreferred';


class EmployerProfilePage extends Component {
  
  
  
    render()
     {
      
        return (
  
     
           <div>
                <Header/>
              {/* <Header /> */}
             <EmployerMenu/>

         
    {/* <hr class =" border-darkw-100 mx-auto " /> */}


{/*HeadLine start*/}


<EmployerHeadLineComponent/>
<EmployerPersonalDetailsComponent/>
<CompanyDetailsComponent/>
<Project/>
<PrimarySkillsComponent/>
<Language/>
<LanguagePreferredComponent/>
<EducationData/>
  <Footer /> 


           </div>  //main end



                
        )
    }
}
export default EmployerProfilePage;
