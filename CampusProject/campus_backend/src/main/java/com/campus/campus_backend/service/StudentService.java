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
    public Student updateStudent(Integer id, Student updatedStudent) {

        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found"));

        // Student table
        student.setFullName(updatedStudent.getFullName());
        student.setEmail(updatedStudent.getEmail());
        student.setMobileNo(updatedStudent.getMobileNo());
        student.setEnrollmentNo(updatedStudent.getEnrollmentNo());
        student.setDepartment(updatedStudent.getDepartment());
        student.setSem(updatedStudent.getSem());

        // StudentProfile table
        if (updatedStudent.getStudentProfile() != null) {

            if (student.getStudentProfile() == null) {
                student.setStudentProfile(updatedStudent.getStudentProfile());
                updatedStudent.getStudentProfile().setStudent(student);
            } else {
                student.getStudentProfile().setAddress(updatedStudent.getStudentProfile().getAddress());
                student.getStudentProfile().setDateOfBirth(updatedStudent.getStudentProfile().getDateOfBirth());
                student.getStudentProfile().setSkills(updatedStudent.getStudentProfile().getSkills());
                student.getStudentProfile().setLinkedInUrl(updatedStudent.getStudentProfile().getLinkedInUrl());
            }
        }

        return studentRepository.save(student);
    }

    //submit proprsal
    public Student getStudentById(Integer id){

        return studentRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Student not found"));

    }

}