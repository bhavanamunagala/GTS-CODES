import React   from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faAppleAlt,faPlay} from '@fortawesome/free-solid-svg-icons'
//import {Link } from 'react-router-dom';

 function Footer() {

        return (
            <FooterContainer className="main-footer">
                <div className="footer-middle">
                     <div className="container-fluid">
                            <div className ="row">
                                <div className="col-md-3 ">
                            
                                <h5><a  href="#" class="badge text-white " >Job By Location :</a></h5>
                                   <ul className ="list-unstyled">
                                <h3> <p> <a href="#"class="text-white " >Job By Location</a> </p></h3>
                                  <p><a href="#" class=" text-white" >Job in Bangalore</a></p>
                                  <p><a href="#" class=" text-white" >Job in Chennia</a></p>   
                                  <p><a href="#" class=" text-white" >Job in Kerala</a></p>  
                                  <p><a href="#" class=" text-white" >Job in Delhi</a></p> 
                                  <p><a href="#" class=" text-white" >Job in Mumbia</a></p>   
       </ul> 
                                </div>

                                <div className="col-md-3 ">
                                
                                  <ul className ="list-unstyled">
                                    <h5><a href="#" class="badge text-white" >Popular Searches :</a></h5> 
                                    <li><p><a href="#" class=" text-white" >Data Analytics in Bangalore</a></p></li> 
                                    <li><p><a href="#" class=" text-white" >Front End Developer in Mumbai</a></p></li>   
                                    <li><p><a href="#" class=" text-white" >Truck Drivers in Rajasthan</a></p></li>  
                                    <li><p><a href="#" class=" text-white" >Business Consultants in Delhi</a></p></li> 
                                    <li><p><a href="#" class=" text-white" >Supply chain Manager in Kerala</a></p></li>  
      </ul> 
                                </div>

                                <div className="col-md-3 ">
                                
                                   <ul className ="list-unstyled">
                                   <h5><a href="#" class="badge text-white" >More in Chakuri :</a></h5> 
                                    <li><p><a href="#" class=" text-white" >About Us</a></p></li> 
                                    <li><p><a href="#" class=" text-white" >Privacy and Policy</a></p></li>   
                                    <li><p><a href="#" class=" text-white" >FAQ</a></p></li>  
                                    <li><p><a href="#" class=" text-white" >Terms and Conditions</a></p></li> 
                                    <li><p><a href="#" class=" text-white" >Feedback</a></p></li> 
    </ul>
                                </div>
                        
                                <div className="col-md-3 ">
                                
                                  <ul className ="list-unstyled">
                                  <h5><a  class=" badge text-white" >Contact Us :</a></h5> 
                                    <li><p><a href="#" class=" text-white" >chakuricustomercare@gmail.com</a></p></li> 
                                    <li><p><a href="#" class=" text-white" >+91 33 67133010</a></p></li>   
                                  <li> <p><a  href="#" class="fb-ic  text-white"><i class="fab fa-facebook-f fa-lg white-text mr-3"> </i>Facebook</a></p></li>
                                  <li> <p><a href="#" class="tw-ic text-white"><i class="fab fa-twitter fa-lg white-text mr-3"> </i>Twitter</a></p></li>
                                  <li>  <p><a  href="#" class="ins-ic text-white"><i class="fab fa-instagram fa-lg white-text mr-3"> </i>Instagram</a></p></li>
                                  <li>  <p> <a  href="#" class="li-ic text-white"><i class="fab fa-linkedin-in fa-lg white-text mr-3"> </i>linkedin</a></p></li>
                                    

                                    {/*<li><p><a href="#" class="badge text-white" ><FontAwesomeIcon icon={faPlay}/>Facebook</a></p></li> 
                                    <li><p><a href="#" class="badge text-white" ><FontAwesomeIcon icon={faPlay}/>Twitter</a></p></li> 
                                    <li><p><a href="#" class="badge text-white" ><FontAwesomeIcon icon={faPlay}/>Instagram</a></p></li> 
        <li><p><a href="#" class="badge text-white" ><FontAwesomeIcon icon={faPlay}/>Youtube</a></p></li> */}
  </ul>
                                </div>
                        
                             </div>{/* row */}
                  
                   <div class="container-fluid">
                                  <div className="row ">
                                             <div class="col  ">
                                                 <h4 class="text-white">Get it on your mobile phone on</h4>
                                            </div>
                                            <div class="col-2">
                                            <img src="https://www.medsurety.com/wp-content/uploads/2019/09/apple-store-button.png" 
             class="img"  alt="Responsive Image" width="130"  height="200"
              /> 
                                                   {/* <div className="button">
                                                   <a  href="#" class=" btn btn-dark li-ic text-white"><i class="fab fa-apple fa-lg white-text mr-3"> </i>Download on the App store</a>
                                                   <a href ="#" class="btn btn-dark "><FontAwesomeIcon icon={faAppleAlt}/>Download on the App store</a>
                                                   </div>*/}
                                             </div>
                                                     
                                              <div class="col-1  mb-0 ">
                                                <h1 class="text-white text-center">OR</h1>
                                              </div>

                                             <div class="col">
                                             <img src="https://ridesharetax.com.au/wp-content/uploads/Get_it_on_Google_play.png" 
             class="img-fluid"  alt="Responsive Image" 
             width="150"  height="230" /> 
                                        
                                            
                                             
                                                {/* <div className="button">
                                                  <a href ="#" class="btn btn-dark "><FontAwesomeIcon icon={faPlay}/>Get it on Google Pay</a>
                                                 </div>*/}
                                             </div>
                                  

                                             <div className=" col text-right">
                                               <p className="text ">
                                               &copy;CHAKURI 2020
                                                </p>
                                              </div>

                                                        {/*Footer Bottom 
                                            <div className=" col footer-bottom text-right">
                                               <p className="text bg-success">
                                               &copy;CHAKURI 2020
                                                </p>
                                              </div>
                                                        */}
                    </div>
                 </div>
                                       
                         </div> {/*container */}
                
                </div>{/*Footer Midder */}
            
            </FooterContainer>
        );
    
}
export default Footer;

const FooterContainer = styled.footer`
.footer-middle
{
    background: #007bff;
    padding -top:6rem;
    color: #fff;
    
}
.footer-bottom{
    padding-top: 3rem;
    padding-bottom: 2rem;
}

`;