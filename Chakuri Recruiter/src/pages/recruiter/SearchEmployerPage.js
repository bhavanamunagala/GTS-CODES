import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../../components/common/Header'
import RecruiterMenu from '../../components/common/RecruiterMenu'
import SearchEmployerComponent from '../../components/recruiter/SearchEmployerComponent'
import Footer from '../../components/common/Footer'
 class SearchEmployerPage extends Component {
    render() {
        return (
            <div>
      
        <Header/>
        <RecruiterMenu/>
  <SearchEmployerComponent/>
       <Footer/>  
                 
            </div>
        )
    }
}

export default SearchEmployerPage;
