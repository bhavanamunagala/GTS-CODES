import React, { Component } from 'react';
import Topic from './Topic'


class Table8 extends Component {
    render() {
        return <div><table className="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Sr. no.</th>
                    <th scope="col">SKILLS</th>
                    <th scope="col">Total Average Test Score</th>
                    <th scope="col">Years of Experience</th>
                    <th scope="col">No. of Test Taken</th>
                    <th scope="col">Proficiency Level</th>
                    <th scope="col">Comments</th>
                    <th scope="col">View Attempts</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td><button class="badge badge-pill badge-primary" data-toggle="modal" data-target={this.props.modalId} type="button">View</button></td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td><button class="badge badge-pill badge-primary" data-toggle="modal" data-target={this.props.modalId} type="button">View</button></td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td >Larry the Bird</td>
                    <td>@twitter</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td><button class="badge badge-pill badge-primary" data-toggle="modal" data-target={this.props.modalId} type="button">View</button></td>
                </tr>
            </tbody>
        </table>


            {/* chakuri modal start */}

            <div class="modal fade" id="chakuriEvaluationModal" tabindex="-1" ariaLabelledby="exampleModalLabel" ariaHidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content" style={{ width: "60em" }}>
                        <div class="modal-header">
                            <h5 class="modal-title"></h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" style={{ fontSize: "2rem" }}>&times;</span>
                            </button>
                        </div>

                        <div class="modal-body">
                            <h4><u>Python</u></h4>
                            <div className="row">
                                <div className="col-3">
                                    <p>Your Claim of Proficiency: <span class="jobTile">5/10</span></p>
                                </div>
                                <div className="col-4">
                                    <p>Years of Experience: <span class="jobTile">0 Years 8 months</span></p>
                                </div>
                                <div className="col-5">
                                    <p>Total no. of test taken: <span class="jobTile">10</span></p>
                                </div>
                            </div>


                           <Topic />
                           <Topic />


                            <br />
                            <p>Below are the following recruiters reaching out to you. Please check your inbox of your email.</p>
                            <br />
                            <h6>Prakash Yadav - <span className="jobTile"><b>ABC Training Institute</b></span></h6>
                            <h6>Amrita Ahluwalia - <span className="jobTile"><b>FANG Training Company</b></span></h6>
                            <h6>Rachel Shetty - <span className="jobTile"><b>Value C Consultancy</b></span></h6>



                            {/* body */}




                        </div>
                    </div>
                </div>
            </div>


            {/* externalEvaluationModal evaluation modal start*/}


            <div class="modal fade" id="externalEvaluationModal" tabindex="-1" ariaLabelledby="exampleModalLabel" ariaHidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content" style={{ width: "60em" }}>
                        <div class="modal-header">
                            <h5 class="modal-title"></h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" style={{ fontSize: "2rem" }}>&times;</span>
                            </button>
                        </div>

                        <div class="modal-body">
                            <h4><u>Ruby</u></h4>
                            <div className="row">
                                <div className="col-3">
                                    <p>Your Claim of Proficiency: <span class="jobTile">5/10</span></p>
                                </div>
                                <div className="col-4">
                                    <p>Years of Experience: <span class="jobTile">0 Years 8 months</span></p>
                                </div>
                                <div className="col-5">
                                    <p>Total no. of test taken: <span class="jobTile">10</span></p>
                                </div>
                            </div>


                            <table class="table table-bordered table-sm">

                                <tbody>
                                    <tr>
                                        <th>ABC Training Institute</th>
                                        <td>Test Score: 4/10</td>
                                        <td>Deadline: 18-Jun-2020</td>
                                        <td><button class="badge badge-pill badge-primary">View Test</button></td>
                                    </tr>
                                    <tr>
                                        <th>FANG Training Company</th>
                                        <td>Test Score: 6/10</td>
                                        <td>Deadline: 10-Jan-2020</td>
                                        <td><button class="badge badge-pill badge-primary">View Test</button></td>
                                    </tr>
                                    <tr>
                                        <th>Value C Consultancy</th>
                                        <td>Test Score: 4/10</td>
                                        <td>Deadline: 09-Aug-2020</td>
                                        <td><button class="badge badge-pill badge-primary">View Test</button></td>
                                    </tr>
                                </tbody>
                            </table>


                            <br />
                            <p>Below are the following recruiters reaching out to you. Please check your inbox of your email.</p>
                            <br />
                            <h6>Prakash Yadav - <span className="jobTile"><b>ABC Training Institute</b></span></h6>
                            <h6>Amrita Ahluwalia - <span className="jobTile"><b>FANG Training Company</b></span></h6>
                            <h6>Rachel Shetty - <span className="jobTile"><b>Value C Consultancy</b></span></h6>



                            {/* body */}




                        </div>
                    </div>
                </div>
            </div>

            {/* modal end */}

        </div>;
    }
}

export default Table8;