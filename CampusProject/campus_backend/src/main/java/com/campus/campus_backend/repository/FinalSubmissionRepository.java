package com.campus.campus_backend.repository;

import com.campus.campus_backend.entity.FinalSubmission;
import com.campus.campus_backend.entity.Student;

import org.springframework.data.jpa.repository.JpaRepository;

public interface FinalSubmissionRepository
        extends JpaRepository<FinalSubmission, Integer> {

    boolean existsByStudent(Student student);
}