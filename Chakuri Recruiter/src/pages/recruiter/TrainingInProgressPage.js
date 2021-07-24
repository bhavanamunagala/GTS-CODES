import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../../components/common/Header'

import RecruiterMenu from '../../components/common/RecruiterMenu'
import Footer from '../../components/common/Footer'
import TrainingInProgressComponent from '../../components/recruiter/TrainingInProgressComponent' 
class TrainingInProgressPage extends Component {
    render() {
        return (
            <div>
      
        <Header/>
        <RecruiterMenu/>
      <TrainingInProgressComponent/>
  <br></br>
  <br></br>
  <br></br>
                  <Footer/>  
                 
            </div>
        )
    }
}

export default TrainingInProgressPage;
