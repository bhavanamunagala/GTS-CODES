
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faTrash,faEdit,faUpload} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

import {  Row,NavLink,NavItem, Col, ButtonGroup} from 'reactstrap';
 import { Form,FormControl,FormLabel,FormRow, Button, FormCheck} from 'react-bootstrap';
 import {Modal} from 'react-bootstrap';



 class Renogotiatecontracts extends Component {
     
    constructor(props) {
        super(props);
        this.replaceModalItem = this.replaceModalItem.bind(this);
      this.state = {
        requiredItem: 0,
        addModalShow: false,
        renogotiatecontractsShow : false,
        contract : []
      };

 }
 replaceModalItem(index) {
  this.setState({
    requiredItem: index,
    addModalShow: true
  });
}
 renogotiatecontractsHandler = () => {
  const doesShow = this.state.renogotiatecontractsShow;
  this.setState({renogotiatecontractsShow: !doesShow});
 // this.setState({appliedcontractsShow: false});
}
  componentDidMount(){
    axios.get('https://18331d29-1057-4f4c-bd49-5e8ee6322859.mock.pstmn.io/api/v1/contract_details')
    .then(response => {
         console.log(response)
         this.setState({contract: response.data})
    })
    
  }
    
    render() {
      const contracts = this.state.contract.map((item, index) => {
        return (
        <tr key ={index}>
          <th scope="row">1</th>
        <td class="text-danger">{item.gts_contract_date}</td>
        <td class="text-danger">{item.gts_contract_id}</td>
        <td class="text-danger">{item.gts_contract_duration}</td>
          <td class="text-danger">{item.gts_contract_description}<td class="border-0 text-primary">-Data Science required (10 out 0f 10)<td class="border-0 text-primary">-Data Science required (10 out 0f 10)<td class="border-0 text-primary">-Data Science required (10 out 0f 10)</td></td></td></td>
          <td class="text-danger">{item.gts_recruiter_name}</td>
          <td class="text-danger">{item.gts_rate_per_candidate} <td class="border-0">5000 Rs.per additional candidate</td></td>
          <td class="text-danger">{item.gts_candidate_quantity}<td class="border-0">2</td></td>
          <td>Employer:pending<td class="border-0 text-danger">Admin pending</td></td>
          <td><button type="button" class="btn btn-primary" onClick={() => this.replaceModalItem(index)}>View</button></td>
        </tr> 
         )
        });

       const {contract} = this.state;  
      let addModalClose =() => this.setState({addModalShow: false});
      const requiredItem = this.state.requiredItem;
     // let modalData = this.state.contract[requiredItem];
        return(
            <div>
             
        
                  
                  <div className="container-fluid" >
                  <h2>Tejeswani Ehsaan Rama</h2>
                  <button>New Contract</button>
                 <button type="button"> | Applied contract</button>
                   <button type="button" class="text-primary" onClick={this.renogotiatecontractsHandler}>|Renogotiate Contracts </button>
                   <hr class =" border-darkw-100 mx-auto " />
                    </div>

                    {
                      this.state.renogotiatecontractsShow === true ?
                      <div>
                        <div className="container-fluid">
                  <div class ="row">
                  <div class="col">
                  <label >Order By :</label>
                  <label >Contract Date </label><i class="fa fa-arrow-up" aria-hidden="true"></i>
                  <label >|Employer Name </label><i class="fa fa-arrow-up" aria-hidden="true"></i>
                  <label >|Contract Duration </label><i class="fa fa-arrow-up" aria-hidden="true"></i>
                  <label >|Contract Id </label><i class="fa fa-arrow-up" aria-hidden="true"></i>
                  </div>
                  
                  <div class="col-md-auto">
                    <label>Status:</label>
                    </div>
                    <div class="col-md-auto">
                    <Form.Check  type="checkbox" id="customControlAutosizing" label="Employee" />
                     <Form.Check type="checkbox" id="customControlAutosizing" label="Pending" /> 
                     </div>
                     <div class="col-md-auto">          
                      <Form.Check  type="checkbox" id="customControlAutosizing" label="Admin" />
                      <Form.Check  type="checkbox" id="customControlAutosizing" label="Pending" />                       
                     </div>
                     <div class="col-md-auto">
                     <Form.Check  type="checkbox" id="customControlAutosizing" label="Completed" />
                     </div>
                     </div>
                     </div>
                   <br></br>
                     
                      
                       <div className="container">
                  <table class="table table-bordered table-wrapper-scroll-y my-custom-scrollbar">
 <thead>
   <tr>
     <th scope="col">Sr.No.</th>
     <th scope="col">Contract Date</th>
     <th scope="col">Contract Id</th>
     <th scope="col">Contract Duration</th>
     <th scope="col">Contract Description</th>
     <th scope="col">Recruiter</th>
     <th scope="col">Rate</th>
     <th scope="col">Qty</th>
     <th scope="col">Status</th>
     <th scope="col">View</th>
   </tr>
 </thead>
 <tbody>
    {contracts}
 </tbody>
</table></div>

                      </div> : null

                    }
                    <br></br>
                
                 <Modal
     show= {this.state.addModalShow}
     onHide= {addModalClose}
      size="lg"
     aria-labelledby="contained-modal-title-vcenter"
     centered
   >
     <Modal.Header closeButton>
       <Modal.Title id="contained-modal-title-vcenter">
         Contract details
       </Modal.Title>
     </Modal.Header>
     <Modal.Body>
         <div className="container">
            <div className="row">
               <div className="col-md-4 ">
               <label> Name : </label>
               <input type ="text" class="text-danger" placeholder = "Tejaswini Ehsaan Rama" ></input>
               <label> Contract ID : </label>
               <input type ="text" class="text-danger" value={contract.gts_contract_id}></input>
               <label> Contract Date : </label>
               <input type ="text" class="text-danger" placeholder = "22 jun 2020" ></input>
               <label> Contract Duration :  </label>
               <input type ="text" class="text-danger" placeholder = " 6 months" ></input>
               <label> Recruiter : </label>
               <input type ="text" class="text-danger" placeholder = "Radha jha" ></input>
               </div>
               <div className="col-md-2">
               <label class="w-100 "> Status : </label>
               <label class="w-100"> Employer : </label>
               <input type ="text" class="text-danger" placeholder = "pending" ></input>
               <label> Admin : </label>
               <input type ="text" class="text-danger" placeholder = "pending" ></input>
               </div>
               <div className="col-md-4 ">
               <label> Name : </label>
               <input type ="text" class="text-danger" placeholder = "Tejaswini Ehsaan Rama" ></input>
               <label> Contract ID : </label>
               <input type ="text" class="text-danger" placeholder = "CHK045010453F1" ></input>
               <label> Contract Date : </label>
               <input type ="text" class="text-danger" placeholder = "CHK045010453F1" ></input>
               <label> Contract Date : </label>
               <input type ="text" class="text-danger" placeholder = "22 jun 2020" ></input>
               <label> Contract Duration :  </label>
               <input type ="text" class="text-danger" placeholder = " 6 months" ></input>
               <label> Recruiter : </label>
               <input type ="text" class="text-danger" placeholder = "Radha jha" ></input>
               </div>          
           </div>   
        </div>
        <hr class =" border-darkw-100 mx-auto " />
        <h4>Your contract</h4>
        
        <div className="container">
        <table class="table table-bordered table-wrapper-scroll-y my-custom-scrollbar">
        <thead>
        <tr>
        <th scope="col">Sr.NO</th>
        <th scope="col" class="text-center ">Contract description</th>
        <th scope="col">Rate</th>
        <th scope="col">Qty</th>
        <th scope="col">Price</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <th scope="row">1</th>
        <td class="text-danger">-Within the time period of contract,we allocated the following resources as per your requirements<td class="border-0 text-primary">-Data Science required (10 out 0f 10)<td class="border-0 text-primary">-Data Science required (10 out 0f 10)<td class="border-0 text-primary">-Data Science required (10 out 0f 10)</td></td></td></td>
        <td class="text-danger">25,000 Rs.per candidate <td class="border-0">5000 Rs.per additional candidate</td></td>
        <td class="text-danger">29<td class="border-0">2</td></td>
        <td class="text-danger">7,25,000 Rs.<td class="border-0">10,000 Rs.</td></td>
        </tr>
        <tr>
        <td></td>
        <td col-span="2"></td>
        <td></td>
        <td> Total:</td>
        <td>7,35,000Rs.</td>
        </tr>
        <tr>
        <th scope="row">2</th>
        <td class="text-danger">-Within the time period of contract,we allocated the following resources as per your requirements<td class="border-0 text-primary">-Data Science required (10 out 0f 10)<td class="border-0 text-primary">-Data Science required (10 out 0f 10)<td class="border-0 text-primary">-Data Science required (10 out 0f 10)</td></td></td></td>
        <td class="text-danger">25,000 Rs.per candidate <td class="border-0">5000 Rs.per additional candidate</td></td>
        <td class="text-danger">29<td class="border-0">2</td></td>
        <td class="text-danger">7,25,000 Rs.<td class="border-0">10,000 Rs.</td></td>
        </tr>
        <tr>
        <td></td>
        <td col-span="3"></td>
        <td></td>
        <td> Total:</td>
        <td>7,35,000Rs.</td>
        </tr>
        <tr>
        <th scope="row">1</th>
        <td class="text-danger">-Within the time period of contract,we allocated the following resources as per your requirements<td class="border-0 text-primary">-Data Science required (10 out 0f 10)<td class="border-0 text-primary">-Data Science required (10 out 0f 10)<td class="border-0 text-primary">-Data Science required (10 out 0f 10)</td></td></td></td>
        <td class="text-danger">25,000 Rs.per candidate <td class="border-0">5000 Rs.per additional candidate</td></td>
        <td class="text-danger">29<td class="border-0">2</td></td>
        <td class="text-danger">7,25,000 Rs.<td class="border-0">10,000 Rs.</td></td>
        </tr>
        <tr>
        <td></td>
        <td col-span="2"></td>
        <td></td>
        <td> Total:</td>
        <td>7,35,000Rs.</td>
        </tr>
        </tbody>
        </table>
        </div>
        <div className="container">
        <h5 class="mt-3">Reasons for renegoatiating</h5>
        <input type="radio" name="Renegotiate" value="Renegoataite" />
        <label class="ml-3"> Renegotiate terms of rate</label>
        </div>
        <div className="container">
        <input type="radio" name="Renegotiate" value="Renegoataite" />
        <label class="ml-3"> Renegotiate terms of duration</label>
        </div>
     </Modal.Body>
     <Modal.Footer>
     
       <Button onClick={addModalClose}>Close</Button>
     </Modal.Footer>
   </Modal>
             
                 </div>
                  
                 
                           

            
        )
    }
}
 

export default Renogotiatecontracts;
