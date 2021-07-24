import { extend } from 'jquery';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './jobDashboard.css';
import axios from 'axios';
import { HdRounded } from '@material-ui/icons';


class Round3 extends Component {
    constructor() {
        super();
        this.state = {
            url:"http://localhost:4736/api/v1/jobs/applications",
            round:[],
            jobsString:"",
            totalJobs:[]
        }
    }

    // API call on component mount
    componentDidMount(){
        axios.get("http://localhost:4736/api/v1/jobs/applications")
        .then((result) => {
            console.log("in then");
            console.log(result.data);
            this.setState({totalJobs:result.data});
            this.setState({jobsString:this.getJobArrayTypo(result.data)});
            let filteredJob=this.state.totalJobs.filter(fj=>fj.gts_job_application_status=="Round 3");
            this.setState({round:filteredJob});
            console.log("HR Round Status are ",this.state.round);
        }).catch((err) => {
            console.log("error");
        });
    }


    getJobArrayTypo(params) {
        return params.toString();
    }

    render() {
        const {error,round}=this.state;
        console.log("in jobs",round);
 

        return (this.state.round.map(appliedJob=>(
             <div><div className="card" style={{ width: "79rem" }} data-toggle="modal" data-target="#recommendedjobmodal6">
            <div className="card-body">
                <div class="row">
                    <div class="col-6"><h5>{appliedJob.company_name}</h5> </div>
                    <div class="col-2"><p>Date posted: <span className="jobTile">{appliedJob.gts_job_posted_date}</span></p></div>
                    <div class="col-2"><p>Experience: <span className="jobTile">{appliedJob.experience}</span></p></div>
                    <div class="col-2"><p>Location: <span className="jobTile">{appliedJob.gts_job_location}</span></p></div>
                </div>
                <h6 class="card-title jobProvider">{this.props.jobProvider}</h6>
                <p class="card-text">{appliedJob.company_description}</p>
            </div>
        </div>

            <div class="modal fade" id="recommendedjobmodal6" tabindex="-1" ariaLabelledby="exampleModalLabel" ariaHidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content" style={{width:"60em"}}>
                        <div class="modal-header">
                            <div class="row" style={{width:"57em"}}>
                                <div class="col-5"><h5>{this.props.jobTitle}</h5><h6 class="card-title jobProvider">{this.props.jobProvider}</h6> </div>
                                <div class="col-3" style={{textAlign: "right"}}><p className="jobTagModal">Date posted: <span className="jobTile">{appliedJob.gts_job_posted_date}</span></p></div>
                                <div class="col-2"><p className="jobTagModal">Experience: <span className="jobTile">{appliedJob.experience}</span></p></div>
                                <div class="col-2" ><p className="jobTagModal">Location: <span className="jobTile">{appliedJob.gts_job_location}</span></p></div>
                            </div>
                            {/* <h5 class="modal-title" id="exampleModalLabel">Modal 1</h5> */}
                            <button style={{marginLeft:"0em",marginRight:"-0.25rem"}} type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" style={{fontSize: "2rem"}}>&times;</span>
                            </button>
                            
                        </div>
                        
                        <div class="modal-body">
                            <h5>Company description:</h5>
                            <p>{appliedJob.company_description}</p>
                            <br />
                            <h5>Job description:</h5>
                            <p>{appliedJob.company_description}</p>

                            <br />
                            <h6>Skills Required <span className="jobTile"><b>(master data)</b></span>: <span className="jobTile"><b>SQL</b></span></h6>
                            <h6>Current Salary: <span className="jobTile"><b>3.6 LPA</b></span></h6>
                            <h6>Notice Period: <span className="jobTile"><b>Immediatley</b></span></h6>



                            {/* body */}




                        </div>

                    </div>
                </div>
            </div>

        </div>)))
    }
}

export default Round3;

