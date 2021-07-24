import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Col, Container, Row, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';

function Retrive() {

    const [project,setProject] = useState([]);
    useEffect(() => {loadUsers();},[]);
    const loadUsers = async() => {
        const result = await Axios.get('http://localhost:4736/api/v1/user/project/user_id?userId=1');
        setProject(result.data);
    };

	const deleteProject = async id => {
        await Axios.delete(`http://localhost:4736/api/v1/user/project/project_id?projectId=${id}`);
        alert("Deleted Successfully");
        loadUsers();
   }

    const editTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>Edit Details</Tooltip>
    );

    const delTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>Delete Details</Tooltip>
    );

return(
        <Container className="align-items-center">
            <div className="mt-3">
                <div className="border border-dark rounded-lg">
                    {
                        project.map((pro) => (
                            <Row>
                                <Col>
                                    <Container>
                                        <div className="row">
                                            <div className="col">
                                                <label><strong>Project Title:</strong> <i>{pro.gts_project_title}</i></label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-4">
                                                <label><strong>Institue/University:</strong> <i>{pro.gts_user_client}</i></label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-4">
                                                <label><strong>Start Date:</strong> <u>{pro.gts_user_project_start_date}</u></label>
                                            </div>
                                            <div className="col-4">
                                                <label><strong>End Date:</strong> <u>{pro.gts_user_project_end_date}</u></label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <label style={{"text-align":"justify"}}><strong>Project Details:</strong> <i>{pro.gts_user_project_description}</i></label>
                                            </div>
                                        </div>
                                        <ButtonGroup style={{"float":"right"}}>
                                            <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={editTooltip}>
                                                <Link to={`/UpdateProject/${pro.gts_user_project_id}`} className="btn btn-outline-success"><FaEdit/></Link>
                                            </OverlayTrigger>
                                            <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={delTooltip}>
                                                <Button onClick={() => deleteProject(pro.gts_user_project_id)} variant="outline-danger"><FaTrash/></Button>
                                            </OverlayTrigger>
                                        </ButtonGroup>
                                    </Container>
                                </Col>
                            </Row>
                        ))
                    }
                </div>
            </div>
        </Container>
    );
};

export default Retrive;
