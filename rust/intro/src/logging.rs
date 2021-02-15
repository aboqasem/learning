use chrono::prelude::*;
use std::convert::TryFrom;

pub fn run() {
  let name: &str = "Mohammad";
  let age: u16 = u16::try_from(
    Utc::today()
      .signed_duration_since(Utc.ymd(1999, 11, 6))
      .num_days()
      / 365,
  )
  .unwrap();
  print!("Hello,");
  println!(" World!");
  println!("Use {{}} to print anything!");
  println!("My name is {}", name);
  println!("My github account is {github}", github = "aboqasem");
  println!("My age is {}", age);
  println!("In binary: {:b}", age);
  println!("In octal: {:o}", age);
  println!("In hex: {:X}", age);
  println!("For debugging: {:?}", (name, age));
}
