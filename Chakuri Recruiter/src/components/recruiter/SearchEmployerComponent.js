

import React, { Component } from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import axios from "axios";
import  '../recruiter/style.css';

import {
 Container,
 Grid,
 Slider,
 AppBar,
 Paper,
 FormLabel,
 Button,
 Select,
 Input,
 Checkbox,
 ListItemText,
 MenuItem,
 FormControl,
 Chip,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

class SearchEmployerComponent extends Component {
 constructor(props) {
 super(props);
 this.state = {
 employers: [],
 modalOpen: false,
 dimmer: undefined,
 value:20,
 rangeVal: [0, 10],
 yearVal: [0, 10],
 skills: [],
 chipData: [],
 industries: [],
 chipData:[],
 locations: [],
 chipData:[],
 companies: [],
 chipData:[],
 
 // account: "Activated",
 search: "",
 message: "",
 loading: false,
 currentPage: 0,
 };

 this.cancel = "";
 this.updateSkillsOption = this.updateSkillsOption.bind(this);
 }

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
 employers: res.data,
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

 
 updateSkillsOption = (event) => {
 this.setState({
 search: event.target.value,
 skills: event.target.value,
 });
 };

 updateIndustriesOption = (event) => {
 this.setState({
 industries: event.target.value,
 });
 };

 updateLocationsOption = (event) => {
 this.setState({
 locations: event.target.value,
 });
 };

 updateCompanyOption = (event) => {
 this.setState({
 search: event.target.value,
 companies: event.target.value,
 });
 };

 //search
 handleOnInputChange = (event) => {
 let search = event.target.value.substr(0, 20);
 this.setState({ search: search, loading: true, message: "" });
 };

 //pagination
 handleClick(e, index) {
 e.preventDefault();
 this.setState({
 currentPage: index,
 });
 }

 render() {
 //search

 const { search } = this.state;

 //pagination
 const { currentPage } = this.state;
 this.pageSize = 5;
 this.pagesCount = Math.ceil(this.state.employers.length / this.pageSize);
 console.log("this.pagesCount");
 console.log(this.pagesCount, this.state.employers.length);

 const currentPosts = this.state.employers
 .filter((data) => {
 return (
 data.UserName.toString()
 .toLowerCase()
 .includes(this.state.search.toString().toLowerCase()) ||
 data.CompanyName.toString()
 .toLowerCase()
 .includes(this.state.search.toString().toLowerCase())
 );
 })
 .slice(currentPage * this.pageSize, (currentPage + 1) * this.pageSize);

 //Skills
 const skillsOptions = [
 "C++",
 "C#",
 "Java",
 "Javascript",
 "pearl",
 "PHP",
 "Python",
 "Swift",
 "GO",
 "Ruby",
 "R",
 "Sql",
 "Cokking",
 "Teaching",
 "Supply Chain",
 "Accountant",
 ];

 //Industry
 const industriesOptions = [
 "IT/Computers - Software",
 "Banking/Accounting/Financial Services ",
 "Recruitment/Staffing/RPO",
 "IT/Computers - Hardware & Networking ",
 "Banking/Accounting/Financial Services",
 "Telecom",
 "Internet/E-Commerce",
 "Education",
 "Construction & Engineering Jobs",
 "Hospitals/Healthcare/Diagnostics",
 "Machinery/Equipment Mfg.",
 "FMCG Jobs",
 "Electronics Manufacturing",
 "Automotive/Automobile/Ancillaries",
 "Insurance",
 "Accountant",
 ];

 //location
 const locationOptions = [
 "Andhra Pradesh",
 "Arunachal Pradesh",
 "Assam",
 "Bihar",
 "Chhattisgarh",
 "Goa",
 "Gujarat",
 "Haryana",
 "Himachal Pradesh",
 "Jammu and Kashmir",
 "Jharkhand",
 "Karnataka",
 "Kerala",
 "Madhya Pradesh",
 "Maharashtra",
 "Manipur",
 "Meghalaya",
 "Mizoram",
 "Nagaland",
 "Odisha",
 "Punjab",
 "Rajasthan",
 "Sikkim",
 "Tamil Nadu",
 "Telangana",
 "Tripura",
 "Uttarakhand",
 "Uttar Pradesh",
 "West Bengal",
 "Andaman and Nicobar Islands",
 "Chandigarh",
 "Dadra and Nagar Haveli",
 "Daman and Diu",
 "Delhi",
 "Lakshadweep",
 "Puducherry",
 ];

 //company
 const companiesOptions = [
 "EFG company",
 "L & T",
 "Wipro",
 "TCS",
 "Cisco",
 "Capgemini",
 "byjus",
 "Tech Mahindrs",
 "HCL company",
 ];

 //pagination

 return (
 <Container id="main-container">
 <AppBar className="header-part">
 
 <div style={{ margin: "30px 0px 0px 20px " }}>
 
 </div>
 </AppBar>
 <Grid container spacing={2}>
 <Grid item xs className="grid-one">
 <Paper className="employer-filters">
 <h3>Skills</h3>
 <FormControl className="skills-form">
 <Select
 labelId="demo-mutiple-checkbox-label"
 id="demo-mutiple-checkbox"
 multiple
 value={this.state.skills}
 onChange={(e) => {
 this.updateSkillsOption(e);
 }}
 input={<Input />}
 renderValue={(selected) => (
 <div
 style={{
 display: "flex",
 flexWrap: "wrap",
 }}
 >
 {selected.map((value) => (
 <Chip key={value} label={value} style={{ margin: 2 }} />
 ))}
 </div>
 )}
 className="skills-option"
 >
 {skillsOptions.map((skill) => (
 <MenuItem key={skill} value={skill}>
 <Checkbox
 checked={this.state.skills.indexOf(skill) > -1}
 />
 <ListItemText primary={skill} />
 </MenuItem>
 ))}
 </Select>
 </FormControl>
 </Paper>

 <Paper className="employer-filters">
 <h3>Industry</h3>
 <FormControl className="industry-form">
 <Select
 labelId="demo-mutiple-checkbox-label"
 id="demo-mutiple-checkbox"
 multiple
 value={this.state.industries}
 onChange={(e) => {
 this.updateIndustriesOption(e);
 }}
 input={<Input />}
 renderValue={(selected) => (
 <div
 style={{
 display: "flex",
 flexWrap: "wrap",
 }}
 >
 {selected.map((value) => (
 <Chip key={value} label={value} style={{ margin: 2}} />
 ))}
 </div>
 )}
 className="industry-option"
 >
 {industriesOptions.map((industry) => (
 <MenuItem key={industry} value={industry}>
 <Checkbox
 checked={this.state.industries.indexOf(industry) > -1}
 />
 <ListItemText primary={industry} />
 </MenuItem>
 ))}
 </Select>
 </FormControl>
 </Paper>
 <Paper className="employer-filters">
 <h3>Location</h3>
 <FormControl className="location-form">
 <Select
 labelId="demo-mutiple-checkbox-label"
 id="demo-mutiple-checkbox"
 multiple
 value={this.state.locations}
 onChange={(e) => {
 this.updateLocationsOption(e);
 }}
 input={<Input />}
 renderValue={(selected) => (
 <div
 style={{
 display: "flex",
 flexWrap: "wrap",
 }}
 >
 {selected.map((value) => (
 <Chip key={value} label={value} style={{ margin: 2 }} />
 ))}
 </div>
 )}
 className="location-option"
 >
 {locationOptions.map((location) => (
 <MenuItem key={location} value={location}>
 <Checkbox
 checked={this.state.locations.indexOf(location) > -1}
 />
 <ListItemText primary={location} />
 </MenuItem>
 ))}
 </Select>
 </FormControl>
 </Paper>
 
 <Paper className="employer-filters">
 <h3>Company</h3>
 <FormControl className="company-form">
 <Select
 labelId="demo-mutiple-checkbox-label"
 id="demo-mutiple-checkbox"
 multiple
 value={this.state.companies}
 onChange={(e) => {
 this.updateCompanyOption(e);
 }}
 input={<Input />}
 renderValue={(selected) => (
 <div
 style={{
 display: "flex",
 flexWrap: "wrap",
 }}
 >
 {selected.map((value) => (
 <Chip key={value} label={value} style={{ margin: 2 }} />
 ))}
 </div>
 )}
 className="company-option"
 >
 {companiesOptions.map((company) => (
 <MenuItem key={company} value={company}>
 <Checkbox
 checked={this.state.companies.indexOf(company) > -1}
 />
 <ListItemText primary={company} />
 </MenuItem>
 ))}
 </Select>
 </FormControl>
 </Paper>
 <Grid>
 </Grid>
</Grid>
 <Grid item xs={9} className="grid-two">
 <p className="h4-searchtext">Enter Name of Employer/Company Name in the Search Bar</p>
 <label className="search-label" html-for="search-input">
 <i class="fa fa-search search-icon" aria-hidden="true"></i>
 <input
 type="text"
 className="search-text"
 action="Search"
 placeholder="Enter Name of Employer/Company Name"
 id="search-input"
 value={search}
 onChange={(e) => this.handleOnInputChange(e)}
 />
 </label>
 {/*<Button className="Btn-style" variant="contained">Search</Button>*/}

 <div className="order-box">
 <span>
 Order By :{" "}
 <Button className="sort-name" onClick={this.data}>
 Employer Name
 </Button>
 <i className="fa fa-arrow-up sort-name" aria-hidden="true"></i>{" "}
 |
 <Button onClick="" className="sort-date">
 Name of Company{" "}
 </Button>
 <i className="fa fa-arrow-up sort-date" aria-hidden="true"></i>{" "}
 |
 <Button className="sort-skill" onclick="">
 Date
 </Button>
 <i className="fa fa-arrow-up sort-skill" aria-hidden="true"></i>
 </span>
 </div>

 <Container className="scrollBar pagination-sec">
 {/* error message */}

 {currentPosts.map((employer, i) => (
 <Grid container spacing={3} className="user-section" key={i}>
 <Grid item xs={1}>
 <i className="fa fa-user-circle" aria-hidden="true"></i>
 </Grid>
 <Grid item xs={5}>
 <Button id="employer-name">{employer.UserName}</Button>
 {
 
 }
 <br />
 <label className="employer-skills">
 {employer.PrimarySkills}
 </label>
 <br />
 <label className="employer-company">
 {employer.CompanyName}
 </label>
 </Grid>
 <Grid item xs={6}>
 <span className="date-sec">Date Joined : </span>
 <span className="job-date">{employer.DateJoined}</span>
 
 <span className="location-sec">Location : </span>
 <span className="job-location">{employer.Location}</span>
 <br />
 <br />
 </Grid>
 </Grid>
 ))}
 </Container>

 <Grid className="pagination-wrapper">
 <Pagination className="pagination-ui" aria-label="Page navigation example">
 <PaginationItem disabled={currentPage <= 0}>
 <PaginationLink
 onClick={(e) => this.handleClick(e, currentPage - 1)}
 previous
 href="#"
 />
 </PaginationItem>

 {[...Array(this.pagesCount)].map((page, i) => (
 <PaginationItem active={i === currentPage} key={i}>
 <PaginationLink
 className="on-link-focus"
 onClick={(e) => this.handleClick(e, i)}
 href="#"
 >
 {i + 1}
 </PaginationLink>
 </PaginationItem>
 ))}

 <PaginationItem disabled={currentPage >= this.pagesCount - 1}>
 <PaginationLink
 onClick={(e) => this.handleClick(e, currentPage + 1)}
 next
 href="#"
 />
 </PaginationItem>
 </Pagination>
 </Grid>
 </Grid>
 </Grid>

 </Container>
 );
 }
}

export default SearchEmployerComponent;

