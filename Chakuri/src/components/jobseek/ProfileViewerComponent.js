import React, { Component, useState } from 'react'
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

import { Dropdown } from 'semantic-ui-react'

import './ProfileView.css'

const ProfileViewer=()=>{

  const[open, setOpen]=useState(true)
 
    return(
        <div>
        {/* Header------Part */}

        <div className="container">
        
            <div className="row">
                <div className="col mt-2 text-left font-weight-bold">
                  Recruiter Searches 
                </div>
                <div className="col mt-2 text-right font-weight-bold">
                <RemoveIcon onClick={()=>setOpen(!open)} aria-controls="example" aria-expanded="true"/>
                {/* <button className="btn btn-primary" >toggle</button> */}
                 
                </div>
            </div>
          <div className="scrol" >
            <div>
            {/* <Scrollbars style={{width:"100%", height:300}}> */}
            <div className="container" id="example" style={{paddingRight:"32px" }}>
              <div className="row border border-secondary " style={{height:"80px"}}>
                <div className="col-2 mt-1 text-left">
                 Tejasvi Eshaan

                </div>
              </div>
              <div className="row mt-2 border border-secondary" style={{height:"80px"}}>
                <div className="col-2 mt-1 text-left">
                 Suraj Bhai sen

                </div>
                
              </div>
              <div className="row mt-2 border border-secondary " style={{height:"80px"}}>
                <div className="col-2 mt-1 text-left">
                  Aditi Bhati

                </div>
                
                
              </div>
              <div className="row mt-2 border border-secondary" style={{height:"80px"}}>
                <div className="col-2 mt-1 text-left">
                  Karan

                </div>
                
              </div>
              <div className="row mt-2 border border-secondary" style={{height:"80px"}}>
                <div className="col-2 mt-1 text-left">
                 Shivam

                </div>
                
              </div>
            
              </div>
              </div>
              </div>
            {/* </Scrollbars> */}
           

            {/* </div>
            :null
            
          } */}
          
             {/* </Collapse>  */}
    
            {/* <div className="col border border-bottom border-secondary mt-3"></div> */}
            <hr className="border border-bottom border-secondary"/>
        
           <div className="row">
               <div className="col text-left mt-3 font-weight-bold">Employer Searches</div>
               <div className="col mt-3 text-right font-weight-bold">
                <RemoveIcon onClick={()=>setOpen(!open)} aria-controls="example" aria-expanded="true"/>
                {/* <button className="btn btn-primary" >toggle</button> */}
                 
                </div>
           </div>
           <div className="scrol" >
            <div>
            {/* <Scrollbars style={{width:"100%", height:300}}> */}
            <div className="container" id="example" style={{paddingRight:"32px" }}>
              <div className="row mt-1 border border-secondary ">
                <div className="col-2 mt-1 text-left">
                 <label>Tejasvi Eshaan</label><br/>
                 <label> HR</label><br/>
                 <label>EFG Company</label>

                </div>
              </div>
              <div className="row mt-2 border border-secondary" >
                <div className="col-2 mt-1 text-left">
                 <label>Suraj Bhai sen</label>
                 <label> Python Employer</label><br/>
                 <label>Care</label>
                </div>
                
              </div>
              <div className="row mt-2 border border-secondary " >
                <div className="col-2 mt-1 text-left">
                  <label>Aditi Bhati</label><br/>
                  <label> Admin</label><br/>
                 <label>JND Industry</label>

                </div>
                
                
              </div>
              <div className="row mt-2 border border-secondary" style={{height:"80px"}}>
                <div className="col-2 mt-1 text-left">
                  Karan

                </div>
                
              </div>
              <div className="row mt-2 border border-secondary" style={{height:"80px"}}>
                <div className="col-2 mt-1 text-left">
                 Shivam

                </div>
                
              </div>
            
              </div>
              </div>
              </div>
            
           
        </div>
      

        </div>
    )
}

export default ProfileViewer