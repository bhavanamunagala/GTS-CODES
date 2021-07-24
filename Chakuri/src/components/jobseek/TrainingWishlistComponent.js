import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faTrash,faEdit,faUpload} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { Button } from '@material-ui/core';
import './ProfileView.css'


//import Space from 'react-spaces';
class TrainingWishlistComponent extends Component {
     render() {
      const errorMessageStyles = {
        //backgroundColor: "#f0f",
        //fontSize: someSize,
        color: "#ff4d4d",
        //padding: paddings
    }
         return (          
            <div className="container">
              <div className="scrol" >
              <div className="container" id="example" style={{paddingRight:"32px" }}>
                <form>
                  <label>Select the area you want to choose</label><br></br>
                  <input type="text"></input>
                  <label>Describe the wish in detail</label>
                  <textarea></textarea>
                  </form>
                </div>
                </div>

              
             </div>
         )
     }
 }
 const bgImage = {
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};
const successMessageStyles = {
  //backgroundColor: "#f0f",
  //fontSize: someSize,
  color: "#008000",
  //padding: paddings
   marginLeft: '-25%'};
 export default TrainingWishlistComponent;