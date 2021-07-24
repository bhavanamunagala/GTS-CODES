import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../../components/common/Header'
import RecruiterMenu from '../../components/common/RecruiterMenu'
import Footer from '../../components/common/Footer'
import CandidateAgreementHistoryComponent from '../../components/recruiter/CandidateAgreementHistoryComponent'

class CandidateAgreementHistoryPage extends Component {
    render() {
        return (
            <div>
      
        <Header/>
        <RecruiterMenu/>
        <CandidateAgreementHistoryComponent/>
        <br></br>
  <br></br>
  <br></br>

     <Footer/>  
                 
            </div>
        )
    }
}

export default CandidateAgreementHistoryPage;
