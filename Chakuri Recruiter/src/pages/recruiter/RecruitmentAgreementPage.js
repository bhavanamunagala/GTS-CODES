import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../../components/common/Header'
import RecruitmentAgreementComponent from '../../components/recruiter/RecruitmentAgreementComponent'
import RecruiterMenu from '../../components/common/RecruiterMenu'
import Footer from '../../components/common/Footer'

class RecruitmentAgreementPage extends Component {
    render() {
        return (
            <div>
      
        <Header/>
        <RecruiterMenu/>
        <RecruitmentAgreementComponent/>
   
  <br></br>
  <br></br>
  <br></br>
                  <Footer/>  
                 
            </div>
        )
    }
}

export default RecruitmentAgreementPage;
