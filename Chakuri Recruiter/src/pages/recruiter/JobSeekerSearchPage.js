
import React, { Component } from 'react'

import { AppBar, Container } from '@material-ui/core';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import RecruiterMenu from '../../components/common/RecruiterMenu';
import JobSeekerSearchComponent from '../../components/recruiter/JobSeekerSearchComponent';


class JobSeekerSearchPage extends Component {

  render() {

    return (
      <Container id="main-container">
        <AppBar className="header-part">
          <Header/>
        </AppBar>
        <br></br>
    <br></br>
    
    <RecruiterMenu/>
   
      <JobSeekerSearchComponent/>
       <Footer/>
      </Container>
    )
  }
}
export default JobSeekerSearchPage;
