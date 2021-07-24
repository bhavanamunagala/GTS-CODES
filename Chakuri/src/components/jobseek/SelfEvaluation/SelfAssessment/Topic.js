import React, { Component } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class Topic extends Component {
    render() {
        return <Accordion style={{ border: "1px solid lightgray", backgroundColor: "#ffffff" }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header" style={{ margin: "0px" }}>
                <Typography style={{ margin: "0px" }}>
                    <div class="row" style={{ width: "54em" }}>
                        <div class="col-4">
                            <p style={{ margin: "0px" }}><b>String Manipulation</b></p>
                        </div>
                        <div class="col-4">
                            <p style={{ margin: "0px" }}><b>No. of Attempts: 3</b></p>
                        </div>
                        <div class="col-4">
                            <p style={{ margin: "0px" }}><b>Average Score: 5.5/10</b></p>
                        </div>
                    </div>
                </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ height: "9.7em", margin: "0px", overflowY: "scroll", overflowX: "hidden", backgroundColor: "#ffffff"}}>
                <Typography style={{width: "100%"}}>
                    <table class="table table-bordered table-sm table-hide">

                        <tbody>
                            <tr>
                                
                                <th>Attempt #1</th>
                                <td>Your Score: 5/10</td>
                                <td><button class="badge badge-pill badge-primary">View</button></td>
                            </tr>
                            <tr>
                                
                                <th>Attempt #2</th>
                                <td>Your Score: 4/10</td>
                                <td><button class="badge badge-pill badge-primary">View</button></td>
                            </tr>
                            <tr>
                                
                                <th>Attempt #3</th>
                                <td>Your Score: 7/10</td>
                                <td><button class="badge badge-pill badge-primary">View</button></td>
                            </tr>
                        </tbody>
                    </table>

                </Typography>
            </AccordionDetails>
        </Accordion>;
    }
}

export default Topic;