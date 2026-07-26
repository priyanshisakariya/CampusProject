package com.campus.campus_backend.controller;
import com.campus.campus_backend.entity.Student;
import com.campus.campus_backend.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins = "http://localhost:5173")
public class StudentController {

    @Autowired
    private StudentService service;

    @GetMapping("/test")
    public String test() {
        return "API Working";
    }

    // Registration API
    @PostMapping("/register")
    public Student registerStudent(@RequestBody Student student) {
        System.out.println("Full Name = " + student.getFullName());
        System.out.println("Email = " + student.getEmail());

        return service.registerStudent(student);
    }

    // Login API
    @PostMapping("/login")
    public Student loginStudent(@RequestBody Student student) {

        return service.loginStudent(
                student.getFullName(),
                student.getPassword()
        );
    }
    //edit profile api
    @PutMapping("/update/{id}")
    public Student updateStudent(@PathVariable Long id,
                                 @RequestBody Student student) {

        return service.updateStudent(id, student);
    }
}
