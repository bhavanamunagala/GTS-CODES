import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faTrash,faEdit,faUpload} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import {
  Button,Alert,FormGroup,Form,Input,InputGroupAddon,InputGroupText,InputGroup,Row,Col,Container
} from 'reactstrap';
import { FormControl, FormLabel, Card, CardBody,CardText } from 'react-bootstrap';
import Button2 from '@material-ui/core/Button';

class JobPost extends Component 
{
  
    constructor(props)
    {
        super(props)    
    
        this.state =
        {
        field:{},
        }
    }
        
    changeHandler = e => 
    {
    let field = this.state.field;
        field[e.target.name] = e.target.value;
        this.setState({
        field
        });
    }


    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        let field = this.state.field
        // axios.post('https://d44eb630-10af-41af-8358-a4acb04c8efc.mock.pstmn.io/api/v1/users/personal_details',this.state)
        // axios.put('https://1oacuj96hj.execute-api.ap-south-1.amazonaws.com/serverless/api/v1/users/personal_details',this.state)
        
        //post
        var url ='https://1oacuj96hj.execute-api.ap-south-1.amazonaws.com/serverless/api/v1/users/personal_details';
        //var url ='https://1oacuj96hj.execute-api.ap-south-1.amazonaws.com/serverless/api/v1/users/personal_details';
        var payload = {
    
            gts_user_first_name: field["First Name"],
            gts_user_middle_name:field["Middle Name"],
            gts_user_last_name:field["Last Name"],
            gts_user_gender:field["Gender"],
            gts_user_nationality:field["Nationality"],
            gts_user_primary_mobile_number:field["Mob.No"],
            gts_user_alternate_email_id:field["Alternative Email"]

        };
  
        axios.post(url,payload)
        .then(response =>{
            console.log(response)
            })
        .catch(error => {
            console.log(error)
            })
        }

        render()
        {
            const { gts_user_first_name,
                gts_user_middle_name,
                gts_user_last_name,
                gts_user_gender,
                gts_user_nationality,
                gts_user_primary_mobile_number,
                gts_user_alternate_email_id}= this.state
            
                return (
    
        
                <div> 


                {/*.............EMPLOYER JOB POST Start.............*/}

                <div className="container align-items-center">
                    <div className='mt-3'>
                        <div className="border border-dark rounded-lg" >
                            <form  onSubmit={this.submitHandler} bg-success>
                                <div className="row">
                                    <div className="col">
                                        <h5 className="mb-3 p-2">EMPLOYER JOB POST</h5>
                                        <hr className="border-dark mb-3" style={{color:"black",margin: "-12px -170px 0px 10px"}}></hr>
                                    </div>
                                    <div className= "mt-1 col-2 ">
                                        <button type="button" className= "btn btn-primary btn-sm" size="sm" data-toggle="modal" data-target="#addNewJobPost">Add New Job Post</button>
                                    </div>
                                </div>

                                <div id="addNewJobPost" className="container">
                   
                                    <div className="row">
                                        <div className="col-10">
                                            <label> Job Title (master data): </label>
                                            <input type ="text" className="text-primary" placeholder = "Junior Web Developer" ></input>
                                        </div>

                                        <div class="col-1">
                                            <a href ="#" class="btn  "><FontAwesomeIcon icon={faEdit}/></a>
                                        </div>
                                        <div class="col-1">
                                            <button className="btn btn-primary  float-right" type="button" data-toggle="collapse" data-target="#a" 
                                                    aria-expanded="false" aria-controls="collapseExample">+
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <div className="collapse" id="a">
                        
                                        <div className="row">
                                            <div className="col-12 ">
                                                <label>Years of Experience: </label>
                                                <input type ="text"  class="text-primary"  placeholder = "1-4 yrs" ></input> 
                                                
                                            </div>
                                
                                
                                            <div className="col-12">
                                                <label>Date of Posting Job (master data): </label>
                                                <input type ="text" className="text-primary" placeholder = "20 June"></input>
                                            
                                            </div>
                                            <div className="col-12">
                                                <label>Job Location (master data):</label>
                                                <input type ="text" className="text-primary" placeholder = "Bangalore"></input>
                                            </div>
                                            <div className="col-12">
                                                <label>Job Description:</label><br></br>
                                                <input type ="text" className="text-primary" placeholder = "Job Description"></input>
                                            </div>
                                            <div className="col-12">
                                                <label>Skill Required (master data):</label>
                                                <input type ="text" className="text-primary" placeholder = "HTML, CSS, JavaScript"></input>
                                            </div>
                                            <div className="col-12">
                                                <label>Skill good to have (master data):</label>
                                                <input type ="text" className="text-primary" placeholder = "HTML, CSS, JavaScript"></input>
                                            </div>
                                            <div className="col-12">
                                                <label>Salary Offered:</label>
                                                <input type ="text" className="text-primary" placeholder = "3.6 LPA"></input>
                                            </div>
                                            <div className="col-12">
                                                <label>Min. Notice Period:</label>
                                                <input type ="text" className="text-primary" placeholder = "Immediately"></input>
                                            </div>
                                            <div className="col-12">
                                                <label>Educational Qualification (display as combobox):</label>
                                                <input type ="text" className="text-primary" placeholder = "B.Tech, M.Tech, MCA"></input>
                                            </div>
                                        </div>

                                    </div>                                
                                    <hr className="border-dark mb-3" style={{color:"black",margin: "-5px 5px 0px 10px"}}></hr>
                                </div>      {/*<button type="submit">Save</button>*/}

                            </form>
                        
                        </div>
                    </div>
                </div>

                {/*.........Personal Detail end..........*/}
            </div>
        )
    }
}
export default JobPost; 