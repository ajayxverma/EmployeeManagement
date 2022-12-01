package com.airexus.employeesystemapi.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.airexus.employeesystemapi.model.Employees;
import com.airexus.employeesystemapi.services.EmployeeServices;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeControler {
    
    @Autowired
    private EmployeeServices employeeServices;

    public EmployeeControler(EmployeeServices employeeServices) {
        this.employeeServices = employeeServices;
    }

    @PostMapping("/employees")
    public Employees createEmployees(@RequestBody Employees employees){

       return employeeServices.createEmployees(employees);
    }

    @GetMapping("/employees")
   public List<Employees> getAllEmployees(){
    return employeeServices.getAllEmployees();
   }

   @DeleteMapping("/employees/{id}")
   public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
    boolean deleted = false;
    deleted = employeeServices.deleteEmployee(id);
    Map<String, Boolean> response = new HashMap<>();
    response.put("deleted", deleted);
    return ResponseEntity.ok(response);
   }

   @GetMapping("/employees/{id}")
   public ResponseEntity<Employees> getEmployeeById(@PathVariable Long id){

    Employees employees=null;
    employees= employeeServices.getEmployeeById(id);

    return ResponseEntity.ok(employees);
    }
    @PutMapping("/employees/{id}")
    public ResponseEntity<Employees> updateEmployeeById(@PathVariable Long id, @RequestBody Employees employees){

        employees= employeeServices.updateEmployeeById(id , employees);

        return ResponseEntity.ok(employees);



    }



   
}
