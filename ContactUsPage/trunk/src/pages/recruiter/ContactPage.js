import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Typography,Grid,Button} from '@material-ui/core';
import Image from '../images/contact.jpg'
import Image2 from '../images/google.jpg'
import ContactComponent from '../../components/recruiter/ContactComponent';
import RoomIcon from '@material-ui/icons/Room';
import MailIcon from '@material-ui/icons/Mail';
import ScheduleIcon from '@material-ui/icons/Schedule';

 class ContactPage extends Component {

    render() {
      
        return (
            <div>
       <br></br>
       <Grid container spacing={2}>
           <Grid item xs={1}>
               <Typography variant="h6"style={{paddingLeft:"100px",width:"400px",fontWeight:600}}> Company Name</Typography>
           </Grid>
           <Grid item xs={1}>
               <Typography style={{paddingLeft:"200px",fontWeight:600}}> Home</Typography> 
                </Grid>
                <Grid item xs={1}>
                    <Typography style={{paddingLeft:"200px",fontWeight:600,width:"400px"}}> Why Us</Typography> 
                    </Grid>
                    <Grid item xs={1}>
                        <Typography style={{paddingLeft:"200px",fontWeight:600}}> Services</Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography style={{paddingLeft:"200px",fontWeight:600}}> Gallery</Typography> 
                             </Grid>
                             <Grid item xs={1}>
                                 <Typography style={{paddingLeft:"200px",fontWeight:600}}> Team</Typography> 
                                  </Grid>
                                   <Grid item xs={1}>
                                        <Typography style={{paddingLeft:"200px",fontWeight:600}}> Blog</Typography> 
                                       </Grid>
                                        <Grid item xs={1}>
                                            <Typography style={{paddingLeft:"200px",fontWeight:600}}> Contact</Typography> 
                                         </Grid>
                                          <Grid item xs={1}>
                                              <Typography style={{paddingLeft:"200px",width:"400px",fontWeight:600}}>
                                  <Button  style={{backgroundColor:"#ff9800",color:"white"}}variant="contained" >
                                       About us
                                       </Button>
                                       </Typography> 
                                        </Grid>
                                        </Grid>
                                 <br></br>
                           <img style={{width:"90%",height:"200px",paddingLeft:"100px"}} src={Image} alt="image" />
                               <br></br><br></br>
                               <Grid container spacing={1}>
                                   <Grid item xs={6}>
                                        <img style={{width:"100%",height:"200px",paddingLeft:"200px"}} src={Image2} alt="image" />
                                         </Grid>
                                         <Grid item xs={1}>
                                              <Typography style={{paddingLeft:"200px",fontWeight:600,width:"500px"}}>  <RoomIcon  style={{color:"#ff9800"}}></RoomIcon> 
                                         Address</Typography> 
                                          <Typography style={{paddingLeft:"200px",width:"500px"}}>Kawaran Bazar</Typography> 
                                            <br></br>
                                             <Typography style={{paddingLeft:"200px",fontWeight:600,width:"500px"}}> 
                                               <MailIcon  style={{color:"#ff9800"}}></MailIcon> E-mail</Typography> 
                                            <Typography style={{paddingLeft:"200px",width:"500px"}}>company@gmail.com</Typography> 
                                          <br></br>
                                          <Typography style={{paddingLeft:"200px",fontWeight:600,width:"400px"}}> <ScheduleIcon  style={{color:"#ff9800"}} ></ScheduleIcon>Office Time</Typography> 
                                            <Typography style={{paddingLeft:"200px",width:"500px"}}>Mon -Fri 10-7pm</Typography> 
                                           <br></br>
                                           <Button  style={{backgroundColor:"#ff9800",color:"white",marginLeft:"200px",width:"200px"}}variant="contained" >
                                      Download Doc
                                         </Button>
                                                 <br></br>
                                                   <br></br>
                                    <Button  style={{backgroundColor:"#ff9800",color:"white",marginLeft:"200px",width:"200px"}}variant="contained" >
                                           Download Pdf
                                             </Button>
                                         </Grid>
                                           </Grid>
                                    <Typography style={{paddingLeft:"350px",fontWeight:600}}>Send Your Message</Typography> 
                             <Grid container spacing={1}>
                                 <Grid item xs={5}>
                                     <ContactComponent/>
                                </Grid>
                                 <Grid item xs={6}>
                                       </Grid>
                    </Grid>
            </div>
        )
    }
}
export default ContactPage;