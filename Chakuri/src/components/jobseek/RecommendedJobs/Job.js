import { extend } from 'jquery';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './jobdashboard.css'

class Job extends Component {
    render() {

        return <div><div className="card" style={{ width: "79rem" }} data-toggle="modal" data-target="#recommendedjobmodal1">
            <div className="card-body">
                <div class="row">
                    <div class="col-6"><h5>{this.props.jobTitle}</h5> </div>
                    <div class="col-2"><p>Date posted: <span className="jobTile">{this.props.jobPosted}</span></p></div>
                    <div class="col-2"><p>Experience: <span className="jobTile">{this.props.jobExperience}</span></p></div>
                    <div class="col-2"><p>Location: <span className="jobTile">{this.props.jobLocation}</span></p></div>
                </div>
                <h6 class="card-title jobProvider">{this.props.jobProvider}</h6>
                <p class="card-text">{this.props.jobDesc}</p>
            </div>
        </div>

            <div class="modal fade" id="recommendedjobmodal1" tabindex="-1" ariaLabelledby="exampleModalLabel" ariaHidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content" style={{width:"60em"}}>
                        <div class="modal-header">
                            <div class="row" style={{width:"57em"}}>
                                <div class="col-5"><h5>{this.props.jobTitle}</h5><h6 class="card-title jobProvider">{this.props.jobProvider}</h6> </div>
                                <div class="col-3" style={{textAlign: "right"}}><p className="jobTagModal">Date posted: <span className="jobTile">{this.props.jobPosted}</span></p></div>
                                <div class="col-2"><p className="jobTagModal">Experience: <span className="jobTile">{this.props.jobExperience}</span></p></div>
                                <div class="col-2" ><p className="jobTagModal">Location: <span className="jobTile">{this.props.jobLocation}</span></p></div>
                            </div>
                            {/* <h5 class="modal-title" id="exampleModalLabel">Modal 1</h5> */}
                            <button style={{marginLeft:"0em",marginRight:"-0.25rem"}} type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" style={{fontSize: "2rem"}}>&times;</span>
                            </button>
                            
                        </div>
                        
                        <div class="modal-body">
                            <h5>Company description:</h5>
                            <p>{this.props.jobDesc}</p>
                            <br />
                            <h5>Job description:</h5>
                            <p>You’ll want to begin your accountant job description by introducing prospective candidates to your company and highlighting what makes working in your office unique. Take a few short sentences to really set your company apart from competing job listings and sell yourself to job seekers.</p>
                            <ol>
                                <li className="jobModalJDPoints">    - Provides financial information to management by researching and analyzing accounting data; preparing reports.</li>
                                <li className="jobModalJDPoints">    - Prepares asset, liability, and capital account entries by compiling and analyzing account information.</li>
                                <li className="jobModalJDPoints">    - Documents financial transactions by entering account information.</li>
                                <li className="jobModalJDPoints">    - Recommends financial actions by analyzing accounting options.</li>
                                <li className="jobModalJDPoints">    - Summarizes current financial ofit and loss statement, and other reports.</li>
                                <li className="jobModalJDPoints">    - Summarizes current financial ofit and loss statement, and other reports.</li>
                                <li className="jobModalJDPoints">    - Substantiates financial transactions by auditing documents.</li>
                                <li className="jobModalJDPoints">    - Maintains accounting controls by preparing and recommending policies and procedures.</li>
                                <li className="jobModalJDPoints">    - Guides accounting clerical staff by coordinating activities and answering questions.</li>
                                <li className="jobModalJDPoints">    - Reconciles financial discrepancies by collecting and analyzing account information.</li>
                                <li className="jobModalJDPoints">    - Secures financial information by completing database backups.</li>
                               </ol>
                            <br />
                            <h6>Skills Required <span className="jobTile"><b>(master data)</b></span>: <span className="jobTile"><b>SQL</b></span></h6>
                            <h6>Current Salary: <span className="jobTile"><b>3.6 LPA</b></span></h6>
                            <h6>Notice Period: <span className="jobTile"><b>Immediatley</b></span></h6>



                            {/* body */}




                        </div>

                        <div style={{margin: "10px 288px 22px 22px"}}>
                            <button type="button" class="btn btn-primary" data-dismiss="modal">Apply Job</button>
                            <button type="button" class="btn btn-primary">Save Job</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>;
    }
}

export default Job;

// style={{margin: "10px 288px 22px 22px;"}}




{/*
<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
  ...
</div>
*/}