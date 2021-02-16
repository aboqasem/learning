/*
Scalar types:
A scalar type represents a single value. Rust has four primary scalar types:
  Integers:
    8-bit	    i8  	  u8
    16-bit    i16 	  u16
    32-bit    i32 	  u32
    64-bit    i64	    u64
    128-bit   i128	  u128
    arch	    isize	  usize
  Floats:
    f32
    f64
  Boolean:
    bool
  Character:
    char
Compound Types:
Compound types can group multiple values into one type. Rust has two primitive compound types:
  Tuples.
  Arrays.
*/
use chrono::prelude::*;
use std::convert::TryFrom;

#[allow(unused_variables)]
pub fn run() {
  let int = 10_000;
  let int = 10_000u16;
  let int = 0xABCD;
  let int = 0o4567;
  let int = 0b0010_0001;
  let int = b'A';
  let age = u16::try_from(
    Utc::today()
      .signed_duration_since(Utc.ymd(1999, 11, 6))
      .num_days()
      / 365,
  )
  .unwrap();

  let float = 2.0;
  let float: f32 = 2.0;

  let boolean = true;

  let character = 'C';
  // Rust’s char type is four bytes in size and represents a Unicode Scalar Value.
  let character = '🦅';

  // Tuples have a fixed length: once declared, they cannot grow or shrink in size.
  let tup: (&str, f32) = ("Year", 365.25);
  let tup = ("Mohammad", age);
  // Pattern matching destructuring.
  let (name, age) = tup;
  let name = tup.0;

  // Arrays are also fixed in size.
  let arr = [1, 2, 3, 4, 5];
  let arr: [u8; 5] = [1, 2, 3, 4, 5];
  let mut arr = [10u8; 6];
  arr[5] = 5;
}
