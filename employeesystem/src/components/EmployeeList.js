import {React,useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeServices from '../services/EmployeeServices';
import Employee from './Employee';

const EmployeeList = () => {

    const navigate=useNavigate()
    const [employe, setEmploye] = useState(null);
    const [Loading, setLoading] = useState(true);
    
    useEffect(() => {
      const fetchData = async ()=>{
        setLoading(true);
        try {

          const response= await EmployeeServices.getEmployee();
          setEmploye(response.data);
          
        } catch (error) {
          console.log(error);
        }
        setLoading(false);
      }
      fetchData();

    }, []);


    const deleteEmployee = (e,id)=> {
      e.preventDefault();
      EmployeeServices.deleteEmployee(id).then((res)=>{
        if(employe){
          setEmploye((prevElement)=>{
            return prevElement.filter((employe)=>employe.id !== id);
          })
        }
      })
    }

  return (
    <div className='container max-auto my-8'>
     <div  className='h-12 px-4'>
      <button onClick={()=>navigate("/addEmployee")} className='rounded bg-slate-600 text-white px-4 py-2 font-semibold '>
        Add Employee
      </button>
     </div>
     <div className='flex shadow border-b overflow-y-scroll px-4'>
      <table className='min-w-full'>
        <thead className='bg-gray-50' >
          <tr>
            <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6 '>First Name</th> 
            <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6 '>Last Name</th>
            <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6 '>Email Id</th>
            <th className='text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6 '>Actions</th>
          </tr>

        </thead>
        {!Loading && (
        <tbody className='bg-white ' >
            {employe.map((employe)=>( 
             <Employee employe={employe} deleteEmployee={deleteEmployee} key={employe.id}/>
            ))}
        </tbody>)}
        </table>
     </div>
    </div>
   
  )
}

export default EmployeeList;