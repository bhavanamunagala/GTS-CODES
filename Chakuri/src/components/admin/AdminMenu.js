import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

//import { MDBDatePickerV5 } from 'mdbreact';
class AdminMenu extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggle1=this.toggle1.bind(this);
    this.toggle2=this.toggle2.bind(this);
    
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseEnter1=this.onMouseEnter1.bind(this);
    this.onMouseEnter2=this.onMouseEnter2.bind(this);
    
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseLeave1 = this.onMouseLeave1.bind(this);
    this.onMouseLeave2=this.onMouseLeave2.bind(this);
    
    this.state = {
      dropdownOpen: false,
      dropdownOpen1: false,
      dropdownOpen2:false,
      
    };
  }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
            }
        ));
    }
    toggle1(){
        this.setState(prevState =>({
            dropdownOpen1: !prevState.dropdownOpen1
            }));
    }
    toggle2(){
        this.setState(prevState =>({
        dropdownOpen2: !prevState.dropdownOpen2
        }));
    }
    
    onMouseEnter() {
        this.setState({dropdownOpen: true});
    }
    onMouseEnter1(){
        this.setState({dropdownOpen1: true});
    }
    onMouseEnter2(){
        this.setState({dropdownOpen2: true});
    }
    
    onMouseLeave() {
        this.setState({dropdownOpen: false});
    }
    onMouseLeave1(){
        this.setState({dropdownOpen1: false});
    }
    onMouseLeave2(){
        this.setState({dropdownOpen2: false});
    }
    
    render() { 
        return(
            <>
           
                <div className="container-fluid">
                    <div className="row">    {/* MAIN    ROW*/}
                 
                        <div className="col border-right" >  {/*FRIST col START*/}
                            <label><i className="fas fa-user-circle" style={{fontSize:50, position:"relative", left:-15}}></i></label>

                            <div className="row">
                                <div class="col-3 pl-0 pr-0 ">
                                    <label style={{fontSize:15, position:"relative", top:-55, left:60}}>Name:</label>
                                </div>
                                <div className="col-9  pr-0 "  >
                                    <label className="text-primary" style={{fontSize:15, position:"relative", top:-55, left:54}}>Aditya Mukund</label>
                                </div>
                            </div>
                         

                            <div className="row">
                            <div class="col  pl-0 pr-0">
                                    <label style={{fontSize:15, position:"relative", top:-55, left:58}}>CurrentRole:</label>
                                </div>
                                <div className="col  pl-0 pr-0 ">
                                    <label className="text-primary text-left" style={{fontSize:15, position:"relative", top:-55, left:40}}>Admin</label>
                                </div>
                            </div>

                            <div className="row"  >
                                <div className="col-3">
                                    <button type="button" className="text-center" className="btn btn-primary btn-sm btn-center" style={{fontSize:15, position:"relative", top:-55, left:60}}>Switch Role</button>
                                </div>
                            </div>
                        </div> {/* Frist col ends*/}
                        

                        <div className="col border-right"> 
                            <div className="col">
                                <ul className="nav navbar-nav">
                                    <li className="dropdown">
                                        <Dropdown className="d-inline-block" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                            <DropdownToggle variant="primary" id="dropdown-basic" caret>
                                                Profile Management
                                            </DropdownToggle> 
                                            <DropdownMenu>
                                                <DropdownItem header>Profile Management</DropdownItem>
                                                <DropdownItem href="/UpdateSelfProfile">Update Self Profile</DropdownItem>
                                                <DropdownItem href="/ChakuriStatistics">Chakuri Statistics</DropdownItem> 
                                            </DropdownMenu>
                                        </Dropdown>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col border-right"> 
    
                            <div className="col">
                                <ul className="nav navbar-nav">
                                    <li className="dropdown">
                                        <Dropdown className="d-inline-block" onMouseEnter={this.onMouseEnter2} onMouseLeave={this.onMouseLeave2} isOpen={this.state.dropdownOpen2} toggle={this.toggle2}>
                                            <DropdownToggle variant="primary" id="dropdown-standard" caret>
                                                Employer Management
                                            </DropdownToggle> 
                                            <DropdownMenu>
                                                <DropdownItem header>Employer Management</DropdownItem>
                                                <DropdownItem href="/EmployerRegistration">Employee Registeration</DropdownItem>
                                                <DropdownItem href="/TopQualifiedJobseekers">Top Qualified Jobseekers</DropdownItem>
                                                <DropdownItem href="/EmployeeSearch">Employee Search</DropdownItem>  
                                                <DropdownItem href="/JobListing">Job Listing</DropdownItem>  
                                            </DropdownMenu>
                                        </Dropdown>
                                    </li>
                                </ul>
                            </div> 
                        </div>
                        <div className="col border-right"> 

                            <div className="col">
                                <ul className="nav navbar-nav">
                                    <li className="dropdown">
                                        <Dropdown className="d-inline-block" onMouseEnter={this.onMouseEnter1} onMouseLeave={this.onMouseLeave1} isOpen={this.state.dropdownOpen1} toggle={this.toggle1}>  
                                            <DropdownToggle variant="primary"  id="dropdown-basic" caret>
                                                Jobseeker Management
                                            </DropdownToggle> 
                                            <DropdownMenu>
                                                <DropdownItem header>Jobseeker Management</DropdownItem>
                                                <DropdownItem href="/JobSeekerSearch" >Jobseeker Search</DropdownItem>
                                                <DropdownItem href="/EmploymentAgreement">Employment Agreement</DropdownItem>
                                                <DropdownItem href="/CurrentEmployeement">Current Employment</DropdownItem> 
                                                <DropdownItem href="/EmploymentHistory">Employment History</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </li>   
                                </ul>
                            </div> 
                        </div>  
                        
                    </div>
                    <hr className="border-dark" style={{color:"black",margin: "0px -10px"}}></hr>
                </div>                                        
                 
           </>
        );
    }
}
export default AdminMenu;