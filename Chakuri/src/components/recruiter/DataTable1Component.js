
import React, { Component } from 'react';
import { Table , Button, Col, Container, Row } from 'react-bootstrap';
// import PopUp from './PopUp';

const dataTable = {
  list:[
    {
      id: 1,
      Name: "Kushal Rao",
      Experience: {
        HTML: "3Y 2M",
        CSS: "3Y 2M",
        JS: " 3Y 2M "
      },
      Results: {
        HTML: "7/10",
        CSS: "9/10",
        JS: " 6/10 "
      },
      Salary: "-NIL-"
    },
    {
      id: 2,
      Name: "Lata Aurora",
      Experience: {
        HTML: "1Y 2M",
        CSS: "1Y 2M",
        JS: " 1Y 2M "
      },
      Results: {
        HTML: "8/10",
        CSS: "8/10",
        JS: " 6/10 "
      },
      Salary: "-NIL-"
    },
    {
      id: 3,
      Name: "Tanay Agarwal",
      Experience: {
        HTML: "0Y 6M",
        CSS: "0Y 6M",
        JS: " 0Y 6M "
      },
      Results: {
        HTML: "7/10",
        CSS: "7/10",
        JS: " 8/10 "
      },
      Salary: "1.2LPA"
    },
    {
      id: 4,
      Name: "Yogesh Rao",
      Experience: {
        HTML: "2Y 6M",
        CSS: "2Y 6M",
        JS: " 2Y 6M "
      },
      Results: {
        HTML: "10/10",
        CSS: "6/10",
        JS: " 6/10 "
      },
      Salary: "2.4LPA"
    },
    {
      id: 5,
      Name: "Sunita Sankar",
      Experience: {
        HTML: "1Y 0M",
        CSS: "1Y 0M",
        JS: " 1Y 0M "
      },
      Results: {
        HTML: "8/10",
        CSS: "7/10",
        JS: " 7/10 "
      },
      Salary: "-NIL-"
    },
    {
      id: 6,
      Name: "Arun Thaman",
      Experience: {
        HTML: "5Y 1M",
        CSS: "5Y 1M",
        JS: " 5Y 1M "
      },
      Results: {
        HTML: "7/10",
        CSS: "8/10",
        JS: " 6/10 "
      },
      Salary: "3.6LPA"
    },
    {
      id: 7,
      Name: "Jawahar Sanghvi",
      Experience: {
        HTML: "2Y 4M",
        CSS: "2Y 4M",
        JS: " 2Y 4M "
      },
      Results: {
        HTML: "9/10",
        CSS: "8/10",
        JS: " 7/10 "
      },
      Salary: "1.2LPA"
    },
    {
      id: 8,
      Name: "Satishwar Chaudhry",
      Experience: {
        HTML: "0Y 8M",
        CSS: "0Y 8M",
        JS: " 0Y 8M "
      },
      Results: {
        HTML: "7/10",
        CSS: "10/10",
        JS: " 7/10 "
      },
      Salary: "1.2LPA"
    },
    {
      id: 9,
      Name: "Rita Krishna Murthy",
      Experience: {
        HTML: "4Y 4M",
        CSS: "4Y 4M",
        JS: " 4Y 4M "
      },
      Results: {
        HTML: "9/10",
        CSS: "10/10",
        JS: " 9/10 "
      },
      Salary: "2.4LPA"
    },
    {
      id: 10,
      Name: "Naseer Mittal",
      Experience: {
        HTML: "3Y 3M",
        CSS: "3Y 3M",
        JS: " 3Y 3M "
      },
      Results: {
        HTML: "7/10",
        CSS: "10/10",
        JS: " 9/10 "
      },
      Salary: "-NIL-"
    }
]
}

export default class DataTable1 extends Component{
  render() {
    return(
      <Table hover bordered responsive className="table-wrapper-scroll-y my-custom-scrollbar" style={{"font-size":"14px"}}>
      <Container hover bordered responsive className=" border border-bottom-0 border-dark text-center" style={{"font-size":"14px"}}>
          <Row className="border-bottom border-dark">
              <Col xs={2} className="border-right border-dark">Name of the jobseekers</Col>
              <Col xs={3} className="border-right border-dark">
                  <Row className="border-bottom border-dark">Years of experience</Row>
                  <Row>
                      <Col className="border-right border-dark">HTML</Col>
                      <Col className="border-right border-dark">CSS</Col>
                      <Col>Javascript</Col>
                  </Row>
              </Col>
              <Col xs={3} className="border-right border-dark">
                  <Row className="border-bottom border-dark">Proficiency Results</Row>
                  <Row>
                      <Col className="border-right border-dark">HTML</Col>
                      <Col className="border-right border-dark">CSS</Col>
                      <Col>Javascript</Col>
                  </Row>
              </Col>
              <Col className="border-right border-dark">Current Salary</Col>
              <Col>Select Candidates</Col>
              <Col>Recommend Training</Col>
              <Col></Col>
          </Row>
          {
            dataTable.list.map((get)=>(
              <Row className="border-bottom border-dark">
                <Col xs={2} className="border-right border-dark">{get.Name}</Col>
               
                  <Col className="border-right border-dark">{get.Experience.HTML}</Col>
                  <Col className="border-right border-dark">{get.Experience.CSS}</Col>
                  <Col className="border-right border-dark">{get.Experience.JS}</Col>
               
                <Col className="border-right border-dark">{get.Results.HTML}</Col>
                <Col className="border-right border-dark">{get.Results.CSS}</Col>
                <Col className="border-right border-dark">{get.Results.JS}</Col>
                <Col className="border-right border-dark">{get.Salary}</Col>
                <Col><input type="checkbox" /></Col>
                <Col><input type="checkbox" /></Col>
                <Col><Button type="submit">
                <div class="container">
            <Button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
            Inform Candidate
            </Button>
            <div class="modal fade" id="myModal">
              <div class="modal-dialog modal-sm">
                <div class="modal-content">
                  <div class="modal-header">
            <h4 class="modal-title"><Col>{get.Name}</Col></h4>
                    <Button type="button" class="close" data-dismiss="modal">&times;</Button>
                  </div>
                  <div class="modal-body">
                    Modal body..
                  </div>
                  <div class="modal-footer">
                    <Button type="button" class="btn btn-secondary" data-dismiss="modal">Close</Button>
                  </div>
                  
                </div>
              </div>
            </div>
            
          </div>
                </Button></Col>
              </Row>
            ))
          }
      </Container>
      </Table>
    );
  };
};

