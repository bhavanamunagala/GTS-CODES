import React from 'react';
import Header from '../../components/Header';
import Footer1 from '../../components/Footer';

// reactstrap components
import {
  Button,

  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Alert,
  ButtonGroup
} from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import backgroundImage from '../assets/img/icons/common/4.svg';
import {Card, CardBody,CardText, FormControl, FormLabel,FormCheck } from 'react-bootstrap';

class Register extends React.Component {
    componentDidMount() {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.main.scrollTop = 0;
    }
    constructor(props) {
        super(props);
        this.state = {
          user:0,
          isJobseeker: false,
          isEmployer: false,
          isTrainer: false,
          isRecruiter: false,
          isAdmin: false,
          defaultRole:'none',
          gts_user_id:'',
          email: '',
          password: '',
          role:'',
          confirmPassword: '',
          registrationError: '',
          registrationSuccess: '',
          buttonDisabled: false,
          message: '',
          isError: '',
          errors: {},
          responses: {},
          visible: false,
          roleError:'',
          roleSuccess:''
        };
        this.onRadioChange = this.onRadioChange.bind(this);

              }
      onRadioChange = (e) => {
        this.setState({
          defaultRole: e.target.value
        });
      }

      toggleChangeJobseeker = () => {
        this.setState(prevState => ({
          isJobseeker: !prevState.isJobseeker,
        }));
      }
    
      toggleChangeEmployer = () => {
        this.setState(prevState => ({
          isEmployer: !prevState.isEmployer,
        }));
      }
    
      toggleChangeRecruiter = () => {
        this.setState(prevState => ({
          isRecruiter: !prevState.isRecruiter,
        }));
      }
      toggleChangeAdmin = () => {
        this.setState(prevState => ({
          isAdmin: !prevState.isAdmin,
        }));
      }
       toggleChangeTrainer = () => {
        this.setState(prevState => ({
          isTrainer: !prevState.isTrainer,
        }));
      }

      onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
      }




  inputOnChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


    clearEmailError = e =>  {
        //let fields = this.state.fields;
        let errors = this.state.errors;
        let formIsValid = true;

        //alert("Field name: "+e.target.name)

        if(e.target.name=="email"){
            errors["email"] = "";

            this.setState({
              errors: errors
            });

            return formIsValid;
        }

    }

      clearPasswordError = e =>  {
          //let fields = this.state.fields;
          let errors = this.state.errors;
          let formIsValid = true;

          //alert("Field name: "+e.target.name)

          if(e.target.name=="password"){
              errors["password"] = "";

              this.setState({
                errors: errors
              });

              return formIsValid;
          }

          }



        clearConfirmPasswordError = e =>  {
          //let fields = this.state.fields;
          let errors = this.state.errors;
          let formIsValid = true;

          //alert("Field name: "+e.target.name)


          if(e.target.name=="confirmPassword"){
              errors["confirmPassword"] = "";

              this.setState({
                errors: errors
              });

              return formIsValid;
          }

    }

    validateEmail = e =>   {
      //let fields = this.state.fields;
      let errors = this.state.errors;
      let formIsValid = true;

      //alert("Validate Email: "+this.state.email)

      if (!this.state.email) {
          //alert("Enter email")
          formIsValid = false;
          errors["email"] = "Please enter your email-ID.";

          this.setState({
            errors: errors
          });

          return formIsValid;
      }

      if (typeof this.state.email !== "undefined") {
          //alert("Enter valid email")

          //Production
          //var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

          //Development
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

          if (!pattern.test(this.state.email)) {
              formIsValid = false;
              errors["email"] = "Please enter valid email-ID.";
          }

          this.setState({
            errors: errors
          });

          return formIsValid;
      }

    }



        validatePassword = e =>   {
            let errors = this.state.errors;
            let formIsValid = true;


            if (!this.state.password) {
              //alert("Enter valid password")
              formIsValid = false;
              errors["password"] = "Please enter your password.";

                this.setState({
                  errors: errors
                });

              return formIsValid;
            }


            if (typeof this.state.password !== "undefined") {

              //Production
              //if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)) {

              //Development
              if (!this.state.password.match(/^.*(?=.{2,}).*$/)) {
                formIsValid = false;
                errors["password"] = "Please enter secure and strong password .";

                this.setState({
                  errors: errors
                });

                return formIsValid;
              }

            }

         }

        validateConfirmPassword = e =>   {
            let errors = this.state.errors;
            let formIsValid = true;


            if (!this.state.confirmPassword) {
              //alert("Enter valid password")
              formIsValid = false;
              errors["confirmPassword"] = "Please confirm your  password.";

                this.setState({
                  errors: errors
                });

              return formIsValid;
            }


            if (typeof this.state.confirmPassword !== "undefined") {

              //Production
              //if (!fields["confirmPassword"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)) {

              //Development
              if (!this.state.confirmPassword.match(/^.*(?=.{2,}).*$/)) {
                formIsValid = false;
                errors["confirmPassword"] = "Please enter secure and strong password .";

                this.setState({
                  errors: errors
                });

                return formIsValid;
              }

              if(this.state.password != this.state.confirmPassword){
                  errors["confirmPassword"] = "Password & Confirm-Password must be same.";
                  this.setState({
                    errors: errors
                  });

                  return formIsValid;
              }

            }

         }


  

  onSubmitHandler = e => {

          e.preventDefault();
          var validationResult;

          validationResult=true;
          let responses = this.state.responses;
        var url="http://localhost:4711/api/v1/users"
  


        var payload = {

                     "gts_user_email" : this.state.email,
                     "gts_user_password" : this.state.password,
                     "gts_user_status" : true,
                     "gts_user_login_tries" :0

                  };

                axios
                .post(url, payload)
                  .then(response => {
                    alert(
                      response.data
                    )
                   console.log(response.data);
                   this.setState({
                     gts_user_id:response.data.gts_user_id
                   })

                    let message = response.message;
                    if (response.data.success == "false") {
                          //alert("Registration failed");
                          responses["registrationError"] = response.data.message;

                          this.setState({
                            responses: responses
                          });


                    } else {
                      let user=response.data.gts_user_id;

                      var ro=this.onSubmitHandlerrole(user,e);
                      
                      if(ro===true){
                          alert(response.data)
                       

                          responses["registrationSuccess"] = "Registration is successful";

                          this.setState({
                            responses: responses
                            
                          });
                        }
                      else{
                        responses["registrationError"] = "try again";

                        this.setState({
                          responses: responses
                        });

                      }
                         

                    }
                  })
                  .catch(error => {
                    alert("Error: "+error);
                  });
              };


      onSubmitHandlerrole (user,e) {
        var arr=[]
        if(this.state.isJobseeker===true){
          arr.push(1);
        }
        if(this.state.isEmployer===true){
          arr.push(2);
        }
        if(this.state.isAdmin===true){
          arr.push(3);
        }
        if(this.state.isRecruiter===true){
          arr.push(4);
        }
        if(this.state.isTrainer===true){
            arr.push(5);
        }
        let data = arr.toString() ;
          console.log(data)

          var defr=0
          if(this.state.defaultRole==="Jobseeker"){
              defr=1;
          }
          else if(this.state.defaultRole==="Employer"){
              defr=2;
          }
          else if(this.state.defaultRole==="Admin"){
              defr=3;
          }
          else if(this.state.defaultRole==="Recruiter"){
              defr=4;
          }
          else if(this.state.defaultRole==="Trainer"){
              defr=5;
          }
          console.log(defr)
          e.preventDefault();
          var validationResult;

          validationResult=true;
          let responses = this.state.responses;
        var url2="http://localhost:4712/api/v1/users/role"
        //Mock URL
        var payload2={

          "gts_user_id" : this.state.gts_user_id,
          "roles" : data,
          "primary_role_id" :  defr
          
          }
  
                axios
                .post(url2, payload2)
                  .then(response => {
                   console.log(response.data);
                    let message = response.message;
                    if (response.data.success == "false") {
                          //alert("Registration failed");
                          return false;


                    } else {

                          //alert("Registration successful");

                          return true;
                        
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
                return (
                  <>
                    {/* <DemoNavbar /> */}
                    <main ref="main">
                      <section className="section section-shaped section-lg">
                        <div className="shape shape-style-1 bg-gradient-default">
                          <span />
                          <span />
                          <span />
                          <span />
                          <span />
                          <span />
                          <span />
                          <span />
                        </div>
                         {/*<Header /> */}
                         <Header />
                         <div class="d-flex justify-content-around">
            <div Align="left">
            <Container className="pt-lg-md">
              <Row className="justify-content-center mt-7">
                <Col lg="5">

            <Card border="primary"  style={{ width: '18rem' }}>

    <Card.Body>

      <Card.Text>
        <dl>
     <dd>  By Registering, you are getting:</dd>
    <dd>   * Access to contact with Trainers and Recruiters</dd>
     <dd>  * 24*7 Customer Care Support</dd>
     <dd>  * Message board communication</dd></dl>
      </Card.Text>
    </Card.Body>
  </Card></Col></Row></Container></div>
  <Container className="pt-lg-md">
              <Row className="justify-content-center mt-7">
                <Col lg="5">

                      <div className="text-center text-muted mb-4">
                        <h1>Register Below</h1>
                      </div>
                      <Form method="post" name="handler" onSubmit={this.onSubmitHandler}>
                        <FormGroup className="mb-3" controlId="formBasicEmail">
                        <FormLabel>Enter Email</FormLabel>
                            <InputGroup>
                            <Input
                              type="text"
                              name="email"
                              id="email"
                              className="form-control"
                              placeholder="John Doe"
                              value={this.state.email}
                              onChange={this.inputOnChangeHandler}
                              onBlur={this.validateEmail}
                              onFocus={this.clearEmailError}/>
                            </InputGroup>

                        </FormGroup>
                        <FormGroup className="mb-3">
                            <div divID="emailError" style={errorMessageStyles}>{this.state.errors.email}</div>
                          </FormGroup>


                        <FormGroup className="mb-3" controlId="formBasicPassword">
                        <FormLabel>Enter Password</FormLabel>
                            <InputGroup>
                            
                             <Input
                              type="password"
                              name="password"
                              id="password"
                              className="form-control"
                              placeholder="**********"
                              value={this.state.password}
                              onChange={this.inputOnChangeHandler}
                              onBlur={this.validatePassword}
                              onFocus={this.clearPasswordError}/>
                                </InputGroup>


                        </FormGroup >
                        <FormGroup className="mb-3">
                            <div divID="passwordError" style={errorMessageStyles}>{this.state.errors.password}</div>
                          </FormGroup>


                        <FormGroup className="mb-3" controlId="formBasicPassword">
                          <FormLabel>Re-enter Password</FormLabel>
                            <InputGroup>
                            <Input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                className="form-control"
                                placeholder="Confirm Password"
                                value={this.state.confirm_password}
                                onChange={this.inputOnChangeHandler}
                                onBlur={this.validateConfirmPassword}
                                onFocus={this.clearConfirmPasswordError}
                            /></InputGroup>


                        </FormGroup>
                        <FormGroup className="mb-3">
                            <div divID="confirmPasswordError" style={errorMessageStyles}>{this.state.errors.confirmPassword}</div>
                          </FormGroup>
                        

                          <FormGroup className="mb-3">
                            <div divID="registrationError" style={errorMessageStyles}>{this.state.responses.registrationError}</div>
                          </FormGroup>

                          <FormGroup className="mb-3">
                            <div divID="registrationSuccess" style={successMessageStyles}>{this.state.responses.registrationSuccess}</div>
                          </FormGroup>



                        <div className="text-center">
                          <Button className="mt-4" color="info" type="submit">
                            Register
                          </Button>
                        </div>

                        
                      </Form>

                      </Col>
              </Row>
            </Container>

            <div >
            <Container>
              <Row className="justify-content-center mt-7">
                <Col lg="">

    <dl>
    <dd>Select Role(You can have multiple, but please state one role as your default as well):</dd>
    </dl>

    <form>

       <div>
         <div class="row">
           <div class="col">
           <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.isJobseeker}
                onChange={this.toggleChangeJobseeker}
                className="form-check-input"
              />
              JobSeeker
            </label>
            <label>
            <input type="radio" value="Jobseeker" 
            checked={this.state.defaultRole === "Jobseeker"}
            onChange={this.onRadioChange}  />
            Default
          </label>
        </div></div></div><br/>

        <div className=" checkbox">
         <div class="row">
           <div class="col">
           <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.isEmployer}
                onChange={this.toggleChangeEmployer}
                className="form-check-input"
              />
              Employer
            </label>
            
           <label>
            <input type="radio" value="Employer"  checked={this.state.defaultRole === "Employer"}
              onChange={this.onRadioChange}  />
            Default
          </label>

        </div></div></div><br/>

        <div className=" checkbox">
         <div class="row">
           <div class="col">
           <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.isRecruiter}
                onChange={this.toggleChangeRecruiter}
                className="form-check-input"
              />
              Recruiter
            </label>
            <label>
            <input type="radio" value="Recruiter"  checked={this.state.defaultRole === "Recruiter"}
              onChange={this.onRadioChange}  />
            Default
          </label>
        </div></div></div><br/>

        <div className=" checkbox">
         <div class="row">
           <div class="col">
           <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.isAdmin}
                onChange={this.toggleChangeAdmin}
                className="form-check-input"
              />
              Admin
            </label>
            
            <label>
            <input type="radio" value="Admin"  checked={this.state.defaultRole === "Admin"}
              onChange={this.onRadioChange}  />
            Default
          </label>

        </div></div></div>

        <div className=" checkbox">
         <div class="row">
           <div class="col">
           <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.isTrainer}
                onChange={this.toggleChangeTrainer}
                className="form-check-input"
              />
              Trainer
            </label>
            <label>
            <input type="radio" value="Trainer"  checked={this.state.defaultRole === "Trainer"}
              onChange={this.onRadioChange}  />
            Default
          </label>
        </div></div></div></form>
        <FormGroup className="mb-3">
                            <div divID="roleError" style={errorMessageStyles}>{this.state.errors.roleError}</div>
                          </FormGroup>
                          <FormGroup className="mb-3">
                            <div divID="roleSuccess" style={errorMessageStyles}>{this.state.errors.roleSuccess}</div>
                          </FormGroup>


          </Col></Row></Container>
          </div>


  </div>
           {/* <Footer1 />  */}
           <Footer1/>
          </section>
        </main>

        {/* <SimpleFooter /> */}
      </>
    );
  }
}

const bgImage = {
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
 // backgroundImage: `url(${backgroundImage})`
};
const successMessageStyles = {
  //backgroundColor: "#f0f",
  //fontSize: someSize,
  color: "#008000",
  //padding: paddings
   marginLeft: '-25%'
}

export default Register;

  
  
