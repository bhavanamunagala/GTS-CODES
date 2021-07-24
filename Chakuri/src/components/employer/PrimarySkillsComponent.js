import React, { Component } from 'react';

import { Button } from 'react-bootstrap';
import { faUser, faTrash, faEdit, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import styles from './PrimarySkillsComponent.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { black, white } from 'material-ui/styles/colors';
import { blue } from '@material-ui/core/colors';
import { colors } from '@material-ui/core';
import { darkBlack } from 'material-ui/styles/colors';


class PrimarySkillsComponent extends Component{
    constructor(props) {
        super(props);
this.state={
requiredProficiency:'',
requiredSkill:'',
yearsOfExperience:'',
requiredProficiencyValidationFlag:false,
requiredSkillValidationFlag:false,
yearsOfExperienceValidationFlag:false,
saveFlag:false,
editSaveFlag:false,
addValidationFalg:false,
cancelFlag:false,
counter:0,
skills:[{
    gts_skill_id: 0,
    gts_skill_name: null,
    gts_skill_description: null,
    gts_skill_status: false
}],
userSkill:{
    gtsUserSkillId:0,
    gtsUser:0,
    gtsSkill:null,
    gtsSkillSelfRatings:null,
    gtsSkillChakuriRatings:null,
    gtsSkillIsPrimary:false,
    gtsSkillExperienceMonths:null,
    gtsSkillExternalRatings:null
},
userSkills:[
    
],
userSkillsRequest:[
    {
          gtsUser:1,
        gtsSkill:null,
        gtsSkillSelfRatings:null,
        gtsSkillChakuriRatings:null,
        gtsSkillExperienceMonths:null,
        gtsSkillExternalRatings:null,
        gtsSkillIsPrimary:true}
],
userEditSkillsRequest:[
    {gtsUserSkillId:0,
          gtsUser:1,
        gtsSkill:null,
        gtsSkillSelfRatings:null,
        gtsSkillChakuriRatings:null,
        gtsSkillExperienceMonths:null,
        gtsSkillExternalRatings:null,
        gtsSkillIsPrimary:true}
]

}

  } 
componentDidMount(){
    
    
    axios.get('http://localhost:4736/api/v1/user/skill/user_id?userId=1')


       
    .then(res => {
        const userSkills = res.data;
       
        this.setState({ userSkills });
       
    })
    axios.get('http://localhost:4737/api/v1/skills/')   
    .then(res => {
        const skills = res.data;
       
        this.setState({ skills });  
       
       
    }) 

}
submitHandler=e=>{

    
    this.state.userSkillsRequest[0].gtsSkillSelfRatings=this.state.requiredProficiency;
    this.state.userSkillsRequest[0].gtsSkillChakuriRatings=this.state.requiredProficiency;
    this.state.userSkillsRequest[0].gtsSkillExternalRatings=this.state.requiredProficiency;
    this.state.userSkillsRequest[0].gtsSkillExperienceMonths=this.state.yearsOfExperience;
 
      if(this.state.requiredSkill=="C++")
   {
    axios.get('http://localhost:4737/api/v1/skills/skill_name?skillName='+'C%2B%2B')   
    .then(res => {
        
       
        this.state.userSkillsRequest[0].gtsSkill=res.data[0].gts_skill_id;
        console.log('skill id is'+res.data.gts_skill_id);
        console.log(JSON.stringify(this.state.userSkillsRequest));
      axios.post('http://localhost:4736/api/v1/user/skill/',this.state.userSkillsRequest).then(response=>{
       console.log("response is "+JSON.stringify(response) )

    }).catch(error=>{
         console.log("error is "+error)
     })   
       
    })
}
else{
    axios.get('http://localhost:4737/api/v1/skills/skill_name?skillName='+this.state.requiredSkill)   
    .then(res => {
        
       
        this.state.userSkillsRequest[0].gtsSkill=res.data[0].gts_skill_id;
        console.log('skill id is'+res.data.gts_skill_id);
        console.log(JSON.stringify(this.state.userSkillsRequest));
      axios.post('http://localhost:4736/api/v1/user/skill/',this.state.userSkillsRequest).then(response=>{
       console.log("response is "+JSON.stringify(response) )

    }).catch(error=>{
         console.log("error is "+error)
     })   
       
    })

}
}
editHandler(editPrimarySkills){
   
    
   

  
    if(this.state.yearsOfExperience==''){
        
        this.state.userEditSkillsRequest[0].gtsSkillExperienceMonths=editPrimarySkills.yearsOfExperience;   
   }
   else{
    this.state.userEditSkillsRequest[0].gtsSkillExperienceMonths=this.state.yearsOfExperience;
   }
   if(this.state.requiredSkill==''){
      
       this.state.requiredSkill=editPrimarySkills.requiredSkill;
   }
   if(this.state.requiredProficiency==''){
    this.state.userEditSkillsRequest[0].gtsSkillSelfRatings=editPrimarySkills.requiredProficiency;
    this.state.userEditSkillsRequest[0].gtsSkillChakuriRatings=editPrimarySkills.requiredProficiency;
    this.state.userEditSkillsRequest[0].gtsSkillExternalRatings=editPrimarySkills.requiredProficiency;
   }
   else{
    this.state.userEditSkillsRequest[0].gtsSkillSelfRatings=this.state.requiredProficiency;
    this.state.userEditSkillsRequest[0].gtsSkillChakuriRatings=this.state.requiredProficiency;
    this.state.userEditSkillsRequest[0].gtsSkillExternalRatings=this.state.requiredProficiency;
   }
   if(this.state.requiredSkill=="C++"){
    axios.get('http://localhost:4737/api/v1/skills/skill_name?skillName='+'C%2B%2B')   
    .then(res => {
        
       
        this.state.userEditSkillsRequest[0].gtsSkill=res.data[0].gts_skill_id;
        this.state.userEditSkillsRequest[0].gtsUserSkillId=editPrimarySkills.userSkillId
        console.log('skill id is'+res.data[0].gts_skill_id);
        console.log(JSON.stringify(this.state.userEditSkillsRequest));
      axios.put('http://localhost:4736/api/v1/user/skill/',this.state.userEditSkillsRequest).then(response=>{
       console.log("response is "+JSON.stringify(response) )

    }).catch(error=>{
         console.log("error is "+error)
     })   
       
    })
}
else{
    axios.get('http://localhost:4737/api/v1/skills/skill_name?skillName='+this.state.requiredSkill)   
    .then(res => {
        
       
        this.state.userEditSkillsRequest[0].gtsSkill=res.data[0].gts_skill_id;
        this.state.userEditSkillsRequest[0].gtsUserSkillId=editPrimarySkills.userSkillId
        console.log('skill id is'+res.data[0].gts_skill_id);
        console.log(JSON.stringify(this.state.userEditSkillsRequest));
      axios.put('http://localhost:4736/api/v1/user/skill/',this.state.userEditSkillsRequest).then(response=>{
       console.log("response is "+JSON.stringify(response) )

    }).catch(error=>{
         console.log("error is "+error)
     })   
       
    })

}
}
deletePrimarySkills(primarySkillId){
   
    if(window.confirm('Are you sure?')){
        axios.delete('http://localhost:4736/api/v1/user/skill/gts_user_skill_id?userSkillId='+primarySkillId).then(response=>{
            console.log("response is "+response)

        }).catch(error=>{
            console.log("error is "+error)
        })
        }
     }

cancelEditHandler=e=>{
    this.setState({editSaveFlag:false});
}
saveFlagHandler=e=>{
    this.setState({saveFlag:true});
    console.log('saveFlag'+this.state.saveFlag);
}
editsaveFlagHandler=e=>{
    this.setState({editSaveFlag:true})
}
autoCompleteChangeHandler=(event,value)=>{
    this.setState({editSaveFlag:true});
    this.setState({requiredSkillValidationFlag:false});
    if(value!=undefined){
        //this.setState({requiredSkill:value.gts_skill_name});
        this.setState({requiredSkill:value.gts_skill_name});
      
        console.log('requiredSkill is '+JSON.stringify(this.state.requiredSkill));
    }
    console.log("value is "+JSON.stringify(value));
if(value==null){
    
    this.setState({requiredSkillValidationFlag:true});
}

}
  changeHandler= e =>{
      this.setState({editSaveFlag:true})
    this.setState({saveFlag:false});
    this.setState({[e.target.name]: e.target.value})
    this.setState({requiredSkillValidationFlag:false});
    this.setState({requiredProficiencyValidationFlag:false});
    this.setState({yearsOfExperienceValidationFlag:false});
    console.log('targetValue is'+e.target.value);
      if(e.target.value==''||e.target.value==undefined){
if(e.target.name=='requiredSkill'){

        this.setState({requiredSkillValidationFlag:true});
         } 
  if(e.target.name=='requiredProficiency'){
    this.setState({requiredProficiencyValidationFlag:true});    
  }      
   
  if(e.target.name=='yearsOfExperience'){
    this.setState({yearsOfExperienceValidationFlag:true});  
  }
        }
   
  }
  addButtonListener=e=>
  {
   this.setState({requiredProficiency:''});
   this.setState({requiredSkill:''});
   this.setState({yearsOfExperience:''});
   this.setState({editSaveFlag:false});
   this.setState({counter:this.state.counter+1});
  
   
  }
  cancelHandler=e=>{
      this.setState({cancelFlag:true});
  }
  editButtonListener=e=>{
    this.setState({editSaveFlag:false}); 
  }
  
  componentDidUpdate(){
    axios.get('http://localhost:4736/api/v1/user/skill/user_id?userId=1')


       
    .then(res => {
        const userSkills = res.data;
       
        this.setState({ userSkills });
       
    }) 
   
  }
   render(){
    const{requiredProficiency,requiredSkill,yearsOfExperience}=this.state;
    
       return(<div className="container align-items-center">
        <div className='mt-3'>
           <div className="containerOfTablePrimarySkills border border-dark rounded-lg" >
           
          
          {/* <div>
           <label>I look for the Following Required/Mandatory Skills from the candidate &emsp;&emsp;&emsp;&emsp;Required Proficency &emsp;&emsp;&emsp;&emsp;Years Of Experience</label>
           &emsp;
           < button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#addDetails"  onClick={this.addButtonListener} >Add Details</button>
           </div> */}
           
           <div class="container">
 
 <table  class="table table-responsive">

   <thead>
     <tr >
       <th><b>Required Skills</b> </th>
       <th><b>Required Proficency(Out of 10)</b></th>
       <th><b>Years Of Experience</b></th>
       <th>  < button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#addDetails"  onClick={this.addButtonListener} >Add Skill</button></th>
     </tr>
   </thead>
   <tbody >
           {
           this.state.userSkills.length>0&&this.state.userSkills.map((userSkill,index)=>{
         

            
            return(<>
 
 { userSkill.gtsSkillIsPrimary &&<tr class={"strippedColors"+(index)%2}key={index} >
        <td>{userSkill.gtsSkill.gtsSkillName}</td>
        <td>{Math.floor((userSkill.gtsSkillSelfRatings+userSkill.gtsSkillChakuriRatings+userSkill.gtsSkillExternalRatings)/3) }</td>
    <td>{Math.floor((userSkill.gtsSkillExperienceMonths)/12) } Year(s) {userSkill.gtsSkillExperienceMonths%12} Month(s)</td>
        <td> <button href="#" class="btn float-right "onClick={()=>this.deletePrimarySkills(userSkill.gtsUserSkillId)}><FontAwesomeIcon icon={faTrash}  /></button>
             <button class="btn float-right " data-toggle="modal" data-target={"#editPrimarySkills"+index} onClick={this.editButtonListener}><FontAwesomeIcon icon={faEdit} /></button></td>
      </tr>
           }
   
     <div id= {"editPrimarySkills"+index} class="modal fade" role="dialog">
     <div class="modal-dialog">
         <div class="modal-content">
             <div class="modal-header">
                 <h5 class="modal-title"> Edit Primary Skills</h5>
             </div>
  
  
             <div class="modal-body">
                 <div className="container" >
  
                 <div class="row-sm m-0  text-left  ">
  
  <label class="text-dark">Required Skill:&nbsp;&nbsp;
  {/* <input type="text"  name="requiredSkill" value ={requiredSkill} onChange={this.changeHandler}   ></input> */}
  <Autocomplete
  class="complete"
  options={this.state.skills}
  getOptionLabel={(option) => option.gts_skill_name}
  style={{ width: 200,outlineColor:"black",display:"inline-block" }}
  defaultValue={{gts_skill_name:userSkill.gtsSkill.gtsSkillName}}
  onChange={this.autoCompleteChangeHandler} 
  renderInput={(params) => <TextField {...params}  placeholder={userSkill.gtsSkill.gtsSkillName}   />}
  
  />
  <div>
  
    {((this.state.requiredSkillValidationFlag||this.state.requiredSkillValidationFlag)&&this.state.saveFlag)||(this.state.requiredSkillValidationFlag&&this.state.editSaveFlag) ?  <span class="validationStyle">Please Enter some value</span>:null}
  </div>
  </label>
  
  </div>
  <div class="row-sm">
  <label class="text-dark">Required Proficency: &nbsp;&nbsp;
  <input type="text" name="requiredProficiency" defaultValue={Math.floor((userSkill.gtsSkillSelfRatings+userSkill.gtsSkillChakuriRatings+userSkill.gtsSkillExternalRatings)/3)} placeholder ={Math.floor((userSkill.gtsSkillSelfRatings+userSkill.gtsSkillChakuriRatings+userSkill.gtsSkillExternalRatings)/3)}  onChange={this.changeHandler}  ></input>
  <div>
  
  {(this.state.saveFlag&&((this.state.requiredProficiency.length<=0 ||(this.state.requiredProficiencyValidationFlag))))||(this.state.requiredProficiency.length<=0 &&(this.state.requiredProficiencyValidationFlag)&&this.state.editSaveFlag)?  <span class="validationStyle">Please Enter some value</span>:null}
  </div></label>
  </div>
  
  <div class="row-sm">
  <label class="text-dark">No.of Months(Work Experience): &nbsp;&nbsp;
  <input type="text" name="yearsOfExperience" placeholder={userSkill.gtsSkillExperienceMonths}  input={userSkill.gtsSkillExperienceMonths} onChange={this.changeHandler} ></input>
  <div>
  {(this.state.saveFlag&&(this.state.yearsOfExperience.length<=0||this.state.yearsOfExperienceValidationFlag&&this.state.editSaveFlag))||(this.state.yearsOfExperience.length<=0&&this.state.yearsOfExperienceValidationFlag&&this.state.editSaveFlag)?  <span class="validationStyle">Please Enter some value</span>:null}
  </div>
  </label>
  </div>
                                                           
  </div>
  
  </div>   
  
  <div class="modal-footer">
              <div class="text-inline">
           
              <Button id ="test" type="button" data-dismiss="modal" onClick={()=>this.editHandler({yearsOfExperience:userSkill.gtsSkillExperienceMonths,requiredProficiency:Math.floor((userSkill.gtsSkillSelfRatings+userSkill.gtsSkillChakuriRatings+userSkill.gtsSkillExternalRatings)/3),requiredSkill:userSkill.gtsSkill.gtsSkillName,userSkillId:userSkill.gtsUserSkillId })}>Save</Button> 
             {/* <Button id ="test" type="button" data-dismiss="modal" onClick={this.addWorkExperience}>Save</Button> */}
                 <Button type="button" class="close" data-dismiss="modal" onClick={this.cancelEditHandler}>Cancel</Button>
              </div>
          </div> 
          {/* ((this.state.requiredSkill.length<=0)||(this.state.requiredProficiency.length<=0)||(this.state.yearsOfExperience.length<=0))? <Button id ="test" type="button" onClick={this.saveFlagHandler}>Save </Button> */}
  
         
                         
  
  
  
  
                
  
  
            
         </div>
     </div>
  </div>
   















 

   </>  )
         
              
         








           })}</tbody></table>
           
           </div>
           
           <div id="addDetails" class="modal fade" role="dialog">

<div class="modal-dialog">

    <div class="modal-content">

        <div class="modal-header">
            <h5 class="modal-title"> Add Required Skills</h5>
        </div>
        <div class="modal-body">
        
            <div className="container" >
      
                <div class="row-sm m-0  text-left  ">
                
                    <label class="text-dark">Required Skill:&nbsp;&nbsp;
                    {/* <input type="text"  name="requiredSkill" value ={requiredSkill} onChange={this.changeHandler}   ></input> */}
             { true ? <Autocomplete
   
       class="complete"

      options={this.state.skills}
      getOptionLabel={(option) => option.gts_skill_name}
      style={{ width: 150,outlineColor:"black",display:"inline-block" }}
      renderInput={(params) => <TextField {...params}  />}
      onChange={this.autoCompleteChangeHandler} 
      s />:<Autocomplete
   
      class="complete"

     options={this.state.skills}
     getOptionLabel={(option) => option.gts_skill_name}
     style={{ width: 150,outlineColor:"black",display:"inline-block" }}
     renderInput={(params) => <TextField {...params}  />}
     value={this.state.requiredSkill}
     onChange={this.autoCompleteChangeHandler} 
     s />}
                   <div>
                  
                  {(this.state.requiredSkill.length<=0&&this.state.saveFlag)||(this.state.requiredSkillValidationFlag&&this.state.editSaveFlag) ?  <span class="validationStyle">Please Enter some value</span>:null}

                  </div>
                    </label>

          </div>
                <div class="row-sm">
                    <label class="text-dark">Required Proficency(out of 10): &nbsp;&nbsp;
                    <input type="text" name="requiredProficiency" value={requiredProficiency} onChange={this.changeHandler}  ></input>
                    <div>
                    {(this.state.saveFlag&&this.state.requiredProficiency.length<=0)||(this.state.requiredProficiency.length<=0 &&(this.state.requiredProficiencyValidationFlag)&&this.state.editSaveFlag)?  <span class="validationStyle">Please Enter some value</span>:null}

                    </div></label>
                </div>
                
                <div class="row-sm">
                    <label class="text-dark">No.of Months(Work Experience): &nbsp;&nbsp;
                    <input type="text" name="yearsOfExperience" value={yearsOfExperience} onChange={this.changeHandler} ></input>
                    <div>
                    {(this.state.saveFlag&&this.state.yearsOfExperience.length<=0)||(this.state.yearsOfExperience.length<=0&&this.state.yearsOfExperienceValidationFlag&&this.state.editSaveFlag)?  <span class="validationStyle">Please Enter some value</span>:null}
                    </div>
                    </label>
                </div>


            </div>



        </div>


        <div class="modal-footer">
            <div class="text-inline">
           { ((this.state.requiredSkill.length<=0)||(this.state.requiredProficiency.length<=0)||(this.state.yearsOfExperience.length<=0))? <Button id ="test" type="button" onClick={this.saveFlagHandler}>Save </Button>:<Button id ="test" type="button" data-dismiss="modal" onClick={this.submitHandler}>Save</Button>
              } 
              {/* <Button id ="test" type="button" data-dismiss="modal" onClick={this.addWorkExperience}>Save</Button> */}
               <Button type="button" class="close" data-dismiss="modal" onClick={this.cancelHandler}>Cancel</Button>
            </div>
        </div>
       
                                       
    </div>
</div>



</div>
           
           
          
          
      
           </div></div></div>)
    }

}
export default PrimarySkillsComponent;