import React, { Component } from 'react';
import {render} from 'react-dom';
import '../common/styles.css';
import Header from '../../components/Header';
import Footer1 from '../../components/Footer';
import ChakuriSkillBaseNecessarySkills from '../../components/employer/ChakuriSkillBaseNecessarySkills';
 import EmployerMenu from '../../components/employer/EmployerMenu';    
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faTrash,faEdit,faUpload} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
 class ChakuriSkillBase extends Component{
    constructor(props) {
        super(props);

        this.state = {
            IsCollapsed:'true',
            ChakuriSkillBases:[],
            location:'',
            skillNames:''
        }
    }
    // componentDidMount(){
    //     axios.get('http://localhost:4736/api/v1/user/chakuri_skill_base/necessarySkills/locationId?location='+this.state.location)
    //         .then(res => {
    //            // http://localhost:4736/api/v1/user/chakuri_skill_base/skill_id/location?gtsskillName=ReactJs,python&location=banglore
    //             const ChakuriSkillBases = res.data;
    //             this.setState({ ChakuriSkillBases });
              

    //         })

    // }
    // dropDownHandler=e=>{
    //     // this.setState({location: e.target.value})
    //     axios.get('http://localhost:4736/api/v1/user/chakuri_skill_base/necessarySkills/locationId?location='+e.target.value)
    //         .then(res => {
    //            // http://localhost:4736/api/v1/user/chakuri_skill_base/skill_id/location?gtsskillName=ReactJs,python&location=banglore
    //             const ChakuriSkillBases = res.data;
    //             this.setState({ ChakuriSkillBases });
              

    //         })

    // }
    changeHandler= e =>{
        this.setState({skillNames: e.target.value})
        
    }
    changeHandler2= e =>{
        this.setState({location: e.target.value})
        
    }
        mySubmitHandler = (event) => {

            event.preventDefault();
            axios.get('https://1oacuj96hj.execute-api.ap-south-1.amazonaws.com/serverless/api/v1/user/chakuri_skill_base/skill_id/location?'+'gtsskillName='+this.state.skillNames+'&location='+this.state.location)
            .then(res => {
               // http://localhost:4736/api/v1/user/chakuri_skill_base/skill_id/location?gtsskillName=ReactJs,python&location=banglore
                const ChakuriSkillBases = res.data;
                this.setState({ ChakuriSkillBases });
              

            })
            
          }
    collapse(){
        
        this.setState({IsCollapsed:!this.state.IsCollapsed})
    }  
 render()
     {
      const IsCollapsed=this.state;
        return (
            <div>
                <Header/>
                <EmployerMenu/>
        <div className="container align-items-center">
        <div className='mt-3'>
          
        <form onSubmit={this.mySubmitHandler}>
<div className="form-group">
    <label class="skillsSearchBar"> Enter skills in the Search Bar(you can enter multiple skills,just seperate them by commas)</label><label class="skillsSearchBar">Enter the location</label>
<input type="text" class="text-primary" class="chakuriSkillBaseFormControl form-control " id="exampleInputHeadLine1" aria-describedby="emailHelp" placeholder="Ex: Tableau,Supply Chain Etc.." onChange={this.changeHandler}></input>

<input type="text" class="text-primary" class="chakuriSkillBaseFormControl form-control"  id="exampleInputHeadLine2" aria-describedby="emailHelp" placeholder="Ex: Banglore"onChange={this.changeHandler2}></input>
<button type="submit"class="searchButton btn btn-primary">Search</button>
</div>
</form>
</div></div> 
<div className="container align-items-center">
             <div className='mt-3'>
                <div className="border border-dark rounded-lg" >
                
                
                <div>Search Results(Location:{this.state.location})</div>
                
                <hr className =" border-dark-40 " />
               {this.state.ChakuriSkillBases.map((ChakuriSkillBase) =>{return(
                   <div>
                     <label class=" Skills ">{ChakuriSkillBase.skillName} </label>
              
              <button type="button" class=" collapseButton btn btn-primary floatRight " data-toggle="collapse" data-target={"#demo"+ ChakuriSkillBase.skillName} aria-expanded="false" aria-controls="#a" onClick={() => this.collapse()}>-</button>
                  
              {this.state.IsCollapsed ? <div id={"demo"+ChakuriSkillBase.skillName} class="collapse">

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
     
    <ChakuriSkillBaseNecessarySkills />

<Footer1 /></div>

);}}



    export default ChakuriSkillBase;
