
import React, { Component } from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";



import './JobseekerSearchComponent.css';
import axios from "axios";
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
// import JobseekerSearchProfile from '../pages/JobseekerSearchProfile';
import { Link } from "react-router-dom";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

class JobseekerSearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobSeekers: [],
      modalOpen: false,
      dimmer: undefined,
      value: 20,
      rangeVal: [0, 10],
      yearVal: [0, 10],
      skills: [],
      chipData: [],
      industries: [],
      locations: [],
      companies: [],
      noticeperiods: [],
      accountstatus: [],
      minSalaryValue: 0,
      maxSalaryValue: 10,
      minYearValue: 0,
      maxYearValue: 10,
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

  updateRange = (e, data) => {
    this.setState({ minSalaryValue: data[0] });
    this.setState({ maxSalaryValue: data[1] });
    this.setState({ rangeVal: data });
  };

  updateYear = (e, data) => {
    this.setState({ minYearValue: data[0] });
    this.setState({ maxYearValue: data[1] });
    this.setState({ yearVal: data });
  };
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
  updateNoticePeriodOption = (event) => {
    this.setState({
      noticeperiods: event.target.value,
    });
  };

  updateAccountOption = (event) => {
    this.setState({
      accountstatus: event.target.value,
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
    this.pagesCount = Math.ceil(this.state.jobSeekers.length / this.pageSize);
    console.log("this.pagesCount");
    console.log(this.pagesCount, this.state.jobSeekers.length);

    const currentPosts = this.state.jobSeekers
      .filter((data) => {
        return (
          data.PrimarySkills.toString()
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
      "Infosys",
      "Capgemini",
      "byjus",
      "Tech Mahindrs",
      "HCL company",
    ];

    //pagination

    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href =
      "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
    document.head.appendChild(styleLink);

    return (
      //  <Container id="main-container">
      //  <AppBar className="header-part">

      //  {/* <div style={{ margin: "30px 0px 0px 20px " }}> */}

      //  {/* </div> */}
      //  </AppBar>
      <Grid container spacing={2}>
        <Grid item xs className="grid-one">
          <Paper className="jobSeeker-filters">
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

          <Paper className="jobSeeker-filters">
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
                      <Chip key={value} label={value} style={{ margin: 2 }} />
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
          <Paper className="jobSeeker-filters">
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
          <Paper className="jobSeeker-filters">
            <h3>Salary (LPA)</h3>
            <Slider
              value={this.state.rangeVal}
              onChange={this.updateRange}
              id="slider-block"
            />
            <FormLabel className="mt-3 min-salary">
              {this.state.minSalaryValue} LPA{" "}
            </FormLabel>
            <FormLabel className="mt-3 float-right max-salary">
              {this.state.maxSalaryValue} LPA{" "}
            </FormLabel>
          </Paper>
          <Paper className="jobSeeker-filters">
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
          <Paper className="jobSeeker-filters">
            <h3>Notice Period</h3>
            <FormControl className="notice-form">
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={this.state.noticeperiods}
                onChange={(e) => {
                  this.updateNoticePeriodOption(e);
                }}
                className="notice-option"
              >
                <MenuItem value={0}>Immediately</MenuItem>
                <MenuItem value={7}>1 Week</MenuItem>
                <MenuItem value={15}>15 Days</MenuItem>
                <MenuItem value={30}>1 Month</MenuItem>
                <MenuItem value={45}>2 Months</MenuItem>
                <MenuItem value={60}>3 Months</MenuItem>
              </Select>
            </FormControl>
          </Paper>
          <Paper className="jobSeeker-filters">
            <h3>Year of Experience</h3>
            <Slider
              value={this.state.yearVal}
              onChange={this.updateYear}
              id="slider-block"
            />
            <FormLabel className="mt-3 min-yr">
              {this.state.minYearValue} Years{" "}
            </FormLabel>
            <FormLabel className="mt-3 float-right max-yr">
              {this.state.maxYearValue} Years{" "}
            </FormLabel>
          </Paper>
        </Grid>

        <Grid item xs={9} className="grid-two">
          <p className="h4-searchtext">Enter JobSeeker in the Search Bar</p>
          <label className="search-label" html-for="search-input">
            <i class="fa fa-search search-icon" aria-hidden="true"></i>
            <input
              type="text"
              className="search-text"
              action="Search"
              placeholder="Enter Jobseeker Name"
              id="search-input"
              value={search}
              onChange={(e) => this.handleOnInputChange(e)}
            />
          </label>
          {/* <Button className="Btn-style" variant="contained">Search</Button> */}

          <div className="order-box">
            <span>
              Order By :{" "}
              <Button className="sort-name" onClick={this.data}>
                Name
 </Button>
              <i className="fa fa-arrow-up sort-name" aria-hidden="true"></i>{" "}
 |
 <Button onClick="" className="sort-date">
                Date{" "}
              </Button>
              <i className="fa fa-arrow-up sort-date" aria-hidden="true"></i>{" "}
 |
 <Button className="sort-skill" onclick="">
                Skills
 </Button>
              <i className="fa fa-arrow-up sort-skill" aria-hidden="true"></i>
            </span>
            <span className="apply-box">
              <Link style={{ color: "#007bff", fontWeight: "bold" }}>
                Applied
 </Link>{" "}
 |{" "}
              <Link style={{ color: "black", fontWeight: "bold" }}>
                Available
 </Link>{" "}
 |{" "}
              <Link style={{ color: "black", fontWeight: "bold" }}>All</Link>
            </span>
          </div>

          <Container className="scrollBar pagination-sec">
            {/* error message */}

            {currentPosts.map((jobSeeker, i) => (
              <Grid container spacing={3} className="user-section" key={i}>
                <Grid item xs={1}>
                  <i className="fa fa-user-circle" aria-hidden="true"></i>
                </Grid>
                <Grid item xs={5}>
                  <Button id="jobseeker-name">{jobSeeker.UserName}</Button>
                  {
                    {
                      Active: (
                        <span className="job-status-Active">
                          {" "}
                          {jobSeeker.Activity}
                        </span>
                      ),
                      InActive: (
                        <span className="job-status-InActive">
                          {" "}
                          {jobSeeker.Activity}
                        </span>
                      ),
                      "Recently join": (
                        <span className="job-status-RecentlyJoined">
                          {" "}
                          {jobSeeker.Activity}
                        </span>
                      ),
                    }[jobSeeker.Activity]
                  }
                  <br />
                  <label className="jobseeker-skills">
                    {jobSeeker.PrimarySkills}
                  </label>
                  <br />
                  <label className="jobseeker-company">
                    {jobSeeker.CompanyName}
                  </label>
                </Grid>
                <Grid item xs={6}>
                  <span className="date-sec">Date Joined : </span>
                  <span className="job-date">{jobSeeker.DateJoined}</span>
                  <span className="year-sec">Years Of Exp. : </span>
                  <span className="job-year">{jobSeeker.YearOfExp}</span>
                  <span className="location-sec">Location : </span>
                  <span className="job-location">{jobSeeker.Location}</span>
                  <br />
                  <br />
                  <span className="date-sec">Account : </span>
                  <span className="account-status">{this.state.account}</span>
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

      //  </Container>
    );
  }
}

export default JobseekerSearchComponent;