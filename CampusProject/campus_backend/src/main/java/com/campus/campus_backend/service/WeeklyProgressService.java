package com.campus.campus_backend.service;

import com.campus.campus_backend.dto.weekly.WeeklyProgressRequestDTO;
import com.campus.campus_backend.dto.weekly.WeeklyProgressResponseDTO;
import com.campus.campus_backend.entity.Student;
import com.campus.campus_backend.entity.WeeklyProgress;
import com.campus.campus_backend.repository.StudentRepository;
import com.campus.campus_backend.repository.WeeklyProgressRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WeeklyProgressService {

    @Autowired
    private WeeklyProgressRepository weeklyProgressRepository;

    @Autowired
    private StudentRepository studentRepository;


    public WeeklyProgressResponseDTO submitProgress(
            WeeklyProgressRequestDTO requestDTO) {

        // 1. Check student
        Student student = studentRepository
                .findById(requestDTO.getStudentId())
                .orElseThrow(() ->
                        new RuntimeException("Student not found."));


        // 2. Week validation
        if (requestDTO.getWeek() == null ||
                requestDTO.getWeek().trim().isEmpty()) {

            throw new RuntimeException("Please select week.");
        }


        // 3. Prevent duplicate week
        if (weeklyProgressRepository.existsByStudentAndWeek(
                student,
                requestDTO.getWeek().trim())) {

            throw new RuntimeException(
                    "You have already submitted progress for "
                            + requestDTO.getWeek());
        }


        // 4. Progress title validation
        if (requestDTO.getProgressTitle() == null ||
                requestDTO.getProgressTitle().trim().isEmpty()) {

            throw new RuntimeException(
                    "Progress title is required.");
        }


        // 5. Work completed validation
        if (requestDTO.getWorkCompleted() == null ||
                requestDTO.getWorkCompleted().trim().isEmpty()) {

            throw new RuntimeException(
                    "Work completed description is required.");
        }


        // 6. Status validation
        if (requestDTO.getStatus() == null ||
                requestDTO.getStatus().trim().isEmpty()) {

            throw new RuntimeException(
                    "Status is required.");
        }


        // 7. Percentage validation
        if (requestDTO.getPercentage() == null) {

            throw new RuntimeException(
                    "Completion percentage is required.");
        }

        if (requestDTO.getPercentage() < 0 ||
                requestDTO.getPercentage() > 100) {

            throw new RuntimeException(
                    "Completion percentage must be between 0 and 100.");
        }


        // 8. Create entity
        WeeklyProgress progress = new WeeklyProgress();

        progress.setStudent(student);

        progress.setWeek(
                requestDTO.getWeek().trim());

        progress.setProjectTitle(
                requestDTO.getProjectTitle() == null
                        ? null
                        : requestDTO.getProjectTitle().trim());

        progress.setProgressTitle(
                requestDTO.getProgressTitle().trim());

        progress.setWorkCompleted(
                requestDTO.getWorkCompleted().trim());

        progress.setStatus(
                requestDTO.getStatus().trim());

        progress.setPercentage(
                requestDTO.getPercentage());

        progress.setChallenges(
                requestDTO.getChallenges() == null
                        ? null
                        : requestDTO.getChallenges().trim());

        progress.setNextPlan(
                requestDTO.getNextPlan() == null
                        ? null
                        : requestDTO.getNextPlan().trim());

        progress.setFileName(
                requestDTO.getFileName() == null
                        ? null
                        : requestDTO.getFileName().trim());


        // 9. Save
        WeeklyProgress saved =
                weeklyProgressRepository.save(progress);


        // 10. Response
        WeeklyProgressResponseDTO response =
                new WeeklyProgressResponseDTO();

        response.setProgressId(
                saved.getProgressId());

        response.setStudentId(
                saved.getStudent().getId());

        response.setWeek(
                saved.getWeek());

        response.setProjectTitle(
                saved.getProjectTitle());

        response.setProgressTitle(
                saved.getProgressTitle());

        response.setWorkCompleted(
                saved.getWorkCompleted());

        response.setStatus(
                saved.getStatus());

        response.setPercentage(
                saved.getPercentage());

        response.setChallenges(
                saved.getChallenges());

        response.setNextPlan(
                saved.getNextPlan());

        response.setFileName(
                saved.getFileName());


        return response;
    }
}