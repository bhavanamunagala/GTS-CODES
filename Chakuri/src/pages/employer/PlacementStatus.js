import React, { Component } from 'react';

class PlacementStatus extends Component {
    render() {
        return (
            <div className="container">
                <div className="accordion" id="accordionExample">
  <div className="card">
    <div className="card-header" id="headingOne">
      <h2 className="mb-0">
      <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <h3><span style={{color:"black",float:"left"}}><u>Junior Web Developer</u></span><button type="button" align="right" className="btn btn-primary" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor:"white",color:"black", float:"right",}}>
          +</button></h3>
       
        </div>
      </h2>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body">
      
      <p><h4>ShortListed Candidates :<span style={{ color: "#ffcccc" }}>7</span></h4></p>

<div class="table-wrapper-scroll-y my-custom-scrollbar">
    <span class="border border-black">
        <table class="pure-table pure-table-horizontal" width="100%">


            <tbody>
                <tr >
                    <td><h5>Ram Gopal Krishna</h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>8.25/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>Completed</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Swaroop</h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>7/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>Completed</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Sai</h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>6/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>Completed</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Kishore</h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>9/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>Completed</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>

                <tr >
                    <td><h5>Ram  Krishna</h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>10/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>Completed</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Ram Gopal </h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>8/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>Completed</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>
            </tbody>
        </table>
    </span>
</div>

<br></br>
<br></br>
<p><h4>Screening Candidates :<span style={{ color: "#ffcccc" }}>10</span></h4></p>
<div class="table-wrapper-scroll-y my-custom-scrollbar">
    <span class="border border-black">
        <table class="pure-table pure-table-horizontal" width="100%">


            <tbody>
                <tr >
                    <td><h5>Ram Gopal Krishna</h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>8.25/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>1</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Swaroop</h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>7/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>5</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>

                <tr >
                    <td><h5>Sai</h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>6/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>4</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Kishore</h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>9/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>6</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Ram  Krishna</h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>10/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>9</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Ram Gopal </h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>8/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>Completed</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>
            </tbody>
        </table>
    </span>
</div>

<br></br>
<br></br>

<p><h4>Candidates Applied:<span style={{ color: "#ffcccc" }}>22</span></h4></p>
<div class="table-wrapper-scroll-y my-custom-scrollbar">
    <span class="border border-black">
        <table class="pure-table pure-table-horizontal" width="100%">


            <tbody>
                <tr >
                    <td><h5>Ram Gopal Krishna</h5></td>
                    <td><h5>  Round Status <span style={{ color: "#ffcccc" }}>Yet to be Evaluated</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>
                            <option value="Accept for Screening" >Accept for Screening</option>
                            <option value="Reject" >Reject</option>
                            <option value="Save Candidate" >Reject</option>
                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Swaroop</h5></td>
                    <td><h5>  Round Status <span style={{ color: "#ffcccc" }}>Yet to be Evaluated</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>
                            <option value="Reject" >Reject</option>
                            <option value="Accept for Screening" >Accept for Screening</option>
                            <option value="Save Candidate" >Reject</option>
                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Sai</h5></td>
                    <td><h5>  Round Status <span style={{ color: "#ffcccc" }}>Yet to be Evaluated</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>
                        <option value="Save Candidate" >Save Candidate</option>
                        <option value="Accept for Screening" >Accept for Screening</option>
                            <option value="Reject" >Reject</option>
                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Kishore</h5></td>
                    <td><h5>  Round Status <span style={{ color: "#ffcccc" }}>Yet to be Evaluated</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>
                        <option value="Accept for Screening" >Accept for Screening</option>
                            <option value="Reject" >Reject</option>
                            <option value="Save Candidate" >Reject</option>
                         </select>
                    </h5>
                    </td>
                </tr>

                <tr >
                    <td><h5>Ram  Krishna</h5></td>
                    <td><h5>  Round Status <span style={{ color: "#ffcccc" }}>Yet to be Evaluated</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>
                        <option value="Accept for Screening" >Accept for Screening</option>
                            <option value="Reject" >Reject</option>
                            <option value="Save Candidate" >Reject</option>
                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Ram Gopal </h5></td>
                    <td><h5>  Round Status <span style={{ color: "#ffcccc" }}>Yet to be Evaluated</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>
                        <option value="Accept for Screening" >Accept for Screening</option>
                            <option value="Reject" >Reject</option>
                            <option value="Save Candidate" >Reject</option>
                        </select>
                    </h5>
                    </td>
                </tr>
            </tbody>
        </table>
    </span>
</div>
      
      
      
      
      </div>
    </div>
  </div>
  <hr style={{border: "2px solid #020201", width:"100%"}}></hr>
<div>
<div className="accordion" id="accordion">
  <div className="card">
    <div className="card-header" id="headingTwo">
      <h2 className="mb-0">
     
      <h3><span style={{color:"black",float:"left"}}><u>Intern Data Scientist</u></span><button type="button" align="right" className="btn btn-primary" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" style={{backgroundColor:"white",color:"black", float:"right",}}>
          +</button></h3>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
            </div>
      </h2>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div className="card-body">
      <p><h4>ShortListed Candidates :<span style={{ color: "#ffcccc" }}>7</span></h4></p>

<div class="table-wrapper-scroll-y my-custom-scrollbar">
    <span class="border border-black">
        <table class="pure-table pure-table-horizontal" width="100%">


            <tbody>
                <tr >
                    <td><h5>Ram Gopal Krishna</h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>8.25/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>Completed</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Swaroop</h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>7/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>Completed</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Sai</h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>6/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>Completed</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Kishore</h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>9/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>Completed</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>

                <tr >
                    <td><h5>Ram  Krishna</h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>10/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>Completed</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Ram Gopal </h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>8/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>Completed</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>
            </tbody>
        </table>
    </span>
</div>

<br></br>
<br></br>
<p><h4>Screening Candidates :<span style={{ color: "#ffcccc" }}>10</span></h4></p>
<div class="table-wrapper-scroll-y my-custom-scrollbar">
    <span class="border border-black">
        <table class="pure-table pure-table-horizontal" width="100%">


            <tbody>
                <tr >
                    <td><h5>Ram Gopal Krishna</h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>8.25/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>1</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Swaroop</h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>7/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>5</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>

                <tr >
                    <td><h5>Sai</h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>6/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>4</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Kishore</h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>9/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>6</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Ram  Krishna</h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>10/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>9</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Ram Gopal </h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>8/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>Completed</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>
            </tbody>
        </table>
    </span>
</div>

<br></br>
<br></br>

<p><h4>Candidates Applied:<span style={{ color: "#ffcccc" }}>22</span></h4></p>
<div class="table-wrapper-scroll-y my-custom-scrollbar">
    <span class="border border-black">
        <table class="pure-table pure-table-horizontal" width="100%">


            <tbody>
                <tr >
                    <td><h5>Ram Gopal Krishna</h5></td>
                    <td><h5>  Round Status <span style={{ color: "#ffcccc" }}>Yet to be Evaluated</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>
                            <option value="Accept for Screening" >Accept for Screening</option>
                            <option value="Reject" >Reject</option>
                            <option value="Save Candidate" >Reject</option>
                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Swaroop</h5></td>
                    <td><h5>  Round Status <span style={{ color: "#ffcccc" }}>Yet to be Evaluated</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>
                            <option value="Reject" >Reject</option>
                            <option value="Accept for Screening" >Accept for Screening</option>
                            <option value="Save Candidate" >Reject</option>
                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Sai</h5></td>
                    <td><h5>  Round Status <span style={{ color: "#ffcccc" }}>Yet to be Evaluated</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>
                        <option value="Save Candidate" >Save Candidate</option>
                        <option value="Accept for Screening" >Accept for Screening</option>
                            <option value="Reject" >Reject</option>
                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Kishore</h5></td>
                    <td><h5>  Round Status <span style={{ color: "#ffcccc" }}>Yet to be Evaluated</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>
                        <option value="Accept for Screening" >Accept for Screening</option>
                            <option value="Reject" >Reject</option>
                            <option value="Save Candidate" >Reject</option>
                         </select>
                    </h5>
                    </td>
                </tr>

                <tr >
                    <td><h5>Ram  Krishna</h5></td>
                    <td><h5>  Round Status <span style={{ color: "#ffcccc" }}>Yet to be Evaluated</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>
                        <option value="Accept for Screening" >Accept for Screening</option>
                            <option value="Reject" >Reject</option>
                            <option value="Save Candidate" >Reject</option>
                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Ram Gopal </h5></td>
                    <td><h5>  Round Status <span style={{ color: "#ffcccc" }}>Yet to be Evaluated</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>
                        <option value="Accept for Screening" >Accept for Screening</option>
                            <option value="Reject" >Reject</option>
                            <option value="Save Candidate" >Reject</option>
                        </select>
                    </h5>
                    </td>
                </tr>
            </tbody>
        </table>
    </span>
</div>
     
     
     
     
     
     
     
      </div>
    </div>
  </div>  </div>
  </div>
  <hr style={{border: "2px solid #020201", width:"100%"}}></hr>
<div className="accordion" id="accordionFirst">
  <div className="card">
    <div className="card-header" id="headingThree">
      <h2 className="mb-0">
     
      <h3><span style={{color:"black",float:"left"}}><u>Software Engineer</u></span><button type="button" align="right" className="btn btn-primary" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree" style={{backgroundColor:"white",color:"black", float:"right",}}>
          +</button></h3>
        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionFirst">
        </div>
      </h2>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionFirst">
      <div className="card-body">
      <p><h4>ShortListed Candidates :<span style={{ color: "#ffcccc" }}>7</span></h4></p>

<div class="table-wrapper-scroll-y my-custom-scrollbar">
    <span class="border border-black">
        <table class="pure-table pure-table-horizontal" width="100%">


            <tbody>
                <tr >
                    <td><h5>Ram Gopal Krishna</h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>8.25/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>Completed</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Swaroop</h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>7/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>Completed</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Sai</h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>6/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>Completed</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Kishore</h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>9/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>Completed</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>

                <tr >
                    <td><h5>Ram  Krishna</h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>10/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>Completed</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Ram Gopal </h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>8/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>Completed</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>
            </tbody>
        </table>
    </span>
</div>

<br></br>
<br></br>
<p><h4>Screening Candidates :<span style={{ color: "#ffcccc" }}>10</span></h4></p>
<div class="table-wrapper-scroll-y my-custom-scrollbar">
    <span class="border border-black">
        <table class="pure-table pure-table-horizontal" width="100%">


            <tbody>
                <tr >
                    <td><h5>Ram Gopal Krishna</h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>8.25/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>1</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Swaroop</h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>7/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>5</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>

                <tr >
                    <td><h5>Sai</h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>6/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>4</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Kishore</h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>9/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>6</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Ram  Krishna</h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>10/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>9</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Ram Gopal </h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>8/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>Completed</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>
            </tbody>
        </table>
    </span>
</div>

<br></br>
<br></br>

<p><h4>Candidates Applied:<span style={{ color: "#ffcccc" }}>22</span></h4></p>
<div class="table-wrapper-scroll-y my-custom-scrollbar">
    <span class="border border-black">
        <table class="pure-table pure-table-horizontal" width="100%">


            <tbody>
                <tr >
                    <td><h5>Ram Gopal Krishna</h5></td>
                    <td><h5>  Round Status <span style={{ color: "#ffcccc" }}>Yet to be Evaluated</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>
                            <option value="Accept for Screening" >Accept for Screening</option>
                            <option value="Reject" >Reject</option>
                            <option value="Save Candidate" >Reject</option>
                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Swaroop</h5></td>
                    <td><h5>  Round Status <span style={{ color: "#ffcccc" }}>Yet to be Evaluated</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>
                            <option value="Reject" >Reject</option>
                            <option value="Accept for Screening" >Accept for Screening</option>
                            <option value="Save Candidate" >Reject</option>
                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Sai</h5></td>
                    <td><h5>  Round Status <span style={{ color: "#ffcccc" }}>Yet to be Evaluated</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>
                        <option value="Save Candidate" >Save Candidate</option>
                        <option value="Accept for Screening" >Accept for Screening</option>
                            <option value="Reject" >Reject</option>
                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Kishore</h5></td>
                    <td><h5>  Round Status <span style={{ color: "#ffcccc" }}>Yet to be Evaluated</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>
                        <option value="Accept for Screening" >Accept for Screening</option>
                            <option value="Reject" >Reject</option>
                            <option value="Save Candidate" >Reject</option>
                         </select>
                    </h5>
                    </td>
                </tr>

                <tr >
                    <td><h5>Ram  Krishna</h5></td>
                    <td><h5>  Round Status <span style={{ color: "#ffcccc" }}>Yet to be Evaluated</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>
                        <option value="Accept for Screening" >Accept for Screening</option>
                            <option value="Reject" >Reject</option>
                            <option value="Save Candidate" >Reject</option>
                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Ram Gopal </h5></td>
                    <td><h5>  Round Status <span style={{ color: "#ffcccc" }}>Yet to be Evaluated</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>
                        <option value="Accept for Screening" >Accept for Screening</option>
                            <option value="Reject" >Reject</option>
                            <option value="Save Candidate" >Reject</option>
                        </select>
                    </h5>
                    </td>
                </tr>
            </tbody>
        </table>
    </span>
</div>
      
      
      
      
      </div>
    </div>
  </div>
</div></div>


<hr style={{border: "2px solid #020201", width:"100%"}}></hr>
<div className="accordion" id="accordionSecond">
  <div className="card">
    <div className="card-header" id="headingFour">
      <h2 className="mb-0">
     
      <h3><span style={{color:"black",float:"left"}}><u>HR Recruiter</u></span><button type="button" align="right" className="btn btn-primary" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour" style={{backgroundColor:"white",color:"black", float:"right",}}>
          +</button></h3>
        <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionSecond">
        </div>
      </h2>
    </div>
    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionSecond">
      <div className="card-body">
      <p><h4>ShortListed Candidates :<span style={{ color: "#ffcccc" }}>7</span></h4></p>

<div class="table-wrapper-scroll-y my-custom-scrollbar">
    <span class="border border-black">
        <table class="pure-table pure-table-horizontal" width="100%">


            <tbody>
                <tr >
                    <td><h5>Ram Gopal Krishna</h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>8.25/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>Completed</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Swaroop</h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>7/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>Completed</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Sai</h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>6/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>Completed</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Kishore</h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>9/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>Completed</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>

                <tr >
                    <td><h5>Ram  Krishna</h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>10/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>Completed</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Ram Gopal </h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>8/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>Completed</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>
            </tbody>
        </table>
    </span>
</div>

<br></br>
<br></br>
<p><h4>Screening Candidates :<span style={{ color: "#ffcccc" }}>10</span></h4></p>
<div class="table-wrapper-scroll-y my-custom-scrollbar">
    <span class="border border-black">
        <table class="pure-table pure-table-horizontal" width="100%">


            <tbody>
                <tr >
                    <td><h5>Ram Gopal Krishna</h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>8.25/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>1</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Swaroop</h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>7/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>5</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>

                <tr >
                    <td><h5>Sai</h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>6/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>4</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Kishore</h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>9/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>6</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Ram  Krishna</h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>10/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>9</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Ram Gopal </h5></td>
                    <td><h5> Average Test Scroe <span style={{ color: "#ffcccc" }}>8/10</span>&nbsp;
    Round Status <span style={{ color: "#ffcccc" }}>Completed</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>

                            <option value="View Test" >View Test</option>
                            <option value="Reject" >Reject</option>

                        </select>
                    </h5>
                    </td>
                </tr>
            </tbody>
        </table>
    </span>
</div>

<br></br>
<br></br>

<p><h4>Candidates Applied:<span style={{ color: "#ffcccc" }}>22</span></h4></p>
<div class="table-wrapper-scroll-y my-custom-scrollbar">
    <span class="border border-black">
        <table class="pure-table pure-table-horizontal" width="100%">


            <tbody>
                <tr >
                    <td><h5>Ram Gopal Krishna</h5></td>
                    <td><h5>  Round Status <span style={{ color: "#ffcccc" }}>Yet to be Evaluated</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>
                            <option value="Accept for Screening" >Accept for Screening</option>
                            <option value="Reject" >Reject</option>
                            <option value="Save Candidate" >Reject</option>
                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Swaroop</h5></td>
                    <td><h5>  Round Status <span style={{ color: "#ffcccc" }}>Yet to be Evaluated</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>
                            <option value="Reject" >Reject</option>
                            <option value="Accept for Screening" >Accept for Screening</option>
                            <option value="Save Candidate" >Reject</option>
                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Sai</h5></td>
                    <td><h5>  Round Status <span style={{ color: "#ffcccc" }}>Yet to be Evaluated</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>
                        <option value="Save Candidate" >Save Candidate</option>
                        <option value="Accept for Screening" >Accept for Screening</option>
                            <option value="Reject" >Reject</option>
                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Kishore</h5></td>
                    <td><h5>  Round Status <span style={{ color: "#ffcccc" }}>Yet to be Evaluated</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>
                        <option value="Accept for Screening" >Accept for Screening</option>
                            <option value="Reject" >Reject</option>
                            <option value="Save Candidate" >Reject</option>
                         </select>
                    </h5>
                    </td>
                </tr>

                <tr >
                    <td><h5>Ram  Krishna</h5></td>
                    <td><h5>  Round Status <span style={{ color: "#ffcccc" }}>Yet to be Evaluated</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>
                        <option value="Accept for Screening" >Accept for Screening</option>
                            <option value="Reject" >Reject</option>
                            <option value="Save Candidate" >Reject</option>
                        </select>
                    </h5>
                    </td>
                </tr>

                <tr>
                    <td><h5>Ram Gopal </h5></td>
                    <td><h5>  Round Status <span style={{ color: "#ffcccc" }}>Yet to be Evaluated</span></h5></td>
                    <td><h5><button style={{ backgroundColor: "blue", color: "white", borderRadius: "12px", width: "100px", height: "30px" }}>View Resume</button></h5>
                    </td>
                    <td><h5>
                        <select name="view" id="" style={{ border: "1px solid black", borderRadius: "12px" }}>
                        <option value="Accept for Screening" >Accept for Screening</option>
                            <option value="Reject" >Reject</option>
                            <option value="Save Candidate" >Reject</option>
                        </select>
                    </h5>
                    </td>
                </tr>
            </tbody>
        </table>
    </span>
</div>
      
      
      
      
      </div>
    </div>
  </div>
</div></div>



          
        );
    }
}

export default PlacementStatus;