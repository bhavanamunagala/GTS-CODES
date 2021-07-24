import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../../components/common/Header'

import RecruiterMenu from '../../components/common/RecruiterMenu'
import Footer from '../../components/common/Footer'
import TrainerNotificationComponent from '../../components/recruiter/TrainerNotificationComponent'
 class TrainerNotificationPage extends Component {
    render() {
        return (
            <div>
      
        <Header/>
        <RecruiterMenu/>
  <TrainerNotificationComponent/>
  <br></br>
  <br></br>
  <br></br>
                  <Footer/>  
                 
            </div>
        )
    }
}

export default TrainerNotificationPage;
