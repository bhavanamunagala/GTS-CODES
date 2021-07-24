import React,{Component} from 'react';


class Table5 extends Component{
    render(){
        return <table className="table table-bordered">
        <thead>
            <tr>
                <th scope="col">Sr. No.</th>
                <th scope="col">SKILLS</th>
                <th scope="col">Claim of Proficiency</th>
                <th scope="col">Years of Experience</th>
                <th scope="col">Delete Skill</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Mark</td>
                <td>Otto</td>
                <td><button class="badge badge-pill badge-primary" type="button">Delete</button></td>
            </tr>
            <tr>
            <th scope="row">1</th>
                <td>Mark</td>
                <td>Mark</td>
                <td>Otto</td>
                <td><button class="badge badge-pill badge-primary" type="button">Delete</button></td>
           
            </tr>
            <tr>
            <th scope="row">1</th>
                <td>Mark</td>
                <td>Mark</td>
                <td>Otto</td>
                <td><button class="badge badge-pill badge-primary" type="button">Delete</button></td>
           
            </tr>
        </tbody>
    </table>;
    }
}

export default Table5;