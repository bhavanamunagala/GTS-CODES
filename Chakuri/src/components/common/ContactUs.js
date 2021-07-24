import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import {faWhatsapp,faFacebook,faTwitter,faLinkedin} from "@fortawesome/free-brands-svg-icons";
import Header from '../Header';
import Footer1 from '../Footer';


class ContactUs extends React.Component {
  render(){
    return(
      <div>
        <Header />
        <div class="mt-4"></div>
        <div class="inline"><img src="/image/goraitech.jpg" alt="pic" class="iconStyles" style={{textAlign: "center" , position: "absolute", left: "480px" }} width="90px" /></div>
        <div class="inline"><h2 style={{textAlignVertical: "center",textAlign: "center"}}><u>CONTACT US</u></h2></div>
        <div class="mt-5"></div>
        <div class="row" style={{textAlignVertical: "center",textAlign: "center"}}>
          <div class="col">
              <h3><u>SOCIAL NETWORKS</u></h3>
              <table class="table table-borderless">
                <tr>
                  <td><i class="fab fa-facebook-square fa-2x">&nbsp;<a href="https://www.facebook.com/GoraiGlobalTechnology/">Facebook</a></i></td>
                </tr>
                <tr>
                  <td><i class="fab fa-whatsapp fa-2x">&nbsp;<a href="www.whatsapp.com">Whatsapp</a></i></td>
                </tr>
                <tr>
                  <td><i class="fab fa-twitter fa-2x">&nbsp;<a href="www.twitter.com">Twitter</a></i></td>
                </tr>
                <tr>
                  <td><i class="fab fa-linkedin-in fa-2x">&nbsp;<a href="https://www.linkedin.com/company/gorai-technology-solutions">LinkedIn</a></i></td>
                </tr>
                <tr>
                  <td style={{fontSize:25}}><u>CALL US</u><p>+91 33 67133010</p></td>
                </tr>
              </table>
          </div>
          <div class="col text-left md-6">
            <h3><u>EMAIL US</u></h3>
            <form class="form-group" class="mb-3" action="mailto:chakuricustomercare@gmail.com" method="post" enctype="text/plain">
              <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" placeholder="Enter Name" size="50"></input>
              </div>
              <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" placeholder="Enter Email"></input>
              </div>
              <div>
                <label>Contact Number</label>
                <input type="text" class="form-control" placeholder="Enter Phone number"></input>
              </div>
              <div>
                <label>Message</label>
                <input type="text" class="form-control" placeholder="Enter Message"></input>
              </div>
              <div>
                <button type="submit" class="btn btn-primary">Send</button>
              </div>
            </form>
          </div>
        </div>
        <Footer1 />
      </div>
        
    );
  }
}
export default ContactUs;