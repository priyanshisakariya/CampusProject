package com.campus.campus_backend.controller;
import com.campus.campus_backend.dto.login.LoginRequestDTO;
import com.campus.campus_backend.dto.login.LoginResponseDTO;
import com.campus.campus_backend.dto.profile.StudentProfileRequestDTO;
import com.campus.campus_backend.dto.profile.StudentProfileResponseDTO;
import com.campus.campus_backend.dto.student.StudentRegisterDTO;
import com.campus.campus_backend.entity.Student;
import com.campus.campus_backend.repository.StudentRepository;
import com.campus.campus_backend.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins = "http://localhost:5173")
public class StudentController {

    @Autowired
    private StudentService studentService;


    // Registration API
    @PostMapping("/register")
    public Student registerStudent(@RequestBody StudentRegisterDTO requestDTO) {


        return studentService.registerStudent(requestDTO);
    }

    // Login API
    @PostMapping("/login")
    public LoginResponseDTO loginStudent(@RequestBody LoginRequestDTO requestDTO) {

        return studentService.loginStudent(requestDTO);
    }

    //edit profile
    @PutMapping("/update/{id}")
    public StudentProfileResponseDTO updateStudent(@PathVariable Integer id,
                                                   @RequestBody StudentProfileRequestDTO requestDTO) {

        return studentService.updateStudent(id, requestDTO);
    }

    //for submit proporsal
    @GetMapping("/{id}")
    public Student getStudentById(@PathVariable Integer id){

        return studentService.getStudentById(id);

    }
}