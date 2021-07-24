
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faTrash, faEdit, faUpload } from '@fortawesome/free-solid-svg-icons'
//import menu2 from './components/menu2';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { counter } from '@fortawesome/fontawesome-svg-core';

class WorkExperienceComponent extends Component {


    testVarible = "this is a test";
    constructor(props) {
        super(props);

        this.state = {
            Till_Date:true,
            IsCollapsed:true,
            isValidDates:true,
            addDataValidation:false,
            editDataValidation:false,
            editNameOfTheCompanyValidation:false,
            editPositionValidation:false,
            editStartDateValidation:false,
            editEndDateValidation:false,
            editJobDescritptionValidation:false,
            workexperinces: [],
            nameOfTheCompany:'',
            position:'',
            startDate:'',
            endDate:'',
            counter:0,
            jobDescription:'',
            duration:'',
            totalDuration:'',
            work_experince : {
                GTS_USER_DESIGNATION: '',
                GTS_USER_WORK_START_MONTH_YEAR: new Date(),
                GTS_USER_WORK_END_MONTH_YEAR:new Date(),
                GTS_USER_EMPLOYER:'',
                GTS_USER_JOB_DESCRIPTION:'',
                GTS_USER_ID:1,
                GTS_USER_WORK_EXPERIENCE_ID:0,
               
            },
            GTS_USER_EMPLOYER:''

        }
     this.addButtonListener = this.addButtonListener.bind(this);
     this.editButtonListener=this.editButtonListener.bind(this);
     this.handlingTillDate=this.handlingTillDate.bind(this);
    
}

changeHandler= e =>{
    this.setState({[e.target.name]: e.target.value})
console.log('target name and target value is'+[e.target.name])
console.log(e.target.value);

// console.log('target name and target value is'+[e.target.name])

if(this.state.addDataValidation){

    this.dateValidation();
}
if(this.state.editDataValidation){
 this.editDateValidation();
}


console.log('IsValidDates'+this.state.isValidDates);
if(e.target.name=="nameOfTheCompany"){
    this.setState({editNameOfTheCompanyValidation:true})
}
if(e.target.name=="position"){
this.setState({editPositionValidation:true})
}
if(e.target.name=="startDate"){
this.setState({editStartDateValidation:true})
}
if(e.target.name=="endDate"){
    this.setState({editEndDateValidation:true})
}
if(e.target.name=="jobDescription"){
    this.setState({editJobDescritptionValidation:true})
}
}
     dateValidation(){
          console.log('end date'+this.state.endDate);
        if(this.state.endDate!=null){
         var startDate = document.getElementById("StartDate").value;
     var endDate = document.getElementById("EndDate").value;
     if ((Date.parse(endDate) <= Date.parse(startDate))) {

       console.log(Date.parse(startDate));
         console.log(Date.parse(endDate));
                  document.getElementById("EndDate").value = "";
                           console.log("in valid Date")
        this.setState({isValidDates:false
         });

     }

    else{
       console.log("valid Date")

         this.setState({isValidDates:true
         });
    }
}
     }
     editDateValidation(){
        if(this.state.endDate){
        var startDate = document.getElementById("EditStartDate").value;
        var endDate = document.getElementById("EditEndDate").value;
        if(this.state.Till_Date==false){
        if ((Date.parse(endDate) <= Date.parse(startDate))) {
            console.log(Date.parse(startDate));
            console.log(Date.parse(endDate));
            document.getElementById("EditEndDate").value = "";
           console.log("in valid Date")
            this.setState({isValidDates:false
            });

        }

        else{
           console.log("valid Date")

            this.setState({isValidDates:true
            });
        }
    }}
     }

deleteWorkExperience(workexperienceid){
    {
        if(window.confirm('Are you sure?')){
        axios.delete('https://1oacuj96hj.execute-api.ap-south-1.amazonaws.com/serverless/api/v1/user/work_experience/work_experience_id?workExperienceId='+workexperienceid).then(response=>{
            console.log("response is "+response)

        }).catch(error=>{
            console.log("error is "+error)
        })
        }
     }

}
    addWorkExperience=e=>{



        this.state.work_experince.GTS_USER_DESIGNATION=this.state.position;
        this.state.work_experince.GTS_USER_WORK_START_MONTH_YEAR=this.state.startDate;
        this.state.work_experince.GTS_USER_WORK_END_MONTH_YEAR=this.state.endDate;
        this.state.work_experince.GTS_USER_EMPLOYER=this.state.nameOfTheCompany;
        this.state.work_experince.GTS_USER_JOB_DESCRIPTION=this.state.jobDescription;
       // this.state.work_experince.Till_Date=document.getElementById("AddtillDate").checked ;
        this.state.work_experince.Till_Date=!this.state.Till_Date;
        console.log("state is"+JSON.stringify(this.state.work_experince))
        axios.post('https://1oacuj96hj.execute-api.ap-south-1.amazonaws.com/serverless/api/v1/user/work_experience',this.state.work_experince).then(response=>{
            console.log("response is "+JSON.stringify(response) )

        }).catch(error=>{
            console.log("error is "+error)
        })


    }


       addButtonListener(){
           console.log('this is the counter'+this.counter);
       this.setState({addDataValidation:true});
       this.setState({nameOfTheCompany:'',position:'',startDate:null,endDate:null,jobDescription:''})
       this.setState({Till_Date:true});
    }
       editButtonListener(){
       this.setState({editDataValidation:true});
       this.setState({Till_Date:true});
       }
       handlingTillDate(){
           if(this.state.Till_Date==true){
            this.state.endDate=null;
           }
        

        console.log('before'+this.state.Till_Date);
           //this.state.TillDate=!this.state.TillDate;
           //this.setState({TillDate:!e.target.value})
        this.setState({Till_Date:!this.state.Till_Date})
        // this.state.work_experince.Till_Date=!this.state.work_experince.Till_Date;
        console.log('after'+this.state.Till_Date) 
       }
collapse(){
    this.setState({IsCollapsed:!this.state.IsCollapsed})
    
}
    editWorkExperience(workexperienceid){



        // this.setState({Till_Date:!this.state.Till_Date});
        this.state.work_experince.GTS_USER_DESIGNATION=this.state.position;
        this.state.work_experince.GTS_USER_WORK_START_MONTH_YEAR=this.state.startDate;
        this.state.work_experince.GTS_USER_WORK_END_MONTH_YEAR=this.state.endDate;
        this.state.work_experince.GTS_USER_EMPLOYER=this.state.nameOfTheCompany;
        this.state.work_experince.GTS_USER_JOB_DESCRIPTION=this.state.jobDescription;
        this.state.work_experince.GTS_USER_WORK_EXPERIENCE_ID=workexperienceid;
         // this.state.work_experince.Till_Date=document.getElementById("EditTillDate").checked ;
        this.state.work_experince.Till_Date=!this.state.Till_Date;
        //this.state.work_experince.Till_Date=true;
        console.log("state is"+JSON.stringify(this.state.work_experince))
        axios.put('https://1oacuj96hj.execute-api.ap-south-1.amazonaws.com/serverless/api/v1/user/work_experience',this.state.work_experince).then(response=>{
            console.log("response is "+JSON.stringify(response))

        }).catch(error=>{
            console.log("error is "+error)
        })
        console.log(workexperienceid)}


    componentDidMount() {
        
        
        axios.get('https://1oacuj96hj.execute-api.ap-south-1.amazonaws.com/serverless/api/v1/user/work_experience/user_id?userId=1')


       
            .then(res => {
                const workexperinces = res.data;
                
                this.setState({ workexperinces });

                workexperinces.map((workexperince)=>{
                    if(workexperince.Till_Date==true){
                      this.state.counter++;
                    }
                })
                

            })

        axios.get('https://1oacuj96hj.execute-api.ap-south-1.amazonaws.com/serverless/api/v1/user/work_experience/totalDurationOfWorkExperience/user_id?userId=1').then(res => {
            const totalDuration = res.data;
            this.setState({ totalDuration });

        })
    }




    render() {
          const{nameOfTheCompany,position,startDate,endDate,jobDescription}=this.state;
          
          
        return (
            <div>
                <div>{/*Main Div STart*/}
                

                    {/*Project start*/}
                    <div className="container">
                        <div className='mt-3 '><div className="border border-dark rounded-lg " >
                            <div className="row mt-3 mb-0  "> {/* row start*/}
                                <div class="col-3 ">
                                    <h5 class="mb-3 p-2 ">Work Experience</h5>
                                </div>
                                {/* <div class="col-2 pr-0 bg-primary  pull-right">
                           <label><h5><FontAwesomeIcon icon={faUpload}/></h5></label>
                       </div> */}

                                <div class="col-7 ">
                                    <label class="text-dark"><b>Total Duration of work Experience:</b> &nbsp;&nbsp;{this.state.totalDuration}</label>
                                    {/* <input type="text" class="text-primary" placeholder=" name" ></input> */}
                                </div>


                                <div class="col-1  px-0 py-0">
                                    {/* <a class="btn btn-primary" href="#" role="button">Add Project </a> */}
                                    < button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#addWorkExperince"  onClick={this.addButtonListener} >Add Work Experience</button>



                                </div>

                                <div class="col-1  ">
                                    {/* <a  href="#" >Name<i class="fas fa-pen "> </i></a>*/}

                                </div>




                            </div> {/*container row ends*/}
                            {/* <hr className =" border-dark-40 " /> */}

                            {/*containerSTART */}
                            <hr class="border_dark"/>
                           
                            {this.state.workexperinces.length>0&&this.state.workexperinces.map((workexperince) => {
                                return (
                                   
// {"editworkexperince"+workexperince.GTS_USER_WORK_EXPERIENCE_ID}
                                    <div >
                                         <button type="button" class="btn btn-primary float-right" data-toggle="collapse" data-target={"#demo"+workexperince.GTS_USER_WORK_EXPERIENCE_ID} aria-expanded="false" aria-controls="#a" onClick={() => this.collapse()}>-</button>
                                        <div className="container" key={workexperince.GTS_USER_WORK_EXPERIENCE_ID}>

                                            <div class="row-sm m-0  text-left  ">
                                                <label class="text-dark"><b>Name of the Company:</b>&nbsp;&nbsp;{workexperince.GTS_USER_EMPLOYER} </label>
                                                <button href="#" class="btn float-right "><FontAwesomeIcon icon={faTrash} onClick={()=>

                                                this.deleteWorkExperience(workexperince.GTS_USER_WORK_EXPERIENCE_ID)} /></button>
                                                <button class="btn float-right " data-toggle="modal" data-target={"#editworkexperince"+workexperince.GTS_USER_WORK_EXPERIENCE_ID} onClick={this.editButtonListener}><FontAwesomeIcon icon={faEdit} /></button>
                                            </div>
                                            {this.state.IsCollapsed?<div id= {"demo"+workexperince.GTS_USER_WORK_EXPERIENCE_ID} class="collapse">
                                            <div class="row-sm">
                                                <label class="text-dark"><b>Position:</b>&nbsp;&nbsp;{workexperince.GTS_USER_DESIGNATION} </label>
                                                {/* <input type ="text" class="text-primary"  placeholder = " name" ></input> */}
                                            </div>
                                            <div class="row-sm">
                                                <label class="text-dark"><b>Start Date:</b>&nbsp;&nbsp;{workexperince.GTS_USER_WORK_START_MONTH_YEAR}</label>
                                                {/* <input type ="text" class="text-primary"  placeholder = "year" ></input> */}
                                            </div>
                                            <div class="row-sm">
                                               {!(workexperince.Till_Date) ?<label class="text-dark"><b>End Date:</b>&nbsp;&nbsp;{workexperince.GTS_USER_WORK_END_MONTH_YEAR}</label>:<label class="text-dark">End Date:&nbsp;&nbsp;Currently Working</label>}
                                                {/* <input type ="text" class="text-primary" placeholder = "year" ></input> */}
                                            </div>

                                            <div class="row-sm">
                                                <label class="text-dark"><b>Job Description:</b>&nbsp;&nbsp;{workexperince.GTS_USER_JOB_DESCRIPTION}</label>
                                                {/* <input type ="text" class="text-primary"  placeholder = "year" ></input> */}
                                            </div>
                                            <div class="row-sm">
                                                <label class="text-dark"><b>Duration of Work Experience:</b>&nbsp;&nbsp;{workexperince.GTS_DURATION}</label>
                                                {/* <input type ="text" class="text-primary" placeholder = "year" ></input> */}
                                            </div>
                                             </div>:<div id= {workexperince.GTS_USER_WORK_EXPERIENCE_ID} class="collapsing">
                                            <div class="row-sm">
                                                <label class="text-dark">Position:&nbsp;&nbsp;{workexperince.GTS_USER_DESIGNATION} </label>
                                                {/* <input type ="text" class="text-primary"  placeholder = " name" ></input> */}
                                            </div>
                                            <div class="row-sm">
                                                <label class="text-dark">Start Date:&nbsp;&nbsp;{workexperince.GTS_USER_WORK_START_MONTH_YEAR}</label>
                                                {/* <input type ="text" class="text-primary"  placeholder = "year" ></input> */}
                                            </div>
                                            <div class="row-sm">
                                               {!(workexperince.Till_Date) ?<label class="text-dark">End Date:&nbsp;&nbsp;{workexperince.GTS_USER_WORK_END_MONTH_YEAR}</label>:<label class="text-dark">End Date:&nbsp;&nbsp;Currently Working</label>}
                                                {/* <input type ="text" class="text-primary" placeholder = "year" ></input> */}
                                            </div>

                                            <div class="row-sm">
                                                <label class="text-dark">Job Description:&nbsp;&nbsp;{workexperince.GTS_USER_JOB_DESCRIPTION}</label>
                                                {/* <input type ="text" class="text-primary"  placeholder = "year" ></input> */}
                                            </div>
                                            <div class="row-sm">
                                                <label class="text-dark">Duration of Work Experience:&nbsp;&nbsp;{workexperince.GTS_DURATION}</label>
                                                {/* <input type ="text" class="text-primary" placeholder = "year" ></input> */}
                                            </div>
                                             </div>}

                                             
                                            <hr className=" border-dark-40 " />
                                        </div>

                                        <div id= {"editworkexperince"+workexperince.GTS_USER_WORK_EXPERIENCE_ID} class="modal fade" role="dialog">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title"> Edit Work Experience</h5>
                                                    </div>


                                                    <div class="modal-body">
                                                        <div className="container" >

                                                            <div class="row-sm m-0  text-left  ">
                                                            {/* ( foo && !bar ) || ( !foo && bar ) */}
                                                                    <label class="text-dark">Name of the Company:&nbsp;&nbsp;
                                                                    <input type ="text" style={{color:"#0d6efd"}} name="nameOfTheCompany" defaultValue={workexperince.GTS_USER_EMPLOYER} onChange={this.changeHandler}   ></input>

                                                                    <div>{this.state.nameOfTheCompany.length<=0&&this.state.editNameOfTheCompanyValidation?  <span class="validationStyle">Please Enter some value</span>:null}</div>
                                                                    </label>


                                                                    </div>
                                                                <div class="row-sm">
                                                                    <label class="text-dark">Position: &nbsp;&nbsp;
                                                                     <input type ="text" style={{color:"#0d6efd"}} name="position" defaultValue= {workexperince.GTS_USER_DESIGNATION} onChange={this.changeHandler}></input>
                                                                     <div>
                                                                 {this.state.position.length<=0 &&this.state.editPositionValidation?  <span class="validationStyle">Please Enter some value</span>:null}

                                                                  </div>
                                                                  </label>
                                                                </div>
                                                                 <div class="row-sm">
                                                                    <label class="text-dark">Start Date:&nbsp;&nbsp;
                                                                    <input id="EditStartDate" type ="date" style={{color:"#0d6efd"}} name ="startDate"defaultValue= {workexperince.GTS_USER_WORK_START_MONTH_YEAR} onChange={this.changeHandler}></input>
                                                                    <div>
                                                    {(!(this.state.startDate)&&this.state.editStartDateValidation)? <span class="validationStyle">Please Enter some value</span>:null}
                                                                   </div>
                                                                   </label>
                                                                </div>
                                                                <div>
                                                    {(!(this.state.isValidDates))?<span class="validationStyle">End date should be greater than start date</span> :null}
                                                    </div>
                                                    {/* !(workexperince.Till_Date) */}
                                                    {/* ||(!this.state.work_experince.Till_Date)  */}
                                                    {/* !(workexperince.Till_Date)&&this.state.Till_Date */}
                                                  {(this.state.Till_Date)? <div id={"editworkexperincetillDate"+workexperince.GTS_USER_WORK_EXPERIENCE_ID} class="row-sm">
                                                                    <label class="text-dark"> End Date:&nbsp;&nbsp;
                                                                    <input id="EditEndDate"  type ="date" style={{color:"#0d6efd"}} name ="endDate"defaultValue={workexperince.GTS_USER_WORK_END_MONTH_YEAR} onChange={this.changeHandler}></input>
                                                                <div>
                                                    {(!(this.state.endDate)&&this.state.editEndDateValidation)? <span class="validationStyle">Please Enter some value</span>:null}
                                                    </div></label></div>:<div id ={"editworkexperincetillDate"+workexperince.GTS_USER_WORK_EXPERIENCE_ID}class="collapsing"></div>}
                                                    


                                                    <div class="row-sm">
                                                    <label class="text-dark">Till date: &nbsp;&nbsp;
                                                    {/* {(workexperince.Till_Date)?    <input type="checkbox" checked clickedid="EditTillDate"  data-toggle="collapse" data-target={"#editworkexperincetillDate"+workexperince.GTS_USER_WORK_EXPERIENCE_ID} onClick={()=>this.handlingTillDate()} ></input>: } */}
                                                    <input type="checkbox" id="EditTillDate"  data-toggle="collapse" data-target={"#editworkexperincetillDate"+workexperince.GTS_USER_WORK_EXPERIENCE_ID} onClick={()=>this.handlingTillDate()} ></input>
                                                {/* <button type="button" class="btn btn-primary float-right" data-toggle="collapse" data-target={"#editworkexperincetillDate"+workexperince.GTS_USER_WORK_EXPERIENCE_ID} aria-expanded="false" aria-controls="#a" onClick={()=>this.handlingTillDate()}>-</button> */}
                                                </label>
                                                   {/* { (this.state.counter<1&&!(this.state.work_experince.Till_Date))?:<label></label>} */}
                                                </div>
                                                                <div class="row-sm">
                                                                    <label class="text-dark">Job Description:&nbsp;&nbsp;
                                                                    <input type ="text" style={{color:"#0d6efd"}} name ="jobDescription" defaultValue = {workexperince.GTS_USER_JOB_DESCRIPTION} onChange={this.changeHandler}></input>
                                                                    <div>
                                                    {this.state.jobDescription.length<=0&&this.state.editJobDescritptionValidation?  <span class="validationStyle">Please Enter some value</span>:null}
                                                    </div>
                                                    </label>

                                                                </div>





                                                        </div>

                                                    </div>


                                                    <div class="modal-footer">
                                                        <div class="text-inline">

                                                        {/* { (((!this.state.startDate)||(!this.state.endDate)||(this.state.nameOfTheCompany.length<=0)||(this.state.position.length<=0)||(this.state.jobDescription.length<=0)||(this.state.isValidDates))&&(this.state.editNameOfTheCompanyValidation||this.state.editPositionValidation||this.state.editStartDateValidation||this.state.editEndDateValidation||this.state.editJobDescritptionValidation))? <Button id ="test" type="button">Save</Button>:<Button id ="test" type="button" data-dismiss="modal" onClick={this.editWorkExperience(workexperince.GTS_USER_WORK_EXPERIENCE_ID)}>Save</Button>} */}
                                                        { (this.state.nameOfTheCompany.length<=0&&this.state.editNameOfTheCompanyValidation)||(this.state.position.length<=0&&this.state.editPositionValidation)||(!this.state.startDate&&this.state.editStartDateValidation)||(!this.state.endDate&&this.state.editEndDateValidation)||(this.state.jobDescription.length<=0&&this.state.editJobDescritptionValidation)||(!(this.state.isValidDates))&&(this.state.nameOfTheCompany.length<=0)&&(this.state.position.length<=0)&&(!this.state.startDate)&&(!this.state.endDate)&&(this.state.jobDescription.length<=0)

                                                            ? <Button id ="test2" type="button">Save</Button>:<Button id="test2"type="button" data-dismiss="modal" onClick={()=>{this.editWorkExperience(workexperince.GTS_USER_WORK_EXPERIENCE_ID)}}>Save</Button>}


                                                            <Button type="button" class="close" data-dismiss="modal">Cancel</Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                            })}
                            {/* <div className="collapse" id="a"></div>         */}
                            <div className="collapse" id="a">

                            </div>

                            {/*container */}

                            {/*</div> container row ends*/}




                            {/*containerSTART */}


                            {/*container */}

                            {/*</div> container row ends*/}





                            <hr className=" border-dark-40 " />
                            {/*container */}


                            {/*container */}

                            {/*</div> container row ends*/}





                            {/*container */}

                            {/*</div> container row ends*/}



                            {/* For every unit in this.state.units */}


                            <div id="addWorkExperince" class="modal fade" role="dialog">

                                <div class="modal-dialog">

                                    <div class="modal-content">

                                        <div class="modal-header">
                                            <h5 class="modal-title"> Add Work Experience</h5>
                                        </div>
                                        <div class="modal-body">

                                            <div className="container" >

                                                <div class="row-sm m-0  text-left  ">
                                                    <label class="text-dark">Name of the Company: &nbsp;&nbsp;
                                                    <input type="text"  name="nameOfTheCompany" value ={nameOfTheCompany} onChange={this.changeHandler}   ></input>
                                                   <div>

                                                  {this.state.nameOfTheCompany.length<=0 ?  <span class="validationStyle">Please Enter some value</span>:null}

                                                  </div>
                                                    </label>

                                          </div>
                                                <div class="row-sm">
                                                    <label class="text-dark">Position: &nbsp;&nbsp;
                                                    <input type="text" name="position" value={position} onChange={this.changeHandler}  ></input>
                                                    <div>
                                                    {this.state.position.length<=0 ?  <span class="validationStyle">Please Enter some value</span>:null}

                                                    </div></label>
                                                </div>
                                                <div class="row-sm">
                                                    <label class="text-dark">Start Date: &nbsp;&nbsp;
                                                    <input id ="StartDate"type="date" name ="startDate" value={startDate} onChange={this.changeHandler} ></input>
                                                   <div>
                                                    {(!(this.state.startDate))? <span class="validationStyle">Please Enter some value</span>:null}
                                                    </div>
                                                    </label>
                                                    <div>
                                                    {(!(this.state.isValidDates))?<span class="validationStyle">End date should be greater than start date</span> :null}
                                                    </div>
                                                </div>
                                                {(this.state.Till_Date)?<div class="row-sm">
                                                    <label class="text-dark">End Date: &nbsp;&nbsp;
                                                    <input id ="EndDate" type="date" name="endDate"  value={endDate} onChange={this.changeHandler}  ></input>
                                                    <div>
                                                    {(!(this.state.endDate))? <span class="validationStyle">Please Enter some value</span>:null}
                                                    </div>
                                                    </label>
                                                </div>:<div></div>}
                                                <div class="row-sm">
                                                {(this.state.counter<1&&!(this.state.work_experince.Till_Date))&&<label class="text-dark">Till date: &nbsp;&nbsp;
                                                <input type="checkbox" id="AddtillDate" onClick={()=>this.handlingTillDate()}></input>
                                                </label>}
                                                </div>
                                                <div class="row-sm">
                                                    <label class="text-dark">Job Description: &nbsp;&nbsp;
                                                    <input type="text" name="jobDescription" value={jobDescription} onChange={this.changeHandler} ></input>
                                                    <div>
                                                    {this.state.jobDescription.length<=0?  <span class="validationStyle">Please Enter some value</span>:null}
                                                    </div>
                                                    </label>
                                                </div>


                                            </div>



                                        </div>


                                        <div class="modal-footer">
                                            <div class="text-inline">
                                           { ((!this.state.startDate)||((!this.state.endDate)&&(this.state.Till_Date))||(this.state.nameOfTheCompany.length<=0)||(this.state.position.length<=0)||(this.state.jobDescription.length<=0)||(!this.state.isValidDates))? <Button id ="test" type="button">Save</Button>:<Button id ="test" type="button" data-dismiss="modal" onClick={this.addWorkExperience}>Save</Button>
                                              } 
                                              {/* <Button id ="test" type="button" data-dismiss="modal" onClick={this.addWorkExperience}>Save</Button> */}
                                               <Button type="button" class="close" data-dismiss="modal">Cancel</Button>
                                            </div>
                                        </div>

                                    </div>
                                </div>



                            </div>


                        </div>
                        </div>
                    </div>
                    {/*Project Detail end*/}
                </div>


            </div>



// !((this.state.GTS_USER_EMPLOYER.length<=0 ||workexperince.GTS_USER_EMPLOYER.length<=0)&&!(this.state.GTS_USER_EMPLOYER.length<=0&&workexperince.GTS_USER_EMPLOYER.length<=0))
        )
                                            
    }
}
export default WorkExperienceComponent;
