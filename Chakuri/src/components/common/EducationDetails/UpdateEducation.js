import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link,useHistory,useParams} from "react-router-dom";
import {Card,Form,Button,Col, ButtonGroup} from 'react-bootstrap';
import {FaSave,FaPlusSquare,FaList, FaUserGraduate, FaUserTie, FaUserAlt} from 'react-icons/fa';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
const UpdateEmployee = () => {
	let history = useHistory();
    const {id} = useParams();
    const [education,setUser] = useState({
		gts_user_degree_name:'',gts_user_degree_institute:'',
					gts_user_degree_location:'',gts_user_degree_start_date:'',gts_user_degree_end_date:'',gts_user_degree_marks_percentage:'',gts_user_degree_grade:'',user_id:1
					
	});
    const {gts_user_degree_name,gts_user_degree_institute,
        gts_user_degree_location,gts_user_degree_start_date,gts_user_degree_end_date,gts_user_degree_marks_percentage,gts_user_degree_grade} = education;
    const onInputChange = e =>{
        setUser({...education,[e.target.name] : e.target.value});
    };
    
    useEffect(() =>{loadUser();}, []);


    const onSubmit = async e =>{
        e.preventDefault();
        await axios.put(`http://localhost:4712/api/v1/users/education`,education);
        history.push("/List");
    };
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:4712/api/v1/users/education/gts_user_education_id/${id}`);
        setUser(result.data);
    };
    const [cities,setCities] = useState([]);
    useEffect(() => {loadCities();},[]);
    const loadCities = async() => {
        const res = await axios.get("https://6c7c29e8-bf6b-49b4-99c1-1bd408f39cd9.mock.pstmn.io/api/v1/city");
        setCities(res.data);
    };
	return(
		
            <div>
			
			<Header/>
 <div className="container align-items-center">
 <div className='mt-3  mb-3'>
 <div className="border  rounded-lg" ></div>
        <Card className={"border border-dark bg-white text-dark"}>
           
            <Form onSubmit={e => onSubmit(e)}>
                <Card.Body>
                <div class="row">
                    <div class="col">
 
					<h2>Education Background:</h2>
						</div>
						</div>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label> Degree Name:</Form.Label>
                            <Form.Control required type="test" name="gts_user_degree_name" value={gts_user_degree_name} onChange = {e => onInputChange(e)}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>University/Insititute Name:</Form.Label>
                            <Form.Control required type="test" name="gts_user_degree_institute" value={gts_user_degree_institute} onChange = {e => onInputChange(e)}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                        <Form.Label> Degree location:</Form.Label>
                                        
                                        <Form.Control required type="test" list="datalist1" placeholder="Enter the degree Location" name="gts_user_degree_location" value={gts_user_degree_location} onChange={e => onInputChange(e)} />
                                        <datalist id="datalist1">
                                            {
                                                cities.map((city)=>(
                                                    <option value={city.name}>{city.name}</option>
                                                ))
                                            }
                                            </datalist>
								
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Start Year:</Form.Label>
                            <Form.Control required type="test" name="gts_user_degree_start_date" value={gts_user_degree_start_date} onChange = {e => onInputChange(e)}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>End year:</Form.Label>
                            <Form.Control required type="test" name="gts_user_degree_end_date" value={gts_user_degree_end_date} onChange = {e => onInputChange(e)}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Degree Mark Percentage:</Form.Label>
                            <Form.Control required type="test" name="gts_user_degree_marks_percentage" value={gts_user_degree_marks_percentage} onChange = {e => onInputChange(e)}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Degree Grade:</Form.Label>
                            <Form.Control required type="test" name="gts_user_degree_grade" value={gts_user_degree_grade} onChange = {e => onInputChange(e)}/>
                        </Form.Group>
                    </Form.Row>
                    
                    
                    
                </Card.Body>
					<Card.Footer>
						<ButtonGroup style={{"float":"right"}}>
                        <div class="row py-3" >
                      <div class="col col-sm  ">
                            <button size="sm" variant="outline-success" type="submit" class="btn btn-primary">Update Details</button>{' '}
                           </div>
                           </div>
                           <div class="row py-3" >
                        <div class="col col-sm offset-1 ">
                            <Link to={"/RecruiterProfile"} className="btn btn-sm btn-outline-primary" class="btn btn-primary">Back</Link>
						</div>
                        </div>
                        </ButtonGroup>
					</Card.Footer>
				</Form>
			</Card>
		</div>
        </div>
        <Footer/>
		</div>
	);
};

export default UpdateEmployee;