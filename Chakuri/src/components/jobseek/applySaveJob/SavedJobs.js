import { extend } from 'jquery';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './jobdashboard.css';
import axios from 'axios';


class Job extends Component {
    constructor() {
        super();
        this.state = {
            url:"http://localhost:4736/api/v1/jobs/applications",
            savedJobs:[],
            appliedJobs:[],
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
            let filteredJob=this.state.totalJobs.filter(fj=>fj.is_applied==true);
            let filteredSavedJob=this.state.totalJobs.filter(fj=>fj.is_saved==true);

            this.setState({appliedJobs:filteredJob})
            this.setState({savedJobs:filteredSavedJob})
            console.log("Applied jobs are ",this.state.appliedJobs);
            console.log("Saved jobs are ",this.state.savedJobs);
        }).catch((err) => {
            console.log("error");
        });
    }


    getJobArrayTypo(params) {
        return params.toString();
    }

    render() {
        const {error,savedJobs}=this.state;
        console.log("in jobs",savedJobs);
 

        return (
             this.state.savedJobs.map(savedJob=>(
            <div>
                    
<div className="card" style={{ width: "79rem" }} data-toggle="modal" data-target="#recommendedjobmodal1">
            <div className="card-body">
                <div class="row">
                    <div class="col-6"><h5>{savedJob.company_name}</h5> </div>
                    <div class="col-2"><p>Date posted: <span className="jobTile">{savedJob.gts_job_posted_date}</span></p></div>
                    <div class="col-2"><p>Experience: <span className="jobTile">{savedJob.experience}</span></p></div>
                    <div class="col-2"><p>Location: <span className="jobTile">{savedJob.gts_job_location}</span></p></div>
                </div>
                <h6 class="card-title jobProvider">{this.props.jobProvider}</h6>
                <p class="card-text">{savedJobs.company_description}</p>
            </div>
        </div>

            <div class="modal fade" id="recommendedjobmodal1" tabindex="-1" ariaLabelledby="exampleModalLabel" ariaHidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content" style={{width:"60em"}}>
                        <div class="modal-header">
                            <div class="row" style={{width:"57em"}}>
                                <div class="col-5"><h5>{savedJob.company_name}</h5><h6 class="card-title jobProvider">{this.props.jobProvider}</h6> </div>
                                <div class="col-3" style={{textAlign: "right"}}><p className="jobTagModal">Date posted: <span className="jobTile">{savedJob.gts_job_posted_date}</span></p></div>
                                <div class="col-2"><p className="jobTagModal">Experience: <span className="jobTile">{savedJob.experience}</span></p></div>
                                <div class="col-2" ><p className="jobTagModal">Location: <span className="jobTile">{savedJob.gts_job_location}</span></p></div>
                            </div>
                            {/* <h5 class="modal-title" id="exampleModalLabel">Modal 1</h5> */}
                            <button style={{marginLeft:"0em",marginRight:"-0.25rem"}} type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" style={{fontSize: "2rem"}}>&times;</span>
                            </button>
                            
                        </div>
                        
                        <div class="modal-body">
                            <h5>Company description:</h5>
                            <p>{savedJob.company_description}</p>
                            <br />
                            <h5>Job description:</h5>
                            <p>{savedJob.company_description}</p>
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

export default Job;

// style={{margin: "10px 288px 22px 22px;"}}




{/*
<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
  ...
</div>
*/}