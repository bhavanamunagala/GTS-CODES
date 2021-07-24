import { extend } from 'jquery';
import React, { Component } from 'react';
import Jobstack from '../../components/jobseek/RecommendedJobs/Jobstack';
import JobSeekerMenu from '../../components/jobseek/JobSeekerMenuComponent';
import Header from '../../components/Header';

import Fotter1 from '../../components/Footer';
import axios from 'axios';

class RecommendedJobs extends Component {

    constructor() {
        super();
        this.state = {
            jobSkill1: 'Python',
            jobSkill2: 'Java',
            jobSkill3: 'SQL',
            jobCount0: 3,
            jobCount1: 3,
            jobCount2: 2,
            jobCount3: 4,
            url:"https://045bade5-22e1-435f-b909-fce55c0f0d10.mock.pstmn.io/api/v1/users/gts_recommended_job/user_id/1",
            jobs:[],
            jobsString:""
        }
    }

    // API call on component mount
    componentDidMount(){
        axios.get(this.state.url)
        .then((result) => {
            console.log("in then");
            this.setState({jobs:result.data.gts_user_recommended_job_ids});
            this.setState({jobsString:this.getJobArrayTypo(result.data.gts_user_recommended_job_ids)});
            console.log("Recommended jobs id array ",this.state.jobs);
        }).catch((err) => {
            console.log("error");
        });
    }


    getJobArrayTypo(params) {
        return params.toString();
    }


    render() {
         return <div>
             <Header/>
             <br></br>
            <JobSeekerMenu />

            <div class =" border border-bottom border-dark mx-xl-5 mt-xl-2" />
            <br></br>            
            <Jobstack jobCategory="All Recommended jobs" jobCount={this.state.jobs.length} jobsTitle="|| API JOB ARRAY IS : " jobs={this.state.jobsString}/>
            <br />
            
            <Jobstack jobCategory="Recommended jobs as per Your Work Experience and Skill Experience" jobCount={this.state.jobCount0} />
            <br />
            <Jobstack jobCategory="Recommended jobs as per you skill: Python" jobCount={this.state.jobCount1}>

            </Jobstack>
            <br />
            <Jobstack jobCategory="Recommended jobs as per you skill: Java" jobCount={this.state.jobCount2}>

            </Jobstack>
            <br />
            <Jobstack jobCategory="Recommended jobs as per you skill: SQL" jobCount={this.state.jobCount3}>

            </Jobstack>
            <br />

            <Fotter1 />

        </div>;
    }
}



export default RecommendedJobs;
