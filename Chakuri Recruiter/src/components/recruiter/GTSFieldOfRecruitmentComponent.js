import React,{useState,useEffect, Component} from 'react';


import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faUser,faTrash,faEdit,faUpload} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

import {  Row,NavLink,NavItem, Col, ButtonGroup} from 'reactstrap';
 import { Form,FormControl,Modal,FormLabel,FormRow, Button, FormCheck} from 'react-bootstrap';
 import { Link ,useHistory} from 'react-router-dom';
// http://localhost:2004


function MyVerticallyCenteredModal(props)
 { 
  let history = useHistory();
  const [field,setField] = useState({area:'',});
  const {area} = field;
const onInputChange = e => {
setField({...field,[e.target.name]:e.target.value})};
const onSubmit = async e => { e.preventDefault(); await axios.post("http://localhost:2004/FieldOfRecruitement",field);
 history.push("/UpdateProfilePage");};
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Fields
        </Modal.Title>
      </Modal.Header>
      <form onSubmit={e=>onSubmit(e)}>
      <Modal.Body>
     
<div className="form-group row">
<label>Enter Field Name:</label>
<input type="test" className="form-control form-control-lg" placeholder="Enter field" name="area" 
value={area} onChange={e=>onInputChange(e)}/>
</div>
      </Modal.Body>
      <Modal.Footer>
      <Button type="submit">Submit</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
      </form>
    </Modal>
  );
}
const  GTSFieldOfRecruitmentComponent= () => {
  const [Field,setField] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  useEffect(() => {loadUsers();});
  const loadUsers = async() => {
      const result = await axios.get("http://localhost:2004/FieldOfRecruitement");
      setField(result.data);
  };



const deleteField = async fieldId => {
  if(window.confirm('Are you sure?')){
  await axios.delete(`http://localhost:2004/FieldOfRecruitement/${fieldId}`);
  //console.log("response is "+response)
  loadUsers();
}
  
 }
    
        
            return (
                <div>
                    
                  
{/*Field of Recruitment start*/}



  
  
<div className="container align-items-center">
             <div className='mt-3'>
                <div className="border border-dark rounded-lg" >
                <form  >
                                      <div class="row">
                                              <div class="col">
                                              <h5 class="mb-3 p-2"> Recruitment Industries:</h5>
                                              </div>
                                              <div class="col-1">
                                              <Button variant="primary" 
                                              onClick={() => setModalShow(true)}>
        <FontAwesomeIcon icon={faPlus}/>
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
                                                   </div>
                                        </div>
                                       
                                              {
                                               Field.map((f,index)=>(
                                                <div class="row">
                                                <div class="col">
                                                <label class="mb-3 p-2">{f.area}</label>
                                                </div>
                                                <div class="col-1">
                      <Link onClick={()=>deleteField(f.id)} className="btn btn-sm"><FontAwesomeIcon icon={faTrash}/></Link>
                                                     </div>
                                          </div>
                                               ))
                                              }
                                       
        </form>
          
               </div>
            </div>
        </div>


        <div className="container align-items-center">
             <div className='mt-3'>
                <div  >
                <form  >
                <div class="row">
                 <div class="col">
             <h5 class="mb-3 p-2"> </h5>
             </div>
                                             
              </div>

        </form>
          
               </div>
            </div>
        </div>


    
 
</div>      
        )
            }
        
export default GTSFieldOfRecruitmentComponent;
