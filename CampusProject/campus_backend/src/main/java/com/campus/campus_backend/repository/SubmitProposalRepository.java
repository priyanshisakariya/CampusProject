package com.campus.campus_backend.repository;

import com.campus.campus_backend.entity.Student;
import com.campus.campus_backend.entity.SubmitProposal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubmitProposalRepository extends JpaRepository<SubmitProposal,Integer> {
    boolean existsByStudent(Student student);
}
