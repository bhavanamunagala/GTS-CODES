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

class LanguageBackground extends Component 
{
    render()
     {
            
        return (
            <div>
                {/*............Langauage Known start.............*/}

            <div className="container align-items-center">
                <div className='mt-3  mb-3'>
                    <div className="border border-dark rounded-lg" >
                        <div class="row">
                            <div class="col">
                                <h5 class="mb-3 p-2">Langauage Known(master data)</h5>
                            </div>
                            <div class="col-1">
                                    <a href ="#" class="btn  "><FontAwesomeIcon icon={faEdit}/></a>
                            </div> 
                        </div>    

                    <div className="container">
                    
                        <div class="row">
                            <div class="col">
                                <label><h6>Langauages </h6></label>
                                </div>
                            <div class="col">
                                <label><h6>Profiency </h6></label>
                                </div>
                            <div class="col">
                            <label> <h6>Read </h6> </label>
                                </div>
                                <div class="col">
                            <label><h6>Write </h6> </label>
                                </div>
                                <div class="col">
                            <label><h6>Speak</h6> </label>
                                </div>
                    
                        </div>
            <hr></hr>
            <div class="row">
                            <div class="col">
                                <label>English</label>
                                </div>

                                <div class="col">

                                            
                                            <select name="lang">
                                            <option>Select</option>
                                            <option>Beginner</option>
                                            <option>Intermediate</option>
                                            <option>Expert</option>
                                            </select>
                                </div>

                                            {/* <div class="col">
                                            <input type ="checkbox" name="yes/no" value="yes"></input>
                                            </div>

                                            <div class="col">
                                            <input type ="checkbox" name="yes/no" value="yes"></input>
                                            </div>

                                            <div class="col">
                                            <input type ="checkbox" name="yes/no" value="yes"></input>
                                            </div> */}


                                            <div class="col">
                                            <select name="lang">
                                            {/* <option>Select</option> */}
                                            <option>Yes</option>
                                            <option>No</option>
                                            </select>
                                            </div>

                                            <div class="col">
                                            <select name="lang">
                                            {/* <option>Select</option> */}
                                            <option>Yes</option>
                                            <option>No</option>
                                            </select>
                                            </div>


                                            <div class="col">
                                            <select name="lang">
                                            {/* <option>Select</option> */}
                                            <option>Yes</option>
                                            <option>No</option>
                                            </select>
                                            </div>


                    {/*
                            <div class="col">
                            <input type ="text"  class="text-primary" placeholder = "Expert" ></input>
                                </div>
                            <div class="col">
                            <input type ="text" class="text-primary" placeholder = "yes" ></input>
                                </div>
                                <div class="col">
                                <input type ="text" class="text-primary" placeholder = "yes" ></input>
                                </div>
                                <div class="col">
                                <input type ="text"  class="text-primary" placeholder = "yes" ></input>
                                </div>
                                <div class="col-1">
                                <a href ="#" class="btn  "><FontAwesomeIcon icon={faTrash}/></a>
                                </div>*/}

            </div>
            


            <hr></hr>


            <div class="row ">
                            <div class="col">
                                <label>Hindi </label>
                            </div>

                                            <div class="col">
                                            <select name="lang">
                                            <option>Select</option>
                                            <option>Beginner</option>
                                            <option>Intermediate</option>
                                            <option>Expert</option>
                                            </select>
                                            </div>


                                            {/* <div class="col">
                                            <input type ="checkbox" name="yes/no" value="yes"></input>
                                            </div>

                                            <div class="col">
                                            <input type ="checkbox" name="yes/no" value="yes"></input>
                                            </div>

                                            <div class="col">
                                            <input type ="checkbox" name="yes/no" value="yes"></input>
                                            </div> */}

                                        <div class="col">
                                            <select name="lang">
                                            {/* <option>Select</option> */}
                                            <option>Yes</option>
                                            <option>No</option>
                                            </select>
                                            </div>

                                            <div class="col">
                                            <select name="lang">
                                            {/* <option>Select</option> */}
                                            <option>Yes</option>
                                            <option>No</option>
                                            </select>
                                            </div>


                                            <div class="col">
                                            <select name="lang">
                                            {/* <option>Select</option> */}
                                            <option>Yes</option>
                                            <option>No</option>
                                            </select>
                                            </div>

                            



                        {/* <div class="col">
                                <input type ="text"  class="text-primary" placeholder = "Expert" ></input>
                            </div>
                            <div class="col">
                                <input type ="text"  class="text-primary" placeholder = "yes" ></input>
                            </div>
                            <div class="col">
                                <input type ="text" class="text-primary" placeholder = "yes" ></input>
                            </div>
                            <div class="col">
                                <input type ="text" class="text-primary" placeholder = "yes" ></input>
                            </div>
                            <div class="col-1">
                                <a href ="#" class="btn  "><FontAwesomeIcon icon={faTrash}/></a>
                            </div> */}
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


            {/*..............Langauge known end..............*/}
            </div>
        )
    }
}
export default LanguageBackground; 