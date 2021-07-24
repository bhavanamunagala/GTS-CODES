import React from 'react';
import Header from '../../components/Header';
import Footer1 from '../../components/Footer';
import JobSeekerMenu from './JobSeekerMenuComponent';

class JSPasswordChangeChange extends React.Component {
  constructor(props){
    super(props);
    this.state={
      OPass: '',
      NPass: '',
      RPass: '',
      errors: {
        OPass: "",
        NPass: "",
        RPass: "",
      },
    };
  }
  


  changeHandler = (event) => {
    let name=event.target.name;
    let value=event.target.value;
    let errors=this.state.errors;
    const re=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    switch(name){
      case "OPass":
       if(!re.test(event.target.value)){
          errors.OPass=<p>
          <ul>
          <li>Password must contain at least 1 lowercase alphabetical character</li>
          <li>Password must contain at least 1 uppercase alphabetical character</li>
          <li>Password must contain at least 1 numeric character</li>
          <li>Password must contain at least 1 special character</li>
          <li>Password must be eight characters or longer</li>
          </ul></p>;
        }
        else{
          errors.OPass="";
        }
        
      break;
      case "NPass":
        if(event.target.value ===this.state.OPass){
          errors.NPass="New Password cannot be similar with old password";
        }
        else if(!re.test(event.target.value)){
          errors.NPass=<p>
          <ul>
          <li>Password must contain at least 1 lowercase alphabetical character</li>
          <li>Password must contain at least 1 uppercase alphabetical character</li>
          <li>Password must contain at least 1 numeric character</li>
          <li>Password must contain at least 1 special character</li>
          <li>Password must be eight characters or longer</li>
          </ul></p>;
        }
        else{
          errors.NPass="";
        }

      break;
      case "RPass":
        if(event.target.value !==this.state.NPass){
          errors.RPass="Passwords do not match";
        }
        else{
          errors.RPass="";
        }
      break;
    }
    this.setState({errors,[name]:value});
  };
  submitHandler= (event) => {
    event.preventDefault();
    if(this.state.errors.OPass.length===0 && this.state.errors.NPass.length===0 && this.state.errors.RPass.length===0){
      alert("Password changed successfully")
    }
    else{
      alert("Sorry!cannot change Password")
    }
  }

    render(){
      const{errors}=this.state;
        return(
    <div>
  
    <div className="container-fluid">
    <div className="container">
      <form onSubmit={this.submitHandler} >
      <div className="form-group">
      <label for="Password" className="text-secondary">Enter Current Password</label><br/>
      <input type="password"  name="OPass" id="password" className="form-control" placeholder="Placeholder text" style={{width:"370px"}} onChange={this.changeHandler} required></input>
      <p className="text-danger">{errors.OPass}</p>
      </div>
      <div className="form-group">
      <label for="PasswordNew" className="text-secondary">Enter New Password</label><br/>
      <input type="password" name="NPass" id="passwordnew" className="form-control" placeholder="Placeholder text" style={{width:"370px"}} onChange={this.changeHandler} required></input>
      <p className="text-danger">{errors.NPass}</p>
      </div>
      <div className="form-group">
      <label for="RePasswordNew" className="text-secondary">Re Enter New Password</label><br/>
      <input type="password" name="RPass" id="repasswordnew" className="form-control" placeholder="Placeholder text" style={{width:"370px"}} onChange={this.changeHandler} required></input>
      <p className="text-danger">{errors.RPass}</p>
      </div>
      <div className="form-group">
      <input type="submit"  className="btn btn-primary" value="Reset Password"></input>
      </div> 
      </form>
    </div>


  

 
 </div>
 </div>
        )
    }
}
export default JSPasswordChangeChange;
