import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../../components/common/Header'

import RecruiterMenu from '../../components/common/RecruiterMenu'
import Footer from '../../components/common/Footer'
import PersonalDetailsComponent from '../../components/recruiter/PersonalDetailsComponent'
import WorkExperienceComponent from '../../components/recruiter/WorkExperienceComponent'
import GTSFieldOfRecruitmentComponent from '../../components/recruiter/GTSFieldOfRecruitmentComponent'
import LanguageKnownComponent from '../../components/recruiter/LanguagesKnownComponent'
import CreateRetrive from '../../components/recruiter/UsersProject/CreateRetrive'
 
class UpdateProfilePage extends Component {
    render() {
        return (
            <div>
      
        <Header/>
        <RecruiterMenu/>
        <GTSFieldOfRecruitmentComponent/>
         <PersonalDetailsComponent/>
         <WorkExperienceComponent/>
         <CreateRetrive/>
         <LanguageKnownComponent/>
    <Footer/>  
                 
            </div>
        )
    }
}

export default UpdateProfilePage;
