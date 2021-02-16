use chrono::prelude::*;
use std::convert::TryFrom;

pub fn run() {
  let _name = "Mohammad"; // immutable
  let mut _name = "Mohammad"; // mutable
  const NAME: &str = "Mohammad"; // constant (has to bbe explicitly typed)
  let (mut _name, _age) = (
    "Mohammad",
    u16::try_from(
      Utc::today()
        .signed_duration_since(Utc.ymd(1999, 11, 6))
        .num_days()
        / 365,
    )
    .unwrap(),
  ); // multiple variable definition
  println!("{:?}", (_name, _age, NAME));
}
