pub fn run() {
  let mut a = String::from("Hello");
  modify_string(&mut a); // reference to mutable string
  println!("{}", a);
}

// borrow reference to mutable string
fn modify_string(s: &mut String) {
  s.push_str(", World!");
}
