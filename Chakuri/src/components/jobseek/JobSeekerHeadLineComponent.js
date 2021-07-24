import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.css'

import axios from 'axios';



class JobSeekerHeadLine extends Component{
    constructor(props) {
        super(props);

        this.state = {
            successAlert:false,
            employerHeadline:'',
            GtsPersonalDetailRequestModel : {
                users:4,
                gts_enter_attractive_headLine:'',
                gts_user_first_name:'empty',
                gts_user_last_name:'empty',
                gts_user_gender:'empty',
                gts_user_father_first_name:'empty',
                gts_user_father__last_name:'empty',
                gts_user_mother_first_name:'empty',
                gts_user_mother_last_name:'empty',
                gts_user_nationality:'empty',
                gts_user_primary_mobile_number:'0',
                gts_user_alternate_email_id:'empty',
                gts_user_alternate_mobile_number:'0'
            },
            GtsPersonalDetailResponseModel : {
               
        
                gts_enter_attractive_headLine:'',
                gts_user_first_name:'empty',
                gts_user_last_name:'empty',
                gts_user_gender:'empty',
                gts_user_father_first_name:'empty',
                gts_user_father__last_name:'empty',
                gts_user_mother_first_name:'empty',
                gts_user_mother_last_name:'empty',
                gts_user_nationality:'empty',
                gts_user_primary_mobile_number:'0',
                gts_user_alternate_email_id:'empty',
                gts_user_alternate_mobile_number:'0'
            }
           

        }
    }
    componentDidMount(){
        
 
        axios.get('http://localhost:4712/api/v1/users/personal_details/4')
        .then(res => {
           
            const GtsPersonalDetailResponseModel 
                = res.data;
            //alert(JSON.stringify(res.data));
            
               
            
            this.setState({ GtsPersonalDetailResponseModel });
            
           
            
            

        }) .catch(error=> {
            // handle error
            console.log(error);
            axios.post('http://localhost:4712/api/v1/users/personal_details',this.state.GtsPersonalDetailRequestModel).then(response=>{
        console.log("response is "+JSON.stringify(response) )
        
    }).catch(error=>{
        console.log("error is "+error) 
    })
          })
         
        
    }
    setSuccessAlertFalse= e =>{
        this.setState({successAlert:false});  
    }
    changeHandler= e =>{
        this.setState({[e.target.name]: e.target.value})}
    
    mySubmitHandler = (event) => {
        // this.state.successAlert=true;
        this.setState({successAlert:true});
        this.state.GtsPersonalDetailRequestModel.gts_enter_attractive_headLine=this.state.employerHeadline;
        event.preventDefault();
        console.log(JSON.stringify(this.state.GtsPersonalDetailRequestModel));
        axios.put('http://localhost:4712/api/v1/users/personal_details',this.state.GtsPersonalDetailRequestModel).then(response=>{
          console.log("response is "+JSON.stringify(response) )
          
      }).catch(error=>{
          console.log("error is "+error) 
      })
        
      }
    render()
    {
        const {employerHeadline,successAlert}=this.state;
        
            return(<div className="container align-items-center">
            <div className='mt-3'>
              
    <form>
    <div className="form-group">
    <label ><h4>Enter a Attractive Headline :</h4></label>
    <input type="text" class="text-primary" class="form-control"  name="employerHeadline"  defaultValue={this.state.GtsPersonalDetailResponseModel.gts_enter_attractive_headLine} placeholder="Describe yourself in one line" onChange={this.changeHandler}></input>
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
    </div></div>)
       
      
}}
export default JobSeekerHeadLine;