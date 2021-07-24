
import React, { Component } from 'react'
import Header from '../Header';
import Footer from '../Footer';
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faTrash, faEdit, faUpload } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { MDBCol, MDBInput, MDBTable } from "mdbreact";
import './EmployerPersonalDetailComponent.css'
class EmployerPersonalDetails extends Component {

  constructor(props) {
    super(props)

    this.state = {
      successAlert:false,
      successfullresponse: false,
      gts_user_first_name: '',
      gts_user_last_name: '',
      gts_user_gender: '',
      gts_user_nationality: '',
      gts_user_primary_mobile_number: '',
      gts_user_alternate_mobile_number: '',
      gts_user_alternate_email_id: '',
      gts_country: '',
      gts_state_name: '',
      gts_user_primary_email_id: '',
      gts_current_address: '',
      gts_permanent_address: '',
      gts_permanent_state: '',
      gts_permanent_country: '',
      users: 1
    };
    this.changeHandler = this.changeHandler.bind(this);
  }
  changeHandler = (e) => {

    this.setState({ [e.target.name]: e.target.value })


  }

  changeHandler2 = (e) => {

    this.setState({ [e.target.name]: e.target.value })

  }
  setSuccessAlertFalse= e =>{
    this.setState({successfullresponse:false});  
}

  submitHandler = e => {
    e.preventDefault()
    if (this.state.successfullresponse == false) {
      axios.post('http://localhost:4712/api/v1/users/personal_details/', this.state)
        .then(response => {
        })
        .catch(error => {
          console.log(error)
        })
    }
    else {

      axios.put('http://localhost:4712/api/v1/users/personal_details/', this.state)
        .then(response => {
          console.log("put")
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
  mySubmitHandler = (event) => {
    // this.state.successAlert=true;
    this.setState({successAlert:true});
    event.preventDefault();
    if (this.state.successfullresponse == false) {
      axios.post('http://localhost:4712/api/v1/users/personal_details/', this.state)
        .then(response => {
        })
        .catch(error => {
          console.log(error)
        })
    }
    else {

      axios.put('http://localhost:4712/api/v1/users/personal_details/', this.state)
        .then(response => {
          console.log("put")
        })
        .catch(error => {
          console.log(error)
        })
    }
    
  }

  componentDidMount() {
    axios.get('http://localhost:4712/api/v1/users/personal_details/1/')
      .then(response => {

        if (response.data.gts_user_first_name == '' && response.data.gts_user_last_name == '' && response.data.gts_user_middle_name == '' && response.data.gts_gts_country == '' &&
          response.data.gts_current_address == '' && response.data.gts_permanent_address == '' && response.data.gts_permanent_country == '' &&
          response.data.gts_user_gender == '' && response.data.gts_state_name == '' && response.data.gts_user_alternate_email_id == '' &&
          response.data.gts_user_primary_email_id == '' && response.data.gts_user_primary_mobile_number == '' && response.data.gts_user_nationality == '' &&
          response.data.gts_permanent_state == '' && response.data.gts_user_alternate_mobile_number == '') {
          this.setState({ successfullresponse: false });
        }
        else {
          this.setState({ successfullresponse: true });
        }
           
        this.setState({

          gts_user_first_name: response.data.gts_user_first_name,
          gts_user_last_name: response.data.gts_user_last_name,
          gts_user_middle_name: response.data.gts_user_middle_name,
          gts_country: response.data.gts_country,
          gts_current_address: response.data.gts_current_address,
          gts_permanent_address: response.data.gts_permanent_address,
          gts_permanent_country: response.data.gts_permanent_country,
          gts_user_gender: response.data.gts_user_gender,
          gts_state_name: response.data.gts_state_name,
          gts_user_alternate_email_id: response.data.gts_user_alternate_email_id,
          gts_user_primary_email_id: response.data.gts_user_primary_email_id,
          gts_user_primary_mobile_number: response.data.gts_user_primary_mobile_number,
          gts_user_alternate_mobile_number: response.data.gts_user_alternate_mobile_number,
          gts_user_nationality: response.data.gts_user_nationality,
          gts_permanent_state: response.data.gts_permanent_state
        });
      })
    axios.get('http://localhost:4714/api/v1/country/')
      .then(res => {

        this.setState({ country: res.data });

      })
    axios.get('http://localhost:4715/api/v1/state/')
      .then(res => {

        this.setState({ state: res.data });

      })


  }
  render() {
    const {
      successfullresponse,
      gts_user_first_name,
      gts_user_last_name,
      gts_user_gender,
      gts_user_nationality,
      gts_user_primary_mobile_number,
      gts_user_alternate_mobile_number,
      gts_user_alternate_email_id,
      gts_user_middle_name,
      gts_country,
      gts_state_name,
      gts_user_primary_email_id,
      gts_current_address,
      gts_permanent_address,
      gts_permanent_state,
      gts_permanent_country
    } = this.state
   

    return (
      <div className="container align-items-center">
        <div className='mt-3'>
          <div className="border border-dark rounded-lg" >
            <form onSubmit={this.submitHandler} >
              <div className="row">
                <div className="col">
                  <h5 className="mb-3 p-2">Personal Detail &nbsp;:&nbsp; </h5>
                </div>
                <div className="col-1">
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-4">
                    <label> <b>First Name&nbsp;:&nbsp; </b></label>
                    <input type="text" style={{ color: "black" }} placeholder="First Name" name="gts_user_first_name" value={gts_user_first_name} onChange={this.changeHandler}></input>
                  </div>
                  <div className="col-4">
                    <label><b> Middle Name&nbsp;:&nbsp;</b> </label>
                    <input type="text" style={{ color: "black" }} placeholder="Middle Name" name="gts_user_middle_name" value={gts_user_middle_name} onChange={this.changeHandler}></input>
                  </div>
                  <div className="col-4">
                    <label><b>LastName&nbsp;: &nbsp;</b></label>
                    <input type="text" style={{ color: "black" }} placeholder="lastname" name="gts_user_last_name" value={gts_user_last_name} onChange={this.changeHandler}></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4 ">
                    <label><b>Gender&nbsp;:&nbsp;</b> </label>
                    <input type="text" style={{ color: "black" }} placeholder="gender" name="gts_user_gender" value={gts_user_gender} onChange={this.changeHandler} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <label> <b>Nationality&nbsp;: &nbsp;</b></label>
                    <input type="text" style={{ color: "black" }} placeholder="nationality" name="gts_user_nationality" value={gts_user_nationality} onChange={this.changeHandler}></input>
                  </div>
                  <div className="col-4">
                    <label><b>Mob.No &nbsp;:&nbsp; </b></label>
                    <input type="text" style={{ color: "black" }} placeholder="mobilenumber" name="gts_user_primary_mobile_number" value={gts_user_primary_mobile_number} onChange={this.changeHandler}></input>
                  </div>
                  <div className="col-4">
                    <label><b>Alternate Mob.No &nbsp;:&nbsp; </b></label>
                    <input type="text" style={{ color: "black" }} placeholder="mobilenumber" name="gts_user_alternate_mobile_number" value={gts_user_alternate_mobile_number} onChange={this.changeHandler}></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <label><b>Alternative Email &nbsp;:&nbsp; </b></label>
                    <input type="text" style={{ width: "60%", color: "black" }} placeholder="Alternativename@gmail.com" name="gts_user_alternate_email_id" value={gts_user_alternate_email_id} onChange={this.changeHandler}></input>
                  </div>
                  <div className="col-6">
                    <label><b>Email &nbsp;:&nbsp; </b></label>
                    <input type="text" style={{ width: "60%", color: "black" }} placeholder="Email@gmail.com" name="gts_user_primary_email_id" value={gts_user_primary_email_id} onChange={this.changeHandler}></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3">
                    <label> <b>Current Address&nbsp;:&nbsp;</b> </label>
                    <MDBInput type="textarea" Col="1" style={{ color: "black" }} placeholder="address" name="gts_current_address" value={gts_current_address} onChange={this.changeHandler} />

                  </div>
                  <div className="col-4">
                    <label><b>State &nbsp;:&nbsp; </b></label>


                    <Autocomplete

                      id="one"
                      options={this.state.state}
                      getOptionLabel={(option) => option.gtsStateName}
                      style={{ width: 200, outlineColor: "black", display: "inline-block" }}

                      renderInput={(params) => <TextField {...params} placeholder={gts_state_name} variant="outlined" style={{ color: "black" }} name="gts_state_name" onChange={this.changeHandler} onSelect={this.changeHandler2} />}
                    />



                  </div>
                  <div className="col-5">

                    <label><b>Country &nbsp;:&nbsp; </b></label>

                    <Autocomplete

                      options={this.state.country}
                      getOptionLabel={(option) => option.gtsCountryName}
                      style={{ width: 200, outlineColor: "black", display: "inline-block" }}

                      renderInput={(params) => <TextField {...params} placeholder={this.state.gts_country} variant="outlined" style={{ color: "black" }} name="gts_country" onChange={this.changeHandler} onSelect={this.changeHandler2} />}
                    />

                  </div>
                </div>

                <br></br>
                <div className="row">
                  <div className="col-3">
                    <label> <b>Permanent Address&nbsp;:&nbsp; </b></label>
                    <MDBInput type="textarea" Col="1" style={{ color: "black" }} placeholder="address" name="gts_permanent_address" value={gts_permanent_address} onChange={this.changeHandler} onSelect={this.changeHandler2} />
                  </div>
                  <div className="col-4">
                    <label><b>State &nbsp;:&nbsp;</b> </label>

                    <Autocomplete
                      options={this.state.state}
                      getOptionLabel={(option) => option.gtsStateName}
                      style={{ width: 200, outlineColor: "black", display: "inline-block" }}

                      renderInput={(params) => <TextField {...params} placeholder={this.state.gts_permanent_state} variant="outlined" style={{ color: "black" }} name="gts_permanent_state" onChange={this.changeHandler} onSelect={this.changeHandler2} />}
                    />


                  </div>
                  <div className="col-5">
                    <label><b>Country &nbsp;:&nbsp; </b></label>

                    <Autocomplete 

                      options={this.state.country}
                      getOptionLabel={(option) => option.gtsCountryName}
                      style={{ width: 200, outlineColor: "black", display: "inline-block" }}

                      renderInput={(params) => <TextField {...params} placeholder={this.state.gts_permanent_country} value={this.state.gts_permanent_country} variant="outlined" style={{ color: "black" }} name="gts_permanent_country" onChange={this.changeHandler} onSelect={this.changeHandler2} />}
                    />


                  </div>
                </div>


                <div class="col-0 ">
                <button type="button" class="btn btn-primary offset-11" href="#" onClick
                        ={this.mySubmitHandler}> Save</button>
                        
                                 </div>
                       {this.state.successAlert&&<div class="alert alert-success alert-dismissible fade show">
        <button type="button" class="close" data-dismiss="alert" onClick={this.setSuccessAlertFalse}>&times;</button>
        <strong>Success!</strong> 
      </div>}
               
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

}

export default EmployerPersonalDetails;












