import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faTrash,faEdit,faUpload} from '@fortawesome/free-solid-svg-icons'

class Headline extends Component 
{
    render()
     {
            
        return (
            <div>
                {/*.........HeadLine start..........*/}
                <div className="container align-items-center">
                    <div className='mt-3'>
                        <form>
                            <div className="form-group">
                                <label for="exampleInputHeadLine"><h5>Enter A Attractive Headline :</h5></label>
                                <input type="text" class="text-primary" class="form-control" id="exampleInputHeadLine1" aria-describedby="emailHelp" placeholder="Describe yourself in one Line"></input>
                            </div>

                            <div class="row py-4" >
                                <div class="col col-sm offset-11 ">
                                    <button type="submit" className="btn btn-primary">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/*..........HeadLine End......*/}
            </div>  //main end
                
        )
    }
}
export default Headline; 