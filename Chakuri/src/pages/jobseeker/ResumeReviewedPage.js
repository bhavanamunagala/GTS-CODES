import { extend } from 'jquery';
import React, { Component } from 'react';
import Jobstack from '../../components/jobseek/ResumeReviewd/JobStack';
import JobSeekerMenu from '../../components/jobseek/JobSeekerMenuComponent';
import Fotter1 from '../../components/Footer';
import axios from 'axios';
import Header from '../../components/Header';



class ResumeReviewed extends Component {

    constructor() {
        super();
        this.state = {
            url:"http://localhost:4736/api/v1/jobs/applications",
            resumeReview:[],
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
            let filteredJob=this.state.totalJobs.filter(fj=>fj.gts_job_application_status=="reviewed");
            this.setState({resumeReview:filteredJob})
            console.log("reviewed jobs are ",this.state.resumeReview);
        }).catch((err) => {
            console.log("error");
        });
    }

    getJobArrayTypo(params) {
        return params.toString();
    }


    render() {
        const {error,resumeReview}=this.state;
        console.log(resumeReview);


        return (            
        <div>
            <Header />
            <br></br>
            <JobSeekerMenu />

            <div class =" border border-bottom border-dark mx-xl-5 mt-xl-2" />
            <br></br>            
            <Jobstack jobCategory="Resume Reviewed" jobCount={this.state.resumeReview.length}/>
            
            <br />

            <Fotter1 />

        </div>
        )}
}



export default ResumeReviewed;
