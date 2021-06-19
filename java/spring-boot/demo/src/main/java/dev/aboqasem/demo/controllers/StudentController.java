package dev.aboqasem.demo.controllers;

import dev.aboqasem.demo.models.Student;
import dev.aboqasem.demo.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(path = "api/v1/student")
public class StudentController {
  private final StudentService studentService;

  @Autowired
  public StudentController(StudentService studentService) {
    this.studentService = studentService;
  }

  @GetMapping
  public List<Student> getStudents() {
    return studentService.getStudents();
  }

  @PostMapping
  public Map<String, Object> addStudent(@RequestBody Student student) {
    final var storedStudent = studentService.addStudent(student);

    return Map.of(
        "message", "Successfully added student with ID: %d.".formatted(storedStudent.getId()),
        "data", storedStudent
    );
  }
}
