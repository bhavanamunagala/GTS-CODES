import React, { Component } from 'react';

import axios from 'axios';
import { MDBDataTable } from 'mdbreact';
import  './EmployerEmploymentHistoryComponent.css';



import PerfectScrollbar from 'react-perfect-scrollbar';
import "react-perfect-scrollbar/dist/css/styles.css";
class EmployerEmploymentHistoryComponent extends Component{


    constructor(props) {
        super(props);

        this.state = {

            GTScandidatesList:[]
           
        }
    }
componentDidMount(){
        axios.get('http://localhost:4712/api/v1/employer/agreement/')
            .then(res => {
               // http://localhost:4736/api/v1/user/chakuri_skill_base/skill_id/location?gtsskillName=ReactJs,python&location=banglore
                const GTScandidatesList = res.data;
                this.setState({ GTScandidatesList });


});


}
render(){
    const data={
        columns:[
          {
            label: 'Name of Candidate',
            field: 'gts_candidate_name',
            sort: 'asc',
            
            },
            {
            label: 'Candidate Email',
            field: 'gts_candidate_email_id',
            sort: 'asc',
          
            },
            {
            label: 'Candidate Mobile Number',
            field: 'gts_candidate_mobile_number',
            sort: 'asc',
            
            },
            {
            label: 'Company Name',
            field: 'gts_company_name',
            sort: 'asc',
           
            },
            {
            label: 'Project Name',
            field: 'gts_project_name',
            sort: 'asc',
         
            },
            {
            label: 'Project Description',
            field: 'gts_project_description',
            sort: 'asc',
            
            },
            {
              label: 'Project Manager',
              field: 'gts_project_manager',
              sort: 'asc',
              
              },
              {
                label: 'Project Manager Contact Number',
                field: 'gts_project_manager_mobile_number',
                sort: 'asc',
               
                },
                {
                  label: 'Joining Date',
                  field: 'gts_joining_date',
                  sort: 'asc',
                 
                  },
                  {
                    label: 'End Date',
                    field: 'enddate',
                    sort: 'asc',
                    
                    }  
            ],
      
       rows:this.state.GTScandidatesList
            // rows: [
            //   {
              
            //   'name': 'Kushal Rao',
            //   'candidateemail': 'kushalrao@gmail.com',
            //   'mobilenumber': '+91 75 86053047',
            //   'companyname': 'Cisco Systems',
            //   'projectname': 'Dashboard Developer',
            //   'desc': 'Developed dashboards for educational institutes on Visual Basic',
            //   'managername': 'Pinky Animesh Issac',
            //   'managernumber':'+91 98 38915931',
            //   'joiningdate': '21 Jul 2020',
            //   'enddate':'20 Aug 2020'
            //   },
            //   {
                
            //     'name': 'Lata Aurora',
            //     'candidateemail': 'lataaurora@gmail.com',
            //     'mobilenumber': '+91 66 43710370',
            //     'companyname': 'Amazon',
            //     'projectname': 'Intern AWS architect',
            //     'desc': '-NIL-',
            //     'managername': 'Mayawati Dua',
            //     'managernumber':'+91 72 12152696',
            //     'joiningdate': '01 Jan 2019',
            //     'enddate':'20 Jun 2019',
              
            //     },
            //     {
                  
            //       'name': 'Naseer Mittal',
            //       'candidateemail': 'naseermittal@gmail.com',
            //       'mobilenumber': '+91-945-556-9273',
            //       'companyname': 'TCS',
            //       'projectname': 'Software Engineer',
            //       'desc': '-NIL-',
            //       'managername': 'Ajinkya Ram Mani',
            //       'managernumber':'+91-855-505-1911',
            //       'joiningdate': '01 Jan 2020',
            //       'enddate':'01 Jun 2020'
            //       },
                  
            //         {
                      
            //           'name': 'Yogesh Rao',
            //           'candidateemail': 'yogeshrao@gmail.com',
            //           'mobilenumber': '+91-755-505-9334',
            //           'companyname': 'ZS',
            //           'projectname': 'Data Engineer',
            //           'desc': 'Develops, constructs, tests and maintains architectures such as databases and largescale processing systems.',
            //           'managername': 'Charu Ghalib Jaggi',
            //           'managernumber':'+91-855-507-1150',
            //           'joiningdate': '02 Feb 2020',
            //           'enddate':'14 Apr 2020'
            //           },
            //           {
                       
            //             'name': 'Tanay Agarwal',
            //             'candidateemail': 'tanayagarwal@gmail.com',
            //             'mobilenumber': '+91-935-556-4309',
            //             'companyname': 'Flipkart',
            //             'projectname': 'Supply Chain Manager',
            //             'desc': '-NIL-',
            //             'managername': 'Bishnu Kumar Meda',
            //             'managernumber':'+91-755-517-3402',
            //             'joiningdate': '14 Jan 2020',
            //             'enddate':'20 Jun 2020'
            //             },
            //           {
                        
            //             'name': 'Sunita Sankar',
            //             'candidateemail': 'sunitasankar@gmail.com',
            //             'mobilenumber': '+91-855-576-1007',
            //             'companyname': 'Myntra',
            //             'projectname': 'Sales Engineer',
            //             'desc': 'Prepare and deliver technical presentations explaining products or services to existing and prospective customers.',
            //             'managername': 'Pravin Devan',
            //             'managernumber':'+91-855-573-4679',
            //             'joiningdate': '01 Jan 2020',
            //             'enddate':'20 Jun 2020'
            //             },
            //             {
                         
            //               'name': 'Jawahar Sanghvi',
            //               'candidateemail': 'jawaharsanghvi@gmail.com',
            //               'mobilenumber': '+91 66 43710370',
            //               'companyname': 'HCL',
            //               'projectname': 'Electrical Designer',
            //               'desc': '-NIL-',
            //               'managername': 'Munaf Lal Sundaram',
            //               'managernumber':'+91-925-555-3771',
            //               'joiningdate': '14 Jan 2020',
            //               'enddate':'20 Jun 2020'
            //               },
            //               {
                           
            //                 'name': 'Arun Thaman',
            //                 'candidateemail': 'arunthaman@gmail.com',
            //                 'mobilenumber': '+91-995-550-9155',
            //                 'companyname': 'Zomato',
            //                 'projectname': 'HR Manager',
            //                 'desc': 'Develops policy and directs and coordinates human resources activities',
            //                 'managername': 'Vicky Chopra',
            //                 'managernumber':'+91-855-579-1635',
            //                 'joiningdate': '01 Jan 2020',
            //                 'enddate':'01 Jun 2020'
            //                 },
            //                 {
                              
            //                   'name': 'Satishwar Chaudhry',
            //                   'candidateemail': 'satishwarchaudhry@gmail.com',
            //                   'mobilenumber': '+91-985-556-4381',
            //                   'companyname': 'HCL',
            //                   'projectname': 'Accountant',
            //                   'desc': 'Provides financial information to management by researching and analysing accounting data',
            //                   'managername': 'Nitika Qabool Gaba',
            //                   'managernumber':'+91-855-548-9220',
            //                   'joiningdate': '02 Feb 2020',
            //                   'enddate':'14 Apr 2020'
            //                   },
            //                  ]
      
            
                            };
return(<div>
  
 <div>
 <PerfectScrollbar>
 
  <MDBDataTable
     
     
      striped
      bordered
      data={data}
  />
  
</PerfectScrollbar>
</div>

</div> 
  );





}




}
export default EmployerEmploymentHistoryComponent;