package com.micro.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.micro.demo.entity.Employee;


public interface EmployeeRepository extends JpaRepository<Employee, Integer>{
    
}
