import React from 'react'
import { useNavigate } from 'react-router-dom';

const Employee = ({employe,deleteEmployee}) => {

    const navigate =useNavigate();
    const editemployee = (e, id)=>{
      e.preventDefault();
      navigate(`/updateemployee/${id}`);
    
    };

    
  return (
    <tr key={employe.id}>
             <td className='ext-left px-6 py-4 whitespace-nowrap'>
               <div className='text-sm text-gray-500'>{employe.firstName}</div>
             </td>
             <td className='ext-left px-6 py-4 whitespace-nowrap'>
               <div className='text-sm text-gray-500'>{employe.lastName}</div>
             </td>
             <td className='ext-left px-6 py-4 whitespace-nowrap'>
               <div className='text-sm text-blue-500'>{employe.emailId}</div>
             </td>
             <td className='text-right font-medium text-sm text-gray-500 px-2'>
               <a onClick={(e, id)=>editemployee(e,employe.id)} 
                className='text-indigo-600 hover:text-indigo-400 px-2  hover:cursor-pointer' >Edit</a>
               <a onClick={(e,id)=>deleteEmployee(e,employe.id)}
                className='text-indigo-600 hover:text-indigo-400 px-2  hover:cursor-pointer' >Delete</a>
         
             </td>
            
           </tr>
  );
}

export default Employee;