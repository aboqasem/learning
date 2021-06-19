package dev.aboqasem.demo.models;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.Period;

@Entity
@Table
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public final class Student {
  @Id
  @SequenceGenerator(
      name = "student_sequence",
      sequenceName = "student_sequence",
      allocationSize = 1
  )
  @GeneratedValue(
      strategy = GenerationType.SEQUENCE,
      generator = "student_sequence"
  )
  private Long id;

  private String name;

  private String email;

  private LocalDate dob;

  @Setter(AccessLevel.NONE)
  @Transient
  private Integer age;

  public Student(String name, String email, LocalDate dob) {
    this.name = name;
    this.email = email;
    this.dob = dob;
  }

  public Integer getAge() {
    return Period.between(dob, LocalDate.now()).getYears();
  }
}
