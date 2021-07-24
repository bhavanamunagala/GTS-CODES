
import React, { Component } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

 
import EmployerMenu from '../../components/employer/EmployerMenu';
import JobPostComponent from '../../components/employer/JobPostComponent';

class JobPostPage extends Component {
  
  
  
    render()
     {
      
        return (
  
     
           <div>
                <Header/>
              {/* <Header /> */}
             <EmployerMenu/>
<JobPostComponent/>
         
    {/* <hr class =" border-darkw-100 mx-auto " /> */}


{/*HeadLine start*/}



  <Footer /> 


           </div>  //main end



                
        )
    }
}
export default JobPostPage;
