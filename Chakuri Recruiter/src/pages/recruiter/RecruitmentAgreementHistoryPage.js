import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../../components/common/Header'
import RecruiterMenu from '../../components/common/RecruiterMenu'
import Footer from '../../components/common/Footer'
import RecruitmentAgreementHistoryComponent from '../../components/recruiter/RecruitmentAgreementHistoryComponent'

class RecruitmentAgreementHistoryPage extends Component {
    render() {
        return (
            <div>
      
        <Header/>
        <RecruiterMenu/>
        <RecruitmentAgreementHistoryComponent/>
   
  <br></br>
  <br></br>
  <br></br>
                  <Footer/>  
                 
            </div>
        )
    }
}

export default RecruitmentAgreementHistoryPage;
