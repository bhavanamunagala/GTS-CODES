import { extend } from 'jquery';
import React, { Component } from 'react';
import CompletedStack from '../../components/jobseek/PlacementStatus/CompletedStack';
import HrRoundStack from '../../components/jobseek/PlacementStatus/HrRoundStack';
import PendingStack from '../../components/jobseek/PlacementStatus/PendingStack';
import RoundStack1 from '../../components/jobseek/PlacementStatus/RoundStack1';
import RoundStack2  from '../../components/jobseek/PlacementStatus/RoundStack2';
import RoundStack3 from '../../components/jobseek/PlacementStatus/RoundStack3';
import JobSeekerMenu from '../../components/jobseek/JobSeekerMenuComponent';
import Fotter1 from '../../components/Footer';
import Header from '../../components/Header';
import axios from 'axios';


class PlacementStatus extends Component {

    constructor() {
        super();
        this.state = {
            url:"http://localhost:4736/api/v1/jobs/applications",
            completed:[],
            HrRound:[],
            Pending:[],
            round1:[],
            round2:[],
            round3:[],
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
            let filteredC=this.state.totalJobs.filter(fj=>fj.gts_job_application_status=="completed");
            let filteredP=this.state.totalJobs.filter(fj=>fj.gts_job_application_status=="Pending");
            let filtered1=this.state.totalJobs.filter(fj=>fj.gts_job_application_status=="Round 1");
            let filtered2=this.state.totalJobs.filter(fj=>fj.gts_job_application_status=="Round 2");
            let filtered3=this.state.totalJobs.filter(fj=>fj.gts_job_application_status=="Round 3");
            let filteredH=this.state.totalJobs.filter(fj=>fj.gts_job_application_status=="HR round");
            this.setState({completed:filteredC})
            this.setState({Pending:filteredP})
            this.setState({round1:filtered1})
            this.setState({round2:filtered2})
            this.setState({round3:filtered3})
            this.setState({HrRound:filteredH})
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
            <PendingStack jobCategory="Pending" jobCount={this.state.Pending.length}/>
            <br />
            <CompletedStack jobCategory="Completed" jobCount={this.state.completed.length}/>
            <br />       
            <RoundStack1 jobCategory="Round 1" jobCount={this.state.round1.length}/>
            <br />       
            <RoundStack2 jobCategory="Round 2" jobCount={this.state.round2.length}/>
            <br />       
            <RoundStack3 jobCategory="Round 3" jobCount={this.state.round3.length}/>
            <br />       
            <HrRoundStack jobCategory="HR Round" jobCount={this.state.HrRound.length}/>

            <br />

            <Fotter1 />

        </div>
        )}
}



export default PlacementStatus;
