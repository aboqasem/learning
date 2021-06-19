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
@RequiredArgsConstructor
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
  @NonNull
  private String name;
  @NonNull
  private String email;
  @NonNull
  private LocalDate dob;
  @Setter(AccessLevel.NONE)
  @Transient
  private Integer age;

  public Integer getAge() {
    return Period.between(dob, LocalDate.now()).getYears();
  }
}
