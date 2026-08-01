package com.campus.campus_backend.repository;

import com.campus.campus_backend.entity.SubmitProposal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubmitProposalRepository extends JpaRepository<SubmitProposal,Integer> {
}
