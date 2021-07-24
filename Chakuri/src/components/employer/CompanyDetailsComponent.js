import React, { Component } from 'react'
//  import React, {PropTypes} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faUser,faTrash,faEdit,faUpload, faPen} from '@fortawesome/free-solid-svg-icons'
 import Autocomplete from '@material-ui/lab/Autocomplete';
 import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { ThemeConsumer } from 'styled-components';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem'
//import { MenuItem } from 'material-ui';


  
class CompanyDetailComponent extends Component{
constructor(props){
    super(props)
               
    this.state={
      companyId:0,
      jobPositionId:0,
        CompanyName:'',
        CompanyDescription:'',
        JobPosition:'',
        JobDescription:'',
        defaultValueFlag:false,
        defaultValueFlag2:false,
        companydetail:{

        },
        jobdetail:{

        },
      userCompanyResponse:{
        
          gtsCompanyProfiles: {
              gts_company_name: '',
              gts_company_description: '',
              gts_company_status: false,
              gts_company_address: '',
              gts_company_contact_email: '',
              gts_company_contact_mobile_number: '',
              gts_company_contact_alternate_mobile_number: '',
              gts_company_id: 0
          },
          gtsUser: {
              GTS_USER_ID: 1,
              GTS_USER_EMAIL: '',
              GTS_USER_PASSWORD: '',
              GTS_USER_LOGIN_TRIES: 0,
              GTS_USER_STATUS: true
          },
          gtsJobTitle: {
            gtsJobTitleId: 0,
            gtsJobTitleName: '',
            gtsJobTitleDescription: '',
            gtsJobTitleStatus: false
          },
          gts_user_company_id: 0
      
      },
        userCompany:{
            gts_user_company_id:0,
            gts_job_title_id:0,
            gts_company_id:0,
            gts_user_id:1
        
        },
        companyDetails:[{
          gts_company_id: 1,
        gts_company_name: '',
        gts_company_description: '',
        gts_company_status: false,
        gts_company_address: '',
        gts_company_contact_email: '',
        gts_company_contact_mobile_number:'',
        gts_company_contact_alternate_mobile_number: ''

        }],
       jobDetails:[ {
          gtsJobTitleId: 1,
          gtsJobTitleName: '',
          gtsJobTitleDescription: '',
          gtsJobTitleStatus: false
      }]
        };  
        this.changeCompanyNameHandler = this.changeCompanyNameHandler.bind(this); 
        
        
}

componentDidMount(){
  
  axios.get('http://localhost:4712/api/v1/company_details')
  .then(response => {
      this.setState({companyDetails:response.data});
     
  })
  .catch(error => {
      console.log(error)
  })
  axios.get('http://localhost:8080/api/v1/job/title')
  .then(response => {
      this.setState({jobDetails:response.data});
   
  })
  .catch(error => {
      console.log(error)
  })
  axios.get('http://localhost:4737/api/v1/user/GTSUserCompany/user_id?userId=1')


       
        .then(res => {
          
           
            const userCompanyResponse = res.data;
           
            this.setState({ userCompanyResponse });
            if(this.state.userCompanyResponse.gtsCompanyProfiles!=undefined){
          this.setState({CompanyDescription:userCompanyResponse.gtsCompanyProfiles.gts_company_description}) ;
            }
            if(this.state.userCompanyResponse.gtsJobTitle!=undefined){
              this.setState({JobDescription:userCompanyResponse.gtsJobTitle.gtsJobTitleDescription});
            }
           
           
      
        })
      
}
submitHandler=(event)=>{
    event.preventDefault()
    
    this.state.userCompany.gts_job_title_id=this.state.jobPositionId;
    this.state.userCompany.gts_company_id=this.state.companyId;
    
   
    if(this.state.userCompanyResponse==undefined){
    axios.post('http://localhost:4737/api/v1/user/GTSUserCompany',this.state.userCompany)
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
  }
  else{
    this.state.userCompany.gts_user_company_id=this.state.userCompanyResponse.gts_user_company_id;
    console.log('success'+JSON.stringify(this.state.userCompany));
    axios.put('http://localhost:4737/api/v1/user/GTSUserCompany',this.state.userCompany)
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })



  }
}
changeCompanyNameHandler=(event,value) =>{
  this.setState({defaultValueFlag:true})
    console.log('value is'+event.target.value);
    this.state.companyDetails.map((companydetail,key)=>{
      if(companydetail.gts_company_name==event.target.value){
        this.setState({CompanyDescription:companydetail.gts_company_description})
        this.setState({companyId:companydetail.gts_company_id});
        this.setState({companydetail});
      }
    
    })
}
changeCompanyDescriptionHandler=(event) =>{
    this.setState({CompanyDescription: event.target.value})
}
changeJobPositionHandler=(event) =>{
  this.setState({defaultValueFlag2:true});
  console.log('value is'+event.target.value);
    this.state.jobDetails.map((jobdetail,key)=>{
      if(jobdetail.gtsJobTitleName==event.target.value){
        this.setState({JobDescription:jobdetail.gtsJobTitleDescription})
        this.setState({jobPositionId:jobdetail.gtsJobTitleId});
        this.setState({jobdetail});
      }
    
    })
    
}
changeJobDescriptionHandler=(event) =>{
    this.setState({JobDescription: event.target.value})
}
    render(){
        return(
<div className="container align-items-center">
             <div className='mt-3'>
                <div className="border border-dark rounded-lg" >
                
                <div class="row">
                 
                 <div className="col">
                <h3 className="mb-3 p-2">Company Details:
    </h3></div>
    
                 <form onSubmit={this.submitHandler}>           
                     <div className="form-group">
                <div class="row-sm">
                    <label  style={{fontWeight:"bold",paddingLeft:"10px"}}>Company Name</label>
                    <label>:</label>
                    {/* <label id="CompanyName">
           <input type="text" Name="CompanyName" className="Auto" style={{fontWeight:"bold",color:"red",paddingtop:"0px"}} 
           value={this.state.CompanyName} onChange={this.changeCompanyNameHandler} /></label> */}
     {this.state.userCompanyResponse!=undefined?     <Autocomplete
      id="combo-box-demo"
     
      options={this.state.companyDetails}
      getOptionLabel={(option) => option.gts_company_name}
      style={{ width: 300,display:"inline-block",borderColor:"black" }}
     // defaultValue={{gts_company_name:this.state.userCompanyResponse.gtsCompanyProfiles.gts_company_name}}
       value={!this.state.defaultValueFlag?this.state.userCompanyResponse.gtsCompanyProfiles:this.state.companydetail}
       
      renderInput={(params) => <TextField {...params}  variant="outlined" 
      onChange={this.changeCompanyNameHandler} onSelect={this.changeCompanyNameHandler}
     
      />}
    />
:<Autocomplete
      id="combo-box-demo"
     
      options={this.state.companyDetails}
      getOptionLabel={(option) => option.gts_company_name}
      style={{ width: 300,display:"inline-block",borderColor:"black" }}
      //defaultValue={{gts_company_name:this.state.userCompanyResponse.gtsCompanyProfiles.gts_company_name}}
      renderInput={(params) => <TextField {...params}  variant="outlined" 
      onChange={this.changeCompanyNameHandler} onSelect={this.changeCompanyNameHandler}
     
      />}
    />}









    
    
         </div>
                <div class="row-sm">
                    <label style={{paddingLeft:"10px"}} >Company Description</label>
                    <label>:</label><br></br>
                    <label id="CompanyDescription" style={{paddingLeft:"10px"}}>
                    
                   <textarea readOnly name="CompanyDescription" rows="5" cols="15" style={{width:"1000px"}}
                  value={this.state.CompanyDescription} onChange={this.changeCompanyDescriptionHandler} >
                    </textarea>
                  </label>
                </div>
                <div class="row-sm">
                    <label  style={{fontWeight:"bold",paddingLeft:"10px"}}>Job Position</label>
                    <label>:</label>
{/* <label id="JobPosition"><input type="text" className="JobPosition" style={{fontWeight:"bold",color:"red"}}
 value={this.state.JobPosition} onChange={this.changeJobPositionHandler} /></label> */}
    { this.state.userCompanyResponse!=undefined?<Autocomplete
      id="combo-box-two"
      options={this.state.jobDetails}
      getOptionLabel={(option) => option.gtsJobTitleName}
      style={{ width: 300,display:"inline-block",borderColor:"black" }}
      // inputValue={this.state.userCompanyResponse.gtsJobTitleSET[0].gtsJobTitleName}
      value={!this.state.defaultValueFlag2?this.state.userCompanyResponse.gtsJobTitle:this.state.jobdetail}
      renderInput={(params) => <TextField {...params} label="" variant="outlined" />}
      onChange={this.changeJobPositionHandler} onSelect={this.changeJobPositionHandler}
    />:<Autocomplete
    id="combo-box-two"
    options={this.state.jobDetails}
    getOptionLabel={(option) => option.gtsJobTitleName}
    style={{ width: 300,display:"inline-block",borderColor:"black" }}
    renderInput={(params) => <TextField {...params} label="" variant="outlined" />}
    onChange={this.changeJobPositionHandler} onSelect={this.changeJobPositionHandler}
  />}
      </div>
                <div class="row-sm" >
                    <label style={{paddingLeft:"10px"}}>Job Description</label>
                    <label>:</label><br></br>
                    <label id="JobDescription" style={{paddingLeft:"10px"}}>
                    <textarea  readOnly   name="JobDescription" rows="5" cols="15" style={{width:"1000px"}}
                     value={this.state.JobDescription} onChange={this.changeJobDescriptionHandler} ></textarea></label>
                    <div>
  <button type="submit"  class="btn btn-primary"  id="SaveDetails"  onClick={this.submitHandler}
 style={{float:"right"}} >Save Details</button>
 
 
 
                </div></div></div>
                </form>

                
                      </div>
                      </div>
                      
                      </div>
                      </div>
        )
    }
}
export default CompanyDetailComponent;