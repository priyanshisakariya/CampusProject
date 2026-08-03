package com.campus.campus_backend.service;


import com.campus.campus_backend.entity.Student;
import com.campus.campus_backend.entity.SubmitProposal;
import com.campus.campus_backend.repository.StudentRepository;
import com.campus.campus_backend.repository.SubmitProposalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SubmitProposalService {
    @Autowired
    private SubmitProposalRepository submitProposalRepository;

    @Autowired
    private StudentRepository studentRepository;

    //save proporsal
    public SubmitProposal submitProposal(SubmitProposal proposal){

        Integer studentId = proposal.getStudent().getId();
        Student student = studentRepository.findById(studentId)
                .orElseThrow(() ->
                        new RuntimeException("Student not found"));

        proposal.setStudent(student);

        return submitProposalRepository.save(proposal);

    }

}
