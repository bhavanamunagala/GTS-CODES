
import React, { Component } from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import axios from 'axios';
import { Container, Grid, Slider, AppBar, Paper, InputBase, FormLabel, Button, Select, Input, Checkbox, ListItemText, MenuItem, FormControl, Chip } from '@material-ui/core';
import MultiSelect from 'react-select';
import  '../recruiter/style.css';





class SearchTrainingComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentPage: 1,
      todosPerPage: 3,
      training: [],
      chipData: [],
    skills: [],
    locations: [],
    price: [],
    level: [],
    freshness: [],
    rating: [],
    search: ''

    };
    this.handleClick = this.handleClick.bind(this);
    this.updateSkillsOption = this.updateSkillsOption.bind(this);
   
  };
  

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }
 

  componentDidMount() {
    axios
      .get( "https://api.mocki.io/v1/8beadd94", {
    
      })
      
      .then(({ data }) => {
        this.setState({
          training: data,
        // array data from JSON stored in these
        });
      })
      .catch(err => {});
  }



   
  updateSkillsOption = (event) => {
    this.setState({
        search: event.target.value,
      skills: event.target.value,
    })
  };

  updateLocationsOption = (event) => {
    this.setState({
      locations: event.target.value
    })
  };
  
  updatePriceOption = (event) => {
    this.setState({
      price: event.target.value
    })
  };
  updateLevelsOption = (event) => {
    this.setState({
      level: event.target.value
    })
  };
  updateFreshnessOption = (event) => {
    this.setState({
      freshness: event.target.value
    })
  };

  updateRatingOption = (event) => {
    this.setState({
      rating: event.target.value
    })
  };

  updateSearch = (event) => {
    let keyword = event.target.value.substr(0, 20);
    this.setState({ search: keyword })
  };




  render() {


    //pagination
    const { training, currentPage, todosPerPage } = this.state;
       // Logic for displaying todos
       const indexOfLastTodo = currentPage * todosPerPage;
       const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
       const currentTodos = training.slice(indexOfFirstTodo, indexOfLastTodo);

       const renderTodos = currentTodos.map((training) => {
        return {training}
      });

    // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(training.length / todosPerPage); i++) {
    pageNumbers.push(i);
  }
    // Change page
    const paginate = pageNumber => this.setState({ currentPage: pageNumber });

    const skillsOptions = [
      'C++', 'C#', 'Java', 'Javascript', 'pearl', 'PHP', 'Python', 'Swift', 'GO', 'Ruby', 'R', 'Sql', 'Cokking', 'Teaching', 'Supply Chain', 'Accountant',
    ];

    
    //location
    const locationOptions = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir",
      "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha",
      "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh",
      "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu",
      "Delhi", "Lakshadweep", "Puducherry"]

    //company
    const PriceOptions = ['Free', '500Rs-1000Rs', '1001Rs-1500Rs']

    const LevelsOptions = ['Beginner', 'Intermediate', 'Expert']

   
    const FreshnessOptions = ['7 days', '14 days', '21 days']

    const RatingOptions = ['EFG company', 'L & T', 'Wipro', 'TCS', 'Infosys', 'Capgemini', 'byjus', 'Tech Mahindrs', 'HCL company']

   
    let JobData = null;

    JobData = currentTodos.filter((data) => {
        return (
          data.PrimarySkills.toString().toLowerCase().includes(this.state.search.toString().toLowerCase()) ||
          data.CompanyName.toString().toLowerCase().includes(this.state.search.toString().toLowerCase())
        );
      })
  

 
    return (
      <div>
            <div>
   
 
 
<div class="row">
<div class="col-2">

<Grid container height={5} >
<Grid item xs className="grid-one">
<Paper className="jobSeeker-filters">
              <h3>Skills</h3>
              <FormControl className="skills-form">
                <Select
                    isMulti={true}
                  labelId="demo-mutiple-checkbox-label"
                  id="demo-mutiple-checkbox"
                  multiple
                  value={this.state.skills}
                  
                  onChange={(e) => { this.updateSkillsOption(e) }}
                  input={<Input />}
                  renderValue={(selected) => (
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                    }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} style={{ margin: 2, }} />
                      ))}
                    </div>
                  )}
                  className="skills-option"
                >
                  {skillsOptions.map((skill) => (
                    <MenuItem key={skill} value={skill} >
                      <Checkbox checked={this.state.skills.indexOf(skill) > -1} />
                      <ListItemText primary={skill} />
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
                  onChange={(e) => { this.updateLocationOption(e) }}
                  renderValue={(selected) => selected.join(", ")}
                  className="Price-option"
                >
                  {locationOptions.map((location) => (
                    <MenuItem key={location} value={location}>
                      <Checkbox checked={this.state.locations.indexOf(location) > -1} />
                      <ListItemText primary={location} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Paper>


          <Paper className="jobSeeker-filters">
              <h3>Price</h3>   
              <FormControl className="skills-form">
                <Select
                  labelId="demo-mutiple-checkbox-label"
                  id="demo-mutiple-checkbox"
                  multiple
                  value={this.state.skills}
                  onChange={(e) => { this.updatePriceOption(e) }}
                  input={<Input />}
                  renderValue={(selected) => selected.join(", ")}
                  className="price-option"
                >
                  {PriceOptions.map((price) => (
                    <MenuItem key={price} value={price}>
                      <Checkbox checked={this.state.price.indexOf(price) > -1} />
                      <ListItemText primary={price} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Paper>

            <Paper className="jobSeeker-filters">
              <h3>Levels</h3>
              <FormControl className="location-form">
                <Select
                  labelId="demo-mutiple-checkbox-label"
                  id="demo-mutiple-checkbox"
                  multiple
                  value={this.state.locations}
                  onChange={(e) => { this.LevelsOption(e) }}
                  renderValue={(selected) => selected.join(", ")}
                  className="level-option"
                >
                  {LevelsOptions.map((level) => (
                    <MenuItem key={level} value={level}>
                      <Checkbox checked={this.state.level.indexOf(level) > -1} />
                      <ListItemText primary={level} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Paper>


            <Paper className="jobSeeker-filters">
              <h3>Freshness</h3>   
              <FormControl className="skills-form">
                <Select
                  labelId="demo-mutiple-checkbox-label"
                  id="demo-mutiple-checkbox"
                  multiple
                  value={this.state.skills}
                  onChange={(e) => { this.updateFreshnessOption(e) }}
                  input={<Input />}
                  renderValue={(selected) => selected.join(", ")}
                  className="Freshness-option"
                >
                  {FreshnessOptions.map((freshness) => (
                    <MenuItem key={freshness} value={freshness}>
                      <Checkbox checked={this.state.freshness.indexOf(freshness) > -1} />
                      <ListItemText primary={freshness} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Paper>


            <Paper className="jobSeeker-filters">
              <h3>Rating</h3>
              <FormControl className="location-form">
                <Select
                  labelId="demo-mutiple-checkbox-label"
                  id="demo-mutiple-checkbox"
                  multiple
                  value={this.state.locations}
                  onChange={(e) => { this.updateRatingOption(e) }}
                  renderValue={(selected) => selected.join(", ")}
                  className="location-option"
                >
                  {locationOptions.map((rating) => (
                    <MenuItem key={rating} value={rating}>
                      <Checkbox checked={this.state.rating.indexOf(rating) > -1} />
                      <ListItemText primary={rating} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Paper>



            
          </Grid>
        
</Grid>
</div>
 


<div class="col-10">

<h2 class="Head">Gauri Dutt</h2>
<ul>
<li><h5>SKILLS RATING | <label class="text-primary">SEARCH TRAINING </label> | RECOMMENDED TRAINING LIST | TRAINING IN PROGRESS</h5>
</li>
</ul>
<h5>Enter Keywords in the Search Bar</h5>

<h5>Order by: <label class="text-primary">Relevance<i class="fa fa-arrow-up"></i></label>| Date<i class="fa fa-arrow-up"></i> | Review <i class="fa fa-arrow-up"></i></h5>                         
<form class="example" action="/action_page.php">
  <input type="text" placeholder="Ex: Machine Learning , Full Stack Developer , C++ , etc"  onChange={(e) => this.updateSearch(e)}
  name="search"/>
  




  
<br></br>
<br></br>



<Container className="scrollBar pagination-sec">
              {JobData.map(training =>
                                       
<div class="div" style={{  margin: "20px",
    width: "95%",
    height: "200px",
    border: "1px solid black"}}>     
<div class="row">
  <div class="col-7">
  <h4 class="para"style={{paddingLeft: "30px"}}>Learn {training.PrimarySkills} Fundamentals</h4>
 </div>
<div class="col-3">
<h6>Date posted:<label class="text-danger">17/4/2020</label> </h6>
</div>
<div class="col-2">
<h6>Level:<label class="text-danger"> Beginner</label></h6>
</div>
</div>
  <div class="row">
  <div class="div" style={{ margin: "15px",
    marginBottom: "10px",
    width: "5%",
    height: "50px",
    size: "20px",
    border: "1px solid black"}}>
  <div class="col-1"> <i class='fab fa-python fa-2x'></i>
</div>
<br></br>
          <label></label>
</div>
    <div class="col-6">
<p class="para" style={{ paddingLeft: "100px"}}>We are pleased to announce that the we are holding a training session for undergraduates and <br></br>post graduates in python company XYZ is a company established since 1995,we have worked ....</p>
</div>
<div class="col-3">
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<br></br>
</div>
<div className="div" style={{  float: "right",
    margin: "15px",
    marginBottom: "10px",
    width: "8%",
    borderRadius:"20px",
    height: "50px",
    size: "20px",
    border: "1px solid black",
    float: "right"}}>
<div class="col-2">
          <h6 class="para" style={{  paddingRight: "10px"}}>Skills:<label class="text-danger">Python</label> </h6>
  </div>
  </div>
 </div>   
 <h3></h3>
  </div>
  
 
          )
        }
 

     
            </Container>

  
 
  <br></br>
  <br></br>
  
  
</form>



  

        
<nav>
              <ul className='pagination page-part '>
                {pageNumbers.map(number => (
                  <li key={number} className='page-item MuiPaginationItem-outlinedPrimary Mui-selected MuiPaginationItem-root'>
                    <button onClick={() => paginate(number)}>
                      {number}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
    
    
          

 <br></br>
</div>
</div>
<br></br>

</div>      
      
      </div>



    );
  }
}
   
export default SearchTrainingComponent;