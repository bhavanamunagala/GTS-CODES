import { extend } from 'jquery';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Trainingdashboard.css'
import axios from 'axios';

class AppliedTraining extends Component {
    constructor() {
        super();
        this.state = {
            training:[],
            jobsString:"",
            Applied:[]
        }
    }

    // API call on component mount
    componentDidMount(){
        axios.get('http://localhost:4712/api/v1/users/trainings')
        .then((result) => {
            console.log("in then");
            console.log(result.data);
            this.setState({training:result.data});
            let filteredApplied=this.state.training.filter(fj=>fj.is_applied==true);
            this.setState({Applied:filteredApplied})
            this.setState({jobsString:this.getJobArrayTypo(result.data.gts_user_training_id)});
            console.log("Training ids ",this.state.Applied);
        }).catch((err) => {
            console.log("error");
        });
    }


    getJobArrayTypo(params) {
        return params.toString();
    }
    render() {
        const {error,Applied}=this.state;
        console.log(Applied);
 

        return (this.state.Applied.map(cj=>(

        <div><div className="card" style={{ width: "79rem" }} data-toggle="modal" data-target="#recommendedjobmodal1">
            <div className="card-body">
                <div class="row">
                    <div class="col-6"><h5>{cj.training_id.gts_training_name}</h5> </div>
                    <div class="col-2"><p>Date posted: <span className="jobTile">{cj.training_id.gts_training_posted_date}</span></p></div>
                    <div class="col-2"><p>Date Applied: <span className="jobTile">{cj.gts_training_start_date}</span></p></div>
                    <div class="col-2"><p>Experience: <span className="jobTile">{cj.training_id.gts_training_experience}</span></p></div>
                    <div class="col-2"><p>Location: <span className="jobTile">{cj.training_id.gts_training_location}</span></p></div>
                </div>
                <h6 class="card-title jobProvider">{this.props.jobProvider}</h6>
                <p class="card-text">{cj.training_id.gts_training_description}</p>
            </div>
        </div>

            <div class="modal fade" id="recommendedjobmodal1" tabindex="-1" ariaLabelledby="exampleModalLabel" ariaHidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content" style={{width:"60em"}}>
                        <div class="modal-header">
                            <div class="row" style={{width:"57em"}}>
                                <div class="col-5"><h5>{cj.training_id.gts_training_name}</h5><h6 class="card-title jobProvider">{this.props.jobProvider}</h6> </div>
                                <div class="col-3" style={{textAlign: "right"}}><p className="jobTagModal">Date posted: <span className="jobTile">{cj.training_id.gts_training_posted_date}</span></p></div>
                                <div class="col-2"><p className="jobTagModal">Experience: <span className="jobTile">{cj.training_id.gts_training_experience}</span></p></div>
                                <div class="col-2" ><p className="jobTagModal">Location: <span className="jobTile">{cj.training_id.gts_training_location}</span></p></div>
                            </div>
                            {/* <h5 class="modal-title" id="exampleModalLabel">Modal 1</h5> */}
                            <button style={{marginLeft:"0em",marginRight:"-0.25rem"}} type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" style={{fontSize: "2rem"}}>&times;</span>
                            </button>
                            
                        </div>
                        
                        <div class="modal-body">
                            <h5>Training description:</h5>
                            <p>{cj.training_id.gts_training_description}</p>
                         
                            <br />
                            <h6>Duration <span className="jobTile"><b>{cj.training_id.gts_training_duration}</b></span>: <span className="jobTile"><b>SQL</b></span></h6>
                            <h6>fees: <span className="jobTile"><b>{cj.training_id.gts_training_fees}</b></span></h6>
                            <h6>Currency: <span className="jobTile"><b>{cj.training_id.gts_training_fees_currency}</b></span></h6>



                            {/* body */}




                        </div>

                    </div>
                </div>
            </div>

        </div>)
        ))}
}

export default AppliedTraining;