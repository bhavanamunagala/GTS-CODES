import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave,faEdit} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
// import { Link } from 'react-router';

class PersonalDetail extends Component 
{
  
  constructor(props)
  {
  super(props)    
  
    this.state = this.personal_detail;
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  personal_detail = {
    users: 1,
    gts_user_first_name: '',
    // gts_user_middle_name:field["MiddleName"],
    gts_user_last_name: '',
    gts_user_gender: '',
    gts_user_father_first_name: '',
    gts_user_father_last_name: '',
    gts_user_mother_first_name: '',
    gts_user_mother_last_name: '',
    gts_user_nationality: '',
    gts_user_primary_mobile_number: '',
    gts_user_alternate_email_id: '',
    gts_user_alternate_mobile_number: ''

  }
    
 changeHandler = (e) => 
 {
      this.setState({ 
        [e.target.name]: e.target.value 
      });
  
}


 submitHandler = (e) => {
  
   e.preventDefault();
   let field = this.state.field
  // axios.post('https://d44eb630-10af-41af-8358-a4acb04c8efc.mock.pstmn.io/api/v1/users/personal_details',this.state)
  // axios.put('https://1oacuj96hj.execute-api.ap-south-1.amazonaws.com/serverless/api/v1/users/personal_details',this.state)
  //var url ='https://1oacuj96hj.execute-api.ap-south-1.amazonaws.com/serverless/api/v1/users/personal_details';

  //post
  var url ='localhost:4712/api/v1/users/personal_details';
   const p_detail={
    users: this.state.users,
    gts_user_first_name: this.state.gts_user_first_name,
    // gts_user_middle_name:field["MiddleName"],
    gts_user_last_name: this.state.gts_user_last_name,
    gts_user_gender: this.state.gts_user_gender,
    gts_user_father_first_name: this.state.gts_user_father_first_name,
    gts_user_father_last_name: this.state.gts_user_father_last_name,
    gts_user_mother_first_name: this.state.gts_user_mother_first_name,
    gts_user_mother_last_name: this.state.gts_user_mother_last_name,
    gts_user_nationality: this.state.gts_user_nationality,
    gts_user_primary_mobile_number: this.state.gts_user_primary_mobile_number,
    gts_user_alternate_email_id: this.state.gts_user_alternate_email_id,
    gts_user_alternate_mobile_number: this.state.gts_user_alternate_mobile_number

   };
  
  axios.post(url,p_detail)
  .then(response =>{
     if(response.data != null ){
       this.setState(this.personal_detail);
       alert('Personal Detail saved successfully');
     }
   })
   .catch(error => {
     console.log(error)
   })
 }

 
 render()
     {
      const { 
        users,
        gts_user_first_name,
        // gts_user_middle_name,
        gts_user_last_name,
        gts_user_gender,
        // gts_user_current_address,
        // gts_user_state,
        // gts_user_country,
        gts_user_father_first_name,
        gts_user_father_last_name,
        gts_user_mother_first_name,
        gts_user_mother_last_name,
        gts_user_nationality,
        gts_user_primary_mobile_number,
        gts_user_alternate_email_id,
        gts_user_alternate_mobile_number}= this.state
        
        return (
  
            <div>
            <div className="container align-items-center">
                <div className='mt-3'>
                  <div className="border border-dark rounded-lg" >
                    <form id="updateDetail" onSubmit={this.submitHandler} bg-success>
                      <div class="row">
                        <div class="col">
                          <h5 class="mb-2 p-2">Personal Detail:</h5>
                        </div>
                        <div class="col-1">
                          <a href ="#" class="btn  "><FontAwesomeIcon icon={faEdit}/></a>
                          {/* <Link to="#updateDetail"  className="btn btn-sm btn-outline-primary"><FontAwesomeIcon icon={faEdit}/></Link> */}
                        </div>
                      </div>

                      <div className="container">
                                              
                        <div class="row">
                            <div class="col-4">
                                <label>First Name: </label>
                                <input type ="text" class="text-primary" placeholder = "first name"  name="gts_user_first_name"    value={gts_user_first_name} onChange={this.changeHandler}></input>
                            </div>
                    
                            {/* <div class="col-4">
                                <label>Middle Name: </label>
                                <input type ="text" class="text-primary" placeholder = "middle name"  name="gts_user_middle_name"    value={gts_user_middle_name} onChange={this.changeHandler}></input>
                            </div> */}

                            <div class="col-4">
                                <label>Last Name: </label>
                                <input type ="text" class="text-primary" placeholder = "last name" name="gts_user_last_name" value={gts_user_last_name} onChange={this.changeHandler}></input>
                            </div>

                            <div class="col-4">
                            </div>
                        </div>

                        <div class="row">
                        <div class="col-4 ">
                                <label>Gender: </label>
                                <input type ="text"  class="text-primary"  placeholder = "Male/Female" name="gts_user_gender" value={gts_user_gender} onChange={this.changeHandler}></input> 
                                {/* <input type="radio" name="didCourseDetails" class="courseQuestionSelect" value="1"></input>
                                <label>Male</label>
                                <input type="radio" name="didCourseDetails"  class="courseQuestionSelect"  value="0"></input>
                                <label>Female</label> */}
                            </div>
                            
                            
                            <div class="col">
                                <label> Mobile No. : </label>
                                <input type ="text" class="text-primary" placeholder = "mobilenumber" name="gts_user_primary_mobile_number" value={gts_user_primary_mobile_number} onChange={this.changeHandler}></input>
                                {/* <a href ="#" class="btn  "><FontAwesomeIcon icon={faEdit}/></a> */}
                                {/* <label><h5><FontAwesomeIcon icon={faEdit}/></h5></label> */}
                            </div>
                            <div class="col">
                                <label> Nationality: </label>
                                <input type ="text" class="text-primary" placeholder = "India" name="gts_user_nationality" value={gts_user_nationality} onChange={this.changeHandler}></input>
                            </div>
                            
                        </div>

                        

                        {/* <div class="row">
                            
                        <div class="col-4">
                              <label>Current Address: </label>
                              <input type ="text"  class="text-primary"  placeholder = "Current Address" name="gts_user_gender" value= {gts_user_current_address} onChange={this.changeHandler}></input>
                            </div>  

                            <div class="col-4">
                              <label>State: </label>
                              <input type ="text"  class="text-primary"  placeholder = "State" name="gts_user_gender" value= {gts_user_state} onChange={this.changeHandler}></input>
                            </div>

                            <div class="col-4">
                              <label>Country: </label>
                              <input type ="text"  class="text-primary"  placeholder = "Country" name="gts_user_gender" value= {gts_user_country} onChange={this.changeHandler}></input>
                              
                            </div>
                        </div> */}



                                      {/* <div class="col-1">
                                                        <div className="btn pull-right">
                                                        <a href ="#" class="btn  "><FontAwesomeIcon icon={faEdit}/></a>
                                                        </div>
                                                    </div>
                                          */}




                        <div class="row">
                            <div class="col-4">
                                <label class="tab-space">Alternate Email:</label>
                                <input type ="email" class="text-primary" placeholder = "Alternativename@gmail.com" name="gts_user_alternate_email_id" value={gts_user_alternate_email_id} onChange={this.changeHandler}></input>
                            </div>
                            <div class="col-4">
                                {/* <label class="tab-space">Email: </label>
                                <input type ="email"  class="text-primary" placeholder = "name@gmail.com"  ></input>
                                <a href ="#" class="btn  "><FontAwesomeIcon icon={faEdit}/></a> */}
                            </div>
                            {/* <div class="col-4">
                                <label>Password: </label>
                                <input type ="email"  class="text-primary" placeholder = "1f*******"  ></input>
                                <button2 type="submit"  class="btn btn-primary btn-sm" style={{margin: "0px 0px 10px -100px"}}>Change</button2> 
                                <button2 type="submit"  class="btn btn-primary btn-sm" style={{margin: "0px 0px 10px 30px"}}>Save</button2>                         
                            </div> */}
                        </div>
              

                        <div class="row py-4" >
                          <div class="col col-sm offset-11 ">
                            <button type="submit" className="btn btn-primary">Save</button>
                          </div>
                        </div>
                      </div>
                      {/*<button type="submit">Save</button>*/}
                    </form>
                  </div>
                </div>
              </div>

              {/*Personal Detail end*/}

            </div>
        )
    }
}
export default PersonalDetail;