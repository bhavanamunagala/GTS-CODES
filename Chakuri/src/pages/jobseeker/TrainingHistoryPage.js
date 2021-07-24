import { extend } from 'jquery';
import React, { Component } from 'react';
import JobSeekerMenu from '../../components/jobseek/JobSeekerMenuComponent';
import Header from '../../components/Header'
import Fotter1 from '../../components/Footer';
import axios from 'axios';
import CompletedStack from '../../components/jobseek/TrainingHistory/CompletedStack';
import AppliedStack from '../../components/jobseek/TrainingHistory/AppliedStack';
import SavedStack from '../../components/jobseek/TrainingHistory/SavedStack';

class UserTraining extends Component {

    constructor() {
        super();
        this.state = {
            jobs:[],
            jobsString:"",
            filterApply:[],
            filterComplete:[],
            filterSaved:[]
        }
    }

    // API call on component mount
    componentDidMount(){
        axios.get('http://localhost:4712/api/v1/users/trainings')
        .then((result) => {
            console.log("in then");
            console.log(result.data);
            this.setState({jobs:result.data});
            let filteredA=this.state.jobs.filter(fj=>fj.is_applied==true);
            let filteredS=this.state.jobs.filter(fj=>fj.is_saved==true);
            let filteredC=this.state.jobs.filter(fj=>fj.is_completed==true);

            this.setState({filterApply:filteredA})
            this.setState({filterSaved:filteredS})
            this.setState({filterComplete:filteredC})
            this.setState({jobsString:this.getJobArrayTypo(result.data.gts_user_training_id)});
            console.log("Training ids ",this.state.jobs);
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
            <AppliedStack jobCategory="Applied Training Programs" jobCount={this.state.filterApply.length} />
            <br />
            
            <SavedStack jobCategory="Saved Training Programs" jobCount={this.state.filterSaved.length} />
            <br />
            <CompletedStack jobCategory="Completed Training Programs" jobCount={this.state.filterComplete.length}/>

            
            <br />
          

            <Fotter1 />

        </div>;
    }
}



export default UserTraining;
