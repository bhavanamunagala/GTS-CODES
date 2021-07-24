import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../../components/common/Header'

import RecruiterMenu from '../../components/common/RecruiterMenu'
import PlacementStatusComponent from '../../components/recruiter/PlacementStatusComponent'
import Footer from '../../components/common/Footer'
 
class PlacementStatusPage extends Component {
    render() {
        return (
            <div>
      
        <Header/>
        <RecruiterMenu/>
 <PlacementStatusComponent/>
  <br></br>
  <br></br>
  <br></br>
                  <Footer/>  
                 
            </div>
        )
    }
}

export default PlacementStatusPage;
