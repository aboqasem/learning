package dev.aboqasem.demo.controllers;

import dev.aboqasem.demo.models.Student;
import dev.aboqasem.demo.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/student")
public class StudentController {
  private final StudentService personService;

  @Autowired
  public StudentController(StudentService personService) {
    this.personService = personService;
  }

  @GetMapping
  public List<Student> getStudents() {
    return personService.getStudents();
  }
}
