import axios from 'axios';
const EMPLOYEE_API_BASE_URL ="http://localhost:1202/employee/";


class Employee {
  getEmployee() {
      return axios.get(EMPLOYEE_API_BASE_URL);
  }
  createEmployee(employee) {
    return axios.get(EMPLOYEE_API_BASE_URL,employee);
  }
  getEmployeeById(employeeId) {
    console.log(employeeId)
    return axios.get(EMPLOYEE_API_BASE_URL + '/id/'+ employeeId);
  }
}

export default new Employee()