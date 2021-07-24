
import React, { Component } from 'react';
import { Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ScrollArea from 'react-scrollbar';
import './JobseekerNotificationComponent.css';
import axios from "axios";

class JobseekerNotification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobSeekers: [],
    }
  };
  componentDidMount() {
    if (this.cancel) {
      this.cancel.cancel();
    }
    this.cancel = axios.CancelToken.source();

    axios
      // .get(`https://c5ecb4a1-5afb-4f9d-a00d-748d6d6190de.mock.pstmn.io//Jobseeker/Search`, {})
      .get(`https://api.mocki.io/v1/8beadd94`, {
        cancelToken: this.cancel.token,
      })
      .then((res) => {
        console.warn(res.data);
        const resultNotFoundMsg = !res.data.length
          ? "There are no more search results. Please try new search"
          : "";
        this.setState({
          jobSeekers: res.data,
          message: resultNotFoundMsg,
          loading: false,
        });
      })
      .catch((error) => {
        if (axios.isCancel(error) || error) {
          this.setState({
            loading: false,
            message: "Failed to fetch the data",
          });
          console.log(error);
        }
      });
  }

  render() {
    return (
      <Container id="notification-container" >
        <div className="header-box">
          <Link style={{ color: "#007bff", fontWeight: "bold", textDecoration: "none" }}>JOBSEEKER</Link> | <Link style={{ color: "black", fontWeight: "bold", textDecoration: "none" }}>EMPLOYER</Link> | <Link style={{ color: "black", fontWeight: "bold", textDecoration: "none" }}>ADMIN</Link>
        </div>
        <ScrollArea
          speed={0.8}
          className="main-grid"
          contentClassName="content"
          horizontal={false}
        >
          {this.state.jobSeekers.map((jobSeeker, i) => (
            <div className="jobseeker-grid">
              <Col className="left-part">
                <div> <i className="fa fa-user-circle user-size" aria-hidden="true"></i></div>
              </Col>
              <Col className="right-part" sm={7}>
                <h5>{jobSeeker.UserName} : {jobSeeker.Activity} </h5>
                <p style={{ color: "#484848" }}>Gauri dutt has contacted in you in the message</p></Col>
            </div>
          ))}
        </ScrollArea>
        
      </Container>
    );
  }
}

export default JobseekerNotification;

