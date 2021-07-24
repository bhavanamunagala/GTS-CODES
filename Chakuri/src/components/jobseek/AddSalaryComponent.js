import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faTrash,faEdit,faUpload} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { withRouter } from 'react-router-dom';

import { Button } from '@material-ui/core';
//import Space from 'react-spaces';



class AddSalary extends React.Component {
    constructor(props){
      super(props);
      this.state={
        error: null,
        items: [],
        reponse:{},
        jobsString:"",
        gtsCurrentSalary: '',
        gtsExpectedSalary: '',
        gtsSalaryCurrency: '',
        inputError: '',
        inputSuccess: '',
        buttonDisabled: false,
        message: '',
        isError: '',
        errors: {},
        responses: {},
        visible: false
 
      }
    }


    onSubmitHandler = e => {

      e.preventDefault();
      var validationResult;

      validationResult=true;
      let responses = this.state.responses;

    //let errors = this.state.errors;
    //e.preventDefault();
    //this.setState({ buttonDisabled: true });


    //Dev URL
    //var url ='https://192.168.43.26:4711/users';

    //Mock URL
    var url="http://localhost:4712/api/v1/user/salary"
    //localhost:8080/api/v1/user/language
    //var url="https://d3f73107-38a1-4141-95e1-8fdc5a3028e0.mock.pstmn.io/api/v1/users/failed"

    //Local URL
    //var url ='https://192.168.43.26:4711/users';
    alert("Proficiency: "+this.state.gtsCurrentSalary);
    alert("read: "+this.state.gtsExpectedSalary);
    alert("write: "+this.state.gtsSalaryCurrency);


    var payload =/* [{
               "gtsUserLanguageName" : this.state.language,
               "gtsUserLanguageCanRead" : this.state.read,
               "gtsUserLanguageCanWrite" : this.state.write,
               "gtsUserLanguageCanSpeak" : this.state.speak,
               "gtsUserProficiency":  this.state.Proficiency,
               "gtsUserIsFirstLanguage" : 1,
               "gtsUserIsSecondLanguage" : 0,
               "gtsUserIsOtherLanguage" : 0
      }];*/
      {
        "users" :2,
        "gts_current_salary_per_year" : this.state.gtsCurrentSalary,
        "gts_expected_salary_per_year" : this.state.gtsExpectedSalary,
        "gts_salary_currency" : this.state.gtsSalaryCurrency,
}
          
    console.log(payload);

            axios
            .post(url, payload)
              .then(response => {
               console.log(response.data);
               

                alert("Response Data: "+response.data);
                alert("success: "+response.data.success);
                alert("status_code: "+response.data.status_code);

                let message = response.message;
                if (response.data.success == "false") {
                      alert("Sorry! cannot be added");
                      responses["inputError"] = "Data for this id already exists ";

                      this.setState({
                        responses: responses
                      });


                } else {

                      //alert("Registration successful");

                      responses["inputSuccess"] = response.data.message;
                      this.setState({
                        responses: responses
                      });
                      


                }
              })
              .catch(error => {
                alert("Error: "+error);

              });
          };
    inputOnChangeHandler = e => {
      this.setState({ [e.target.name]: e.target.value });
      };
      
      
      clearCurrentSalaryError = e =>  {
          //let fields = this.state.fields;
          let errors = this.state.errors;
          let formIsValid = true;
      
          //alert("Field name: "+e.target.name)
      
          if(e.target.name=="gtsCurrentSalary"){
              errors["gtsCurrentSalary"] = "";
      
              this.setState({
                errors: errors
              });
      
              return formIsValid;
          }
      
      }
      clearExpectedSalaryError = e =>  {
          //let fields = this.state.fields;
          let errors = this.state.errors;
          let formIsValid = true;
      
          //alert("Field name: "+e.target.name)
      
          if(e.target.name=="gtsExpectedSalary"){
              errors["gtsExpectedSalary"] = "";
      
              this.setState({
                errors: errors
              });
      
              return formIsValid;
          }
      
      }   
       clearCurrencyError = e =>  {
          //let fields = this.state.fields;
          let errors = this.state.errors;
          let formIsValid = true;
      
          //alert("Field name: "+e.target.name)
      
          if(e.target.name=="gtsSalaryCurrency"){
              errors["gtsSalaryCurrency"] = "";
      
              this.setState({
                errors: errors
              });
      
              return formIsValid;
          }
      
      }       
      validateCurrentSalary = e =>   {
        //let fields = this.state.fields;
        let errors = this.state.errors;
        let formIsValid = true;
      
        //alert("Validate Email: "+this.state.email)
      
        if (!this.state.gtsCurrentSalary) {
            //alert("Enter email")
            formIsValid = false;
            errors["gtsCurrentSalary"] = "Please enter your Current Salary";
      
            this.setState({
              errors: errors
            });
      
            return formIsValid;
          }
      
            return formIsValid;
        }
      
        validateExpectedSalary = e =>   {
              let errors = this.state.errors;
              let formIsValid = true;
      
      
              if (!this.state.gtsExpectedSalary) {
                //alert("Enter valid password")
                formIsValid = false;
                errors["gtsExpectedSalary"] = "Please enter your Expected Salary";
      
                  this.setState({
                    errors: errors
                  });
      
                return formIsValid;
              }
      
              return formIsValid;
      
      
           }
      
          validateCurrency = e =>   {
              let errors = this.state.errors;
              let formIsValid = true;
      
      
              if (!this.state.gtsSalaryCurrency) {
                //alert("Enter valid password")
                formIsValid = false;
                errors["gtsSalaryCurrency"] = "Please enter Currency";
      
                  this.setState({
                    errors: errors
                  });
      
                return formIsValid;
              }
      
                  return formIsValid;
              }
  
   
     render() {
      const errorMessageStyles = {
        //backgroundColor: "#f0f",
        //fontSize: someSize,
        color: "#ff4d4d",
        //padding: paddings
    }
       const {error,items}=this.state;
       console.log(items);
    
         
         return (
            <div>
            <div>
                 
            <div className="container align-items-center">
            <div className='mt-4 mb-6'>
            <div className="border border-dark rounded-lg" >
            <h5 class="mb-3 p-2">Salary</h5>
            <div className="container">
<hr></hr>     
            <div className="container">
            <div class="row">
                  <div >
                  <label>Current Salary</label>
                  < input type ="text"  class="text-primary" placeholder = "Current Salary" 
                  name="gtsCurrentSalary"
                  id="gtsCurrentSalary"
                  value={this.state.gtsCurrentSalary}
                  onChange={this.inputOnChangeHandler}
                  onBlur={this.validateCurrentSalary}
                  onFocus={this.clearCurrentSalaryError}></input>
                  <div divID="gtsCurrentSalary" style={errorMessageStyles}>{this.state.errors.gtsCurrentSalary}</div>
                  </div>
                  <div>
                  <label>Expected Salary</label>
                  < input type ="text"  class="text-primary" placeholder = "Expected Salary"
                  name="gtsExpectedSalary"
                  id="gtsExpectedSalary"
                  value={this.state.Proficiency}
                  onChange={this.inputOnChangeHandler}
                  onBlur={this.validateExpectedSalary}
                  onFocus={this.clearExpectedSalaryError} ></input>
                 <div divID="gtsExpectedSalary" style={errorMessageStyles}>{this.state.errors.gtsExpectedSalary}</div>
                    </div>
                 <div>
                 <label>Currency</label>
                 < input type ="text" class="text-primary" placeholder = "Currency"
                 name="gtsSalaryCurrency"
                 id="gtsSalaryCurrency"
                 value={this.state.read}
                 onChange={this.inputOnChangeHandler}
                 onBlur={this.validateCurrency}
                 onFocus={this.clearCurrencyError} ></input>
                 <div divID="gtsSalaryCurrency" style={errorMessageStyles}>{this.state.errors.gtsSalaryCurrency}</div>

                    </div>
                    <div divID="inputError" style={errorMessageStyles}>{this.state.responses.inputError}</div>
                    <div divID="inputSuccess" style={successMessageStyles}>{this.state.responses.inputSuccess} </div>
                    </div>
                    <div >


                    <div class="col-1">
                     <a class="btn btn-primary " onClick={this.onSubmitHandler} > Add</a>
                    </div>
                    </div>
             </div>
             </div>


          </div>
               </div>
            </div>
        </div>
          </div>
  


         )
     }
 }
 const bgImage = {
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};
const successMessageStyles = {
  //backgroundColor: "#f0f",
  //fontSize: someSize,
  color: "#008000",
  //padding: paddings
   marginLeft: '-25%'};
 export default AddSalary;