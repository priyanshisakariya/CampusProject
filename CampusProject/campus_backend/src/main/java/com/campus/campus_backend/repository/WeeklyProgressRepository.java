package com.campus.campus_backend.repository;

import com.campus.campus_backend.entity.Student;
import com.campus.campus_backend.entity.WeeklyProgress;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WeeklyProgressRepository
        extends JpaRepository<WeeklyProgress, Integer> {

    boolean existsByStudentAndWeek(Student student, String week);
}