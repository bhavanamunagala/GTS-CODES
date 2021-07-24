import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../../components/common/Header'

import RecruiterMenu from '../../components/common/RecruiterMenu'
import Footer from '../../components/common/Footer'
import RecommendedTrainingsComponent from '../../components/recruiter/RecommendedTrainingsComponent'
 
class RecommendedTrainingPage extends Component {
    render() {
        return (
            <div>
      
        <Header/>
        <RecruiterMenu/>
       <RecommendedTrainingsComponent/>
  <br></br>
  <br></br>
  <br></br>
                  <Footer/>  
                 
            </div>
        )
    }
}

export default RecommendedTrainingPage;
