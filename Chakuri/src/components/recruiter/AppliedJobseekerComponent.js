
import React, { Component, useContext } from "react";
import { Accordion, AccordionContext, Card, Navbar, useAccordionToggle , Table } from 'react-bootstrap';
import { FaPlus, FaMinus } from 'react-icons/fa';
import FakeTable from "./DataTable1Component";
import './AppliedComponent.css';

function ContextAwareToggle({ children, eventKey, callback }) {
    
    const currentEventKey = useContext(AccordionContext);
    
    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => callback && callback(eventKey),
    );
  
    const isCurrentEventKey = currentEventKey === eventKey;
  
    return (
        <button type="button" style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'lavender' }} onClick={decoratedOnClick}>
            {children}
        </button>
    );
  }
  
export default class AppliedJobseekerPage extends Component{
    
    render(){
    
        return (
            <div>
                

                <hr/>
                <label>Tejaswani Ehsaan Rama</label>
                <hr class =" border-darkw-100 mx-auto " />
                     <label> APPLIED JOBSEEKERS  </label>
                     <label class="text-primary">| SKILLS EVALUATION </label>
                     <label class="text-primary">| PLACEMENT STATUS </label>        
            <div className="container align-items-centre">
                <div className='mt-3'>
                {/* <Table hover bordered responsive className="table-wrapper-scroll-y my-custom-scrollbar text-center" style={{"font-size":"14px"}}>  */}
                    <div className="border border-dark rounded-lg wrapper-scroll-y custom-scrollbar">
                        <h4>Applied Jobseekers</h4>

                        <Accordion defaultActiveKey="0">
                                
                            <Card>
                                    
                                <Card.Header>
                                    <div className="row">
                                        <div className="col-3">Job Title :</div>
                                        <div className="col-3">Years of experience :</div>
                                        <div className="col-3">Date of posting jobs :</div>
                                        <div className="col-2">No. of candidates :</div>
                                        <div className="col">
                                            <ContextAwareToggle eventKey="0"> <FaPlus/></ContextAwareToggle>
                                        </div>
                                    </div>
                                </Card.Header>
                                        
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <h6>Skills Required :</h6>
                                        <h6>Location :</h6>
                                        <FakeTable/></Card.Body>
                                </Accordion.Collapse>
                                        
                            </Card>
                                        
                            <Card>
                                        
                                <Card.Header>
                                    <div className="row">
                                        <div className="col-3">Job Title :</div>
                                        <div className="col-3">Years of experience :</div>
                                        <div className="col-3">Date of posting jobs :</div>
                                        <div className="col-2">No. of candidates :</div>
                                        <div className="col">
                                            <ContextAwareToggle eventKey="1"><FaPlus/></ContextAwareToggle>
                                        </div>
                                    </div>
                                </Card.Header>
                                        
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                        <h6>Skills Required :</h6>
                                        <h6>Location :</h6>
                                        <FakeTable/></Card.Body>
                                    </Accordion.Collapse>
                                    
                            </Card>

                            <Card>
                                        
                                <Card.Header>
                                    <div className="row">
                                        <div className="col-3">Job Title :</div>
                                        <div className="col-3">Years of experience :</div>
                                        <div className="col-3">Date of posting jobs :</div>
                                        <div className="col-2">No. of candidates :</div>
                                        <div className="col">
                                            <ContextAwareToggle eventKey="2"><FaPlus/></ContextAwareToggle>
                                            {/* <ContextAwareToggle eventKey="2"><FaMinus/></ContextAwareToggle> */}
                                        </div>
                                    </div>
                                </Card.Header>
                                        
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                    <h6>Skills Required :</h6>
                                        <h6>Location :</h6>
                                        <FakeTable/></Card.Body>
                                </Accordion.Collapse>
                                    
                            </Card>

                            <Card>
                                        
                                <Card.Header>
                                    <div className="row">
                                        <div className="col-3">Job Title :</div>
                                        <div className="col-3">Years of experience :</div>
                                        <div className="col-3">Date of posting jobs :</div>
                                        <div className="col-2">No. of candidates :</div>
                                        <div className="col">
                                            <ContextAwareToggle eventKey="3"><FaPlus/></ContextAwareToggle>
                                        </div>
                                    </div>
                                </Card.Header>
                                        
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body>
                                    <h6>Skills Required :</h6>
                                        <h6>Location :</h6>
                                        <FakeTable/></Card.Body>
                                </Accordion.Collapse>
                                    
                            </Card>
                    </Accordion>
                </div>
                {/* </Table> */}
            </div>
        </div>
        
        </div>
        );
    
    }

}

