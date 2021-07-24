
import React, { Component, Fragment, StrictMode } from 'react'
import EmployeeServices from './EmployeeServices';

import { FormGroup, Row, NavLink, NavItem, Col, ButtonGroup } from 'reactstrap';
import { Form, FormControl, FormLabel, FormRow, Button, FormCheck } from 'react-bootstrap';

import { MDBDataTable } from 'mdbreact';
import PerfectScrollbar from 'react-perfect-scrollbar';
import "react-perfect-scrollbar/dist/css/styles.css";



class CurrentEmploymentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employee: [],
            viewEmploy: {}
            // datatable:[]
        }


    }

    viewEmployee(id) {
        EmployeeServices.getEmployeeById(id).then(res => {
            this.setState({ viewEmploy: res.data });
        });



        // Get the modal
        var modal = document.getElementById("myModal");
        modal.style.display = "block";

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the modal 
        btn.onclick = function () {
            modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }

    }

    componentDidMount() {

        EmployeeServices.getEmployee().then((res) => {
            console.log("res.data");
            console.log(res.data);
            this.setState({ employee: res.data });

        });

        //start

        //end
    }



    render() {
 
        const data = {
            columns: [
                {
                    label: 'Id',
                    field: 'gts_agreement_id',
                    sort: 'asc',

                },
                {
                    label: 'Comments',
                    field: 'gts_additional_comments',
                    sort: 'asc',

                },
                
                {
                    label: 'Email Id',
                    field: 'gts_approver_email_id',
                    sort: 'asc',

                },
                {
                    label: 'Mobile Number',
                    field: 'gts_approver_mobile_number',
                    sort: 'asc',

                },
                {
                    label: 'Approver Name',
                    field: 'gts_approver_name',
                    sort: 'asc',

                },
                {
                    label: 'Bonus Cost',
                    field: 'gts_bonus_cost',
                    sort: 'asc',
                },

                {
                    label: 'Candidate Email',
                    field: 'gts_candidate_email_id',
                    sort: 'asc',

                },
                {
                    label: 'Candidate Mobile Number',
                    field: 'gts_candidate_mobile_number',
                    sort: 'asc',

                },
                {
                    label: 'Candidate Name',
                    field: 'gts_candidate_name',
                    sort: 'asc',

                },
                {
                    label: 'Client Company Name',
                    field: 'gts_client_company_name',
                    sort: 'asc',

                },

                {
                    label: 'Company Name',
                    field: 'gts_company_name',
                    sort: 'asc',

                },
                {
                    label: 'Duration Contract',
                    field: 'gts_duration_contract',
                    sort: 'asc',
                },
                {
                    label: 'Joining Date',
                    field: 'gts_joining_date',
                    sort: 'asc',

                },
                {
                    label: 'Monthly Cost',
                    field: 'gts_monthly_cost',
                    sort: 'asc',

                },

                {
                    label: 'Project Description',
                    field: 'gts_project_description',
                    sort: 'asc',

                },
                {
                    label: 'Project Manager',
                    field: 'gts_project_manager',
                    sort: 'asc',

                },
                {
                    label: 'Project Manager Contact Number',
                    field: 'gts_project_manager_mobile_number',
                    sort: 'asc',

                },
                {
                    label: 'Project Name',
                    field: 'gts_project_name',
                    sort: 'asc',

                },
                {
                    label: 'Requester Name',
                    field: 'gts_requester_name',
                    sort: 'asc',

                },
                {
                    label: 'Salary Currency',
                    field: 'gts_salary_currency',
                    sort: 'asc',

                },

                {
                    label: 'Skills',
                    field: 'gts_skills',
                    sort: 'asc',

                },
                {
                    label: 'Total Salary',
                    field: 'gts_total_salary',
                    sort: 'asc',

                },
            ],

            rows:this.state.employee
                       
        };
        return (
            <Fragment>
                <PerfectScrollbar>

                    <MDBDataTable
                        striped
                        bordered
                        data={data}
                    />
                    <div><td style={{ color: "#fc83bf" }}>
                        
                    </td></div>
                    <div id="myModal" className="modal" >
                        <div className="modal-content">

                            <input className="modal" style={{ display: "none", position: "fixed", zIndex: "-1", paddingTop: "100px", left: "50px", top: "100px", width: "20px", height: "100px", overflow: "auto", backgroundColor: "rgb(0,0,0)", backgroundColor: "rgba(0,0,0,0.4)" }} />
                            <span className="close">&times;</span>
                            <div>
                                <div className="card col">

                                    <div className="card-body">

                                        <div className="container-fluid">
                                            <div className="row">

                                                <div className="col">

                                                    <label>gts_additional_comments :  </label><span style={{ color: "#fc83bf" }}>{this.state.viewEmploy.gts_additional_comments}</span>
                                                    <br></br>

                                                    <label>gts_agreement_id :  </label><span style={{ color: "#fc83bf" }}>{this.state.viewEmploy.gts_agreement_id}</span>
                                                    <br></br>

                                                    <label>gts_approver_email_id : </label> <span style={{ color: "#fc83bf" }}>{this.state.viewEmploy.gts_approver_email_id}</span>

                                                    <br></br>

                                                    <label>gts_approver_mobile_number : </label> <span style={{ color: "#fc83bf" }}>{this.state.viewEmploy.gts_approver_mobile_number}</span>
                                                    <br></br>


                                                    <label>gts_approver_name : </label> <span style={{ color: "#fc83bf" }}>{this.state.viewEmploy.gts_approver_name}</span>

                                                    <br></br>
                                                    <label>gts_bonus_cost : </label> <span style={{ color: "#fc83bf" }}>{this.state.viewEmploy.gts_bonus_cost}</span>
                                                    <br></br>

                                                    <label>gts_candidate_email_id : </label> <span style={{ color: "#fc83bf" }}>{this.state.viewEmploy.gts_candidate_email_id}</span>
                                                    <br></br>

                                                    <label>gts_candidate_mobile_number : </label> <span style={{ color: "#fc83bf" }}>{this.state.viewEmploy.gts_candidate_mobile_number}</span>
                                                    <br></br>

                                                    <label>gts_candidate_name : </label> <span style={{ color: "#fc83bf" }}>{this.state.viewEmploy.gts_candidate_name}</span>
                                                    <br></br>
                                                    <label>gts_project_description : </label> <span style={{ color: "#fc83bf" }}>{this.state.viewEmploy.gts_project_description}</span>
                                                    <br></br>
                                                    <Form inline>
                                                        <FormControl type="text" placeholder="" align="left" style={{ width: "750px", height: "100px" }} className=" mr-sm-2" />

                                                    </Form>


                                                    <br></br>


                                                </div>
                                                <br></br>
                                                <div className="col">
                                                    <label>gts_duration_contract : </label> <span style={{ color: "#fc83bf" }}>{this.state.viewEmploy.gts_duration_contract}</span>
                                                    <br></br>

                                                    <label>gts_joining_date : </label> <span style={{ color: "#fc83bf" }}>{this.state.viewEmploy.gts_joining_date}</span>
                                                    <br></br>

                                                    <label>gts_monthly_cost : </label> <span style={{ color: "#fc83bf" }}>{this.state.viewEmploy.gts_monthly_salary}</span>
                                                    <br></br>

                                                    <label>gts_company_name : </label> <span style={{ color: "#fc83bf" }}>{this.state.viewEmploy.gts_company_name}</span>
                                                    <br></br>
                                                    <label>gts_project_manager : </label> <span style={{ color: "#fc83bf" }}>{this.state.viewEmploy.gts_project_manager}</span>
                                                    <br></br>

                                                    <label>gts_project_manager_mobile_number : </label> <span style={{ color: "#fc83bf" }}>{this.state.viewEmploy.gts_project_manager_mobile_number}</span>
                                                    <br></br>
                                                    <label>gts_project_name : </label> <span style={{ color: "#fc83bf" }}>{this.state.viewEmploy.gts_project_name}</span>
                                                    <br></br>

                                                    <label>gts_requester_name : </label> <span style={{ color: "#fc83bf" }}>{this.state.viewEmploy.gts_requester_name}</span>
                                                    <br></br>

                                                    <label>gts_salary_currency : </label> <span style={{ color: "#fc83bf" }}>{this.state.viewEmploy.gts_slary_currency}</span>
                                                    <br></br>
                                                    <label>gts_skills : </label> <span style={{ color: "#fc83bf" }}>{this.state.viewEmploy.gts_skills}</span>
                                                    <br></br>
                                                    <label>gts_total_salary : </label> <span style={{ color: "#fc83bf" }}>{this.state.viewEmploy.gts_total_salary}</span>
                                                    <br></br>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                </PerfectScrollbar>
            </Fragment>

        );
    }
}

export default CurrentEmploymentComponent;