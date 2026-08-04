package com.campus.campus_backend.repository;

import com.campus.campus_backend.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StudentRepository extends JpaRepository<Student, Integer> {

    Optional<Student> findByFullNameAndPassword(String fullName, String password);

    Optional<Student> findById(Integer studentId);

    Optional<Student> findByEmail(String email);
}

