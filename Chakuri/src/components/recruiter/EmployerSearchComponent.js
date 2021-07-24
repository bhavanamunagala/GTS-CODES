import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faTrash,faEdit,faUpload} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import ReactDOM from 'react-dom';
import {  Row,NavLink,NavItem, Col, ButtonGroup} from 'reactstrap';
import { Form,FormControl,FormLabel,FormRow, Button, FormCheck} from 'react-bootstrap';
import Header from '../Header';
import Footer from '../Footer';

import RecruiterMenu from './RecruiterMenuComponent';
import  './employerSearchComponent.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


class EmployerSearch extends Component {
  constructor(props)
  {
  super(props)
  
    this.state ={
      employer:{},
    }
  }
  componentDidMount() {
    axios
      .get( "https://api.mocki.io/v1/8beadd94", {
    
      })
      .then(({ data }) => {
        this.setState({
          employer: data,
        // array data from JSON stored in these
        });
      })
      .catch(err => {});
  }

  render() {
    return (
    <div>
       <Header/>
       <RecruiterMenu/>
        

<div class="row">
  <div class="col-2">
<div class="split">
    <div class="row-h-100">
   <div class="split-left ">
  </div>
<div class="split right">
  </div>
</div>
<div class="split">
    <div class="row-h-100">
   <div class="split-left ">
  </div>
<div class="split left">
  </div>
</div>

<div class="box2">  
</div>
<label>Skills</label>
<div class="box">  

<label>Ex:C++,Java</label>
<hr></hr>
<form >
    <div class="form-check form-check">
    <input class="form-check-input" type="checkbox" id="Python" />
    <label class="form-check-label" for="Python">Python</label>
    </div>
    <div class="form-check form-check">
    <input class="form-check-input" type="checkbox" id="Supply" />
    <label class="form-check-label" for="Supply">Supply Chain</label>
    </div>
    <div class="form-check form-check">
    <input class="form-check-input" type="checkbox" id="Cook" />
    <label class="form-check-label" for="Cook">Cooking</label>
    </div>
</form>
   </div>
<div class="split">
    <div class="row-h-100">
   <div class="split-left ">
  </div>
<div class="split right">
<label>Industry</label>
<div class="box">  
<label>Hospitality,Insurance</label>
<hr></hr>
<form >
    <div class="form-check form-check">
    <input class="form-check-input" type="checkbox" id="educ" />
    <label class="form-check-label" for="educ">Education</label>
    </div>
    <div class="form-check form-check">
    <input class="form-check-input" type="checkbox" id="service" />
    <label class="form-check-label" for="service">IT-Software Services</label>
    </div>
    <div class="form-check form-check">
    <input class="form-check-input" type="checkbox" id="bank" />
    <label class="form-check-label" for="bank">Banking</label>
    </div>
</form>
   </div>
  </div>
</div>
<label>Location</label>
<div class="box">  
<label>Ex:Pune,Delhi</label>
<hr></hr>
<form >
    <div class="form-check form-check">
    <input class="form-check-input" type="checkbox" id="Bang" />
    <label class="form-check-label" for="Bang">Banglore</label>
    </div>
    <div class="form-check form-check">
    <input class="form-check-input" type="checkbox" id="Pun" />
    <label class="form-check-label" for="Pun">Pune</label>
    </div>
    <div class="form-check form-check">
    <input class="form-check-input" type="checkbox" id="Del" />
    <label class="form-check-label" for="Del">Delhi</label>
    </div>
</form>
   </div>
<div class="split">
    <div class="row-h-100">
   <div class="split-left ">
  </div>
<div class="split right">
  </div>
</div>
<div class="split">
    <div class="row-h-100">
   <div class="split-left ">
   <label>Company</label>
   <div class="box">  
   <label>Ex:Amazon,Cisco</label>
<hr></hr>
<form >
    <div class="form-check form-check">
    <input class="form-check-input" type="checkbox" id="Days" />
    <label class="form-check-label" for="Days">Amazon</label>
    </div>
    <div class="form-check form-check">
    <input class="form-check-input" type="checkbox" id="Days" />
    <label class="form-check-label" for="Days">Cisco</label>
    </div>
    <div class="form-check form-check">
    <input class="form-check-input" type="checkbox" id="Days" />
    <label class="form-check-label" for="Days">Flipkart</label>
    </div>
</form>
  </div>
  <div class="box2">  
</div>
   </div>
<div class="split right">
  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<br></br>
<div class="col-10">
   <h5>Enter Name of Employer/Company Name in the Search Bar</h5>
       <form class="example" action="/action_page.php">
  <input type="text" placeholder="Ex: Wipro , Cisco" name="Search"/>
  <button type="submit">Search</button>
</form>
<br></br>
<br></br>
<br></br>
<h5>Order by:Employer Name <i class="fa fa-arrow-up"></i>|<label class="text-primary">Name of the Company<i class="fa fa-arrow-up"></i></label>| Date <i class="fa fa-arrow-up"></i></h5>   
<div className="table-wrapper-scroll-y my-custom-scrollbar">

      
<div class="div1">
<div class="row">
  <div class="col-7">
  <h4><AccountCircleIcon/>Tejaswani Ehsaan Rama</h4>
   </div>
<div class="col-3">
<h6>Date posted:<label class="text-danger">17 Jun 2020</label> </h6>
</div>
<div class="col-2">
<h6>Location:<label class="text-danger">Delhi</label> </h6>
</div>
</div>
<div class="row">
<div classs="col-2">
<h6 class="hf">HR Recruiter</h6>
  </div>
   </div>
   <div class="row">
<div classs="col-2">
<h6 class="hf"><b>EFG Company</b></h6>
  </div>
   </div> 
</div><br/>


<div class="div1">
<div class="row">
<div classs="col-2">
  </div>
  <div class="col-7">
  <h4 ><AccountCircleIcon/>Suraj Bhai Sane</h4>
   </div>
<div class="col-3">
<h6>Date posted:<label class="text-danger">10 Jun 2020</label> </h6>
</div>
<div class="col-2">
<h6>Location:<label class="text-danger">Banglore</label> </h6>
</div>
</div>
<div class="row">
<div classs="col-2">
<h6 class="hf">Python Developer</h6>
  </div>
   </div>
   <div class="row">
<div classs="col-2">
<h6 class="hf"><b>Cisco</b></h6>
  </div>
   </div>

 </div> <br/>

 
<div class="div1">
<div class="row">
  <div class="col-7">
  <h4><AccountCircleIcon/>Aditi Bhatti</h4>
   </div>
<div class="col-3">
<h6>Date posted:<label class="text-danger">21 Jun 2020</label> </h6>
</div>
<div class="col-2">
<h6>Location:<label class="text-danger">Chennai</label> </h6>
</div>
</div>
<div class="row">
<div classs="col-2">
<h6 class="hf">Database Administrator</h6>
  </div>
   </div>
   <div class="row">
<div classs="col-2">
<h6 class="hf"><b>JKL Industries</b></h6>
  </div>
   </div>
</div><br/>


<div class="div1">
<div class="row">
  <div class="col-7">
  <h4><AccountCircleIcon/>Tejaswani Ehsaan Rama</h4>
   </div>
<div class="col-3">
<h6>Date posted:<label class="text-danger">15 Jun 2020</label> </h6>
</div>
<div class="col-2">
<h6>Location:<label class="text-danger">Kerala</label> </h6>
</div>
</div>
<div class="row">
<div classs="col-2">
<h6 class="hf">HR Recruiter</h6>
  </div>
   </div>
   <div class="row">
<div classs="col-2">
<h6 class="hf"><b>EFG Company</b></h6>
  </div>
   </div>

</div><br/>


<div class="div1">
<div class="row">
  <div class="col-7">
  <h4><AccountCircleIcon/>Suraj Bhai Sane</h4>
   </div>
<div class="col-3">
<h6>Date posted:<label class="text-danger">10 Jun 2020</label> </h6>
</div>
<div class="col-2">
<h6>Location:<label class="text-danger">Bangalore</label> </h6>
</div>
</div>
<div class="row">
<div classs="col-2">
<h6 class="hf">Python Developer</h6>
  </div>
   </div>
   <div class="row">
<div classs="col-2">
<h6 class="hf"><b>Cisco</b></h6>
  </div>
   </div>
  
</div><br/>


<div class="div1">
<div class="row">
  <div class="col-7">
  <h4><AccountCircleIcon/>Aditi Bhatti</h4>
   </div>
<div class="col-3">
<h6>Date posted:<label class="text-danger">21 Jun 2020</label> </h6>
</div>
<div class="col-2">
<h6>Location:<label class="text-danger">Chennai</label> </h6>
</div>
</div>
<div class="row">
<div classs="col-2">
<h6 class="hf">Database Administrator</h6>
  </div>
   </div>
   <div class="row">
<div classs="col-2">
<h6 class="hf"><b>JKL Industries</b></h6>
  </div>
   </div>
  
</div><br/>


<div class="div1">
<div class="row">
  <div class="col-7">
  <h4><AccountCircleIcon/>Tejaswani Ehsaan Rama</h4>
   </div>
<div class="col-3">
<h6>Date posted:<label class="text-danger">15 Jun 2020</label> </h6>
</div>
<div class="col-2">
<h6>Location:<label class="text-danger">Kerala</label> </h6>
</div>
</div>
<div class="row">
<div classs="col-2">
<h6 class="hf">HR Recruiter</h6>
  </div>
   </div>
   <div class="row">
<div classs="col-2">
<h6 class="hf"><b>EFG Company</b></h6>
  </div>
   </div>
  
</div><br/>


<div class="div1">
<div class="row">
  <div class="col-7">
  <h4><AccountCircleIcon/>Tejaswani Ehsaan Rama</h4>
   </div>
<div class="col-3">
<h6>Date posted:<label class="text-danger">17 Jun 2020</label> </h6>
</div>
<div class="col-2">
<h6>Location:<label class="text-danger">Delhi</label> </h6>
</div>
</div>
<div class="row">
<div classs="col-2">
<h6 class="hf">HR Recruiter</h6>
  </div>
   </div>
   <div class="row">
<div classs="col-2">
<h6 class="hf"><b>EFG Company</b></h6>
  </div>
   </div>
  
</div><br/>


<div class="div1">
<div class="row">
  <div class="col-7">
  <h4><AccountCircleIcon/>Suraj Bhai Sane</h4>
   </div>
<div class="col-3">
<h6>Date posted:<label class="text-danger">10 Jun 2020</label> </h6>
</div>
<div class="col-2">
<h6>Location:<label class="text-danger">Bangalore</label> </h6>
</div>
</div>
<div class="row">
<div classs="col-2">
<h6 class="hf">Python Developer</h6>
  </div>
   </div>
   <div class="row">
<div classs="col-2">
<h6 class="hf"><b>Cisco</b></h6>
  </div>
   </div>
 
</div><br/>


<div class="div1">
<div class="row">
  <div class="col-7">
  <h4><AccountCircleIcon/>Aditi Bhatti</h4>
   </div>
<div class="col-3">
<h6>Date posted:<label class="text-danger">21 Jun 2020</label> </h6>
</div>
<div class="col-2">
<h6>Location:<label class="text-danger">Chennai</label> </h6>
</div>
</div>
<div class="row">
<div classs="col-2">
<h6 class="hf">Database Administrator</h6>
  </div>
   </div>
   <div class="row">
<div classs="col-2">
<h6 class="hf"><b>JKL Industries</b></h6>
  </div>
   </div>
 
</div><br/>


<div class="div1">
<div class="row">
  <div class="col-7">
  <h4><AccountCircleIcon/>Tejaswani Ehsaan Rama</h4>
   </div>
<div class="col-3">
<h6>Date posted:<label class="text-danger">17 Jun 2020</label> </h6>
</div>
<div class="col-2">
<h6>Location:<label class="text-danger">Delhi</label> </h6>
</div>
</div>
<div class="row">
<div classs="col-2">
<h6 class="hf">Python Developer</h6>
  </div>
   </div>
   <div class="row">
<div classs="col-2">
<h6 class="hf"><b>EFG Company</b></h6>
  </div>
   </div>
 
</div><br/>

<br></br>
</div>
</div>
</div>
  <br></br>
  <br></br>

  
  <Footer /> 

</div>
        )
    } 
  }
export default EmployerSearch;