package com.campus.campus_backend.service;

import com.campus.campus_backend.dto.finalsubmission.FinalSubmissionRequestDTO;
import com.campus.campus_backend.dto.finalsubmission.FinalSubmissionResponseDTO;
import com.campus.campus_backend.entity.FinalSubmission;
import com.campus.campus_backend.entity.Student;
import com.campus.campus_backend.repository.FinalSubmissionRepository;
import com.campus.campus_backend.repository.StudentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class FinalSubmissionService {

    @Autowired
    private FinalSubmissionRepository finalSubmissionRepository;

    @Autowired
    private StudentRepository studentRepository;

    public FinalSubmissionResponseDTO submitFinalProject(
            FinalSubmissionRequestDTO requestDTO) {

        // 1. Check student
        Student student = studentRepository
                .findById(requestDTO.getStudentId())
                .orElseThrow(() ->
                        new RuntimeException("Student not found."));

        // 2. One final submission per student
        if (finalSubmissionRepository.existsByStudent(student)) {

            throw new RuntimeException(
                    "You have already submitted your final project.");
        }

        // 3. Project title validation
        if (requestDTO.getProjectTitle() == null ||
                requestDTO.getProjectTitle().trim().isEmpty()) {

            throw new RuntimeException(
                    "Project title is required.");
        }

        // 4. Project domain validation
        if (requestDTO.getProjectDomain() == null ||
                requestDTO.getProjectDomain().trim().isEmpty()) {

            throw new RuntimeException(
                    "Project domain is required.");
        }

        // 5. Technologies validation
        if (requestDTO.getTechnologiesUsed() == null ||
                requestDTO.getTechnologiesUsed().trim().isEmpty()) {

            throw new RuntimeException(
                    "Technologies used are required.");
        }

        // 6. GitHub validation
        if (requestDTO.getGithubRepository() == null ||
                requestDTO.getGithubRepository().trim().isEmpty()) {

            throw new RuntimeException(
                    "GitHub repository URL is required.");
        }

        // 7. Final report validation
        if (requestDTO.getFinalReportFile() == null ||
                requestDTO.getFinalReportFile().trim().isEmpty()) {

            throw new RuntimeException(
                    "Final report is required.");
        }

        if (!requestDTO.getFinalReportFile()
                .toLowerCase()
                .endsWith(".pdf")) {

            throw new RuntimeException(
                    "Final report must be a PDF file.");
        }

        // 8. Source code validation
        if (requestDTO.getSourceCodeFile() == null ||
                requestDTO.getSourceCodeFile().trim().isEmpty()) {

            throw new RuntimeException(
                    "Source code ZIP is required.");
        }

        if (!requestDTO.getSourceCodeFile()
                .toLowerCase()
                .endsWith(".zip")) {

            throw new RuntimeException(
                    "Source code must be a ZIP file.");
        }

        // 9. Database file validation
        if (requestDTO.getDatabaseFile() == null ||
                requestDTO.getDatabaseFile().trim().isEmpty()) {

            throw new RuntimeException(
                    "Database SQL file is required.");
        }

        if (!requestDTO.getDatabaseFile()
                .toLowerCase()
                .endsWith(".sql")) {

            throw new RuntimeException(
                    "Database file must be an SQL file.");
        }

        // 10. Declaration validation
        if (requestDTO.getDeclaration() == null ||
                !requestDTO.getDeclaration()) {

            throw new RuntimeException(
                    "You must accept the declaration.");
        }

        // 11. Create entity
        FinalSubmission submission = new FinalSubmission();

        submission.setStudent(student);

        submission.setProjectTitle(
                requestDTO.getProjectTitle().trim());

        submission.setProjectDomain(
                requestDTO.getProjectDomain().trim());

        submission.setTechnologiesUsed(
                requestDTO.getTechnologiesUsed().trim());

        submission.setGithubRepository(
                requestDTO.getGithubRepository().trim());

        submission.setLiveProjectUrl(
                requestDTO.getLiveProjectUrl() == null
                        ? null
                        : requestDTO.getLiveProjectUrl().trim());

        submission.setDemoVideoUrl(
                requestDTO.getDemoVideoUrl() == null
                        ? null
                        : requestDTO.getDemoVideoUrl().trim());

        submission.setFinalReportFile(
                requestDTO.getFinalReportFile().trim());

        submission.setSourceCodeFile(
                requestDTO.getSourceCodeFile().trim());

        submission.setDatabaseFile(
                requestDTO.getDatabaseFile().trim());

        submission.setDeclaration(
                requestDTO.getDeclaration());

        // Automatically store current date and time
        submission.setSubmissionDate(LocalDateTime.now());

        // 12. Save ONLY ONCE
        FinalSubmission savedSubmission =
                finalSubmissionRepository.save(submission);

        // 13. Response DTO
        FinalSubmissionResponseDTO response =
                new FinalSubmissionResponseDTO();

        response.setSubmissionId(
                savedSubmission.getSubmissionId());

        response.setStudentId(
                savedSubmission.getStudent().getId());

        response.setProjectTitle(
                savedSubmission.getProjectTitle());

        response.setProjectDomain(
                savedSubmission.getProjectDomain());

        response.setTechnologiesUsed(
                savedSubmission.getTechnologiesUsed());

        response.setGithubRepository(
                savedSubmission.getGithubRepository());

        response.setLiveProjectUrl(
                savedSubmission.getLiveProjectUrl());

        response.setDemoVideoUrl(
                savedSubmission.getDemoVideoUrl());

        response.setFinalReportFile(
                savedSubmission.getFinalReportFile());

        response.setSourceCodeFile(
                savedSubmission.getSourceCodeFile());

        response.setDatabaseFile(
                savedSubmission.getDatabaseFile());

        response.setDeclaration(
                savedSubmission.getDeclaration());

        response.setSubmissionDate(
                savedSubmission.getSubmissionDate());

        return response;
    }
}