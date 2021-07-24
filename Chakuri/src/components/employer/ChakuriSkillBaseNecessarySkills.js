import React, { Component } from 'react';
import {render} from 'react-dom';
import '../../pages/common/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faTrash,faEdit,faUpload} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

class ChakuriSkillBaseNecessarySkills extends Component{

    constructor(props) {
        super(props);

        this.state = {
            IsCollapsed:'true',
            ChakuriSkillBases:[],
            location:'banglore',
            skillNames:''
        }
    }
    componentDidMount(){
        axios.get('https://1oacuj96hj.execute-api.ap-south-1.amazonaws.com/serverless/api/v1/user/chakuri_skill_base/necessarySkills/locationId?location='+this.state.location)
            .then(res => {
               // http://localhost:4736/api/v1/user/chakuri_skill_base/skill_id/location?gtsskillName=ReactJs,python&location=banglore
                const ChakuriSkillBases = res.data;
                this.setState({ ChakuriSkillBases });
              

            })

    }
    dropDownHandler=e=>{
        // this.setState({location: e.target.value})
        axios.get('https://1oacuj96hj.execute-api.ap-south-1.amazonaws.com/serverless/api/v1/user/chakuri_skill_base/necessarySkills/locationId?location='+e.target.value)
            .then(res => {
               // http://localhost:4736/api/v1/user/chakuri_skill_base/skill_id/location?gtsskillName=ReactJs,python&location=banglore
                const ChakuriSkillBases = res.data;
                this.setState({ ChakuriSkillBases });
              

            })

    }
    collapse(){
        
        this.setState({IsCollapsed:!this.state.IsCollapsed})
    }  
    render(){

        return (
    <div className="container align-items-center">
             <div className='mt-3'>
                <div className="border border-dark rounded-lg" >
                
                
                <div>Necessary Skills Results(as stated in the profile)<select class="floatRight" id="locations" name="locations" onChange={this.dropDownHandler} >
    <option value="Banglore">Banglore</option>
    <option value="Chennai">Chennai</option>
    <option value="Hyderabad">Hyderabad</option>
  </select></div>
                
  
                <hr className =" border-dark-40 " />

                {this.state.ChakuriSkillBases.map((ChakuriSkillBase) =>{return(
                   <div>
                     <label class=" Skills ">{ChakuriSkillBase.skillName} </label>
              
              <button type="button" class=" collapseButton btn btn-primary floatRight " data-toggle="collapse" data-target={"#necessaryskills"+ ChakuriSkillBase.skillName} aria-expanded="false" aria-controls="#a" onClick={() => this.collapse()}>-</button>
                  
              {this.state.IsCollapsed ? <div id={"necessaryskills"+ChakuriSkillBase.skillName} class="collapse">

              <div class="lightText">Available to employ: <div class="floatRight">{ChakuriSkillBase.availableToBeEmployed}</div></div>
              <div class="lightText">Employed by your company: <div class="floatRight">{ChakuriSkillBase.employedByUs}</div></div>
              <div class="lightText">Employed ElseWhere: <div class="floatRight">{ChakuriSkillBase.employedElseWhere}</div></div>
              <div >Total:<div class="floatRight"> TBC</div></div>
              </div>
              :<div id="" class="collapsing">
              <div class="lightText">Available to employ: <div class="floatRight">{ChakuriSkillBase.availableToBeEmployed}</div></div>
              <div class="lightText">Employed by your company: <div class="floatRight">{ChakuriSkillBase.employedByUs}</div></div>
              <div class="lightText">Employed ElseWhere: <div class="floatRight">{ChakuriSkillBase.employedElseWhere}</div></div>
              <div >Total:<div class="floatRight"> TBC</div></div>
              </div>
   }
   <hr className =" border-dark-40 " />
                     
                  
                  </div> 
                  )
                })}












              
               </div>
            </div>
        </div> 
    
        );}}

        export default ChakuriSkillBaseNecessarySkills;