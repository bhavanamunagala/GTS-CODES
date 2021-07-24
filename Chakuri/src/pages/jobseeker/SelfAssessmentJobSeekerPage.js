import React, { Component } from 'react';
import JobSeekerMenu from '../../components/jobseek/JobSeekerMenuComponent';
import Header from '../../components/Header';
import Fotter1 from '../../components/Footer';
import Table5 from '../../components/jobseek/SelfEvaluation/SelfAssessment/Table5';
import Table8 from '../../components/jobseek/SelfEvaluation/SelfAssessment/Table8';
import TrainingSlider from '../../components/jobseek/SelfEvaluation/SelfAssessment/TrainingSlider';


class SelfAssessmentJobSeeker extends Component {

    render() {
        return <div>
            <Header />
            <br></br>
            <JobSeekerMenu />

            <div class =" border border-bottom border-dark mx-xl-5 mt-xl-2" />
            <br></br>            <div className="container">
                <div className="container-fluid">
                    <h4>Self Evaluation</h4>
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <h6>Primary Skills <span class="badge badge-pill badge-primary">Add Skill</span></h6>
                            </div>

                            <Table5 />

                        </div><div className="col">
                            <div className="row">
                                <h6>Other Skills <span class="badge badge-pill badge-primary">Add Skill</span></h6>
                            </div>

                            <Table5 />
                        </div>
                    </div>


                </div>
            </div>
            <hr />
            <div className="container">
                <div className="container-fluid">
                    <h4>Chakuri Evaluation</h4>
                    <div className="row">
                        <h6>Primary Skills </h6>
                        <Table8 modalId="#chakuriEvaluationModal"/>
                    </div>
                    <div className="row">
                        <h6>Other Skills </h6>
                        <Table8 modalId="#chakuriEvaluationModal"/>
                    </div>

                </div>
            </div>
            <hr />
            <div className="container">
                <div className="container-fluid">
                    <h4>External Evaluation</h4>
                    <div className="row">
                        <h6>Primary Skills </h6>
                        <Table8 modalId="#externalEvaluationModal"/>
                    </div>
                    <div className="row">
                        <h6>Other Skills </h6>
                        <Table8 modalId="#externalEvaluationModal"/>
                    </div>

                </div>
            </div>
            <hr />
            <TrainingSlider />

            {/* <div className="container">
                <div className="container-fluid">
                    <TrainingSlider />
                </div>
            </div> */}
            <br />

            <Fotter1 />

        </div>;
    }

}

export default SelfAssessmentJobSeeker;