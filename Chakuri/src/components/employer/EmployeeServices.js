import axios from 'axios';
import CurrentEmployment from '../../pages/employer/CurrentEmploymentPage';
const EMPLOYEE_API_BASE_URL ="http://localhost:4712/api/v1/employer/agreement/";


class EmployeeServices {
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

export default new EmployeeServices()