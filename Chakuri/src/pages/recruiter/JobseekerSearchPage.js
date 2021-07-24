
import React, { Component } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import JobseekerSearchComponent from '../../components/recruiter/JobSeekerSearchComponent';
import { AppBar, Container } from '@material-ui/core';
import RecruiterMenu from '../../components/recruiter/RecruiterMenuComponent';


class JobseekerSearchPage extends Component {



  render() {

    return (
      <Container id="main-container">
        <AppBar className="header-part">
          <Header />
          <RecruiterMenu />
        </AppBar>
        <JobseekerSearchComponent />
        <Footer />
      </Container>
    )
  }
}
export default JobseekerSearchPage;
