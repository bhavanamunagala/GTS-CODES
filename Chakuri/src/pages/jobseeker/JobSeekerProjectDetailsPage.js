
import React, { Component } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
//import '../../components/employer/node_modules/bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faTrash,faEdit,faUpload} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import Language from '../../components/common/Language';
import Project from '../../components/common/Project';
import JobSeekerMenu from '../../components/jobseek/JobSeekerMenuComponent';

class JobSeekerProjectDetails extends Component {
  
  
  
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
<Project/>
{/* Save and Reset Detail */}
<br></br>
  <Footer /> 


           </div>  //main end



                
        )
    }
}
export default JobSeekerProjectDetails;