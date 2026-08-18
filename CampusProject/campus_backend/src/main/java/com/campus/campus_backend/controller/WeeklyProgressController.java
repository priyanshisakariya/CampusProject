package com.campus.campus_backend.controller;

import com.campus.campus_backend.dto.weekly.WeeklyProgressRequestDTO;
import com.campus.campus_backend.dto.weekly.WeeklyProgressResponseDTO;
import com.campus.campus_backend.service.WeeklyProgressService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/weekly-progress")
@CrossOrigin(origins = "http://localhost:5173")
public class WeeklyProgressController {

    @Autowired
    private WeeklyProgressService weeklyProgressService;


    @PostMapping("/submit")
    public ResponseEntity<WeeklyProgressResponseDTO> submitProgress(
            @RequestBody WeeklyProgressRequestDTO requestDTO) {

        WeeklyProgressResponseDTO response =
                weeklyProgressService.submitProgress(requestDTO);

        return ResponseEntity.ok(response);
    }
}