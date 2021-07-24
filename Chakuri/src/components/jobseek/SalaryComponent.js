import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faTrash,faEdit,faUpload} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { Button } from '@material-ui/core';
//import Space from 'react-spaces';



class Salary extends Component {
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
      
            
    componentDidMount(){
     axios.get('http://localhost:4712/api/v1/user/salary')
       .then(res=> {
         alert(res.data);
         this.setState({jobsString:this.getJobArrayTypo(res.data)});
         const items=res.data;
         this.setState({
           items
                 });
        alert(this.state.items);
     },

     (error)=>{
      this.setState({error});
    }
    )
    }
    
    getJobArrayTypo(params) {
      return params.toString();
  }

    deleteItem(gtsUserSalaryId, e){
      axios.delete(`http://localhost:4712/api/v1/user/salary/salary_id/${gtsUserSalaryId}`)
        .then(res => {
          console.log(res);
          console.log(res.data);
    
          const items = this.state.items.filter(item =>item.gts_user_salary_id !== gtsUserSalaryId);
          this.setState({ items });
        },
        (error)=>{
          this.setState({error});
        }
        )
    
    }

    
    editItem(gts_user_salary_id, e){
      e.preventDefault();
      var validationResult;

      validationResult=true;
      let responses = this.state.responses;
      var url=`http://localhost:4712/api/v1/user/salary`


      var payload ={
        "gts_user_salary_id":gts_user_salary_id,
        "users" :29,
        "gts_current_salary_per_year" : this.state.gtsCurrentSalary,
        "gts_expected_salary_per_year" : this.state.gtsExpectedSalary,
        "gts_salary_currency" : this.state.gtsSalaryCurrency,

}

    axios
    .put(url, payload)
      .then(response => {
       console.log(response.data);

        alert("Response Data: "+response.data);
        alert("success: "+response.data.success);
        alert("status_code: "+response.data.status_code);

        let message = response.message;
        if (response.data.success == "false") {
              alert("Registration failed");
              responses["registrationError"] = response.data.message;

              this.setState({
                responses: responses
              });


        } else {

              //alert("Registration successful");

              responses["registrationSuccess"] = response.data.message;

              this.setState({
                responses: responses
              });
              window.location.reload(false);


        }
      })
      .catch(error => {
        alert("Error: "+error);
      });
  };
  
   
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
{
this.state.items.map(item=>(

<div >
  
                  <div class="row">
                  <div class="col">
                  <label><h5>Current Salary </h5></label>
                  {item.gts_current_salary_per_year}</div></div>
                  <div class="row">
                  <div class="col">
                  <label><h5>Expected Salary </h5></label>
                  {item.gts_expected_salary_per_year}</div></div>
                  <div class="row">
                  <div class="col">
                  <label> <h5>Currency </h5> </label>
                  {item.gts_salary_currency}</div>
                  <div>
                  <Button className="btn btn-primary btn-sm" data-toggle="modal" data-target="#editSalary"
                  >Edit</Button>
                  <Button className="btn btn-danger btn-sm " 
                  onClick={(e)=>this.deleteItem(item.gts_user_salary_id,e)}>Delete</Button></div></div>
                  <hr></hr>


                  <div  id= "editSalary" class="modal fade" role="dialog">
                  <div class="modal-dialog">
                  <div class="modal-content">
                  <div class="modal-header">
                  <h5 class="modal-title"> Edit Salary</h5>
                  </div>
                  <div class="modal-body">
                  <div class="col">
                    <label>Current Salary </label> 
                  < input type ="text"  class="text-primary"
                  name="gtsCurrentSalary"
                defaultValue={item.gts_current_salary_per_year}
                onChange={this.inputOnChangeHandler}
                onBlur={this.validateCurrentSalary}
                onFocus={this.clearCurrentSalaryError}></input>
                <div divID="gtsCurrentSalaryError" style={errorMessageStyles}>{this.state.errors.gtsCurrentSalary}</div>
                </div>
                <div class="col">
                  <label>Expected Salary</label>
                < input type ="text"  class="text-primary"
                name="gtsExpectedSalary"
                defaultValue={item.gts_expected_salary_per_year}
                onChange={this.inputOnChangeHandler}
                onBlur={this.validateExpectedSalary}
                onFocus={this.clearExpectedSalaryError} ></input>
                <div divID="gtsExpectedSalaryError" style={errorMessageStyles}>{this.state.errors.gtsExpectedSalary}</div>
                  </div>
                <div class="col">
                  <label>Currency </label>
                < input type ="text" class="text-primary"
                name="gtsSalaryCurrency"
                defaultValue={item.gts_salary_currency}
                onChange={this.inputOnChangeHandler}
                onBlur={this.validateCurrency}
                onFocus={this.clearCurrencyError} ></input>
                <div divID="gtsSalaryCurrencyError" style={errorMessageStyles}>{this.state.errors.gtsSalaryCurrency}</div>

                  </div>
              
                  <div class="modal-footer">
                  <div class="text-inline">


                  <div class="col-1">
                  <Button className="btn btn-primary " onClick={(e)=>this.editItem(item.gts_user_salary_id,e)}>Save</Button>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                </div>
                </div>
                </div>
                            
))}
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
 export default Salary;