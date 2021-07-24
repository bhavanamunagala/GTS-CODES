import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../../components/common/Header'
import CandidateAgreementComponent from '../../components/recruiter/CandidateAgreementComponent'
import RecruiterMenu from '../../components/common/RecruiterMenu'
import Footer from '../../components/common/Footer'

class CandidateAgreementPage extends Component {
    render() {
        return (
            <div>
      
        <Header/>
        <RecruiterMenu/>
        <CandidateAgreementComponent/>
        <br></br>
  <br></br>
  <br></br>

     <Footer/>  
                 
            </div>
        )
    }
}

export default CandidateAgreementPage;
