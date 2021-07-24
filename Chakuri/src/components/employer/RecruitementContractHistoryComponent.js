import React, { Component } from 'react';
import {render} from 'react-dom';
import '../../pages/common/styles.css';

import ChakuriSkillBaseNecessarySkills from './ChakuriSkillBaseNecessarySkills';
   
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faTrash,faEdit,faUpload} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';
import'./EmployerEmploymentHistoryComponent.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import "react-perfect-scrollbar/dist/css/styles.css";
class RecruitmentContractHistoryComponent extends Component{

    constructor(props) {
        super(props);
        this.state={
            GtsEmployerContractHistoryList:[],
            GtsCompanyAddress:{
                GTS_COMPANY_ADDRESS_LINE_1:'',
                GTS_COMPANY_ADDRESS_LINE_2:'',
                GTS_TOWN:'',
                GTS_CITY:'',
                GTS_STATE:'',
                GTS_COUNTRY:'',
                GTS_PINCODE:''
            },
            
        }
    }
    componentDidMount(){
       
axios.get('http://localhost:4737/api/v1/user/company_address/company_address_id?companyAddressId=1')
.then(res => {
   // http://localhost:4736/api/v1/user/chakuri_skill_base/skill_id/location?gtsskillName=ReactJs,python&location=banglore
    const GtsCompanyAddress = res.data;
   
    this.setState({ GtsCompanyAddress });
    

});
axios.get('http://localhost:4738/api/v1/user/Recruitment_Contract/userId?userId=1')
.then(res => {
   // http://localhost:4736/api/v1/user/chakuri_skill_base/skill_id/location?gtsskillName=ReactJs,python&location=banglore
  const data=res.data;
   
    this.setState({GtsEmployerContractHistoryList:data})

});



}render()
    {
        const data={
            columns:[
              {
                label: 'Sr No.',
                field: 'Recruitment_ContractId',
                sort: 'asc',
                
                },
                {
                label: 'Contract Date',
                field: 'Contract_Date',
                sort: 'asc',
              
                },
                {
                label: 'Contract Id',
                field: 'Recruitment_ContractId',
                sort: 'asc',
                
                },
                {
                label: 'Contract Duration',
                field: 'No_Of_Months',
                sort: 'asc',
               
                },
                {
                label: 'Contract Description',
                field: 'Contract_Description',
                sort: 'asc',
             
                },
                {
                label: 'Recruiter',
                field: 'Recruiter_Name',
                sort: 'asc',
                
                },
                {
                  label: 'Rate',
                  field: 'Contract_Amount',
                  sort: 'asc',
                  
                  },
                  {
                    label: 'Qty',
                    field: 'No_Of_Candidates',
                    sort: 'asc',
                   
                    },
                    {
                      label: 'Total',
                      field: 'Total',
                      sort: 'asc',
                     
                      }
                ],rows:this.state.GtsEmployerContractHistoryList};
    return(
        <div>
        
            
            <div className="container align-items-center">
             <div className='mt-3'>
                <div className="border border-dark rounded-lg" >
            <h6>Company Address:</h6>
            <div>
    <div> <label><b>Address Line 1:</b>{this.state.GtsCompanyAddress.GTS_COMPANY_ADDRESS_LINE_1}</label></div>
    <div></div><label><b>Address Line 2:</b>{this.state.GtsCompanyAddress.GTS_COMPANY_ADDRESS_LINE_2}</label></div>
    <div><label><b>Town:</b>{this.state.GtsCompanyAddress.GTS_TOWN}</label></div>
    <div> <label><b>City:</b>{this.state.GtsCompanyAddress.GTS_CITY}</label></div>
    <div>  <label><b>State/Province:</b>{this.state.GtsCompanyAddress.GTS_STATE}</label></div>
    <div><label><b>Country:</b>{this.state.GtsCompanyAddress.GTS_COUNTRY}</label></div>
    <div><label><b>Pincode:</b>{this.state.GtsCompanyAddress.GTS_PINCODE}</label></div>
            <hr className =" border-dark-40 " />
            <h6>Your Contract History:</h6>
            
           
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
            </div>
            </div>
            
            </div>
    )
}
}
export default RecruitmentContractHistoryComponent;