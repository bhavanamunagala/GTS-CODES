
import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faTrash,faEdit,faUpload, faMinus} from '@fortawesome/free-solid-svg-icons'
//import 'bootstrap/dist/css/bootstrap.min.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import "react-perfect-scrollbar/dist/css/styles.css";

import EmployerMenu from '../../components/employer/EmployerMenu';
import EmploymentAgreementComponent from '../../components/employer/EmploymentAgreementComponent';
class EmploymentAgreementPage extends Component{

render()
{
    return(

        <div>
           <Header/>
           <EmployerMenu/>
       <EmploymentAgreementComponent/>
       <Footer />
</div>
    )
}
}
export default EmploymentAgreementPage;