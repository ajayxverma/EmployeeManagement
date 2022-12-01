import axios from "axios";


const EMPPLYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";
class EmployeeServices {

        saveEmployee(employee){
                return axios.post(EMPPLYEE_API_BASE_URL,employee);
        }
        getEmployee(){
                return axios.get(EMPPLYEE_API_BASE_URL);
        }
        deleteEmployee(id){
                return axios.delete(EMPPLYEE_API_BASE_URL+"/"+id);
        }

        getEmployeeeById(id){
                return axios.get(EMPPLYEE_API_BASE_URL+"/"+id);
        }
        updateEmployeeById(employee, id){
                return axios.put(EMPPLYEE_API_BASE_URL+"/"+id,employee);
        }

}

export default new EmployeeServices();