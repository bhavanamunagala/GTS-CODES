import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../../components/common/Header'

import RecruiterMenu from '../../components/common/RecruiterMenu'
import EmployerNotificationComponent from '../../components/recruiter/EmployerNotificationComponent'
import Footer from '../../components/common/Footer'
 class EmployerNotificationPage extends Component {
    render() {
        return (
            <div>
      
        <Header/>
        <RecruiterMenu/>
   <EmployerNotificationComponent/>
  <br></br>
  <br></br>
  <br></br>
                  <Footer/>  
                 
            </div>
        )
    }
}

export default EmployerNotificationPage;
