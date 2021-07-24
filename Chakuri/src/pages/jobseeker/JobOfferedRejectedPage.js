import { extend } from 'jquery';
import React, { Component } from 'react';
import JobOfferedStack from '../../components/jobseek/JobOfferedRejected/JobOfferedStack';
import JobSeekerMenu from '../../components/jobseek/JobSeekerMenuComponent';
import Header from '../../components/Header';
import Fotter1 from '../../components/Footer';
import axios from 'axios';
import JobRejectedStack from '../../components/jobseek/JobOfferedRejected/JobRejectedStack';
import JobUnderScreeningStack from '../../components/jobseek/JobOfferedRejected/JobUnderScreeningStack';

class JobOfferedRejected extends Component {

    constructor() {
        super();
        this.state = {
            url:"http://localhost:4736/api/v1/jobs/applications",
            rejectedJobs:[],
            offeredJobs:[],
            underSJobs:[],
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
            let filteredJob=this.state.totalJobs.filter(fj=>fj.gts_job_seeker_status=="Offered");
            let filteredSavedJob=this.state.totalJobs.filter(fj=>fj.gts_job_seeker_status=="Rejected");
            let filteredUnderJob=this.state.totalJobs.filter(fj=>fj.gts_job_seeker_status=="Under Screening");
            this.setState({offeredJobs:filteredJob})
            this.setState({rejectedJobs:filteredSavedJob})
            this.setState({underSJobs:filteredUnderJob})
        }).catch((err) => {
            console.log("error");
        });
    }


    getJobArrayTypo(params) {
        return params.toString();
    }


    render() {
        const {error,totalJobs}=this.state;
        console.log(totalJobs);


        return (            
        <div>
            <Header />
            <br></br>
            <JobSeekerMenu />
            <div class =" border border-bottom border-dark mx-xl-5 mt-xl-2" />
            <br></br>
            
            <JobOfferedStack jobCategory="Offered jobs" jobCount={this.state.offeredJobs.length}/>
            <br />
            
            <JobRejectedStack jobCategory="Rejected jobs" jobCount={this.state.rejectedJobs.length} />

            <br />
            <JobUnderScreeningStack jobCategory="Under Screening jobs" jobCount={this.state.underSJobs.length} />
            <br />
            <Fotter1 />

        </div>
        )}
}



export default JobOfferedRejected;
