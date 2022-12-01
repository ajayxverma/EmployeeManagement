package com.airexus.employeesystemapi.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import com.airexus.employeesystemapi.entity.EmployeeEntity;
import com.airexus.employeesystemapi.exception.EmployeeRepository;
import com.airexus.employeesystemapi.model.Employees;


@Service
public class EmployeeServiceImpl implements EmployeeServices {

    private EmployeeRepository employeeRepository;

    

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }



    @Override
    public Employees createEmployees(Employees employees) {

        EmployeeEntity employeeEntity = new EmployeeEntity();
        BeanUtils.copyProperties(employees, employeeEntity);
        employeeRepository.save(employeeEntity);
        return employees;
    }



    @Override
    public List<Employees> getAllEmployees() {

        List<EmployeeEntity> employeeEntities = employeeRepository.findAll();
        List<Employees> employees=employeeEntities
        .stream()
        .map( emp -> new Employees(
            emp.getId(),
            emp.getFirstName(),
            emp.getLastName(),
            emp.getEmailId()))
        .collect(Collectors.toList());
    
        return employees;
    }



    @Override
    public boolean deleteEmployee(Long id) {
        EmployeeEntity employee = employeeRepository.findById(id).get();
        employeeRepository.delete(employee);
        return true;
    }



    @Override
    public Employees getEmployeeById(Long id) {

        EmployeeEntity employeeEntity = employeeRepository.findById(id).get();
        Employees employeees = new Employees();

        BeanUtils.copyProperties(employeeEntity, employeees);
        
        return employeees;
    }



    @Override
    public Employees updateEmployeeById(Long id, Employees employees) {
        EmployeeEntity employeeEntity = employeeRepository.findById(id).get();

        employeeEntity.setFirstName(employees.getFirstName());
        employeeEntity.setLastName(employees.getLastName());
        employeeEntity.setEmailId(employees.getEmailId());
        employeeRepository.save(employeeEntity);
        return employees;
    }



    
}
