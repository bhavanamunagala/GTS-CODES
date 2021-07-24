import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import JobRejected from './JobRejected';



const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function SimpleAccordion(props) {
    const classes = useStyles();

    return (
        <div className="container">
            <Accordion style={{ border: "1px solid lightgray",backgroundColor: "#f1f1f1"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography ><h6>{props.jobCategory} ({props.jobCount}) {props.jobsTitle}{props.jobs}</h6></Typography>
                </AccordionSummary>
                <AccordionDetails style={{height:"28.7em",overflowY: "scroll",overflowX:"hidden",backgroundColor: "#f1f1f1"}}>
                    <Typography>
                        <JobRejected  /><br />
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    );
}


