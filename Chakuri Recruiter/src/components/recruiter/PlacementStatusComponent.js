
import React, { Component } from 'react';
import { Col, Container } from 'react-bootstrap';
import axios from "axios";
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';  
import Modal from './Modal';

import './style.css';

class PlacementStatusComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
       addModalShow: false,
      jobapplicationstatusShow : false,
      jobapplicationstatus : []
    };
      
  
  };
  togglePopup() {
    this.setState({
      addModalShow: !this.state.addModalShow
    });

  };
  jobapplicationstatusHandler = () => {
   const doesShow = this.state.jobapplicationstatusShow;
   this.setState({jobapplicationstatusShow: !doesShow});
 
 }
 
 replaceModalItem(index) {
   this.setState({
     requiredItem: index,
     addModalShow: true
   });
 }
 saveModalDetails(item) {
   const requiredItem = this.state.requiredItem;
   let tempbrochure = this.state.jobapplicationstatus;
   tempbrochure[requiredItem] = item;
   this.setState({ jobapplicationstatus: tempbrochure });
 }
 
   componentDidMount(){
     axios.get('http://localhost:1202/placement_status')
     .then(response => {
          console.log(response)
          this.setState({jobapplicationstatus: response.data})
     })
     
   }
     

  render() {
    return (
      <Container id="container-fluid" >
<br></br>
<ul>
       <li><h5>APPLIED JOBSEEKERS | SKILLS EVALUATION | <label class="text-primary">
          PLACEMENT STATUS </label></h5>
       </li>
       </ul>
           
           <div class="row">
             <div class="col-2">
       <label class="head" style={{fontSize:"18px"}}><u><b>Web developer</b></u></label>
       </div> 
      
       <div class="col">
     <h6 class="head" style={{fontSize:"17px"}}>Shortlisted Candidates:<label class="text-danger"> 10 </label></h6>
      </div>
 
      <div class="col-2">
      <h6 class="head" style={{fontSize:"17px"}}>Screening Candidates:<label class="text-danger"> 40 </label></h6>
  
      </div>
      <div class="col-2">
      <h6 class="head" style={{fontSize:"17px"}}> Candidates Applied:<label class="text-danger"> 80 </label></h6>
  
      </div>
      <div class="col-2">
      <h6 class="head" style={{fontSize:"17px"}}>Rejected Candidates:<label class="text-danger"> 10 </label></h6>
  
      </div>
 
      <div class="col-2">
    
      
     <Button color="info" id="togglerOne" style={{ marginTop: '1rem',float:"right" }}>  
                                        +
                 </Button>  
             
      </div>
<hr></hr>
            
     
      
       </div>
   
       <div className="head">
       <div className="scrollbar">
        <UncontrolledCollapse toggler="#togglerOne">  
               <Card class="card" style={{size:"50px"}}>  
                     <CardBody class="card" style={{size:"50px"}}>  
  
  {this.state.jobapplicationstatus.map((jobapplication, i) => (
                       


                       
        <div className="container"  >
        
    
           <div class="row">
           <div class="col">
    
       
       
        </div>
        <div className="border border-dark rounded-lg" >
        <div class="row h-6">
 
        <div class="col">
          
     
     <label>{jobapplication.user_name}</label>
     </div>
   
       <div class="col">
       <h6><b>Average Test Score:<label class="text-danger">{jobapplication.average_testscore}</label> </b></h6>
         </div>
      <div class="col sm-2">
      <h6><b>Round Status:<label class="text-success">{jobapplication.round_status} </label></b></h6>
         
         
         </div>
      <div class="col-3">
      
  <Modal/>
                

  </div>

 
  </div>
  
  <br></br>

        </div>
        
        </div>
        
        </div>    
        ))
    }
        

    
        
                         </CardBody>  
                         
      

                    </Card >  
                    
                     </UncontrolledCollapse>  
                     </div>
              </div>

                      
              <div class="row">
             <div class="col">
       <label class="head" style={{fontSize:"18px"}}><u><b>Inter Data Scientist</b></u></label>
       </div> 
      
     <div class="col">
     <h6 class="head" style={{fontSize:"17px"}}>Shortlisted Candidates:<label class="text-danger"> 10 </label></h6>
      </div>
 
      <div class="col">
      <h6 class="head" style={{fontSize:"17px"}}>Screening Candidates:<label class="text-danger"> 20 </label></h6>
  
      </div>
      <div class="col">
      <h6 class="head" style={{fontSize:"17px"}}> Candidates Applied:<label class="text-danger"> 50 </label></h6>
  
      </div>
      <div class="col">
      <h6 class="head" style={{fontSize:"17px"}}>Rejected Candidates:<label class="text-danger"> 10 </label></h6>
  
      </div>
 
      <div class="col">
    
      
     <Button color="info" id="toggler" style={{ marginTop: '1rem',float:"right" }}>  
                                        +
                 </Button>  
             
      </div>
<hr></hr>
            
     
      
       </div>
   
       <div className="table-wrapper-scroll-y my-custom-scrollbar">
        <UncontrolledCollapse toggler="#toggler">  
               <Card class="card" style={{size:"50px"}}>  
                     <CardBody class="card" style={{size:"50px"}}>  
  
  {this.state.jobapplicationstatus.map((jobapplication, i) => (
                       

        <div className="container"  >
        
    
           <div class="row">
           <div class="col">
    
       
       
        </div>
        <div className="border border-dark rounded-lg" >
        <div class="row h-6">
 
        <div class="col">
          
     
     <label>{jobapplication.user_name}</label>
     </div>
   
       <div class="col">
       <h6><b>Average Test Score:<label class="text-danger">{jobapplication.average_testscore}</label> </b></h6>
         </div>
      <div class="col sm-2">
      <h6><b>Round Status:<label class="text-success">{jobapplication.round_status} </label></b></h6>
         
         
         </div>
 <div class="col-3">
      
 <Modal/>

  </div>


  </div>
  
  <br></br>

        </div>
        
        </div>
        
        </div>    
        ))
    }
        

    
        
                         </CardBody>  
                         
      

                    </Card >  
                    
                     </UncontrolledCollapse>  
              </div>



      </Container>
     
    );
    
  }
}

export default PlacementStatusComponent;



