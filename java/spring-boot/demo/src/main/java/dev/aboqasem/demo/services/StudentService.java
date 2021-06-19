package dev.aboqasem.demo.services;

import dev.aboqasem.demo.models.Student;
import dev.aboqasem.demo.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityExistsException;
import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;
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

  public Long deleteStudent(Long studentId) throws EntityNotFoundException {
    if (!studentRepository.existsById(studentId)) {
      throw new EntityNotFoundException("Student with id: %d does not exist.".formatted(studentId));
    }
    studentRepository.deleteById(studentId);
    return studentId;
  }

  @Transactional
  public Student updateStudent(Long studentId, Student newStudentDetails) {
    final var student = studentRepository.findById(studentId)
        .orElseThrow(() -> new EntityNotFoundException("Student with id: %d does not exist.".formatted(studentId)));

    if (newStudentDetails.getEmail() != null && !student.getEmail().equals(newStudentDetails.getEmail())) {
      if (studentRepository.findByEmail(newStudentDetails.getEmail()).isPresent()) {
        throw new EntityExistsException("Student with email: %s already exists.".formatted(newStudentDetails.getEmail()));
      }
      student.setEmail(newStudentDetails.getEmail());
    }

    if (newStudentDetails.getName() != null && !student.getName().equals(newStudentDetails.getName())) {
      student.setName(newStudentDetails.getName());
    }

    if (newStudentDetails.getDob() != null && student.getDob().isEqual(newStudentDetails.getDob())) {
      student.setDob(newStudentDetails.getDob());
    }

    return student;
  }
}
