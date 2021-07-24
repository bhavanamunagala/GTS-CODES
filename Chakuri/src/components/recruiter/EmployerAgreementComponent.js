
import React, { Component } from 'react'
import Header from '../Header';
import Footer from '../Footer';

import RecruiterMenu from './RecruiterMenuComponent';


class EmployerAgreement extends Component {
  
  
  
    render()
     {
      
        return (
  
     
           <div>
                <Header/>
              {/* <Header /> */}
             <RecruiterMenu/>
<hr className="border-dark  sm"></hr> <br></br> <br></br> <br></br> <br></br> <br></br>
         
    {/* <hr class =" border-darkw-100 mx-auto " /> */}


{/*HeadLine start*/}


  <Footer /> 


           </div>  //main end



                
        )
    }
}
export default EmployerAgreement;
