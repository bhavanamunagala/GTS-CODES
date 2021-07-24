import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Job from '../RecommendedJobs/Job'

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
                        <Job jobTitle="Intel Engineering Internship" jobPosted="17-jun-2020" jobExperience="1-4 Years" jobLocation="Delhi" jobProvider="Intel Corporation" jobDesc="We at Intel are looking to hire fresh new minds! We are looking for those who have experience in C and SQL programming." /><br />
                        <Job jobTitle="Flipkart Recruitment 2020" jobPosted="10-jun-2020" jobExperience="0-4 Years" jobLocation="Bangalore" jobProvider="Flipkart" jobDesc="Greeting! Flipkart is now hosting recruitment drives all over India. Interested participants must arrive at the following venues given below." /><br />
                        <Job jobTitle="Database Manager" jobPosted="21-Jun-2020" jobExperience="0 Years" jobLocation="Chennai" jobProvider="PSTech" jobDesc="..." /><br />
                        <Job jobTitle="Flipkart Recruitment 2020" jobPosted="10-jun-2020" jobExperience="0-4 Years" jobLocation="Bangalore" jobProvider="Flipkart" jobDesc="Greeting! Flipkart is now hosting recruitment drives all over India. Interested participants must arrive at the following venues given below." /><br />
                        <Job jobTitle="Flipkart Recruitment 2020" jobPosted="10-jun-2020" jobExperience="0-4 Years" jobLocation="Bangalore" jobProvider="Flipkart" jobDesc="Greeting! Flipkart is now hosting recruitment drives all over India. Interested participants must arrive at the following venues given below." /><br />
                        <Job jobTitle="Flipkart Recruitment 2020" jobPosted="10-jun-2020" jobExperience="0-4 Years" jobLocation="Bangalore" jobProvider="Flipkart" jobDesc="Greeting! Flipkart is now hosting recruitment drives all over India. Interested participants must arrive at the following venues given below." /><br />
                        <Job jobTitle="Database Manager" jobPosted="21-Jun-2020" jobExperience="0 Years" jobLocation="Chennai" jobProvider="PSTech" jobDesc="..." /><br />
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    );
}


