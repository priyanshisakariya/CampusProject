package com.campus.campus_backend.service;

import com.campus.campus_backend.dto.praporsal.ProposalRequestDTO;
import com.campus.campus_backend.dto.praporsal.ProposalResponseDTO;
import com.campus.campus_backend.entity.Student;
import com.campus.campus_backend.entity.SubmitProposal;
import com.campus.campus_backend.repository.StudentRepository;
import com.campus.campus_backend.repository.SubmitProposalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SubmitProposalService {

    @Autowired
    private SubmitProposalRepository submitProposalRepository;

    @Autowired
    private StudentRepository studentRepository;

    public ProposalResponseDTO submitProposal(ProposalRequestDTO requestDTO) {

        // 1. Student must exist
        Student student = studentRepository.findById(requestDTO.getStudentId())
                .orElseThrow(() ->
                        new RuntimeException("Student not found."));


        //A student should not be able to submit multiple proposals.
        if (submitProposalRepository.existsByStudent(student)) {
            throw new RuntimeException("You have already submitted a project proposal.");
        }

        // 2. Project Title Validation
        if (requestDTO.getProjectTitle() == null ||
                requestDTO.getProjectTitle().trim().isEmpty()) {

            throw new RuntimeException("Project title is required.");
        }

        // 3. Project Domain Validation
        if (requestDTO.getProjectDomain() == null ||
                requestDTO.getProjectDomain().trim().isEmpty()) {

            throw new RuntimeException("Please select project domain.");
        }

        // 4. Guide Name Validation
        if (requestDTO.getGuideName() == null ||
                requestDTO.getGuideName().trim().isEmpty()) {

            throw new RuntimeException("Guide name is required.");
        }

        // 5. Technology Stack Validation
        if (requestDTO.getTechnologyStack() == null ||
                requestDTO.getTechnologyStack().trim().isEmpty()) {

            throw new RuntimeException("Select at least one technology.");
        }

        // 6. Project Description Validation
        if (requestDTO.getProjectDescription() == null ||
                requestDTO.getProjectDescription().trim().length() < 30) {

            throw new RuntimeException(
                    "Project description must contain at least 30 characters.");
        }

        // 7. Proposal File Validation
        if (requestDTO.getProposalFile() == null ||
                requestDTO.getProposalFile().trim().isEmpty()) {

            throw new RuntimeException("Proposal file is required.");
        }

        // Create Proposal Entity
        SubmitProposal proposal = new SubmitProposal();

        proposal.setStudent(student);
        proposal.setProjectTitle(requestDTO.getProjectTitle().trim());
        proposal.setProjectDomain(requestDTO.getProjectDomain().trim());
        proposal.setGuideName(requestDTO.getGuideName().trim());
        proposal.setTechnologyStack(requestDTO.getTechnologyStack().trim());
        proposal.setOtherTechnology(requestDTO.getOtherTechnology());
        proposal.setMember2Name(requestDTO.getMember2Name());
        proposal.setMember2Enrollment(requestDTO.getMember2Enrollment());
        proposal.setMember3Name(requestDTO.getMember3Name());
        proposal.setMember3Enrollment(requestDTO.getMember3Enrollment());
        proposal.setProjectDescription(requestDTO.getProjectDescription().trim());
        proposal.setProposalFile(requestDTO.getProposalFile());

        SubmitProposal savedProposal = submitProposalRepository.save(proposal);

        ProposalResponseDTO responseDTO = new ProposalResponseDTO();

        responseDTO.setProposalId(savedProposal.getProposalId());
        responseDTO.setStudentId(savedProposal.getStudent().getId());

        responseDTO.setProjectTitle(savedProposal.getProjectTitle());
        responseDTO.setProjectDomain(savedProposal.getProjectDomain());
        responseDTO.setGuideName(savedProposal.getGuideName());
        responseDTO.setTechnologyStack(savedProposal.getTechnologyStack());
        responseDTO.setOtherTechnology(savedProposal.getOtherTechnology());

        responseDTO.setMember2Name(savedProposal.getMember2Name());
        responseDTO.setMember2Enrollment(savedProposal.getMember2Enrollment());

        responseDTO.setMember3Name(savedProposal.getMember3Name());
        responseDTO.setMember3Enrollment(savedProposal.getMember3Enrollment());

        responseDTO.setProjectDescription(savedProposal.getProjectDescription());
        responseDTO.setProposalFile(savedProposal.getProposalFile());

        return responseDTO;
    }
}