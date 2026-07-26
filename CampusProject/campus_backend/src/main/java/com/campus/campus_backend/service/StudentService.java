package com.campus.campus_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.campus.campus_backend.entity.Student;
import com.campus.campus_backend.repository.StudentRepository;

import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;


    // Registration
    public Student registerStudent(Student student) {

        return studentRepository.save(student);
    }


    // Login
    public Student loginStudent(String fullName, String password) {

        Optional<Student> student =
                studentRepository.findByFullNameAndPassword(fullName, password);

        if (student.isPresent()) {
            return student.get();
        }

        return null;
    }
    //edit profile
    public Student updateStudent(Long id, Student updatedStudent) {

        Student student = studentRepository.findById(id).orElse(null);

        if (student != null) {

            student.setFullName(updatedStudent.getFullName());
            student.setEmail(updatedStudent.getEmail());
            student.setMobileNo(updatedStudent.getMobileNo());

            return studentRepository.save(student);
        }

        return null;
    }
}