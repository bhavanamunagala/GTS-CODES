import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faTrash,faEdit,faUpload} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { Button } from '@material-ui/core';
//import Space from 'react-spaces';



class Language extends Component {
    constructor(props){
      super(props);
      this.state={
        error: null,
        items: [],
        reponse:{},
        language: '',
        jobsString:"",
        Proficiency: '',
        read: '',
        write: '',
        speak: '',
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
    var url="http://localhost:8080/api/v1/user/language"
    //localhost:8080/api/v1/user/language
    //var url="https://d3f73107-38a1-4141-95e1-8fdc5a3028e0.mock.pstmn.io/api/v1/users/failed"

    //Local URL
    //var url ='https://192.168.43.26:4711/users';

    // alert("language: "+this.state.language);
    // alert("Proficiency: "+this.state.Proficiency);
    // alert("read: "+this.state.read);
    // alert("write: "+this.state.write);
    // alert("speak: "+this.state.speak);


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
      [{
        "gtsUserLanguageName" : this.state.language,
        "gtsUserLanguageCanRead" : this.state.read,
        "gtsUserLanguageCanWrite" : this.state.write,
        "gtsUserLanguageCanSpeak" : this.state.speak,
        "gtsUserProficiency":  this.state.Proficiency,
        "gtsUserIsFirstLanguage" : 1,
        "gtsUserIsSecondLanguage" : 0,
        "gtsUserIsOtherLanguage" : 0
}]

          
                              console.log(payload);

            axios
            .post(url, payload)
              .then(response => {
               console.log(response.data);
               

                // alert("Response Data: "+response.data);
                // alert("success: "+response.data.success);
                // alert("status_code: "+response.data.status_code);

                let message = response.message;
                if (response.data.success == "false") {
             //     alert("Sorry! cannot be added");
                      responses["inputError"] = response.data.message;

                      this.setState({
                        responses: responses
                      });


                } else {

                      //alert("Registration successful");

                      responses["inputSuccess"] = response.data.message;

                      this.setState({
                        responses: responses
                      });
                      window.location.reload(false);

                }
              })
              .catch(error => {
               // alert("Error: "+error);
              });
          };
    inputOnChangeHandler = e => {
      this.setState({ [e.target.name]: e.target.value });
      };
      
      
      clearLangError = e =>  {
          //let fields = this.state.fields;
          let errors = this.state.errors;
          let formIsValid = true;
      
          //alert("Field name: "+e.target.name)
      
          if(e.target.name=="language"){
              errors["language"] = "";
      
              this.setState({
                errors: errors
              });
      
              return formIsValid;
          }
      
      }
      clearProficiencyError = e =>  {
          //let fields = this.state.fields;
          let errors = this.state.errors;
          let formIsValid = true;
      
          //alert("Field name: "+e.target.name)
      
          if(e.target.name=="Proficiency"){
              errors["Proficiency"] = "";
      
              this.setState({
                errors: errors
              });
      
              return formIsValid;
          }
      
      }   
       clearReadError = e =>  {
          //let fields = this.state.fields;
          let errors = this.state.errors;
          let formIsValid = true;
      
          //alert("Field name: "+e.target.name)
      
          if(e.target.name=="read"){
              errors["read"] = "";
      
              this.setState({
                errors: errors
              });
      
              return formIsValid;
          }
      
      }
      
        clearWriteError = e =>  {
            //let fields = this.state.fields;
            let errors = this.state.errors;
            let formIsValid = true;
      
            //alert("Field name: "+e.target.name)
      
            if(e.target.name=="write"){
                errors["write"] = "";
      
                this.setState({
                  errors: errors
                });
      
                return formIsValid;
            }
      
            }
      
      
      
      
            clearSpeakError = e =>  {
                //let fields = this.state.fields;
                let errors = this.state.errors;
                let formIsValid = true;
      
                //alert("Field name: "+e.target.name)
      
      
                if(e.target.name=="speak"){
                    errors["speak"] = "";
      
                    this.setState({
                      errors: errors
                    });
      
                    return formIsValid;
                }
      
          }
      
      validateLanguage = e =>   {
        //let fields = this.state.fields;
        let errors = this.state.errors;
        let formIsValid = true;
      
        //alert("Validate Email: "+this.state.email)
      
        if (!this.state.language) {
            //alert("Enter email")
            formIsValid = false;
            errors["language"] = "Please enter your language";
      
            this.setState({
              errors: errors
            });
      
            return formIsValid;
          }
      
            return formIsValid;
        }
      
      
      
      
      
          validateProficiency = e =>   {
              let errors = this.state.errors;
              let formIsValid = true;
      
      
              if (!this.state.Proficiency) {
                //alert("Enter valid password")
                formIsValid = false;
                errors["Proficiency"] = "Please enter your proficiency";
      
                  this.setState({
                    errors: errors
                  });
      
                return formIsValid;
              }
      
              return formIsValid;
      
      
           }
      
          validateRead = e =>   {
              let errors = this.state.errors;
              let formIsValid = true;
      
      
              if (!this.state.read) {
                //alert("Enter valid password")
                formIsValid = false;
                errors["read"] = "Please enter";
      
                  this.setState({
                    errors: errors
                  });
      
                return formIsValid;
              }
      
                  return formIsValid;
              }
      
                validateWrite = e =>   {
                  let errors = this.state.errors;
                  let formIsValid = true;
      
      
                  if (!this.state.write) {
                    //alert("Enter valid password")
                    formIsValid = false;
                    errors["write"] = "Please enter";
      
                      this.setState({
                        errors: errors
                      });
      
                    return formIsValid;
                  }
      
                    return formIsValid;
                  }
      
      
                  validateSpeak = e =>   {
                      let errors = this.state.errors;
                      let formIsValid = true;
          
          
                      if (!this.state.speak) {
                        //alert("Enter valid password")
                        formIsValid = false;
                        errors["speak"] = "Please enter";
          
                          this.setState({
                            errors: errors
                          });
          
                        return formIsValid;
                      }
          
                        return formIsValid;
                      }
    componentDidMount(){
     axios.get('http://localhost:8080/api/v1/user/language')
       .then(res=> {
         //alert(res.data);
         this.setState({jobsString:this.getJobArrayTypo(res.data)});
         const items=res.data;
         this.setState({
           items
                 });
       // alert(this.state.items);
     },

     (error)=>{
      this.setState({error});
    }
    )
    }

    
    getJobArrayTypo(params) {
      return params.toString();
  }

    deleteItem(gtsUserLanguageId, e){
      axios.delete(`http://localhost:8080/api/v1/user/language/language_id`,
      {data: {
        "gtsUserLanguageId":gtsUserLanguageId
      }})
        .then(res => {
          console.log(res);
          console.log(res.data);
    
          const items = this.state.items.filter(item =>item.gtsUserLanguageId !== gtsUserLanguageId);
          this.setState({ items });
        },
        (error)=>{
          this.setState({error});
        }
        )
    
    }

    
    editItem(gtsUserLanguageId, e){
      e.preventDefault();
      var validationResult;

      validationResult=true;
      let responses = this.state.responses;
      var url="http://localhost:8080/api/v1/user/language"


      var payload = [{
        "gtsUserLanguageId": gtsUserLanguageId,
        "gtsUserLanguageName" : this.state.language,
        "gtsUserLanguageCanRead" : this.state.read,
        "gtsUserLanguageCanWrite" : this.state.write,
        "gtsUserLanguageCanSpeak" : this.state.speak,
        "gtsUserProficiency":  this.state.Proficiency,
        "gtsUserIsFirstLanguage" : 1,
        "gtsUserIsSecondLanguage" : 0,
        "gtsUserIsOtherLanguage" : 0
}]

    axios
    .put(url, payload)
      .then(response => {
       console.log(response.data);

        // alert("Response Data: "+response.data);
        // alert("success: "+response.data.success);
        // alert("status_code: "+response.data.status_code);

        let message = response.message;
        if (response.data.success == "false") {
              //alert("Registration failed");
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
        //alert("Error: "+error);
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
            <div className='mt-6  mb-6'>
            <div className="border border-dark rounded-lg" >
            <h5 class="mb-3 p-2">Langauage Known(master data)</h5>
            <div className="container">
            <div class="row">
                  <div class="col">
                    <label><h5>Langauage Known </h5></label>
                    </div>
                  <div class="col">
                     <label><h5>Profiency </h5></label>
                    </div>
                 <div class="col">
                   <label> <h5>Read </h5> </label>
                    </div>
                    <div class="col">
                   <label><h5>Write </h5> </label>
                    </div>
                    <div class="col">
                   <label><h5>Speak</h5> </label>
                    </div>
                    <div class="col-1">
                              <a href ="#" class="btn  "><FontAwesomeIcon icon={faEdit}/></a>
                    </div>
             </div>
<hr></hr>
{


this.state.items.map(item=>(

<div class="row">
  

                  <div class="col-1">
                  
                  {item.gtsUserLanguageName}</div>
                  <div class='col-1'></div>
                  <div class="col">
                  {item.gtsUserProficiency}</div>
                  <div class='col-1'></div>
                  <div class="col">
                  {item.gtsUserLanguageCanRead}</div>
                  <div class='col-1'></div>
                  <div class="col">
                  {item.gtsUserLanguageCanWrite}</div>
                  <div class='col-1'></div>
                  <div class="col">
                  {item.gtsUserLanguageCanSpeak}</div>
                  

                  <div class="col">
                  <Button className="btn btn-primary btn-sm" data-toggle="modal" data-target="#editlanguage"
                  >Edit</Button></div>
                  <div class="col">
                  <Button className="btn btn-danger btn-sm " 
                  onClick={(e)=>this.deleteItem(item.gtsUserLanguageId,e)}>Delete</Button></div>
                  <hr></hr>


                  <div  id= "editlanguage" class="modal fade" role="dialog">
                  <div class="modal-dialog">
                  <div class="modal-content">
                  <div class="modal-header">
                  <h5 class="modal-title"> Edit Language</h5>
                  </div>
                  <div class="modal-body">
                  <div class="col">
                    <label>Language Known </label> 
                  < input type ="text"  class="text-primary"
                  name="language"
                defaultValue={item.gtsUserLanguageName}
                onChange={this.inputOnChangeHandler}
                onBlur={this.validateLanguage}
                onFocus={this.clearLangError}></input>
                <div divID="languageError" style={errorMessageStyles}>{this.state.errors.language}</div>
                </div>
                <div class="col">
                  <label>Proficiency</label>
                < input type ="text"  class="text-primary"
                name="Proficiency"
                defaultValue={item.gtsUserProficiency}
                onChange={this.inputOnChangeHandler}
                onBlur={this.validateProficiency}
                onFocus={this.clearProficiencyError} ></input>
                <div divID="proficiencyError" style={errorMessageStyles}>{this.state.errors.Proficiency}</div>
                  </div>
                <div class="col">
                  <label>Read </label>
                < input type ="text" class="text-primary"
                name="read"
                defaultValue={item.gtsUserLanguageCanRead}
                onChange={this.inputOnChangeHandler}
                onBlur={this.validateRead}
                onFocus={this.clearReadError} ></input>
                <div divID="readError" style={errorMessageStyles}>{this.state.errors.read}</div>

                  </div>
                  <div class="col">
                  <label>Write</label>
                  < input type ="text" class="text-primary"
                  name="write"                  
                  defaultValue={item.gtsUserLanguageCanWrite}
                  onChange={this.inputOnChangeHandler}
                  onBlur={this.validateWrite}
                  onFocus={this.clearWriteError}></input>
                  <div divID="writeError" style={errorMessageStyles}>{this.state.errors.write}</div>

                  </div>
                  <div class="col">
                    <label>Speak</label>
                  < input type ="text"  class="text-primary" 
                  name="speak"
                  defaultValue={item.gtsUserLanguageCanSpeak}
                  onChange={this.inputOnChangeHandler}
                  onBlur={this.validateSpeak}
                  onFocus={this.clearSpeakError} >
                  </input>
                  </div>
                  <div class="modal-footer">
                  <div class="text-inline">


                  <div class="col-1">
                  <a class="btn btn-primary " onClick={(e)=>this.editItem(item.gtsUserLanguageId,e)}>Save</a>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                </div>
                </div>
                </div>
                            
))}

              <div class="row">
              <div class="col">
              <button className="btn btn-primary btn-sm" data-toggle="modal" data-target="#addlanguage" >Add Language</button>
             </div>
             <div class="col"></div>
             </div>



  
            
             <div class="modal fade" role="dialog" id="addlanguage">
               <div class="modal-dialog">
                <div class="modal-content">
            <div class="modal-header">
                <h5 class="mb-3 p-2">Langauage Known(master data)</h5>
                </div>
            <div className="container">
<div class="row">
                  <div >
                  <label>Language Name</label>
                  < input type ="text"  class="text-primary" placeholder = "English" 
                  name="language"
                  id="language"
                  value={this.state.language}
                  onChange={this.inputOnChangeHandler}
                  onBlur={this.validateLanguage}
                  onFocus={this.clearLangError}></input>
                  <div divID="languageError" style={errorMessageStyles}>{this.state.errors.language}</div>
                  </div>
                  <div>
                  <label>Proficiency</label>
                  < input type ="text"  class="text-primary" placeholder = "Expert"
                  name="Proficiency"
                  id="Proficiency"
                  value={this.state.Proficiency}
                  onChange={this.inputOnChangeHandler}
                  onBlur={this.validateProficiency}
                  onFocus={this.clearProficiencyError} ></input>
                 <div divID="proficiencyError" style={errorMessageStyles}>{this.state.errors.Proficiency}</div>
                    </div>
                 <div>
                 <label>Read</label>
                 < input type ="text" class="text-primary" placeholder = "yes"
                 name="read"
                 id="read"
                 value={this.state.read}
                 onChange={this.inputOnChangeHandler}
                 onBlur={this.validateRead}
                 onFocus={this.clearReadError} ></input>
                 <div divID="readError" style={errorMessageStyles}>{this.state.errors.read}</div>

                    </div>
                    <div >
                    <label>Write</label>
                    < input type ="text" class="text-primary" placeholder = "yes" 
                    name="write"
                    id="write"
                    value={this.state.write}
                    onChange={this.inputOnChangeHandler}
                    onBlur={this.validateWrite}
                    onFocus={this.clearWriteError}></input>
                    <div divID="writeError" style={errorMessageStyles}>{this.state.errors.write}</div>

                    </div>
                    <div>
                    <label>Speak</label>

                    < input type ="text"  class="text-primary" placeholder = "yes"
                    name="speak"
                    id="speak"
                    value={this.state.speak}
                    onChange={this.inputOnChangeHandler}
                    onBlur={this.validateSpeak}
                    onFocus={this.clearSpeakError} >
                    </input>
                    <div divID="speakError" style={errorMessageStyles}>{this.state.errors.speak}</div>
                    </div>
                    <div divID="inputError" style={errorMessageStyles}>{this.state.responses.languageError}</div>
                    <div divID="inputSuccess" style={successMessageStyles}>{this.state.responses.languageSuccess}</div>
                    </div>
                    <div class="modal-footer">


                    <div class="col-1">
                     <a class="btn btn-primary " onClick={this.onSubmitHandler} data-dismiss="modal">Add</a>
                    </div>
                    </div>
             </div>
                    
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
 export default Language;