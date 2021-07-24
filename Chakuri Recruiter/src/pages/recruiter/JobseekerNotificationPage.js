import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../../components/common/Header'

import RecruiterMenu from '../../components/common/RecruiterMenu'
import Footer from '../../components/common/Footer'
import JobseekerNotification from '../../components/recruiter/JobseekerNotificationComponent'

class JobseekerNotificationPage extends Component {
    render() {
        return (
            <div>
      
        <Header/>
        <RecruiterMenu/>
<JobseekerNotification/>
                  <Footer/>  
                 
            </div>
        )
    }
}

export default JobseekerNotificationPage;
