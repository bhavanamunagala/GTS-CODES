import React,{ useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

function GTSProjectCreate() {
    let history = useHistory();
    const [project,setUser] = useState({
        gts_user_employer_name: "GTS",
        gts_user_employment_type: "",
        gts_user_project_skill_ids: "",
        gts_user_role_description: "",
        gts_user_role: "",
        gts_user_project_start_date: "",
        gts_user_project_end_date: "",
        gts_user_project_site: "",
        gts_user_client: "",
        gts_user_project_name:"Name",
        gts_user_project_description: "",
        gts_user_designation: "python developer",
        gts_user_project_location: "",
        gts_user_team_size: "",
        gts_project_title:"",
        gts_user_id: "1"
    });
    
    const {
        gts_user_project_skill_ids,
        gts_user_employment_type,
        gts_user_role_description,
        gts_user_role,
        gts_user_project_start_date,
        gts_user_project_end_date,
        gts_user_project_site,
        gts_user_client,
        gts_user_project_description,
        gts_user_project_location,
        gts_user_team_size,
        gts_project_title,
    } = project;

    const onInputChange = e =>{
        setUser({...project,[e.target.name] : e.target.value});
    };
    
    const onSubmit = async e =>{
        e.preventDefault();
        await Axios.post("http://localhost:4736/api/v1/user/project",project);
        alert("Added Details Succesfully");
        window.location.reload(true);
        history.push("/RecruiterProfile");
    };

    return(
        <Container className="align-items-center">
            <div className="mt-3">
                <Form onSubmit={e => onSubmit(e)}>
                    <Row>
                        <Container className="border border-dark rounded-lg">
                            <Row>
                                <Col>Add New Project Details</Col>
                            </Row>
                            <hr/>
                            <Row>
                                <Col>
                                    <div className="col" style={{"position":"relative","height":"350px","overflow":"auto","display":"block"}}>
                                        <Form.Row>
                                            <Form.Group as={Col}>
                                                <Form.Label>Project Title:</Form.Label>
                                                <Form.Control required type="test" onChange = {e => onInputChange(e)} name="gts_project_title" value={gts_project_title} placeholder="Enter Project Title" />
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col}>
                                                <Form.Label>Project Institute/University:</Form.Label>
                                                <Form.Control required type="test" onChange = {e => onInputChange(e)} name="gts_user_client" value={gts_user_client} placeholder="Institute/University/Client" />
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col}>
                                                <Form.Label>Start Date:</Form.Label>
                                                <Form.Control required type="date" onChange = {e => onInputChange(e)} name="gts_user_project_start_date" value={gts_user_project_start_date}/>
                                            </Form.Group>
                                            <Form.Group as={Col}>
                                                <Form.Label>End Date:</Form.Label>
                                                <Form.Control required type="date" onChange = {e => onInputChange(e)} name="gts_user_project_end_date" value={gts_user_project_end_date}/>
                                            </Form.Group>
                                            <Form.Group as={Col}>
                                                <Form.Label>Skills Used:</Form.Label>
                                                <Form.Control required type="test" onChange = {e => onInputChange(e)} name="gts_user_project_skill_ids" value={gts_user_project_skill_ids} placeholder="Used skills in project" />
                                            </Form.Group>  
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col}>
                                                <Form.Label>Nature of project</Form.Label>
                                                <Form.Control required as="select" onChange = {e => onInputChange(e)} name="gts_user_employment_type" value={gts_user_employment_type}>
                                                    <option>--select--</option>
                                                    <option>Full Time</option>
                                                    <option>Part Time</option>
                                                    <option>Contract</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group as={Col}>
                                                <Form.Label>Team Size</Form.Label>
                                                <Form.Control required as="select" onChange = {e => onInputChange(e)} name="gts_user_team_size" value={gts_user_team_size} placeholder="Team Size">
                                                    <option>--select--</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    <option>6</option>
                                                    <option>7</option>
                                                    <option>8</option>
                                                    <option>9</option>
                                                    <option>10</option>
                                                    <option>11</option>
                                                    <option>12</option>
                                                </Form.Control>
                                            </Form.Group>  
                                            <Form.Group as={Col}>
                                                <Form.Label>Project Site</Form.Label>
                                                <Form.Control required as="select" onChange = {e => onInputChange(e)} name="gts_user_project_site" value={gts_user_project_site}>
                                                    <option>--select--</option>
                                                    <option>On site</option>
                                                    <option>Off site</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col}>
                                                <Form.Label>Project Role</Form.Label>
                                                <Form.Control required type="test" onChange = {e => onInputChange(e)} name="gts_user_role" value={gts_user_role} placeholder="Project Role" />
                                            </Form.Group>
                                            <Form.Group as={Col}>
                                                <Form.Label> Project location:</Form.Label>
                                                <Form.Control required type="test" placeholder="Enter the Location " name="gts_user_project_location" value={gts_user_project_location} onChange = {e => onInputChange(e)} />
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col}>
                                                <Form.Label>Project role description:</Form.Label>
                                                <Form.Control required as="textarea" rows={2} onChange = {e => onInputChange(e)} name="gts_user_role_description" value={gts_user_role_description} placeholder="Project Role Description" />
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col}>
                                                <Form.Label>Project Description:</Form.Label>
                                                <Form.Control required as="textarea" rows={5} onChange = {e => onInputChange(e)} name="gts_user_project_description" value={gts_user_project_description} placeholder="Project Description" />
                                            </Form.Group>
                                        </Form.Row>
                                    </div>
                                </Col>
                            </Row>
                            <hr/>
                            <Row>
                                <Col>
                                    <Button variant="primary" type="submit" style={{"float":"right"}}>Save Details</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Row>
                </Form>
            </div>
        </Container>
    );
};

export default GTSProjectCreate;