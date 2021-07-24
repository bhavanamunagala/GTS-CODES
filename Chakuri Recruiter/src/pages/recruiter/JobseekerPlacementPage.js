import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../../components/common/Header'

import RecruiterMenu from '../../components/common/RecruiterMenu'
import Footer from '../../components/common/Footer'
import AppliedJobseekersComponent from '../../components/recruiter/AppliedJobseekersComponent'
 class JobseekerPlacementPage extends Component {
    render() {
        return (
            <div>
      
        <Header/>
        <RecruiterMenu/>
        <br></br>
        <AppliedJobseekersComponent/>
  <br></br>
  <br></br>
  <br></br>
                  <Footer/>  
                 
            </div>
        )
    }
}

export default JobseekerPlacementPage;
