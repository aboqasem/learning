pub fn run() {
  let mut a = String::from("Hello");
  a.push_str(", World");
  println!("a: {}", a);

  let mut b = a; // moving a to b, a not valid anymore
  b.push('!');
  // println!("a: {}", a); // won't work
  println!("b: {}", b);

  let c = b.clone(); // cloning
  println!("b: {}", b); // works
  println!("c: {}", c); // works

  let d = gives_ownership();
  println!("d: {}", d);

  takes_ownership(d); // moving d into function scope, d not valid anymore

  // println!("d: {}", d); // won't work

  let e = takes_and_gives_back_ownership(c);
  // println!("c: {}", c); // won't work
  println!("e: {}", e); // works
}

fn gives_ownership() -> String {
  let s = String::from("Hey");
  s
}

fn takes_ownership(s: String) {
  println!("takes_ownership: {}", s);
}

fn takes_and_gives_back_ownership(s: String) -> String {
  s
}
