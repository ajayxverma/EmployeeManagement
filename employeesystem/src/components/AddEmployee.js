import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeServices from '../services/EmployeeServices';


const AddEmployee = () => {
    const [employee, setEmployee] = useState({
      id: "",
      firstName:"",
      lastName:"",
      emailId:"",
    });


    const naviga =useNavigate()
    
    const handleChage =(e)=>{
      const value =e.target.value;
      setEmployee ( {...employee, [e.target.name]:value})
    };

    const saveEmployee =(e)=> {
      e.preventDefault();
      EmployeeServices.saveEmployee(employee)
      .then((Response)=>{
        console.log(Response)
        naviga("/")
      })
        .catch((error)=>{
           console.log(error)
        
      });
    }

    const navigate = useNavigate();

    const reset =(e)=> {
      e.preventDefault();
      setEmployee({
      id: "",
      firstName:"",
      lastName:"",
      emailId:"",
      });

    };
   
    

  return (
    <div className='flex max-w-2xl mx-auto shadow border-b'>
      <div className='px-8 py-8'>
        <div className='font-thin text-2xl tracking-wider'>
          <h1>Add new Employee</h1>
        </div>
        <div className=' items-center justify-center h-14 w-full my-4'>
          <label className='block text-gray-600 text-sm font-normal'> First Name</label>
          <input type="text" name='firstName' value={employee.firstName} onChange={(e)=> handleChage(e)} className='h-10 w-96 border mt-2 px-2 py-2'></input>
        </div>
        <div className=' items-center justify-center h-14 w-full my-4'>
          <label className='block text-gray-600 text-sm font-normal'> Last Name</label>
          <input type="text" name='lastName' value={employee.lastName} onChange={(e)=> handleChage(e)} className='h-10 w-96 border mt-2 px-2 py-2'></input>
        </div>
        <div className=' items-center justify-center h-14 w-full my-4'>
          <label className='block text-gray-600 text-sm font-normal'> Email Id</label>
          <input type="text" name='emailId' value={employee.emailId} onChange={(e)=> handleChage(e)} className='h-10 w-96 border mt-2 px-2 py-2'></input>
        </div>
        <div className=' items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
          
          <button className='rounded text-white font-semibold bg-blue-600 hover:bg-blue-300 py-2 px-2' onClick={saveEmployee}> Save</button>
          <button 
          onClick={reset}
          className='rounded text-white font-semibold bg-orange-600 hover:bg-orange-300 py-2 px-2'> clear</button>

          <button onClick={()=>navigate("/")} className='rounded text-white font-semibold bg-green-600 hover:bg-orange-300 py-2 px-2'> Home</button>
        </div>
      </div>
    </div>
  )
}

export default AddEmployee