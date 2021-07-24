import React, { Component, Fragment, StrictMode } from 'react'
import Employee from './Employee';




class View extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employee: [],
            viewEmploy: {}
        }

    }



    viewEmployee(id) {
        Employee.getEmployeeById(id).then(res => {
            this.setState({ viewEmploy: res.data });
        });



        // Get the modal
        var modal = document.getElementById("myModal");
        modal.style.display = "block";

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the modal 
        btn.onclick = function () {
            modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }

    }

    componentDidMount() {

        Employee.getEmployee().then((res) => {
            this.setState({ employee: res.data });

            console.log(this.state.viewEmploy.user_id)
        });
    }

    render() {
  

        return (

            <Fragment>





                <div className="container-fluid">


    <table className="table table-left table-bordered" align="left">
                     
                       
     <tbody>
      {
    this.state.employee.map(
    employee =>
    <tr key={employee.user_id}>
  <td style={{ color: "#fc83bf" }}>
 <input type="View" className="btn btn-primary" value="View" onClick={() => this.viewEmployee(employee.user_id)} id="myBtn" style={{ borderRadius: "20px", fontSize: "15px", fontWeight: "light bold", padding: "10px", width: "70px", height: "30px" }}></input>

          </td>
     <td style={{ color: "#fc83bf" }}> {employee.employer}</td>
                                                                    </tr>

                                )
                            }
                        </tbody>
                    </table>

                </div>
        

   <div id="myModal" className="modal" >
    <div className="modal-content">

  <input className="modal" style={{ display: "none", position: "fixed", zIndex: "-1", paddingTop: "100px", left: "50px", top: "100px", width: "20px", height: "100px", overflow: "auto", backgroundColor: "rgb(0,0,0)", backgroundColor: "rgba(0,0,0,0.4)" }} />
     <span className="close">&times;</span>
      <div>
        <div className="card col">
   <div className="card-body">
 <div className="container-fluid">
    <div className="row">

<label>employer :  </label><span style={{ color: "#fc83bf" }}>{this.state.viewEmploy.employer}</span>
 <div className="col">
 <label>user id : </label> <span style={{ color: "#fc83bf" }}>{this.state.viewEmploy.user_id}</span>
            <br></br>

        </div>
         </div>
           </div>
            </div>
                            </div>
                        </div>


                    </div>
                </div>

            </Fragment>




        );

    }




}

export default View;