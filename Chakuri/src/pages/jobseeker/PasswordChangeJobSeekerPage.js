
import React, { Component } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
//import '../../components/employer/node_modules/bootstrap/dist/css/bootstrap.css'
import JSPasswordChangeComponent from '../../components/jobseek/JSPasswordChangeComponent';
import JobSeekerMenu from '../../components/jobseek/JobSeekerMenuComponent';
import PasswordChangeEmployerPage from '../employer/PasswordChangeEmployerPage';

class PasswordChangeJobSeeker extends Component {
  
  
  
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
<JSPasswordChangeComponent/>
{/* Save and Reset Detail */}
<br></br>
  <Footer /> 


           </div>  //main end



                
        )
    }
}
export default PasswordChangeJobSeeker;
