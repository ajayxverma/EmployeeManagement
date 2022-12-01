package com.airexus.employeesystemapi.services;

import java.util.List;

import com.airexus.employeesystemapi.model.Employees;




public interface EmployeeServices {

    Employees createEmployees(Employees employees);

    List<Employees> getAllEmployees();

    boolean deleteEmployee(Long id);

    Employees getEmployeeById(Long id);

    Employees updateEmployeeById(Long id, Employees employees);

   

    

}
