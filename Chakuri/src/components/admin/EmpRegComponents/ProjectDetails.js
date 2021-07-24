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

class ProjectDetails extends Component 
{
    render()
     {
            
        return (
            <div>
                {/*..........Project details start..........*/}

                <div className="container align-items-center">
                    <div className='mt-3'>
                        <div className="border border-dark rounded-lg" >
                            <div class="row">
                                <div class="col">
                                    <h5 class="mb-3 p-2">Projects :</h5>
                                </div>

                                <div class="col-1">
                                    <a href ="#" class="btn  "><FontAwesomeIcon icon={faEdit}/></a>
                                </div>

                            </div>


                            <div className="container  ">

                                <div class="row-sm m-0  text-left  ">
                                    <label>Name of the Company/University/Institute  : </label>
                                    <input type ="text" class="text-primary" placeholder = "Modern Institute" ></input>
                                </div>

                                <div class="row-sm">
                                    <label>Start Date : </label>
                                    <input type ="text" class="text-primary"  placeholder = " July2019" ></input>
                                </div>

                                <div class="row-sm">
                                    <label>Date Of Completion :</label>
                                    <input type ="text" class="text-primary"  placeholder = "July 2020" ></input>
                                </div>

                            
                            </div>


                            <div class="row py" >
                                <div class="col col-sm offset-10 ">
                                <button type="submit"  class="btn btn-primary">Save Detail</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*................Project details end...............*/}

            
            </div>
        )
    }
}
export default ProjectDetails; 