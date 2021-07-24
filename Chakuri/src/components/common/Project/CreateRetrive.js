/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Accordion, Button, Col, Container, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { AiFillFileAdd } from 'react-icons/ai';
import Retrive from './GTSProjectRetrive';
import Create from './GTSProjectCreate';
import { FaEye } from 'react-icons/fa';

function ProjectCR() {

    const addTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>Add Details</Tooltip>
    );

    const viewTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>Show Details</Tooltip>
    );

    return(
        <div>
            <Container className="align-items-center">
                <div className="mt-3">
                    <div className="border border-dark rounded-lg">
                        <Accordion defaultActiveKey="1">
                            <Row>
                                <Col><h5 class="mb-3 p-2">Project Details</h5></Col>
                                <Col>
                                    <OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }} overlay={addTooltip}>
                                        <Accordion.Toggle style={{"float":"right"}} eventKey="0">
                                            <Button variant="outline-primary"><AiFillFileAdd/></Button>
                                        </Accordion.Toggle>
                                    </OverlayTrigger>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Accordion.Collapse eventKey="0">
                                        <Container>
                                            <Col><Create/></Col>
                                        </Container>
                                    </Accordion.Collapse>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Accordion.Collapse eventKey="1">
                                        <Container>
                                            <Col><Retrive/></Col>
                                        </Container>
                                    </Accordion.Collapse>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }} overlay={viewTooltip}>
                                        <Accordion.Toggle style={{"float":"right"}} eventKey="1">
                                            <Button variant="outline-primary"><FaEye/></Button>
                                        </Accordion.Toggle>
                                    </OverlayTrigger>
                                </Col>
                            </Row>
                        </Accordion>
                        <Row>
                            <Col>
                                <Container>
                                    &nbsp;
                                </Container>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ProjectCR;
