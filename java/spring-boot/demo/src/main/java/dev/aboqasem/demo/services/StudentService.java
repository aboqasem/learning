package dev.aboqasem.demo.services;

import dev.aboqasem.demo.models.Student;
import dev.aboqasem.demo.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityExistsException;
import java.util.List;

@Service
public class StudentService {
  private final StudentRepository studentRepository;

  @Autowired
  public StudentService(StudentRepository studentRepository) {
    this.studentRepository = studentRepository;
  }

  public List<Student> getStudents() {
    return studentRepository.findAll();
  }

  public Student addStudent(Student student) throws EntityExistsException {
    if (studentRepository.findByEmail(student.getEmail()).isPresent()) {
      throw new EntityExistsException("Student with email: %s already exists.".formatted(student.getEmail()));
    }
    return studentRepository.save(student);
  }
}
