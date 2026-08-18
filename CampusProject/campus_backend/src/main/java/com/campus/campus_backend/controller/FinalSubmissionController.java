package com.campus.campus_backend.controller;

import com.campus.campus_backend.dto.finalsubmission.FinalSubmissionRequestDTO;
import com.campus.campus_backend.dto.finalsubmission.FinalSubmissionResponseDTO;
import com.campus.campus_backend.service.FinalSubmissionService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/final-submission")
@CrossOrigin(origins = "http://localhost:5173")
public class FinalSubmissionController {

    @Autowired
    private FinalSubmissionService finalSubmissionService;


    @PostMapping("/submit")
    public ResponseEntity<FinalSubmissionResponseDTO> submitFinalProject(
            @RequestBody FinalSubmissionRequestDTO requestDTO) {

        FinalSubmissionResponseDTO response =
                finalSubmissionService.submitFinalProject(requestDTO);

        return ResponseEntity.ok(response);
    }


}