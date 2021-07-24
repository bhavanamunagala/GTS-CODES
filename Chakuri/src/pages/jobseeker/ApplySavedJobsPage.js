import { extend } from 'jquery';
import React, { Component } from 'react';
import Jobstack from '../../components/jobseek/applySaveJob/Jobstack';
import JobSeekerMenu from '../../components/jobseek/JobSeekerMenuComponent';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import axios from 'axios';
import SavedJobstack from '../../components/jobseek/applySaveJob/SavedJobstack';


class ApplySavedJobs extends Component {

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
        const {error,totalJobs}=this.state;
        console.log(totalJobs);


        return (            
        <div>
            <Header/>
            <br></br>
            <JobSeekerMenu />
            <div class =" border border-bottom border-dark mx-xl-5 mt-xl-2" />
            <br></br>

            
            <Jobstack jobCategory="Applied jobs" jobCount={this.state.appliedJobs.length}/>
            <br />
            
            <SavedJobstack jobCategory="Saved jobs" jobCount={this.state.savedJobs.length} />

            <br />

            <Footer />

        </div>
        )}
}



export default ApplySavedJobs;
