package com.campus.campus_backend.service;

import com.campus.campus_backend.dto.login.LoginRequestDTO;
import com.campus.campus_backend.dto.login.LoginResponseDTO;
import com.campus.campus_backend.dto.profile.StudentProfileRequestDTO;
import com.campus.campus_backend.dto.profile.StudentProfileResponseDTO;
import com.campus.campus_backend.dto.student.StudentRegisterDTO;
import com.campus.campus_backend.entity.StudentProfile;
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
    public Student registerStudent(StudentRegisterDTO requestDTO) {

        Student student = new Student();

        student.setFullName(requestDTO.getFullName());
        student.setEmail(requestDTO.getEmail());
        student.setPassword(requestDTO.getPassword());
        student.setEnrollmentNo(requestDTO.getEnrollmentNo());
        student.setDepartment(requestDTO.getDepartment());
        student.setMobileNo(requestDTO.getMobileNo());
        student.setSem(requestDTO.getSem());

        return studentRepository.save(student);
    }


    // Login
    public LoginResponseDTO loginStudent(LoginRequestDTO requestDTO) {

        Optional<Student> optionalStudent =
                studentRepository.findByEmail(requestDTO.getEmail());

        // 2. Check if student exists
        if (optionalStudent.isEmpty()) {
            throw new RuntimeException("Email not found");
        }

        // 3. Get student object
        Student student = optionalStudent.get();

        // 4. Compare password
        if (!student.getPassword().equals(requestDTO.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        // 5. Create Response DTO
        LoginResponseDTO responseDTO = new LoginResponseDTO();

        responseDTO.setId(student.getId());
        responseDTO.setFullName(student.getFullName());
        responseDTO.setEmail(student.getEmail());
        responseDTO.setRole("STUDENT");

        // 6. Return Response DTO
        return responseDTO;
    }
    //edit profile
    public StudentProfileResponseDTO updateStudent(Integer id, StudentProfileRequestDTO requestDTO) {

        // Find student
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found"));

        // Update Student table
        student.setFullName(requestDTO.getFullName());
        student.setEmail(requestDTO.getEmail());
        student.setMobileNo(requestDTO.getMobileNo());
        student.setEnrollmentNo(requestDTO.getEnrollmentNo());
        student.setDepartment(requestDTO.getDepartment());
        student.setSem(requestDTO.getSem());

        // Create StudentProfile if it doesn't exist
        if (student.getStudentProfile() == null) {
            StudentProfile profile = new StudentProfile();
            profile.setStudent(student);
            student.setStudentProfile(profile);
        }

        // Update StudentProfile table
        student.getStudentProfile().setAddress(requestDTO.getAddress());
        student.getStudentProfile().setDateOfBirth(requestDTO.getDateOfBirth());
        student.getStudentProfile().setSkills(requestDTO.getSkills());
        student.getStudentProfile().setLinkedInUrl(requestDTO.getLinkedInUrl());

        // Save
        Student savedStudent = studentRepository.save(student);

        // Create Response DTO
        StudentProfileResponseDTO responseDTO = new StudentProfileResponseDTO();

        responseDTO.setId(savedStudent.getId());
        responseDTO.setFullName(savedStudent.getFullName());
        responseDTO.setEmail(savedStudent.getEmail());
        responseDTO.setMobileNo(savedStudent.getMobileNo());
        responseDTO.setEnrollmentNo(savedStudent.getEnrollmentNo());
        responseDTO.setDepartment(savedStudent.getDepartment());
        responseDTO.setSem(savedStudent.getSem());

        responseDTO.setAddress(savedStudent.getStudentProfile().getAddress());
        responseDTO.setDateOfBirth(savedStudent.getStudentProfile().getDateOfBirth());
        responseDTO.setSkills(savedStudent.getStudentProfile().getSkills());
        responseDTO.setLinkedInUrl(savedStudent.getStudentProfile().getLinkedInUrl());

        return responseDTO;
    }


    //submit proprsal
    public Student getStudentById(Integer id){

        return studentRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Student not found"));

    }

}