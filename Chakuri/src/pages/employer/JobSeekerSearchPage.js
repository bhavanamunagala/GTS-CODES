
import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faTrash, faEdit, faUpload, faMinus } from '@fortawesome/free-solid-svg-icons'
//import 'bootstrap/dist/css/bootstrap.min.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import "react-perfect-scrollbar/dist/css/styles.css";

import EmployerMenu from '../../components/employer/EmployerMenu';

import JobseekerSearchComponent from '../../components/employer/JobSeekerSearchComponent';
import { AppBar, Container } from '@material-ui/core';

class JobSeekerSearchPage extends Component {

  render() {
    return (
      <Container id="main-container">
        <AppBar className="header-part">
          <Header />
          <EmployerMenu />
        </AppBar>
        <JobseekerSearchComponent />
        <Footer />
      </Container>
    )
  }
}
export default JobSeekerSearchPage;