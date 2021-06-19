package dev.aboqasem.demo.models;

import lombok.*;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@RequiredArgsConstructor
@ToString
public final class Student {
  private Long id;
  @NonNull
  private String name;
  @NonNull
  private LocalDate dob;
  @NonNull
  private String email;
}
