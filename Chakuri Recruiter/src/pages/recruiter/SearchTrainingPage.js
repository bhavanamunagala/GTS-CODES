import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../../components/common/Header'
import RecruiterMenu from '../../components/common/RecruiterMenu'
import Footer from '../../components/common/Footer'
import SearchTrainingComponent from '../../components/recruiter/SearchTrainingComponent'
class SearchTrainingPage extends Component {
    render() {
        return (
            <div>
      
        <Header/>
        <RecruiterMenu/>
     <SearchTrainingComponent/>
  <br></br>
  <br></br>
  <br></br>
                  <Footer/>  
                 
            </div>
        )
    }
}

export default SearchTrainingPage;
