import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faTrash,faEdit,faUpload} from '@fortawesome/free-solid-svg-icons'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import {
  Button,Alert,FormGroup,Form,Input,InputGroupAddon,InputGroupText,InputGroup,Row,Col,Container
} from 'reactstrap';
import { FormControl, FormLabel, Card, CardBody,CardText } from 'react-bootstrap';
import Button2 from '@material-ui/core/Button';
import options from './Skills';
import Slider from './Slider';  

class EmployerSkills extends Component 
{
    
    // componentDidUpdate(e) {
    //     document.documentElement.scrollTop = 0;
    //     document.scrollingElement.scrollTop = 0;
    // }
    // state = {
    //     selected: [],
    //     fields:{}
    // };
    // constructor(props) {
    //     super(props);
    //     this.state={
    //         skills:[],
    //         skillName:'',
    //         expMonth:'',
    //         expYear:'',
    //         selfRate:'',
    //         skill_self:{
    //             gtsUserID:1,
    //             gtsSkillName:'',
    //             gtsSkillSelfRatings:'',
    //             gtsSkillExperienceMonths:'',
    //             gtsSkillExperienceYears:''
    //         },
    //         gtsUserSkillID:'1',
    //         target:{name:'', value:''},
    //         fields:{}
    //     }
    // }
    // changeHandler = e => {

    //     this.setState({[e.target.name]: e.target.value})
    //     console.log('target name is: ' + [e.target.name])
    //     console.log('target value is: ' + [e.target.value])

    // }
    // nameChange(event){
    //     const inputID = event.target.value
    //     this.setState({
    //         gtsUserSkillID:inputID
    //     })
    // }
    // deleteSkill(gtsUserSkillID){
    //     //URL to get data using skill_id https://84acca8e-1ec1-443d-9474-9227f13c815a.mock.pstmn.io/api/v1/user/skill/user_skill_id/{1}
    //     axios.delete('https://84acca8e-1ec1-443d-9474-9227f13c815a.mock.pstmn.io/api/v1/user/skill/user_skill_id/{' + gtsUserSkillID + '}').then(response => {
    //         console.log("response" + response);
    //     }).catch(error => {
    //         console.log(error);
    //     })
    // }
    // addSkill = e => {
    //     e.preventDefault();
    //     this.state.skill_self.gtsSkillName = this.state.skillName;
    //     this.state.skill_self.gtsSkillSelfRatings = this.state.selfRate;
    //     this.state.skill_self.gtsSkillExperienceMonths = this.state.expMonth;
    //     this.state.skill_self.gtsSkillExperienceYears = this.state.expYear;
    //     console.log("state is : " + JSON.stringify(this.state.skill_self))
    //     axios.post('https://84acca8e-1ec1-443d-9474-9227f13c815a.mock.pstmn.io/api/v1/user/skill', this.state.skill_self).then(response => {
    //         console.log("response" + response);
    //     }).catch(error => {
    //         console.log("error is "+error)
    //     })
    // }
    // editSkill(gtsUserSkillID){
    //     this.state.skill_self.gtsSkillName = this.state.skillName;
    //     this.state.skill_self.gtsSkillSelfRatings = this.state.selfRate;
    //     this.state.skill_self.gtsSkillExperienceMonths = this.state.expMonth;
    //     this.state.skill_self.gtsSkillExperienceYears = this.state.expYear;
    //     console.log("state is: " + JSON.stringify(this.state.skill_self))
    //     axios.post('https://84acca8e-1ec1-443d-9474-9227f13c815a.mock.pstmn.io/api/v1/user/skill', this.state.skill_self).then(response => {
    //         console.log("response" + response);
    //     }).catch(error => {
    //         console.log("error is "+error)
    //     })
    // }
    // componentDidMount(){
    //     axios.get('https://84acca8e-1ec1-443d-9474-9227f13c815a.mock.pstmn.io/api/v1/user/skill')
    //     .then(res => {
    //       const skills = res.data;
    //       this.setState({ skills : res.data });
    //     })
    //     .catch(function(error){
    //         console.log(error);
    //     })
    //     //URL to get data using skill_id https://84acca8e-1ec1-443d-9474-9227f13c815a.mock.pstmn.io/api/v1/user/skill/user_skill_id/{1}
    // }
    render()
     {
            
        return (
            <div>
                            {/*..............skills required start..............*/}

            <div className="container align-items-center">
                <div className='mt-3'>
                    <div className="border border-dark rounded-lg" >
                        <div class= "row">
                            <div class="col">
                                <h5 class="mb-3 p-2">I look for the following required/mandatory skills from the candidate</h5>
                            </div>

                            <div class = "mt-3 col-1 ">
                                <button class = "btn btn-primary btn-sm" data-toggle="modal" data-target="#modalAddSkillPrimary">Add Skill</button>
                            </div>
                            <div id="modalAddSkillPrimary" class="modal fade" role="dialog">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title">Add your preffered Skills</h5>
                                        </div>
                                        <div class="modal-body">
                                            <div>
                                            <form onSubmit={this.addSkill}>
                                                        <div class="form-group">
                                                            <label for="exampleFormControlInput1">Add a Skill</label>
                                                            {/*<input type="text" class="form-control" id="skillsPrimary" placeholder="Java"/>*/}
                                                            <Typeahead
                                                                {...this.state}
                                                                id="basic-example"
                                                                onChange={selected => this.setState({ selected })}
                                                                options={options}
                                                                placeholder="Choose a technology..." 
                                                                name = "skillName"
                                                                value = {""}
                                                                
                                                            />
                                                        </div>
                                                {/* <form>
                                                    <div class="form-group">
                                                        <label for="exampleFormControlInput1">Add New Skill</label>
                                                        <input type="text" class="form-control" id="skillsPrimary" placeholder="ASP.NET"/>
                                                    
                                                    </div> */}
                                                    <label for="exampleFormControlInput1"><h6>Total Experience : </h6></label>
                                                    <div class="form-group form-row">
                                                            <div class="col">
                                                                <label for="exampleFormControlSelect1">Years </label>
                                                                <input type="number" class="form-control" id="exampleFormControlSelect1" aria-describedby="expYear" placeholder="Enter Year" name="expYear"  onChange={this.changeHandler}></input>
                                                            </div>
                                                            <div class="col">
                                                                <label for="exampleFormControlSelect1">Months</label>
                                                                <input type="number" class="form-control" id="exampleFormControlSelect1" aria-describedby="expMonth" placeholder="Enter Months" name="expMonth"  onChange={this.changeHandler}></input>
                                                            </div>
                                                        </div>

                                                        <div class="form-group">
                                                            <label for="exampleFormControlSelect2">Rate yourself on a scale of 10</label>
                                                            <Slider name="selfRate"  onChange={this.changeHandler}/>
                                                        </div>
                                                
                                                    {/* <div class="form-group">
                                                        <label for="exampleFormControlSelect2">Required Profiency</label>
                                                        <select class="form-control" id="exampleFormControlSelect2">
                                                            <option>0</option>
                                                            <option>1/10</option>
                                                            <option>2/10</option>
                                                            <option>3/10</option>
                                                            <option>4/10</option>
                                                            <option>5/10</option>
                                                            <option>6/10</option>
                                                            <option>7/10</option>
                                                            <option>8/10</option>
                                                            <option>9/10</option>
                                                            <option>10/10</option>
                                                        </select>
                                                    </div> */}
                                                </form>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <div class="text-inline">
                                            <Button type="button" data-dismiss="modal" onClick = {this.addSkill}>Save</Button>
                                                <Button type="button" class="close" data-dismiss="modal">Cancel</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>






                            <div class="col-1">
                                <a href ="#" class="btn  "><FontAwesomeIcon icon={faEdit}/></a>
                            </div>
                        </div>



                    <div className="container">                         
                        <div class="row">
                            <div class="col">
                                <label><h6>Skills:</h6></label>
                            </div>
                            <div class="col">
                                <label><h6>Required Profiency</h6></label>
                            </div>
                            
                            <div class="col">
                                <label><h6>Year of Experience:</h6></label>
                                <div class="row">
                                    <div class="col">
                                        <label><h6>Year  </h6></label>
                                    </div>
                                    <div class="col">
                                        <label><h6>Months</h6></label>
                                    </div>
                            </div>
                            </div>
                                
                        </div>
                    
            <hr></hr>

                        <div class="row">
                            <div class="col">
                                <label>Python </label>
                            </div>
                        {/* <div class="col">
                                <input type ="text" class="text-primary" placeholder = "1/10" ></input>
                            </div>*/}




                            <div class="col">
                                            <select name="Profiency">
                                            <option>Select</option>
                                            <option>1/10</option>
                                            <option>2/10</option>
                                            <option>3/10</option>
                                            <option>4/10</option>
                                            <option>5/10</option>
                                            <option>6/10</option>
                                            <option>7/10</option>
                                            <option>8/10</option>
                                            <option>9/10</option>
                                            <option>10/10</option>
                                            
                                            </select>
                            </div>


                            <div class="col">
                            <input type ="text" class="text-primary" placeholder = "0 Years " ></input>
                            </div>
                            <div class="col">
                            <input type ="text" class="text-primary" placeholder = "0 Months " ></input>
                            </div>
                            
                            
                                <div class="col-1">
                                        <a href ="#" class="btn  "><FontAwesomeIcon icon={faTrash}/></a>
                                </div>
                    </div>
            <hr></hr>
                        <div class="row">
                            <div class="col">
                                <label>C++ </label>
                            </div>
                        {/* <div class="col">
                            <input type ="text" class="text-primary" placeholder = "1/10" ></input>
                            </div>*/}


                            <div class="col">
                                            <select name="Profiency">
                                            <option>Select</option>
                                            <option>1/10</option>
                                            <option>2/10</option>
                                            <option>3/10</option>
                                            <option>4/10</option>
                                            <option>5/10</option>
                                            <option>6/10</option>
                                            <option>7/10</option>
                                            <option>8/10</option>
                                            <option>9/10</option>
                                            <option>10/10</option>
                                            
                                            </select>
                            </div>


                            
                            <div class="col">
                            <input type ="text" class="text-primary" placeholder = "0 Years " ></input>
                            </div>
                            <div class="col">
                            <input type ="text" class="text-primary" placeholder = "0 Months " ></input>
                            </div>


                            <div class="col-1">
                                <a href ="#" class="btn  "><FontAwesomeIcon icon={faTrash}/></a>
                            </div>
                        </div>
            <hr></hr>


                        <div class="row">
                            <div class="col">
                                <label>SQL </label>
                            </div>
                            {/*<div class="col">
                            <input type ="text" class="text-primary"  placeholder = "1/10" ></input>
                            </div>*/}


                            <div class="col">
                                            <select name="Profiency">
                                            <option>Select</option>
                                            <option>1/10</option>
                                            <option>2/10</option>
                                            <option>3/10</option>
                                            <option>4/10</option>
                                            <option>5/10</option>
                                            <option>6/10</option>
                                            <option>7/10</option>
                                            <option>8/10</option>
                                            <option>9/10</option>
                                            <option>10/10</option>
                                            
                                            </select>
                            </div>


                            
                            
                            <div class="col">
                            <input type ="text" class="text-primary" placeholder = "0 Years " ></input>
                            </div>
                            <div class="col">
                            <input type ="text" class="text-primary" placeholder = "0 Months " ></input>
                            </div>



                            
                            <div class="col-1">
                                <a href ="#" class="btn  "><FontAwesomeIcon icon={faTrash}/></a>
                            </div>
                        </div>



            <hr></hr>
                        
                        
                        <div class="row">
                            <div class="col">
                                <label>R </label>
                            </div>
                            {/*<div class="col">
                                
                                <input type ="text" class="text-primary" placeholder = "1/10" ></input>
                            </div>*/}





                            <div class="col">
                                            <select name="Profiency">
                                            <option>Select</option>
                                            <option>1/10</option>
                                            <option>2/10</option>
                                            <option>3/10</option>
                                            <option>4/10</option>
                                            <option>5/10</option>
                                            <option>6/10</option>
                                            <option>7/10</option>
                                            <option>8/10</option>
                                            <option>9/10</option>
                                            <option>10/10</option>
                                            
                                            </select>
                            </div>
                            
                            <div class="col">
                            <input type ="text" class="text-primary" placeholder = "0 Years " ></input>
                            </div>
                            <div class="col">
                            <input type ="text" class="text-primary" placeholder = "0 Months " ></input>
                            </div>


                        


                            <div class="col-1">
                                <a href ="#" class="btn  "><FontAwesomeIcon icon={faTrash}/></a>
                            </div>
                        </div>
                    
                    <div class="row py" >
                        <div class="col col-sm offset-10">
                            <button type="submit"  class="btn btn-primary">Save Details</button>
                        </div>
                    </div>
                    
                    </div>
                    </div>
                </div>
            </div>


            {/*..............skills required end..............*/}





            {/*..............skills good to have start..............*/}


            <div className="container align-items-center">
                <div className='mt-3'>
                    <div className="border border-dark rounded-lg" >
                        <div class= "row">
                            <div class="col">
                                <h5 class="mb-3 p-2">I look for the following GOOD TO HAVE skills from the candidates</h5>
                            </div>
                            <div class = "mt-3 col-1 ">
                                <button class = "btn btn-primary btn-sm" data-toggle="modal" data-target="#modalAddSkillPrimary">Add Skill</button>
                            </div>
                            <div id="modalAddSkillPrimary" class="modal fade" role="dialog">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title">Add your preffered Skills</h5>
                                        </div>
                                        <div class="modal-body">
                                            <div>


                                            <form onSubmit={this.addSkill}>
                                                        <div class="form-group">
                                                            <label for="exampleFormControlInput1">Add a Skill</label>
                                                            {/*<input type="text" class="form-control" id="skillsPrimary" placeholder="Java"/>*/}
                                                            <Typeahead
                                                                {...this.state}
                                                                id="basic-example"
                                                                onChange={selected => this.setState({ selected })}
                                                                options={options}
                                                                placeholder="Choose a technology..." 
                                                                name = "skillName"
                                                                value = {""}
                                                                
                                                            />
                                                        </div>
                                                {/* <form>
                                                    <div class="form-group">
                                                        <label for="exampleFormControlInput1">Add New Skill</label>
                                                        <input type="text" class="form-control" id="skillsPrimary" placeholder="ASP.NET"/>
                                                    
                                                    </div> */}
                                                        <label for="exampleFormControlInput1"><h6>Total Experience : </h6></label>
                                                    <div class="form-group form-row">
                                                        <div class="col">
                                                            <label for="exampleFormControlSelect1">Years :</label>
                                                            <input type ="number" class="form-control" id="exampleFormControlSelect1" aria-describedby="expYear" placeholder = "0 Years" name="expyear" value={""} onChange={this.changeHandler} ></input>
                                                        </div>
                                                        <div class="col">
                                                            <label for="exampleFormControlSelect1">Months : </label>
                                                            <input type ="number" class="form-control" id="exampleFormControlSelect1" aria-describedby="expYear" placeholder = "0 Years" name="expMonth" value={""} onChange={this.changeHandler}></input>
                                                            
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                            <label for="exampleFormControlSelect2">Rate yourself on a scale of 10</label>
                                                            <Slider name="selfRate" value={""} onChange={this.changeHandler}/>
                                                        </div>
                                                    {/* <div class="form-group">
                                                        <label for="exampleFormControlSelect2">Required Profiency</label>
                                                        <select class="form-control" id="exampleFormControlSelect2">
                                                            <option>0</option>
                                                            <option>1/10</option>
                                                            <option>2/10</option>
                                                            <option>3/10</option>
                                                            <option>4/10</option>
                                                            <option>5/10</option>
                                                            <option>6/10</option>
                                                            <option>7/10</option>
                                                            <option>8/10</option>
                                                            <option>9/10</option>
                                                            <option>10/10</option>
                                                        </select>
                                                    </div> */}
                                                </form>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                        
                                            <div class="text-inline">
                                            <Button type="button" data-dismiss="modal" onClick = {this.addSkill}>Save</Button>
                                                <Button type="button" class="close" data-dismiss="modal">Cancel</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-1">
                                <a href ="#" class="btn  "><FontAwesomeIcon icon={faEdit}/></a>
                            </div>

                            
                        </div>  






                    <div className="container">                         
                        <div class="row">
                            <div class="col text-left">
                                <label><h6>Skills:</h6></label>
                            </div>
                            <div class="col text-left">
                                <label><h6>Required Profiency</h6></label>
                            </div>
                            
                            <div class="col text-center">
                            <tr><td>
                                <label><h6>Total Experience:</h6></label>
                                </td></tr>
                                <tr>
                                <td>Year</td>
                                <td>Months</td>
                            </tr>     
                            </div>
                            {/* <div class="col">
                                <label><h7>Year</h7></label>
                            </div>
                            
                            <div class="col">
                                <label><h7>Months</h7></label>
                            </div> */}
                        </div>

                        {/* <div class="col">
                                <label><h6>Months of Experience:</h6></label>
                            </div>*/}
                                
                        
                    
            <hr></hr>
                        
                        <div class="row">
                        
                            <div class="col">
                                <label>Python </label>
                            </div>
                            {/*<div class="col">
                                <input type ="text" class="text-primary" placeholder = "1/10" ></input>
                            </div>*/}
                        
                            <div class="col">
                                            <select name="Profiency">
                                            <option>Select</option>
                                            <option>1/10</option>
                                            <option>2/10</option>
                                            <option>3/10</option>
                                            <option>4/10</option>
                                            <option>5/10</option>
                                            <option>6/10</option>
                                            <option>7/10</option>
                                            <option>8/10</option>
                                            <option>9/10</option>
                                            <option>10/10</option>
                                            
                                            </select>
                            </div>
                            
                            
                            <div class="col">
                            <input type ="text" class="text-primary" placeholder = "2 " ></input>
                            </div>
                            <div class="col">
                            <input type ="text" class="text-primary" placeholder = "6 " ></input>
                            </div>

                        
                            <div class="col-1">
                                <a href ="#" class="btn  "><FontAwesomeIcon icon={faTrash}/></a>
                            </div>
                        
                        </div>
            <hr></hr>
                        <div class="row">
                            <div class="col">
                                <label>C++ </label>
                            </div>
                        

                            <div class="col">
                                            <select name="Profiency">
                                            <option>Select</option>
                                            <option>1/10</option>
                                            <option>2/10</option>
                                            <option>3/10</option>
                                            <option>4/10</option>
                                            <option>5/10</option>
                                            <option>6/10</option>
                                            <option>7/10</option>
                                            <option>8/10</option>
                                            <option>9/10</option>
                                            <option>10/10</option>
                                            
                                            </select>
                            </div>
                            
                            <div class="col">
                                <input type ="text" class="text-primary" placeholder = "1 Years" ></input>
                            </div>

                            <div class="col">
                                <input type ="text"  class="text-primary" placeholder = "2 Months" ></input>
                            </div>
                                <div class="col-1">
                                <a href ="#" class="btn  "><FontAwesomeIcon icon={faTrash}/></a>
                            </div>
                        </div>
            <hr></hr>


                        <div class="row">
                            <div class="col">
                                <label>SQL </label>
                            </div>
                            {/*<div class="col">
                            <input type ="text" class="text-primary"  placeholder = "1/10" ></input>
                            </div>*/}


                            <div class="col">
                                            <select name="Profiency">
                                            <option>Select</option>
                                            <option>1/10</option>
                                            <option>2/10</option>
                                            <option>3/10</option>
                                            <option>4/10</option>
                                            <option>5/10</option>
                                            <option>6/10</option>
                                            <option>7/10</option>
                                            <option>8/10</option>
                                            <option>9/10</option>
                                            <option>10/10</option>
                                            
                                            </select>
                            </div>
                            
                            <div class="col">
                                <input type ="text" class="text-primary" placeholder = "5 Years" ></input>
                            </div>

                            <div class="col">
                                <input type ="text"  class="text-primary" placeholder = "2 Months" ></input>
                            </div>
                            <div class="col-1">
                                <a href ="#" class="btn  "><FontAwesomeIcon icon={faTrash}/></a>
                            </div>
                        </div>
            <hr></hr>
                        <div class="row">
                            <div class="col">
                                <label>R </label>
                            </div>
                            {/*<div class="col">
                                <input type ="text" class="text-primary" placeholder = "1/10" ></input>
                            </div>*/}

                            <div class="col">
                                            <select name="Profiency">
                                            <option>Select</option>
                                            <option>1/10</option>
                                            <option>2/10</option>
                                            <option>3/10</option>
                                            <option>4/10</option>
                                            <option>5/10</option>
                                            <option>6/10</option>
                                            <option>7/10</option>
                                            <option>8/10</option>
                                            <option>9/10</option>
                                            <option>10/10</option>
                                            
                                            </select>
                            </div>
                            
                            <div class="col">
                            <input type ="text" class="text-primary" placeholder = "0 Years" ></input>
                            </div>

                            <div class="col">
                                <input type ="text"  class="text-primary" placeholder = "2 Months" ></input>
                            </div>
                            <div class="col-1">
                                <a href ="#" class="btn  "><FontAwesomeIcon icon={faTrash}/></a>
                            </div>
                        </div>
                    
                    <div class="row py" >
                        <div class="col col-sm offset-10">
                            <button type="submit"  class="btn btn-primary">Save Details</button>
                        </div>
                    </div>
                    
                </div>
                    </div>
                </div>
            </div>

            {/*..............skills good to have end..............*/}
            </div>
        )
    }
}
export default EmployerSkills; 