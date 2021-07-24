import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../../components/common/Header'

import RecruiterMenu from '../../components/common/RecruiterMenu'
import Footer from '../../components/common/Footer'
import AdminNotificationComponent from '../../components/recruiter/AdminNotificationComponent'

class AdminNotificationsPage extends Component {
    render() {
        return (
            <div>
      
        <Header/>
        <RecruiterMenu/>

     
  <br></br>
  <br></br>
  <br></br>
<AdminNotificationComponent/>
      <br></br>
  <br></br>
  <br></br>
                  <Footer/>  
                 
            </div>
        )
    }
}

export default AdminNotificationsPage;
