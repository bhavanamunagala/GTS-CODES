
import React, { Component } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RecruiterMenu from '../../components/recruiter/RecruiterMenuComponent';
import RecruitementAgreementComponent from '../../components/recruiter/RecruitementAgreementComponent';


class RecruitementAgreementPage extends Component {
  
  
  
    render()
     {
        return (
           <div>
                <Header/>
                <RecruiterMenu/>
                <hr className="border-dark  sm"></hr>
             <RecruitementAgreementComponent/>
                <Footer /> 
           </div>        
        )
    }
}
export default RecruitementAgreementPage;
