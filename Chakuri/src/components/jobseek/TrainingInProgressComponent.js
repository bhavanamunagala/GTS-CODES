import React, { Component } from 'react';
import TrainingSlider from './TrainingSlider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faTrash,faEdit,faUpload, faUserCircle, faChevronCircleDown,faChevronCircleRight} from '@fortawesome/free-solid-svg-icons';
import SimpleRating from './trainingRatings';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Expand from 'react-expand-animated';

class TrainingInProgressComponent extends Component
{  
   
        state = { open: false };
        state= {shown: true}
        toggle1 = () => {
            
          this.setState(prevState => ({ open: !prevState.open }));
        }

        state = { open: true };
        state= {shown: false}
        toggle2 = () => {
            this.setState(prevState => ({ open: !prevState.open }));
          }
    render() 
    {
        return(
            
            <div>
                
                 {/*main menu */}
             <div>
            </div> {/*main menu end*/}
             {/*company details start*/}
            <PerfectScrollbar>
      <div className="container align-items-center">
             <div className='mt-3'>
                <div className="border border-dark" >
                                          
                <div class="row">
                <label class="ml-5 mt-3"> <FontAwesomeIcon icon={faChevronCircleRight} size="2x"/></label>  
                             <div class="border border-dark ml-2 mt-3" style={{width: "72px", height:"70px"}}>
                                <img src={process.env.PUBLIC_URL + "/pythonimg.png"}/>
                              </div>
                          <div class="col">
                          
                               <h6 class="mb-3 offset-6"><b>Learn Python Fundamentals</b></h6>
                            </div>
                               <div class="col">
                          <label class="offset-6 font-weight-bold">Date posted:</label>
                         </div>
                         <div class="col">
                           <label class="font-weight-bold">Date applied:</label>
                            </div>
                 </div>
                 <div class="row offset-2">
                     <p>We are pleased to announce that the we are holding a training session for undergraduate and post graduate in Python</p>
                </div>                           
             <div className="container">
                <div class="col offset-4">
                        <label class="font-weight-bold">Lectures attended:</label><br/>
                        <label class="font-weight-bold">Assignments Completed:</label><br/>
                        <label class="font-weight-bold">Trainer Test Score:</label><br/>
                        <label class="font-weight-bold">Proficiency Score in:</label><br/>
                        
                </div>
                <div>
                    <p class="offset-2">We suggest to take the following courses below to advance upon your skill Proficiency:</p>
                    <div class="border border-dark pt-4" height="50px" >
                    <div class="container">
                            <TrainingSlider/>
                            </div>
                         </div>
                </div>
                <div>
                    <SimpleRating/>
                </div>
           </div>


           <div class="row py-3" >
             <div class="col col-sm offset-9 ">
             <button type="submit"  class="btn btn-primary btn-sm rounded-pill px-xl-5">Submit</button>
             </div>
             </div>
               
               </div>
            </div>
        </div>

        <div className="container align-items-center">
             <div className='mt-3'>
                <div className="border border-dark" >

                               
                <div class="row">
                <label class="ml-5 mt-3"  onClick= {() => {this.toggle1(); this.setState({clicked: !this.state.clicked})}} > 
                {
                    this.state.clicked? <FontAwesomeIcon icon={faChevronCircleDown} size="2x"/>: <FontAwesomeIcon icon={faChevronCircleRight} size="2x"/>
    
                } </label>  
                             <div class="border border-dark ml-2 mt-3" style={{width: "70px", height:"50px"}}>
                             <img src={process.env.PUBLIC_URL + "/sqlimg.png"}/>
                              </div>
                          <div class="col">
                               <h6 class="mb-3 offset-4"><b>Learn Basics of Database Managemnet</b></h6>
                            </div>
                               <div class="col">
                          <label class="offset-6 font-weight-bold">Date posted:</label>
                         </div>
                         <div class="col">
                           <label class="font-weight-bold">Date applied:</label>
                            </div>
                 </div>
                 <div class="offset-2">
                     <p>We are pleased to announce that the we are holding a training session for undergraduate and post graduate in Python</p>
                </div>  
                <Expand open={this.state.open}>
                            
                            <div className="container">
                                <div class="col offset-4">
                                    <label class="font-weight-bold">Lectures attended:</label><br/>
                                        <label class="font-weight-bold">Assignments Completed:</label><br/>
                                        <label class="font-weight-bold">Trainer Test Score:</label><br/>
                                        <label class="font-weight-bold">Proficiency Score in:</label><br/>
                                 </div>
                            </div>
                                <div>
                                    <SimpleRating/>
                                 </div>
                                 <div class="row py-3" >
                                    <div class="col col-sm offset-9 ">
                                    <button type="submit"  class="btn btn-primary btn-sm rounded-pill px-xl-5" >Submit</button>
                                    </div>
                                 </div>
                            </Expand>                         
              </div>
              </div> 
              </div>

        <div className="container align-items-center">
             <div className='mt-3'>
                <div className="border border-dark" >

                               
                <div class="row" >
                <label class="ml-5 mt-3"  onClick= {() => {this.toggle2(); this.setState({clicked: !this.state.clicked}); this.setState({shown: !this.state.shown})}} > 
                {   this.state.clicked? <FontAwesomeIcon icon={faChevronCircleDown} size="2x"/>: <FontAwesomeIcon icon={faChevronCircleRight} size="2x"/> } 
                {/* this.state.shown ? toggleContent-open : toggleContent-closed*/}
                 </label>  
                             <div class="border border-dark ml-2 mt-3" style={{width: "70px", height:"60px"}}>
                             <img src={process.env.PUBLIC_URL + "/javaimg.png"}/>
                              </div>
                          <div class="col">
                               <label class="mb-3 offset-4"><b>Intoduction to Java Programming</b></label>
                            </div>
                               <div class="col">
                          <label class="offset-6 font-weight-bold">Date posted:</label>
                         </div>
                         <div class="col">
                           <label class="font-weight-bold">Date applied:</label>
                            </div>
                            <div class="offset-2">
                                <p>We are pleased to announce that the we are holding a training session for undergraduate and post graduate in Python</p>
                            </div>
                            <Expand open={this.state.close}>
                            
                            <div className="container">
                                <div class="col offset-4">
                                    <label class="font-weight-bold">Lectures attended:</label><br/>
                                        <label class="font-weight-bold">Assignments Completed:</label><br/>
                                        <label class="font-weight-bold">Trainer Test Score:</label><br/>
                                        <label class="font-weight-bold">Proficiency Score in:</label><br/>
                                 </div>
                            </div>
                                <div>
                                    <SimpleRating/>
                                 </div>
                                 <div class="row py-3" >
                                    <div class="col col-sm offset-9 ">
                                    <button type="submit"  class="btn btn-primary btn-sm rounded-pill px-xl-5">Submit</button>
                                    </div>
                                 </div>
                            </Expand> 
                 </div>
                                        
              </div>
              
              </div> 
             
            </div>
            </PerfectScrollbar>   
        </div>
        
        );
    }
    
}
 
export default TrainingInProgressComponent;