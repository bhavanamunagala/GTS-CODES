import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import Headline from './Headline';
import PersonalDetail from './PersonalDetail';
import EducationalBackground from './EducationalBackground';
import ProjectDetails from './ProjectDetails';
import LanguageBackground from './LanguageBackground';
import Skills from './EmployerSkills';

class EmployerProfile extends Component 
{
    render()
     {
            
        return (
            <div>
                {/*.........HeadLine start..........*/}
                <Headline />

                {/*.............Personal Detail.............*/}
                <PersonalDetail />

                {/*..........Education Background ..........*/}
                <EducationalBackground />

                {/*..........Project details..........*/}
                <ProjectDetails />

                {/*............Langauage Background .............*/}
                <LanguageBackground />

                {/*............Skills Details .............*/}
                <Skills />

                {/*............Langauage Background .............*/}
                <LanguageBackground />

                {/* Save and Reset Detail */}
                <div class="row  mb-3">
                    <div class="col-10 ">
                        <a class="btn btn-primary offset-11" href="#" role="button">Reset Detail</a>
                    </div>
                    <div class="col-1">
                        <a class="btn btn-primary" href="#" role="button">Save Detail</a>
                    </div>
                </div>
            
            </div>  //main end
                
        )
    }
}
export default EmployerProfile; 