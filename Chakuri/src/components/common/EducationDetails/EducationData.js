import React,{useState,useEffect} from 'react';
import axios from 'axios';
//import './style.css';
import {Button, ButtonGroup, Card, Table, FormControl, Form} from 'react-bootstrap';
import { FaBuilding, FaEdit, FaEye, FaList, FaSearch, FaTrash } from 'react-icons/fa';
import { GrMapLocation } from 'react-icons/gr';
import { GiDistraction } from 'react-icons/gi';
import { MdDateRange } from 'react-icons/md';
import { Link } from 'react-router-dom';

const EducationData = () => {
    const [employee,setEducation] = useState([]);
    const [input, setInput] = useState("");
    useEffect(() => {loadUsers();},[]);
    const loadUsers = async() => {
        const result = await axios.get("http://localhost:4712/api/v1/users/education");
        setEducation(result.data);
    };
	
	const filteredList = employee.filter(list  => {
        return list.gts_user_degree_institute.toLowerCase().includes(input.toLowerCase())
	});

	const deleteEducation = async gts_user_education_id => {
		if(window.confirm('Are you sure?')){
		await axios.delete(`http://localhost:4712/api/v1/users/education/education_id/${gts_user_education_id}`);
		//console.log("response is "+response)
		loadUsers();
	}
		
   }

	return(
		<div>
			
			<div className="container align-items-center">
 <div className='mt-3  mb-3'>
 <div className="border border-dark rounded-lg" >
               
 <div class="row">
<div class="col">
                                     <h3 class="mb-3 p-2">Educational Background:</h3>
                                     </div>
                                     <div class="col offset-6">
									 <Link to={"/Add"} className="btn btn-sm btn-outline-primary "  class="btn btn-primary " >Add Education Details</Link>
                                            
                                          </div>
                                   </div>
								  
 <div className="wrapper-scroll-y custom-scrollbar">
						
							
							
								{
									filteredList.map((l,index) => (
										
										<div>
										<div className="row">
											<div className="col-4">
											<h4 class="p-2"><label> Degree Name: {l. gts_user_degree_name}</label></h4>	
											</div>
										</div>
										<div className="row">
											<div className="col-4">
												<h4 class="p-2"><label>University/Insititute: {l.gts_user_degree_institute}</label></h4>
											</div>
										</div>
										<div className="row">
										<div className="col-4">
												<h4 class="p-2"><label>Degree Location: {l.gts_user_degree_location}</label></h4>
											</div>
											</div>
										<div className="row">
											<div className="col-4">
												<h4 class=" p-2"><label>Start Date: {l.gts_user_degree_start_date}</label></h4>
											</div>
											
										</div>
										<div className="row">
										<div className="col-4">
											<h4 class=" p-2"><label>End Date: {l.gts_user_degree_end_date}</label></h4>	
											</div>
											</div>
										
										<div className="row">
											<div className="col-4">
												<h4 class="p-2"><label>Degree Mark Percentage : {l.gts_user_degree_marks_percentage}</label></h4>
											</div>
											
										</div>
										<div className="row">
											<div className="col-4">
												<h4 class=" p-2"><label>Degree Mark Grade: {l.gts_user_degree_grade}</label></h4>
											</div>
										</div>
										
										<div class="row " >
                                        <div>
										<ButtonGroup style={{"float":"right"}}>
										
                                                    {/*<Link to={"/Details"} className="btn btn-sm btn-outline-primary"><FaEye/></Link>{' '} */}
                                                    <Link to={`/Edit/${l.gts_user_education_id}`} className="btn btn-sm btn-outline-success"><FaEdit/></Link>{' '}

													<Button size="sm" onClick={() => deleteEducation(l.gts_user_education_id)} variant="outline-danger"><FaTrash/></Button>
													
											    </ButtonGroup>
									</div>
									</div>
									<hr class =" border border-dark w-100 mx-auto " />	
												   </div>
								
								
								
									))
								}
							
					</div>
 </div>

	</div>
	</div>			
			
		</div>
	);

};
export default EducationData;