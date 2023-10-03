package com.micro.demo.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.micro.demo.entity.Employee;
import com.micro.demo.repository.EmployeeRepository;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmployee(@PathVariable int id){
        Optional<Employee> emp = employeeRepository.findById(id);
        return ResponseEntity.ok(emp.get());
    }

    
    
}
