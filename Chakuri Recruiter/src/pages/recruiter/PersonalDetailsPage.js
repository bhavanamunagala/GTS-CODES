import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../../components/common/Header'

import RecruiterMenu from '../../components/common/RecruiterMenu'
import Footer from '../../components/common/Footer'
import PersonalDetailsComponent from '../../components/recruiter/PersonalDetailsComponent'

 class PersonalDetailsPage extends Component {
    render() {
        return (
            <div>
      
        <Header/>
        <RecruiterMenu/>
         <PersonalDetailsComponent/>
  <br></br>
  <br></br>
  <br></br>
                  <Footer/>  
                 
            </div>
        )
    }
}

export default PersonalDetailsPage;
